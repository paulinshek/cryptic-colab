import { takeEvery, call, put } from "redux-saga/effects";

import { PayloadAction } from "typesafe-actions";
import axios from "axios";

import { CrosswordActionTypes } from "./crosswordTypes";
import { getCrosswordSuccess, getCrosswordFailure } from "./crosswordActions";

function* getCrossword(
  action: PayloadAction<
    CrosswordActionTypes,
    {
      crosswordId: string;
    }
  >
) {
  const url =
    "/api/getcrossword/" +
    action.payload.crosswordId;

  try {
    console.log(url);
    const response = yield call(() => axios.get(url));
    console.log(response.data);
    yield put(getCrosswordSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(getCrosswordFailure(error));
  }
}

export default function* () {
  yield takeEvery(CrosswordActionTypes.REQUEST_GET_CROSSWORD, getCrossword);
}
