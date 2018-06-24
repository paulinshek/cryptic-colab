package cryptic/core/crossword

import (
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
	width, height int
	clues []Clue
	id int
}

type Solution {
	id int
	crosswordId int
	inputLetters map[Coordinate]rune
}