import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import { Home } from './pages/Home';
  import { Details } from './pages/Details';

  export default function Routes() {
      return (
          <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/details">
                        <Details />
                    </Route>
                </Switch>
          </Router>
      )
  }