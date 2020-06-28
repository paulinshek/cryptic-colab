import { Reducer } from "redux";

import * as AuthenticationTypes from "./authenticationTypes";

export const initialState: AuthenticationTypes.AuthenticationState = {
  isAuthenticated: false,
  currentUser: null,
  isAuthenticationInProgress: false,
};

const authenticationReducer: Reducer<AuthenticationTypes.AuthenticationState> = (
  state = initialState,
  action
) => {

  console.log(action)

  switch (action.type) {
    case AuthenticationTypes.AuthenticationActionTypes.REQUEST_AUTHENTICATE:
      return {
        ...state, 
        isAuthenticationInProgress: true
      }
    case AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_FAILURE:
      return {
        ...state, 
        isAuthenticated: false, 
        isAuthenticationInProgress: false
      }
    case AuthenticationTypes.AuthenticationActionTypes.AUTHENTICATE_SUCCESS:
      return {
        ...state, 
        isAuthenticated: true, 
        isAuthenticationInProgress: false,
        currentUser: action.payload.user
      }
    case AuthenticationTypes.AuthenticationActionTypes.UNAUTHENTICATE_SUCCESS:
      return {
        ...state, 
        isAuthenticated: false, 
        currentUser: null
      }
    case AuthenticationTypes.AuthenticationActionTypes.GET_AUTHENTICATED_USER_SUCCESS:
      return {
        ...state, 
        isAuthenticated: action.payload.user != null,
        currentUser: action.payload.user
      } 
    case AuthenticationTypes.AuthenticationActionTypes.GET_AUTHENTICATED_USER_FAILURE:
      return {
        ...state, 
        isAuthenticated: false, 
        currentUser: null
      }
    default:
      return state;
  }
};

export default authenticationReducer;
