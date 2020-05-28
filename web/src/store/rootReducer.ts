import { combineReducers } from "redux";

import crosswordReducer from "./crossword/crosswordReducer";

const rootReducer = combineReducers<Root.ApplicationState>({
  crossword: crosswordReducer,
});

export default rootReducer;
