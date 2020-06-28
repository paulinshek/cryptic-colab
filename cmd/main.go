package main

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/gob"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"strconv"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"github.com/joho/godotenv"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"gopkg.in/matryer/respond.v1"

	"github.com/paulinshek/cryptic-colab/internal/pkg/dataaccess"
	"github.com/paulinshek/cryptic-colab/internal/pkg/web"
	"github.com/paulinshek/cryptic-colab/internal/pkg/core"
)

var conf *oauth2.Config
var state string
var store = sessions.NewCookieStore([]byte("tempsessionkey"))

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	} else {
		conf = &oauth2.Config{
			ClientID:     os.Getenv("OAUTH_CLIENT_ID"),
			ClientSecret: os.Getenv("OAUTH_CLIENT_SECRET"),
			RedirectURL:  "http://127.0.0.1:8080/auth",
			Scopes: []string{
				"https://www.googleapis.com/auth/userinfo.profile",
				"https://www.googleapis.com/auth/userinfo.email",
			},
			Endpoint: google.Endpoint,
		}
	}

	store.Options = &sessions.Options{
		// Domain:   "localhost/",
		Path:     "/",
		MaxAge:   3600 * 8, // 8 hours
		HttpOnly: true,
	}

	gob.Register(&core.User{})
}

func main() {
	log.Print("Starting main")

	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/api/getcrossword/{id}", getCrossword).Methods("GET")
	router.HandleFunc("/api/getcrosswordgrid", getCrosswordGrid).Methods("GET")

	router.HandleFunc("/api/getauthenticationurl", getAuthenticationUrl).Methods("GET")
	router.HandleFunc("/api/authenticate", authenticate).Methods("GET")
	router.HandleFunc("/api/unauthenticate", unauthenticate).Methods("GET")
	router.HandleFunc("/api/getauthenticateduser", getAuthenticatedUser).Methods("GET")

	webApp := web.FileHandler{StaticPath: "web/build", IndexPath: "index.html"}
	router.PathPrefix("/").Handler(webApp)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{os.Getenv("ROUTER_ALLOWED_ORIGINS")})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(router)))
}

func getCrossword(writer http.ResponseWriter, request *http.Request) {

	var err error

	crosswordRepository, _ := dataaccess.GetCrosswordRepository()
	crosswordIdString := mux.Vars(request)["id"]
	crosswordId, err := strconv.Atoi(crosswordIdString)

	if err != nil {
		fmt.Fprintf(writer, "Please provide a valid crossword id")
	} else {
		crossword, err := crosswordRepository.Get(crosswordId)
		if err != nil {
			fmt.Fprintf(writer, "No crossword exists with the provided id %s", crosswordId)
		} else {
			json.NewEncoder(writer).Encode(crossword)
		}
	}

}

func getCrosswordGrid(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "Not implemented")

}

func randToken() string {
	b := make([]byte, 32)
	rand.Read(b)
	return base64.StdEncoding.EncodeToString(b)
}

func getAuthenticationUrl(writer http.ResponseWriter, request *http.Request) {
	query := request.URL.Query()
	redirectUrl := query["redirectUrl"][0]

	state := url.QueryEscape(randToken())
	session, _ := store.Get(request, "auth-name")
	session.Flashes()
	session.AddFlash(state)
	err := session.Save(request, writer)

	if err != nil {
		respond.With(writer, request, http.StatusInternalServerError, err.Error())
	} else {
		conf.RedirectURL = redirectUrl
		authenticationUrl := conf.AuthCodeURL(state)
		respond.With(writer, request, http.StatusOK, authenticationUrl)
	}
	return
}

func authenticate(writer http.ResponseWriter, request *http.Request) {

	query := request.URL.Query()

	session, _ := store.Get(request, "auth-name")
	flashes := session.Flashes()

	if len(flashes) == 0 {
		respond.With(writer, request, http.StatusUnauthorized, fmt.Errorf("Invalid session state: %s", state))
		return
	}

	state := flashes[0].(string)
	queryState := url.QueryEscape(query["state"][0])

	if state != queryState {
		respond.With(writer, request, http.StatusUnauthorized, fmt.Errorf("Invalid session state: %s", state))
		return
	}

	token, err := conf.Exchange(oauth2.NoContext, query["code"][0])
	if err != nil {
		respond.With(writer, request, http.StatusBadRequest, err.Error())
		return
	}

	client := conf.Client(oauth2.NoContext, token)
	email, err := client.Get("https://www.googleapis.com/oauth2/v3/userinfo")
	if err != nil {
		respond.With(writer, request, http.StatusBadRequest, err.Error())
		return
	}

	defer email.Body.Close()
	data, _ := ioutil.ReadAll(email.Body)

	user := &core.User{}
	err = json.Unmarshal(data, user)
	
	if err != nil {
		respond.With(writer, request, http.StatusInternalServerError, fmt.Errorf("User exists but info could not be retrieved"))
		return
	}

	session.Values["current-user"] = user;
	err = session.Save(request, writer)
	if err != nil {
		respond.With(writer, request, http.StatusInternalServerError, err.Error())
		return
	}

	respond.With(writer, request, http.StatusOK, user)
	return
}

func getAuthenticatedUser (writer http.ResponseWriter, request *http.Request) {
	session, _ := store.Get(request, "auth-name")

	value := session.Values["current-user"]

	if value == nil {
		respond.With(writer, request, http.StatusOK, nil)
		return
	}

	user, ok := value.(*core.User); 

    if !ok {
        respond.With(writer, request, http.StatusInternalServerError, fmt.Errorf("User exists but info could not be read"))
		return
	}
	
	respond.With(writer, request, http.StatusOK, user)
	return
}

func unauthenticate (writer http.ResponseWriter, request *http.Request) {
	session, _ := store.Get(request, "auth-name")
	session.Values["current-user"] = nil;
	err := session.Save(request, writer)
	if err != nil {
		respond.With(writer, request, http.StatusInternalServerError, err.Error())
		return
	}

	respond.With(writer, request, http.StatusOK, nil)
	return
}
