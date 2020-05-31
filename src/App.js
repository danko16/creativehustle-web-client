import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { isAuthenticated } from './utils/auth';
import { Api } from './utils/api';
import { store, history } from './redux';
import { authActions } from './redux/reducers/auth';

import LandingPage from './linding-page';
import Kelas from './kelas';
import Dashboard from './dashboard';
import Talent from './talent';
import ShowCase from './showcase';
import Journey from './journey';
import './app.css';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      authFlow: authActions.authFlow,
    },
    dispatch
  );

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

function App({ authFlow }) {
  useEffect(() => {
    authFlow();
  }, [authFlow]);
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
                pathname: '/',
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
      <ConnectedRouter history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/kelas">
              <Kelas />
            </Route>
            <Route path="/talent">
              <Talent />
            </Route>
            <Route path="/showcase">
              <ShowCase />
            </Route>
            <Route path="/journey">
              <Journey />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </div>
      </ConnectedRouter>
    </Router>
  );
}

App.propTypes = {
  auth: PropTypes.object,
  authFlow: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(App);
