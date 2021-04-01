import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'scope-ui';
import ButtonPage from './pages/button';

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/button" component={ButtonPage} />
      </Switch>
    </Router>
  )
}

export default App
