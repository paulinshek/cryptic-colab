import React, { FunctionComponent, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {RootState} from "../../store/rootTypes"
import {requestVisitAuthenticationUrl, authenticateFailure} from "./../../store/authentication/authenticationActions"



const AuthenticateButton: FunctionComponent = (): JSX.Element => {

  const dispatch = useDispatch();

  const handleOnClick = useCallback(() => dispatch(requestVisitAuthenticationUrl()), [dispatch])

  return <button onClick={handleOnClick}>authenticate with Google</button>
};

export default AuthenticateButton;