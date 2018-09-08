package main

import (
	"internal/pkg/core"
	"internal/pkg/dataaccess"
	"internal/pkg/io"
)

func main() {

	crosswordRepository, _ := dataaccess.GetCrosswordRepository()
	crossword, _ := crosswordRepository.Get(1)
	

	mySolution := core.Solution {
		Id: 1,
		CrosswordId: crossword.Id,
		InputChars: make(map[core.Coordinate]rune),
	}
	mySolution.InputChars[core.Coordinate{0,0}] = 'c'

	crosswordWriter, _ := io.GetCrosswordWriter()
	err := crosswordWriter.Write(crossword, mySolution)
	if (err != nil) {
		
	}

}

