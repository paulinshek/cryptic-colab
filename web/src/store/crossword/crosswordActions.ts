import { action } from "typesafe-actions";

import * as CrosswordTypes from "./crosswordTypes";

export const requestGetCrossword = (crosswordId: number) => {
  return action(CrosswordTypes.CrosswordActionTypes.REQUEST_GET_CROSSWORD, { crosswordId });
};

export const getCrosswordSuccess = (crossword: CrosswordTypes.Crossword) => {
  return action(CrosswordTypes.CrosswordActionTypes.GET_CROSSWORD_SUCCESS, { crossword });
};

export const getCrosswordFailure = (error: Error) => {
  return action(CrosswordTypes.CrosswordActionTypes.GET_CROSSWORD_FAILURE, null, null, error);
};
