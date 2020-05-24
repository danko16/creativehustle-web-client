import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './linding-page';
import Kelas from './kelas';
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/kelas">
            <Kelas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
