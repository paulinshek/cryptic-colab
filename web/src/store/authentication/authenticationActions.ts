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

export const authenticateSuccess = (user: AuthenticationTypes.User) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_SUCCESS, {user});
};

export const requestUnauthenticate = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_UNAUTHENTICATE);
};

export const unauthenticateSuccess = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.UNAUTHENTICATE_SUCCESS);
}

export const requestGetAuthenticatedUser = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_GET_AUTHENTICATED_USER)
}

export const getAuthenticatedUserSuccess = (user: AuthenticationTypes.User | null) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.GET_AUTHENTICATED_USER_SUCCESS, {user});
};

export const getAuthenticatedUserFailure = (error: Error) => {
  return action(AuthenticationTypes.AuthenticationActionTypes.GET_AUTHENTICATED_USER_FAILURE, null, error);
};
