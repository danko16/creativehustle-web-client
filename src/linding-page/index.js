import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { kursusActions } from '../redux/reducers/kursus';
import PropTypes from 'prop-types';

import Header from '../shared/header';
import Footer from '../shared/footer';
import Introduction from './introduction';
import PopularClass from './popular-class';
import Testimony from './testimony';
import RegisterOffer from './register-offer';

import './landing-page.css';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqKursus: kursusActions.reqKursus,
    },
    dispatch
  );

function LandingPage({ reqKursus }) {
  useEffect(() => {
    reqKursus({ from: 0 });
  }, [reqKursus]);
  return (
    <div className="landing-page">
      <Header />
      <Introduction />
      <PopularClass />
      <Testimony />
      <RegisterOffer />
      <Footer />
    </div>
  );
}

LandingPage.propTypes = {
  reqKursus: PropTypes.func,
};

export default connect(null, mapActionToProps)(LandingPage);
