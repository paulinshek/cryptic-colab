package io

import (
	"internal/pkg/core"
	"fmt"
	"strings"
	"bytes"
	"strconv"
	"net/http"
)

type CrosswordWriter interface {
    Write(crossword core.Crossword, solution core.Solution, out http.ResponseWriter) (err error)
}

func GetCrosswordWriter() (crosswordWriter CrosswordWriter, err error) {
	return ConsoleCrosswordWriter{}, err
}


type ConsoleCrosswordWriter struct {
}

func (consoleCrosswordWriter  ConsoleCrosswordWriter) Write(crossword core.Crossword, solution core.Solution, out http.ResponseWriter) (err error) {
	grid := core.DeriveGrid(crossword, solution)
	
	columnSeparator := "|"
	gridSquareWidth := 5
	//gridSquareHeight := 3
	rowSeparator := strings.Repeat("-", (len(grid[0])*(gridSquareWidth+1))+1)+"\n"

	var buffer bytes.Buffer
	

	for i, gridRow := range grid {
		if i == 0 {
			buffer.WriteString(rowSeparator)
		}
		
		for i, gridSquare := range gridRow {
			if i == 0 {
				buffer.WriteString(columnSeparator)
			}
			if gridSquare.IsInput {

				if (gridSquare.ClueNumber > 0) {
				buffer.WriteString(fmt.Sprintf("%-0"+strconv.Itoa(gridSquareWidth)+"d", gridSquare.ClueNumber))
				} else {
					buffer.WriteString(strings.Repeat(" ", gridSquareWidth))
				}
			} else {
				buffer.WriteString(strings.Repeat("■", gridSquareWidth))
			}
			buffer.WriteString(columnSeparator)
		}
		buffer.WriteString("\n")

		for i, gridSquare := range gridRow {
			if i == 0 {
				buffer.WriteString(columnSeparator)
			}
			if gridSquare.IsInput {
				if gridSquare.Char == 0 {
					buffer.WriteString(strings.Repeat(" ", gridSquareWidth))
				} else {
					buffer.WriteString(string(gridSquare.Char))
					buffer.WriteString(strings.Repeat(" ", gridSquareWidth-1))
				}
			} else {
				buffer.WriteString(strings.Repeat("■", gridSquareWidth))
			}
			buffer.WriteString(columnSeparator)
		}
		buffer.WriteString("\n")

		// for _, _ := range gridRow {
			
		// }

		buffer.WriteString(rowSeparator)
	}

	fmt.Println(buffer.String()) // log out to console
	fmt.Fprintf(out, buffer.String()) //also write out to http response
	return
}

func (consoleCrosswordWriter  ConsoleCrosswordWriter) writeRow (crossword core.Crossword, solution core.Solution) (err error) {

	return
}
