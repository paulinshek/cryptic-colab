package cryptic/core/crossword

import (
	"time"
	"cryptic/core/grid"
)


type Clue struct {
	startCoordinate Coordinate
	direction Direction
	length int
	signature string
	clueText string
	clueNumber int
	id int
}

type Crossword struct {
	cruciverbalist string
	publishedDate time
	width, height int
	clues []Clue
	id int
}

type Solution {
	id int
	crosswordId int
	inputChars map[Coordinate]rune
}




/////


type GridSquare {
	isInput bool
	coordinate Coordinate
	char rune
	clueNumber int
}

func DeriveGrid (crossword Crossword, solution Solution) (grid [][]GridSquare) {
	///////
}