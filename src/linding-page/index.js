import React from 'react';

import Header from '../shared/header';
import Footer from '../shared/footer';
import FirstSection from './first-sect';
import SecondSection from './second-sect';
import ThirdSection from './third-sect';
import ReviewSection from './review-sect';
import FifthSection from './fifth-sect';
import SixthSection from './sixth-sect';
import SeventhSection from './seventh-sect';

import './landing-page.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header style={{ height: '650px' }}>
        <main>
          <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-10 text-center">
                <h1 className="d-none d-sm-block header-home text-merriweather">
                  Build Your <span id="placetextheader">Future Career</span>
                </h1>
                <h1 className="d-block d-sm-none title-header-home header-home text-merriweather">
                  Build Your Future Career
                </h1>
                <p className="font-weight-light d-none d-sm-block">
                  Pelajari keahlian baru yang dibutuhkan oleh <br /> startup atau perusahaan IT
                  terbesar di seluruh dunia
                </p>
                <p className="font-weight-light text-header-home d-block d-sm-none">
                  Pelajari keahlian baru yang dibutuhkan oleh startup atau perusahaan IT terbesar di
                  seluruh dunia
                </p>
                <img
                  className="ss-header mt-4"
                  src="assets/img/pic_header_new.png"
                  alt="belajar coding dan design online gratis buildwith angga"
                />
                <p className="mt-5 mb-4">
                  Member kami dari berbagai <strong>kampus</strong> dan <strong>perusahaan</strong>{' '}
                  terkenal
                </p>
                <img
                  className="members-bwa kampus mb-4"
                  alt="member dari setiap kampus yang belajar di buildwithangga"
                  src="assets/img/members-campus-companies.png"
                />
              </div>
            </div>
          </div>
        </main>
      </Header>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ReviewSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
