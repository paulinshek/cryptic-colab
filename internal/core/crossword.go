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
	clueId int
}

type Crossword struct {
	width, height int
	clues []Clue
	id int
}
