package core

// import (
// 	"time"
// )


type Clue struct {
	StartCoordinate Coordinate
	Direction Direction
	Length int
	Signature string
	ClueText string
	ClueNumber int
	Id int
}

type Crossword struct {
	Cruciverbalist string
//	publishedDate time
	Width, Height int
	Clues []Clue
	Id int
}

type Solution struct {
	Id int
	IrosswordId int
	InputChars map[Coordinate]rune
}




/////


type GridSquare struct {
	IsInput bool
	Coordinate Coordinate
	Char rune
	ClueNumber int
}

// func DeriveGrid (crossword Crossword, solution Solution) (grid [][]GridSquare) {
// 	///////
// }