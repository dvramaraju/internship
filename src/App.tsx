import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Home, Profile, SignIn, SignUp, Work } from './containers';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { Employes } from './containers/Employe';

export default function App() {
  return (
    <Router history={history()}>
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
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/employee">
          <Employes />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
