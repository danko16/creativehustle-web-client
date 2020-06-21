import React from 'react';

import Header from '../shared/header';
import Footer from '../shared/footer';
import Introduction from './introduction';
import PopularClass from './popular-class';
import Testimony from './testimony';
import RegisterOffer from './register-offer';

import './landing-page.css';

function LandingPage() {
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

export default LandingPage;
