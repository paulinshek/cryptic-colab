package main

import (
	"github.com/paulinshek/cryptic-colab/internal/pkg/core"
	"github.com/paulinshek/cryptic-colab/internal/pkg/dataaccess"
	"github.com/paulinshek/cryptic-colab/internal/pkg/io"
	"net/http"
)

func main() {
	h := http.NewServeMux()
	crossword, solution := initialState()

	h.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		crosswordWriter, _ := io.GetCrosswordWriter()
		err := crosswordWriter.Write(crossword, solution, w)
		if (err != nil) {
			
		}
	})

	http.ListenAndServe(":8080", h)
}

func initialState() (core.Crossword, core.Solution) {
	crosswordRepository, _ := dataaccess.GetCrosswordRepository()
	crossword, _ := crosswordRepository.Get(1)
	

	mySolution := core.Solution {
		Id: 1,
		CrosswordId: crossword.Id,
		InputChars: make(map[core.Coordinate]rune),
	}
	mySolution.InputChars[core.Coordinate{0,0}] = 'c'

	return crossword, mySolution
}

