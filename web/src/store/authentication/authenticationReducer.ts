import { Reducer } from "redux";

import { takeWhile } from "ramda";

import * as AuthenticationTypes from "./authenticationTypes";

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
    default:
      return state;
  }
};

export default authenticationReducer;
