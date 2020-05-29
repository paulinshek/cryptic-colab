import { action } from "typesafe-actions";

import { CrosswordActionTypes } from "./crosswordTypes";

export const requestGetCrossword = (crosswordId: string) => {
  return action(CrosswordActionTypes.REQUEST_GET_CROSSWORD, { crosswordId });
};
