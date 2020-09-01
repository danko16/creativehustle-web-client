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
import GoogleAuth from './auth/googleAuth';

import './app.css';

const Webinar = React.lazy(() => import('./webinar'));
const Dashboard = React.lazy(() => import('./dashboard'));
const Kursus = React.lazy(() => import('./kursus'));
const Journey = React.lazy(() => import('./journey'));
const DetailKursus = React.lazy(() => import('./detail-kursus'));
const DetailWebinar = React.lazy(() => import('./detail-webinar'));
const ForgotPassword = React.lazy(() => import('./auth/forgotPassword'));
const ResetPassword = React.lazy(() => import('./auth/resetPassword'));
const Pembelian = React.lazy(() => import('./pembelian'));
const NoMatch = React.lazy(() => import('./nomatch'));

const TentangKami = React.lazy(() => import('./extra-pages/tentang-kami'));
const FiturKursus = React.lazy(() => import('./extra-pages/fitur-kursus'));
const FiturWebinar = React.lazy(() => import('./extra-pages/fitur-webinar'));
const CaraPembayaran = React.lazy(() => import('./extra-pages/cara-pembayaran'));
const Bantuan = React.lazy(() => import('./extra-pages/bantuan/index'));
const KontakKami = React.lazy(() => import('./extra-pages/kontak-kami'));
const MentorKami = React.lazy(() => import('./extra-pages/mentor-kami'));

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
                <Header />
                <Title />
                <LandingPage />
                <Footer />
              </Route>
              <Route exact path="/kursus">
                <Header />
                <Title title="Kursus" />
                <Kursus />
                <Footer />
              </Route>
              <Route path="/kursus/:kursusId">
                <Header />
                <DetailKursus />
                <Footer />
              </Route>
              <Route exact path="/webinar">
                <Header />
                <Title title="Webinar" />
                <Webinar />
                <Footer />
              </Route>
              <Route path="/webinar/:webinarId">
                <Header />
                <DetailWebinar />
                <Footer />
              </Route>
              <Route path="/journey">
                <Header />
                <Title title="Cara Belajar" />
                <Journey />
                <Footer />
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
              <Route path="/pembelian">
                <Title title="Pembelian" />
                <Header />
                <Pembelian />
                <Footer />
              </Route>
              <Route exact path="/google-auth" component={GoogleAuth} />
              <Route path="/tentang-kami">
                <Header />
                <Title title="Tentang Kami" />
                <TentangKami />
                <Footer />
              </Route>
              <Route path="/fitur-kursus">
                <Header />
                <Title title="Fitur Kursus" />
                <FiturKursus />
                <Footer />
              </Route>
              <Route path="/fitur-webinar">
                <Header />
                <Title title="Fitur Webinar" />
                <FiturWebinar />
                <Footer />
              </Route>
              <Route path="/cara-pembayaran">
                <Header />
                <Title title="Cara Pembayaran" />
                <CaraPembayaran />
                <Footer />
              </Route>
              <Route path="/kontak-kami">
                <Header />
                <Title title="Kontak Kami" />
                <KontakKami />
                <Footer />
              </Route>
              <Route path="/mentor-kami">
                <Header />
                <Title title="Mentor Kami" />
                <MentorKami />
                <Footer />
              </Route>
              <Route path="/bantuan">
                <Header />
                <Title title="Pusat Bantuan" />
                <Bantuan />
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
