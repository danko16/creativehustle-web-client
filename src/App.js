import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LandingPage from './linding-page';
import Kelas from './kelas';
import './app.css';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

function App({ auth }) {
  const isAuthenticated = () => {
    const now = new Date().getTime() / 1000;
    try {
      const { token } = auth;
      if (now > token.exp) {
        throw new Error('Token Expired');
      }
    } catch (err) {
      return false;
    }
    return true;
  };

  //eslint-disable-next-line
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

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

App.propTypes = {
  auth: PropTypes.object,
};

export default connect(mapStateToProps)(App);
