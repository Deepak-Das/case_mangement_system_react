import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Associates from '../pages/associates';
import DefaultPage from '../pages/error';
import Home from '../pages/home';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/associates" component={Associates} />
        <Route component={DefaultPage} />
      </Switch>
    </>
  );
};

export default App;
