import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {RootState} from "../../store/rootTypes"
import {requestGetAuthenticationUrl} from "./../../store/authentication/authenticationActions"



const AuthenticateButton: FunctionComponent = (): JSX.Element => {

  const dispatch = useDispatch();

    const authenticationUrl:string | null = useSelector(
        (state: RootState) => state.authentication.authenticationUrl
      );

  useEffect(() => {
      console.log(authenticationUrl)

      if(!authenticationUrl) {
        dispatch(requestGetAuthenticationUrl())
      }
  }, [dispatch, authenticationUrl])

  if (authenticationUrl) {
    return <a href={authenticationUrl}><button>authenticate with Google</button></a>
  }
  else {
    return <div/>
  }
};

export default AuthenticateButton;