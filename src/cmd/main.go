package main

import (
	"internal/pkg/core"
	"fmt"
)

func main() {

	clue1 := core.Clue {
		StartCoordinate: core.Coordinate{0,0},
		Direction: core.Across,
		Length: 3,
		Signature: "3",
		ClueText: "The answer is CAT",
		ClueNumber: 1,
		Id: 1,
	}
	clue2 := core.Clue{
		StartCoordinate: core.Coordinate{0,1},
		Direction: core.Across,
		Length: 3,
		Signature: "3",
		ClueText: "The answer is CAR",
		ClueNumber: 2,
		Id: 2,
	}
	crossword := core.Crossword{
		Width: 3,
		Height: 3,
		Clues: []core.Clue{clue1, clue2},
		Id: 1,
	}

	mySolution := core.Solution{
		Id: 1,
		CrosswordId: 1,
		InputChars: map[core.Coordinate]rune{},
	}

	mySolution.InputChars[core.Coordinate{0,0}] = 'c'

	fmt.Println(crossword)
	fmt.Println(mySolution)


	grid := core.DeriveGrid(crossword, mySolution);

	fmt.Println(grid)
}

