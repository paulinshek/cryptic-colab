import { takeEvery, call, put } from "redux-saga/effects";

import { PayloadAction } from "typesafe-actions";
import axios from "axios";

import { CrosswordActionTypes } from "./crosswordTypes";
import { getCrosswordSuccess, getCrosswordFailure } from "./crosswordActions";
import Crossword from "../../components/crossword/Crossword";

function* getCrossword(
  action: PayloadAction<
    CrosswordActionTypes,
    {
      crosswordId: string;
    }
  >
) {
  const url =
    process.env.REACT_APP_API_URL +
    "getcrossword/" +
    action.payload.crosswordId;

  try {
    const response = yield call(() => axios.get(url));
    yield put(getCrosswordSuccess(response.data));
  } catch (error) {
    yield put(getCrosswordFailure(error));
  }
}

export default function* () {
  yield takeEvery(CrosswordActionTypes.REQUEST_GET_CROSSWORD, getCrossword);
}
