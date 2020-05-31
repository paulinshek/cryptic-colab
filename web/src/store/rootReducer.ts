import { combineReducers } from "redux";

import crosswordReducer from "./crossword/crosswordReducer";
import { RootState } from "./rootTypes";

const rootReducer = combineReducers<RootState>({
  crossword: crosswordReducer,
});

export default rootReducer;
