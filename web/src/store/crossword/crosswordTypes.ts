export interface CrosswordState {
  crosswords: Crossword[];
}

export enum CrosswordActionTypes {
  REQUEST_GET_CROSSWORD = "crossword/REQUEST_GET_CROSSWORD",
  GET_CROSSWORD_SUCCESS = "crossword/GET_CROSSWORD_SUCCESS",
  GET_CROSSWORD_FAILURE = "crossword/GET_CROSSWORD_FAILURE",
}

export interface Crossword {
  Clues: CrosswordClue[];
  Cruciverbalist: string;
  Height: number;
  Width: number;
  Id: number;
}

export interface CrosswordClue {
  ClueNumber: number;
  ClueText: string;
  Direction: number;
  Id: number;
  Length: number;
  Signature: string;
  StartCoordinate: {
    X: number;
    Y: number;
  };
}
