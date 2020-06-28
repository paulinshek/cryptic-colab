import React, { FunctionComponent, useCallback } from "react";
import { useDispatch } from "react-redux";

import {requestUnauthenticate} from "./../../store/authentication/authenticationActions"




const UnauthenticateButton: FunctionComponent = (): JSX.Element => {

  const dispatch = useDispatch();

    const handleOnClick = useCallback(() => dispatch(requestUnauthenticate()), [dispatch])

    return <button className="button button-blue" onClick={handleOnClick}>Log out</button>
  
}

export default UnauthenticateButton;