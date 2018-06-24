package core

// import (
// 	"time"
// )


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
//	publishedDate time
	width, height int
	clues []Clue
	id int
}

type Solution struct {
	id int
	crosswordId int
	inputChars map[Coordinate]rune
}




/////


type GridSquare struct {
	isInput bool
	coordinate Coordinate
	char rune
	clueNumber int
}

// func DeriveGrid (crossword Crossword, solution Solution) (grid [][]GridSquare) {
// 	///////
// }