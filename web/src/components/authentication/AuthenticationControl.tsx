import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import {RootState} from "../../store/rootTypes"

import AuthenticateButton from "./AuthenticateButton"
import UnauthenticateButton from "./UnauthenticateButton"


const AuthenticationControl: FunctionComponent = (): JSX.Element => {

    const isAuthenticated:boolean = useSelector(
        (state: RootState) => state.authentication.isAuthenticated
      );

      const isAuthenticationInProgress:boolean = useSelector(
        (state: RootState) => state.authentication.isAuthenticationInProgress
      );

  if (isAuthenticated) return <UnauthenticateButton/>
  else if (!isAuthenticationInProgress) return <AuthenticateButton/>
  else return <div>authentication in progress</div>
};

export default AuthenticationControl;
