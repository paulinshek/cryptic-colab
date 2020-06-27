import { takeLatest, call, put } from "redux-saga/effects";

import { Action, PayloadAction } from "typesafe-actions";
import axios from "axios";

import * as AuthenticationTypes from "./authenticationTypes";
import {  visitAuthenticationUrlFailure, authenticateFailure, authenticateSuccess } from "./authenticationActions";

function* getAuthenticationUrl() {

  const redirectUrl = window.location.origin + "/authenticate"
  const url =
    "/api/getauthenticationurl?redirectUrl="+redirectUrl

  try {
    const response = yield call(() => axios.get(url));
    window.location.href = response.data
  } catch (error) {
    yield put(visitAuthenticationUrlFailure(error));
  }
}

function* authenticate (action: PayloadAction<AuthenticationTypes.AuthenticationActionTypes.REQUEST_AUTHENTICATE, {state: string, code: string}>) {
  
  const url =
    `/api/authenticate?state=${action.payload.state}&code=${action.payload.code}`

    try {
        const response = yield call(() => axios.get(url));
        yield put(authenticateSuccess());
      } catch (error) {
        yield put(authenticateFailure(error));
      }
}

export default function* () {
  yield takeLatest(AuthenticationTypes.AuthenticationActionTypes.REQUEST_VISIT_AUTHENTICATION_URL, getAuthenticationUrl);
  yield takeLatest(AuthenticationTypes.AuthenticationActionTypes.REQUEST_AUTHENTICATE, authenticate);
}
