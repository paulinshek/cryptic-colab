import { action } from "typesafe-actions";

import * as AuthenticationTypes from "./../authentication/authenticationTypes";

export const requestVisitAuthenticationUrl = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_VISIT_AUTHENTICATION_URL);
};

export const visitAuthenticationUrlFailure = (error: Error) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.VISIT_AUTHENTICATION_URL_FAILURE, null, error);
};

export const requestAuthenticate = (state: string, code: string) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_AUTHENTICATE, {state, code});
};

export const authenticateFailure = (error: Error) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_FAILURE, null, error);
};

export const authenticateSuccess = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_SUCCESS, null);
};

export const requestUnauthenticate = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_UNAUTHENTICATE);
};