import { equals } from "ramda";

import {
  Crossword,
  GridSquare,
  CrosswordClue,
  Coordinate,
  ClueDirection,
} from "../store/crossword/crosswordTypes";

export default class crosswordGridService {
  static deriveGrid(crossword: Crossword): GridSquare[][] {
    const grid: GridSquare[][] = [];

    for (let i = 0; i < crossword.Height; i++) {
      const gridRow: GridSquare[] = [];
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
    clues: CrosswordClue[],
    coordinate: Coordinate
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
    clues: CrosswordClue[],
    coordinate: Coordinate
  ): boolean {
    for (let i = 0; i < clues.length; i++) {
      const clue = clues[i];
      if (equals(clue.StartCoordinate, coordinate)) {
        return true;
      } else if (clue.Direction === ClueDirection.ACROSS) {
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
