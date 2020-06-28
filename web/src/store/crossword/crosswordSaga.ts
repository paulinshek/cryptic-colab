import { takeEvery, call, put } from "redux-saga/effects";

import { PayloadAction } from "typesafe-actions";
import axios from "axios";

import * as CrosswordTypes from "./crosswordTypes";
import { getCrosswordSuccess, getCrosswordFailure } from "./crosswordActions";

function* getCrossword(
  action: PayloadAction<
  CrosswordTypes.CrosswordActionTypes,
    {
      crosswordId: string;
    }
  >
) {
  const url =
    "/api/getcrossword/" +
    action.payload.crosswordId;

  try {
    const response = yield call(() => axios.get(url));
    yield put(getCrosswordSuccess(response.data));
  } catch (error) {
    yield put(getCrosswordFailure(error));
  }
}

export default function* () {
  yield takeEvery(CrosswordTypes.CrosswordActionTypes.REQUEST_GET_CROSSWORD, getCrossword);
}
