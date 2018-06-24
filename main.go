package main

import (
	"cryptic/core/crossword"
	"fmt"
)

func main() {
	clue1 := Clue{
		startCoordinate = crossword.Coordinate{0,0}
		direction = grid.Across
		length = 3
		signature = "3"
		clueText = "The answer is CAT"
		clueNumber = 1
		id = 1
	}
	clue2 := Clue{
		startCoordinate = crossword.Coordinate{0,1}
		direction = grid.Across
		length = 3
		signature = "3"
		clueText = "The answer is CAR"
		clueNumber = 2
		id = 2
	}
	crossword := Crossword{
		width = 3
		height = 3
		clues = []Clues{clue1, clue2}
		id = 1
	}

	mySolution := Solution{
		id = 1
		crosswordId = 1
		inputLetters = map[Coordinate]rune{}
	}
	fmt.Println(crossword)
}

