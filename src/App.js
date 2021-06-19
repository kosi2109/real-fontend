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
      <React.StrictMode>
        <Header />
        <Switch>
          <Route exact path="/" component={index} />
          <Route exact path="/phone_&_tablet" component={Phone} />
          <Route exact path="/detail/product" component={Detail} />
        </Switch>
      </React.StrictMode>
    </Router>
  );
}

export default App;
