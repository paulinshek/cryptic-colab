import { action } from "typesafe-actions";

import { CrosswordActionTypes, Crossword } from "./crosswordTypes";

export const requestGetCrossword = (crosswordId: string) => {
  return action(CrosswordActionTypes.REQUEST_GET_CROSSWORD, { crosswordId });
};

export const getCrosswordSuccess = (crossword: Crossword) => {
  return action(CrosswordActionTypes.GET_CROSSWORD_SUCCESS, { crossword });
};

export const getCrosswordFailure = (error: Error) => {
  return action(CrosswordActionTypes.GET_CROSSWORD_FAILURE, null, null, error);
};
