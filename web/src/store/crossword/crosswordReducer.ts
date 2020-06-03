import { Reducer } from "redux";

import { takeWhile } from "ramda";

import {
  CrosswordState,
  CrosswordActionTypes,
  Crossword,
} from "./crosswordTypes";

export const initialState: CrosswordState = {
  crosswords: [],
};

const crosswordReducer: Reducer<CrosswordState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CrosswordActionTypes.GET_CROSSWORD_SUCCESS:
      const crosswords = takeWhile(
        (crossword: Crossword) => crossword.Id !== action.payload.crossword.Id,
        state.crosswords
      );
      state.crosswords = [...crosswords, action.payload.crossword];
      return state;
    case CrosswordActionTypes.GET_CROSSWORD_FAILURE:
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default crosswordReducer;
