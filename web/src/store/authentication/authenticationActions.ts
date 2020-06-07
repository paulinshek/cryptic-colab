import { action } from "typesafe-actions";

import * as AuthenticationTypes from "./../authentication/authenticationTypes";

export const requestGetAuthenticationUrl = () => {
  return action(AuthenticationTypes.AuthenticationActionTypes.REQUEST_GET_AUTHENTICATION_URL);
};