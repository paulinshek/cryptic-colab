import { equals } from "ramda";

import * as CrosswordTypes from "./../store/crossword/crosswordTypes";

export default class crosswordGridService {
  static deriveGrid(crossword: CrosswordTypes.Crossword): CrosswordTypes.GridSquare[][] {
    const grid: CrosswordTypes.GridSquare[][] = [];

    for (let i = 0; i < crossword.Height; i++) {
      const gridRow: CrosswordTypes.GridSquare[] = [];
      for (let j = 0; j < crossword.Width; j++) {
        const coordinate = { X: j, Y: i };

        const gridSquare = {
          coordinate: coordinate,
          isInput: this.getIsInputAtCoordinate(crossword.Clues, coordinate),
          char: null,
          clueNumber: this.getClueNumberAtCoordinate(
            crossword.Clues,
            coordinate
          ),
        };

        gridRow.push(gridSquare);
      }
      grid.push(gridRow);
    }

    return grid;
  }

  static getClueNumberAtCoordinate(
    clues: CrosswordTypes.CrosswordClue[],
    coordinate: CrosswordTypes.Coordinate
  ): number | null {
    for (let i = 0; i < clues.length; i++) {
      const clue = clues[i];
      if (equals(clue.StartCoordinate, coordinate)) {
        return clue.ClueNumber;
      }
    }

    return null;
  }

  static getIsInputAtCoordinate(
    clues: CrosswordTypes.CrosswordClue[],
    coordinate: CrosswordTypes.Coordinate
  ): boolean {
    for (let i = 0; i < clues.length; i++) {
      const clue = clues[i];
      if (equals(clue.StartCoordinate, coordinate)) {
        return true;
      } else if (clue.Direction === CrosswordTypes.ClueDirection.ACROSS) {
        if (
          coordinate.Y === clue.StartCoordinate.Y &&
          coordinate.X >= clue.StartCoordinate.X &&
          coordinate.X <= clue.StartCoordinate.X + clue.Length - 1
        ) {
          return true;
        }
      } else {
        if (
          coordinate.X === clue.StartCoordinate.X &&
          coordinate.Y >= clue.StartCoordinate.Y &&
          coordinate.Y <= clue.StartCoordinate.Y + clue.Length - 1
        ) {
          return true;
        }
      }
    }

    return false;
  }
}
