import { all, fork } from "redux-saga/effects";
import crosswordSaga from "./crossword/crosswordSaga";
import authenticationSaga from "./authentication/authenticationSaga";

export default function* rootSaga() {
  yield all([fork(crosswordSaga), fork(authenticationSaga)]);
}
