import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import React from "react";

import index from "./components/pages";
import Header from "./components/header";
import Phone from "./components/pages/phone";
import Detail from "./components/pages/detail";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/brand/:br_slug" component={Phone} />
        <Route exact path="/detail/:ph_slug" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
