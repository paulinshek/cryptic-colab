import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import {RootState} from "../../store/rootTypes"

import AuthenticateButton from "./AuthenticateButton"


const AuthenticationControl: FunctionComponent = (): JSX.Element => {

    const isAuthenticated:boolean = useSelector(
        (state: RootState) => state.authentication.isAuthenticated
      );

  if (isAuthenticated) return <p>is authenticated</p>
  else return <AuthenticateButton/>
};

export default AuthenticationControl;
