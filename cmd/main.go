package main

import (
	"fmt"
	"strconv"
	"log"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"

	"github.com/paulinshek/cryptic-colab/internal/pkg/dataaccess"
)

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)

	router.HandleFunc("/getcrossword/{id}", getCrossword).Methods("GET")
	router.HandleFunc("/getcrosswordgrid", getCrosswordGrid).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", router))
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

