package dataaccess

import (
	"internal/pkg/core"
)

type CrosswordRepository interface {
    Get(id int) (crossword core.Crossword, err error)
}

func GetCrosswordRepository () (crosswordRepository CrosswordRepository, err error) {
	return TempCrosswordRepository{}, err
}


type TempCrosswordRepository struct {
}

func (tempCrosswordRepository TempCrosswordRepository) Get(id int) (crossword core.Crossword, err error) {
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
	crossword = core.Crossword{
		Width: 3,
		Height: 3,
		Clues: []core.Clue{clue1, clue2},
		Id: 1,
	}

	return crossword, nil
}