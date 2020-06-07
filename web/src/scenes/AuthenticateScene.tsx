import React, { FunctionComponent, useEffect, useState } from "react";
import {useDispatch} from "react-redux"

import queryString, { stringify } from 'query-string'

import {requestAuthenticate} from "./../store/authentication/authenticationActions"

const AuthenticateScene: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const queryValues = queryString.parse(window.location.search)
    const state = queryValues.state ? queryValues.state.toString() : ""
    const code = queryValues.code ? queryValues.code.toString() : ""
    dispatch(requestAuthenticate(state, code))
  })
  
  return <p>authenticating...</p>
};

export default AuthenticateScene;
