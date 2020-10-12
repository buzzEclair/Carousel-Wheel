import React from "react";
import "./styles.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}
