import { action } from "typesafe-actions";

import * as AuthenticationTypes from "./../authentication/authenticationTypes";

export const requestGetAuthenticationUrl = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_GET_AUTHENTICATION_URL);
};

export const getAuthenticationUrlSuccess = (authenticationUrl: string) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.GET_AUTHENTICATION_URL_SUCCESS, { authenticationUrl });
};

export const getAuthenticationUrlFailure = (error: Error) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.GET_AUTHENTICATION_URL_FAILURE, null, error);
};

export const requestAuthenticate = (state: string, code: string) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_AUTHENTICATE, {state, code});
};

export const authenticateFailure = (error: Error) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_FAILURE, null, error);
};