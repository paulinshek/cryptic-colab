import { all, fork } from "redux-saga/effects";
import crosswordSaga from "./crossword/crosswordSaga";

export default function* rootSaga() {
  yield all([fork(crosswordSaga)]);
}
