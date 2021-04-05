import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from 'scope-ui';
import ButtonPage from './pages/button';
import InputPage from './pages/input';

const items = [
  { name: 'Button', url: '/button' },
  { name: 'Form', url: '/form' },
]

const App = () => {
  return (
    <Router>
      <div>
        <Navbar items={items} />
				<Switch>
					<Route path="/button" component={ButtonPage} />
					<Route path="/form" component={InputPage} />
					<Route exact path="/" component={ButtonPage} />
				</Switch>
      </div>
    </Router>
  );
};

export default App;
