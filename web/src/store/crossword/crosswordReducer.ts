import { Reducer } from "redux";

import { CrosswordState, CrosswordActionTypes } from "./crosswordTypes";

export const initialState: CrosswordState = {
  crosswords: [],
};

const crosswordReducer: Reducer<CrosswordState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CrosswordActionTypes.GET_CROSSWORD_SUCCESS:
      console.log(action);
      return state;
    case CrosswordActionTypes.GET_CROSSWORD_FAILURE:
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default crosswordReducer;
