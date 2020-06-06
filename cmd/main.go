package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	"github.com/paulinshek/cryptic-colab/internal/pkg/dataaccess"
)

func init() {
	log.Print("Initialising")
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

type webHandler struct {
	staticPath string
	indexPath  string
}

func (h webHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	path = filepath.Join(h.staticPath, path)

	_, err = os.Stat(path)
	if os.IsNotExist(err) {
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func main() {
	log.Print("Starting main")

	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/api/getcrossword/{id}", getCrossword).Methods("GET")
	router.HandleFunc("/api/getcrosswordgrid", getCrosswordGrid).Methods("GET")

	webApp := webHandler{staticPath: "web/build", indexPath: "index.html"}
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
