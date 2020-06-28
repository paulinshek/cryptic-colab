import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ViewCrosswordScene from "./scenes/ViewCrosswordScene";
import AuthenticateScene from "./scenes/AuthenticateScene";
import HeaderBar from "./components/HeaderBar";

export default function App() {
  return (
    <Router>
      <div>
       <HeaderBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/crossword/:crosswordId"
            render={(props) => <ViewCrosswordScene {...props} />}
          />
          <Route
            path="/authenticate"
            render={(props) => <AuthenticateScene {...props} />}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
