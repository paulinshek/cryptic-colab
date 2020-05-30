package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	"github.com/paulinshek/cryptic-colab/internal/pkg/dataaccess"
)

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)

	router.HandleFunc("/getcrossword/{id}", getCrossword).Methods("GET")
	router.HandleFunc("/getcrosswordgrid", getCrosswordGrid).Methods("GET")

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
