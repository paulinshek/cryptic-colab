import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ViewCrosswordScene from "./scenes/ViewCrosswordScene";

export default function App() {
  return (
    <Router>
      <div>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/crossword/:crosswordId"
            render={(props) => <ViewCrosswordScene {...props} />}
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
