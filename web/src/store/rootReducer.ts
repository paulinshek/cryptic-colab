import { combineReducers } from "redux";

import crosswordReducer from "./crossword/crosswordReducer";
import authenticationReducer from "./authentication/authenticationReducer";
import { RootState } from "./rootTypes";

const rootReducer = combineReducers<RootState>({
  crossword: crosswordReducer,
  authentication: authenticationReducer
});

export default rootReducer;
