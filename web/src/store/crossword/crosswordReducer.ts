import { Reducer } from "redux";

import { takeWhile } from "ramda";

import * as CrosswordTypes from "./crosswordTypes";

export const initialState: CrosswordTypes.CrosswordState = {
  crosswords: [],
};

const crosswordReducer: Reducer<CrosswordTypes.CrosswordState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CrosswordTypes.CrosswordActionTypes.GET_CROSSWORD_SUCCESS:
      const crosswords = takeWhile(
        (crossword: CrosswordTypes.Crossword) => crossword.Id !== action.payload.crossword.Id,
        state.crosswords
      );
      state.crosswords = [...crosswords, action.payload.crossword];
      return state;
    case CrosswordTypes.CrosswordActionTypes.GET_CROSSWORD_FAILURE:
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default crosswordReducer;
