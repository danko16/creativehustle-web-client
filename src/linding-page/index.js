import React from 'react';

import Header from '../shared/header';
import Footer from '../shared/footer';
//import FirstSection from './first-sect';
import PopularClass from './popular-class';
import Testimony from './testimony';
import TopCategories from './top-categories';
import FifthSection from './fifth-sect';
import SixthSection from './sixth-sect';
import SeventhSection from './seventh-sect';

import './landing-page.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header>
        <div className="header-content">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h1 className="header-home text-merriweather">Pelajari Keahlian Baru</h1>
              <p className="font-weight-light">
                kapanpun dimanapun dan dapatkan <br /> kemampuan yang dibutuhkan oleh industri saat
                ini
              </p>
            </div>

            <img
              className="img-header mt-4"
              src="assets/img/21421.png"
              alt="belajar coding dan design online gratis buildwith angga"
            />
          </div>
        </div>
      </Header>
      <PopularClass />
      <Testimony />
      <TopCategories />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
