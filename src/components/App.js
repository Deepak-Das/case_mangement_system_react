import React from "react";
import { Route, Switch } from "react-router-dom";
import DefaultPage from "../pages/error";
import Home from "../pages/home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route component={DefaultPage} />
      </Switch>
    </>
  );
};

export default App;
