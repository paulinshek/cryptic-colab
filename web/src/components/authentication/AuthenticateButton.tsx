import React, { FunctionComponent, useCallback } from "react";
import { useDispatch } from "react-redux";

import {requestVisitAuthenticationUrl} from "./../../store/authentication/authenticationActions"



const AuthenticateButton: FunctionComponent = (): JSX.Element => {

  const dispatch = useDispatch();

  const handleOnClick = useCallback(() => dispatch(requestVisitAuthenticationUrl()), [dispatch])

  return <button className="button button-blue" onClick={handleOnClick}>Authenticate with Google</button>
};

export default AuthenticateButton;