package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)
	log.Fatal(http.ListenAndServe(":8080", router))
}

// func main() {
// 	h := http.NewServeMux()
// 	crossword, solution := initialState()

// 	h.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
// 		crosswordWriter, _ := io.GetCrosswordWriter()
// 		err := crosswordWriter.Write(crossword, solution, w)
// 		if (err != nil) {
			
// 		}
// 	})

// 	http.ListenAndServe(":8080", h)
// }

// func initialState() (core.Crossword, core.Solution) {
// 	crosswordRepository, _ := dataaccess.GetCrosswordRepository()
// 	crossword, _ := crosswordRepository.Get(1)
	

// 	mySolution := core.Solution {
// 		Id: 1,
// 		CrosswordId: crossword.Id,
// 		InputChars: make(map[core.Coordinate]rune),
// 	}
// 	mySolution.InputChars[core.Coordinate{0,0}] = 'c'

// 	return crossword, mySolution
// }

