import { action } from "typesafe-actions";

import { CrosswordActionTypes } from "./crosswordTypes";

export const requestGetCrossword = (crosswordId: string) => {
  console.log("request get crossword action raised");
  return action(CrosswordActionTypes.REQUEST_GET_CROSSWORD, crosswordId);
};
