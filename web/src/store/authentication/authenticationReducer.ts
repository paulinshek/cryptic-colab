import { Reducer } from "redux";

import { takeWhile } from "ramda";

import * as AuthenticationTypes from "./authenticationTypes";
import { authenticateFailure } from "./authenticationActions";

export const initialState: AuthenticationTypes.AuthenticationState = {
  isAuthenticated: false,
  currentUser: null,
  isAuthenticationInProgress: false,
};

const authenticationReducer: Reducer<AuthenticationTypes.AuthenticationState> = (
  state = initialState,
  action
) => {
  console.log(action.type, state)

  switch (action.type) {
    
    case AuthenticationTypes.AuthenticationActionTypes.REQUEST_AUTHENTICATE:
      state.isAuthenticationInProgress = true;
    case AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_FAILURE:
      state.authenticationUrl = null;
      state.isAuthenticated = false;
      state.isAuthenticationInProgress = false;
      return state;
    case AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_SUCCESS:
      state.authenticationUrl = null;
      state.isAuthenticated = true;
      state.isAuthenticationInProgress = false;
      return state;
    case AuthenticationTypes.AuthenticationActionTypes.REQUEST_UNAUTHENTICATE:
      state.isAuthenticationInProgress = false;
      state.isAuthenticated = false;
    default:
      return state;
  }
};

export default authenticationReducer;
