import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from 'scope-ui';
import ButtonPage from './pages/button';

const items = [
  { name: 'Button', url: '/button' },
  { name: 'Form', url: '/form' },
]

const App = () => {
  return (
    <Router>
      <Navbar items={items} />
      <Switch>
        <Route path="/button" component={ButtonPage} />
      </Switch>
    </Router>
  )
}

export default App
