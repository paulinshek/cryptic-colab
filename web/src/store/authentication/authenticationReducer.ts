import { Reducer } from "redux";

import { takeWhile } from "ramda";

import * as AuthenticationTypes from "./authenticationTypes";
import { authenticateFailure } from "./authenticationActions";

export const initialState: AuthenticationTypes.AuthenticationState = {
  isAuthenticated: false,
  currentUser: null,
  authenticationUrl: null,
};

const authenticationReducer: Reducer<AuthenticationTypes.AuthenticationState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthenticationTypes.AuthenticationActionTypes.GET_AUTHENTICATION_URL_SUCCESS:
      state.authenticationUrl = action.payload.authenticationUrl
      return state;
    case AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_FAILURE:
      state.authenticationUrl = null;
      state.isAuthenticated = false;
      return state;
    default:
      return state;
  }
};

export default authenticationReducer;
