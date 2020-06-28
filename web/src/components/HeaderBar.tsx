import React, { FunctionComponent } from "react";
import {useSelector} from "react-redux"

import {Link} from "react-router-dom"

import {RootState} from "../store/rootTypes"
import AuthenticationControl from "./authentication/AuthenticationControl"
import CurrentUserGreeting from "./CurrentUserGreeting"


const HeaderBar: FunctionComponent = (): JSX.Element => {

  const isAuthenticated:boolean = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

return (<div className="header-bar">
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/crossword/1">Crossword 1</Link>
      </li>
    </ul>
  </nav>
    {isAuthenticated && <CurrentUserGreeting/>}
  <AuthenticationControl/>
  </div>
)
    
};

export default HeaderBar;