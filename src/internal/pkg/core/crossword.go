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
	CrosswordId int
	InputChars map[Coordinate]rune
}

type GridSquare struct {
	IsInput bool
	Coordinate Coordinate
	Char rune
	ClueNumber int
}

func DeriveGrid (crossword Crossword, solution Solution) (grid [][]GridSquare) {
 	
 	for i := 0; i < crossword.Height; i++ {
 		var gridRow []GridSquare
 		for j := 0; j < crossword.Width; j++ {
 			gridSquare := GridSquare {
				Coordinate: Coordinate{j,i},
			}
			gridSquare.ClueNumber, _ = getClueNumberAtCoordinate(crossword.Clues, gridSquare.Coordinate)
			gridSquare.IsInput = getIsInputAtCoordinate(crossword.Clues, gridSquare.Coordinate)
			gridSquare.Char = solution.InputChars[gridSquare.Coordinate]

 			gridRow = append(gridRow, gridSquare)
 		}
    	grid = append(grid, gridRow)
	}
 	return grid;
}

func getIsInputAtCoordinate (clues []Clue, coordinate Coordinate) (isInput bool) {
	
	for _, clue := range clues {
        if clue.StartCoordinate == coordinate {
        	isInput = true
        	return
        } else if (clue.Direction == Across) {
        	if (coordinate.Y == clue.StartCoordinate.Y) && 
        		(coordinate.X >= clue.StartCoordinate.X) && 
        		(coordinate.X <= (clue.StartCoordinate.X + clue.Length - 1)) {
        		isInput = true
        		return
        	}
        } else {
        	if (coordinate.X == clue.StartCoordinate.X) && 
        		(coordinate.Y >= clue.StartCoordinate.Y) && 
        		(coordinate.Y <= (clue.StartCoordinate.Y + clue.Length - 1)) {
        		isInput = true
        		return
        	}
        }
    }

    return
}

func getClueNumberAtCoordinate (clues []Clue, coordinate Coordinate) (clueNumber int, success bool) {
	
	for _, clue := range clues {
        if clue.StartCoordinate == coordinate {
        	success = true
        	clueNumber = clue.ClueNumber
        	return
        }
    }

    success = false
    return
}