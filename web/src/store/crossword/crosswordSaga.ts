import { eventChannel } from "redux-saga";
import { call, put, take, takeEvery } from "redux-saga/effects";

import { CrosswordActionTypes } from "./crosswordTypes";

function* getCrossword() {
  console.log("attempting to get crossword");
}

export default function* () {
  yield takeEvery(CrosswordActionTypes.REQUEST_GET_CROSSWORD, getCrossword);
}
