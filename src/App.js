import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isAuthenticated } from './utils/auth';
import { Api } from './utils/api';
import store from './redux';

import LandingPage from './linding-page';
import Kelas from './kelas';
import './app.css';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Api.interceptors.request.use(
  function (config) {
    const { auth } = store.getState();
    const token = auth.token;

    if (token) {
      config.headers['x-token'] = `Bearer ${token.key}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

function App() {
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
