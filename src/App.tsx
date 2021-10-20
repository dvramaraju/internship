import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, SignIn, SignUp } from './containers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}
