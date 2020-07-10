import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { isAuthenticated } from './utils/auth';
import { Api } from './utils/api';
import { authActions } from './redux/reducers/auth';
import { store, history } from './redux';

import Header from './shared/header';
import Footer from './shared/footer';
import Title from './shared/title';
import Loading from './shared/loading';
import LandingPage from './linding-page';

import './app.css';

const Kelas = React.lazy(() => import('./kelas'));
const Dashboard = React.lazy(() => import('./dashboard'));
const Kursus = React.lazy(() => import('./kursus'));
const Journey = React.lazy(() => import('./journey'));
const DetailKursus = React.lazy(() => import('./detail-kursus'));
const DetailKelas = React.lazy(() => import('./detail-kelas'));
const ForgotPassword = React.lazy(() => import('./auth/forgotPassword'));
const ResetPassword = React.lazy(() => import('./auth/resetPassword'));
const GoogleAuth = React.lazy(() => import('./auth/googleAuth'));
const FooterDetail = React.lazy(() => import('./footer-detail'));
const NoMatch = React.lazy(() => import('./nomatch'));

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
        <React.Suspense
          fallback={
            <div>
              <Header />
              <Loading />
              <Footer />
            </div>
          }
        >
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Title />
                <LandingPage />
              </Route>
              <Route exact path="/kursus">
                <Title title="Kursus" />
                <Kursus />
              </Route>
              <Route path="/kursus/:kursusId">
                <Header />
                <DetailKursus />
                <Footer />
              </Route>
              <Route exact path="/kelas">
                <Title title="Kelas" />
                <Kelas />
              </Route>
              <Route path="/kelas/:kelasId">
                <Header />
                <DetailKelas />
                <Footer />
              </Route>
              <Route path="/journey">
                <Title title="Cara Belajar" />
                <Journey />
              </Route>
              <Route exact path="/forgot-password">
                <Title title="Lupa Password" />
                <Header />
                <ForgotPassword />
                <Footer />
              </Route>
              <Route exact path="/reset-password">
                <Title title="Reset Password" />
                <Header />
                <ResetPassword />
                <Footer />
              </Route>
              <Route exact path="/google-auth" component={GoogleAuth} />
              <Route path="/footer">
                <Header />
                <FooterDetail />
                <Footer />
              </Route>
              <PrivateRoute path="/dashboard">
                <Title title="Dashboard" />
                <Dashboard />
              </PrivateRoute>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </React.Suspense>
      </ConnectedRouter>
    </Router>
  );
}

App.propTypes = {
  auth: PropTypes.object,
  authFlow: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(App);
