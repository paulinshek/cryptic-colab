import React, { FunctionComponent } from "react";

import {Link} from "react-router-dom"

import AuthenticationControl from "./authentication/AuthenticationControl"


const HeaderBar: FunctionComponent = (): JSX.Element => {
return (<div>
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
  <AuthenticationControl/>
  </div>
)
    
};

export default HeaderBar;