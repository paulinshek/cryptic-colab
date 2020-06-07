import { takeLatest, call, put } from "redux-saga/effects";

import { Action } from "typesafe-actions";
import axios from "axios";

import * as AuthenticationTypes from "./authenticationTypes";
import {  } from "./authenticationActions";

function* getAuthenticationUrl() {
  const url =
    "/api/getauthenticationurl"

  try {
    const response = yield call(() => axios.get(url));
    console.log(response.data);
    // put success
  } catch (error) {
    console.log(error);
    // put error
  }
}

export default function* () {
  yield takeLatest(AuthenticationTypes.AuthenticationActionTypes.REQUEST_GET_AUTHENTICATION_URL, getAuthenticationUrl);
}
