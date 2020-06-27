import React, { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {RootState} from "../../store/rootTypes"
import {requestUnauthenticate} from "./../../store/authentication/authenticationActions"




const UnauthenticateButton: FunctionComponent = (): JSX.Element => {

  const dispatch = useDispatch();

    const handleOnClick = useCallback(() => dispatch(requestUnauthenticate()), [dispatch])

    return <button onClick={handleOnClick}>Log out</button>
  
}

export default UnauthenticateButton;