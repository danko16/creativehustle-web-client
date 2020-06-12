import React from 'react';

import Header from '../shared/header';
import Footer from '../shared/footer';
//import FirstSection from './first-sect';
import PopularClass from './popular-class';
import Testimony from './testimony';
import TopCategories from './top-categories';
import RegisterOffer from './register-offer';
import JobOpportunity from './job-opportunity';

import './landing-page.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />

      <section className="container py-3">
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-6 mb-4">
            <h1>Bingung cara mulai cari penghasilan tambahan ?</h1>
            <p>
              Creative Huslte id platform belajar buat kalian yang ingin mencari penghasilan
              tambahan dengan cara kreatif. Dapatkan berbagai kemudahan belajar mulai dari :
            </p>
            <ul
              style={{
                paddingInlineStart: 'inherit',
                marginBottom: 50,
              }}
            >
              <li>Berbagai pilihan kursus lengkap</li>
              <li>Kesempatan belajar langsung via kelas online</li>
              <li>Dengan trainer yang berpengalaman mencari ‘cuan’ melalui dunia kreatif</li>
            </ul>
            <button className="find-course btn">Cari Kursus</button>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/img/header-img.png"
              alt="header"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>
      <PopularClass />
      <Testimony />
      <TopCategories />
      <RegisterOffer />
      <JobOpportunity />
      <Footer />
    </div>
  );
}

export default LandingPage;
