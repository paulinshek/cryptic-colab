import React, { FunctionComponent, useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"

import queryString, { stringify } from 'query-string'

import {RootState} from "../store/rootTypes"
import {requestAuthenticate} from "./../store/authentication/authenticationActions"

const AuthenticateScene: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch()

  const isAuthenticated:boolean = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  const isAuthenticationInProgress:boolean = useSelector(
    (state: RootState) => state.authentication.isAuthenticationInProgress
  );

  useEffect(() => {
    const queryValues = queryString.parse(window.location.search)
    const state = queryValues.state ? queryValues.state.toString() : ""
    const code = queryValues.code ? queryValues.code.toString() : ""
    dispatch(requestAuthenticate(state, code))
  }, [])


  if (isAuthenticationInProgress) {
    return <p>Authenticating</p>
  }
  else if (isAuthenticated) {
    return <p>Authentication successful</p>
  }
  else {
    return <p>Authentication failed</p>
  }
  return <p>this is the authentication result page</p>
};

export default AuthenticateScene;
