import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Copyright, Header } from './components';
import { CardHolder, GetCash, Login } from './pages';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/card-holder">
          <CardHolder />
        </Route>
        <Route path="/get-cash">
          <GetCash />
        </Route>
      </Switch>
      <Copyright />
    </>
  );
}

export default App;
