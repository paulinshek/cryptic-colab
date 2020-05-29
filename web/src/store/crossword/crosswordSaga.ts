import { takeEvery } from "redux-saga/effects";

import { PayloadAction } from "typesafe-actions";

import { CrosswordActionTypes } from "./crosswordTypes";

function* getCrossword(
  action: PayloadAction<
    CrosswordActionTypes,
    {
      crosswordId: string;
    }
  >
) {
  console.log("attempting to get crossword", action);

  const json = yield fetch(
    "http://localhost:8080/getcrossword/" + action.payload.crosswordId
  ).then((response) => response.json());

  console.log(json);
}

export default function* () {
  yield takeEvery(CrosswordActionTypes.REQUEST_GET_CROSSWORD, getCrossword);
}
