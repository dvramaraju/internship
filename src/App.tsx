import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Employes, Home, Profile, SignIn, SignUp, Work } from './containers';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import React from 'react';
import { Loading } from './components';

export default function App() {
  return (
    <Router history={history()}>
      <React.Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/employee">
            <Employes />
          </Route>
          <Route exact path="/">
            <SignIn />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}
