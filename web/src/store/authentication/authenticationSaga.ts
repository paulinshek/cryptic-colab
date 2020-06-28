import { takeLatest, takeLeading, call, put } from "redux-saga/effects";

import { PayloadAction } from "typesafe-actions";
import axios from "axios";

import * as AuthenticationTypes from "./authenticationTypes";
import {  
  visitAuthenticationUrlFailure, 
  authenticateFailure, 
  authenticateSuccess, 
  getAuthenticatedUserSuccess, 
  getAuthenticatedUserFailure,
  unauthenticateSuccess } from "./authenticationActions";

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
        yield put(authenticateSuccess(response.data));
      } catch (error) {
        yield put(authenticateFailure(error));
      }
}

function* unauthenticate () {
  const url =
    `/api/unauthenticate`

    try {
      yield call(() => axios.get(url));
      yield put(unauthenticateSuccess());
    } catch (error) {
    }
}

function* getAuthenticatedUser () {
  const url =
    `/api/getauthenticateduser`

    try {
        const response = yield call(() => axios.get(url));
        yield put(getAuthenticatedUserSuccess(response.data));
      } catch (error) {
        yield put(getAuthenticatedUserFailure(error));
      }
}

export default function* () {
  yield takeLeading(AuthenticationTypes.AuthenticationActionTypes.REQUEST_GET_AUTHENTICATED_USER, getAuthenticatedUser)
  yield takeLatest(AuthenticationTypes.AuthenticationActionTypes.REQUEST_VISIT_AUTHENTICATION_URL, getAuthenticationUrl);
  yield takeLatest(AuthenticationTypes.AuthenticationActionTypes.REQUEST_AUTHENTICATE, authenticate);
  yield takeLatest(AuthenticationTypes.AuthenticationActionTypes.REQUEST_UNAUTHENTICATE, unauthenticate);
}
