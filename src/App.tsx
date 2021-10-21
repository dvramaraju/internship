import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Employes, Home, SignIn, SignUp } from './containers';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

export default function App() {
  return (
    <Router history={history()}>
      <div>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/employes">
            <Employes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}
