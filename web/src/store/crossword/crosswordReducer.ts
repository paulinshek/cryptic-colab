import { Reducer } from "redux";

import { CrosswordState } from "./crosswordTypes";

export const initialState: CrosswordState = {
  crosswords: [],
};

const crosswordReducer: Reducer<CrosswordState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default crosswordReducer;
