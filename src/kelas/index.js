import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import ReviewSection from '../linding-page/top-categories';
import ClassList from './class-list';

import './kelas.css';

function Kelas() {
  return (
    <div>
      <Header style={{ height: '550px' }}>
        <main>
          <div className="container h-100">
            <div className="row align-items-center justify-content-center h-50 pt-5">
              <div className="col-12 col-lg-5 text-center">
                <h1 className="text-merriweather mb-3">Katalog Kelas</h1>
                <hr className="worm" />
                <p className="font-weight-light">
                  Jangan mau kalah update dengan yang lainnya. <br className="desktop" />
                  Yuk ikuti perkembangan teknologi.
                </p>
              </div>
              <div className="w-100"></div>
              <div id="app" className="col-lg-12 col-12">
                <div className="row justify-content-center">
                  <div className="mt-3 col-11 col-lg-6">
                    <div className="form-group form-group__icon">
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <i className="material-icons mr-2 icon-search">search</i>
                      <input
                        //onMouseOut="goPlaceholder()"
                        //onClick="stopPlayPlaceholder()"
                        type="text"
                        name="search_kelas"
                        id="search-kelas"
                        aria-describedby="passwordHelp"
                        placeholder="Temukan kelasmu saat ini juga!"
                        className="search-kelas form-control"
                      />
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-lg-6 col-11" style={{ zIndex: 999 }}>
                    <div className="box-result-search"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Header>
      <section className="overlap overlap__2 gradient-orange-white">
        <div className="container">
          <div className="row justify-content-center">
            <ClassList />
          </div>
        </div>
      </section>

      <section className="bwa-tools mt-7 border-top">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-lg-11 col-11 d-flex justify-content-start">
              <div className="row main-title justify-content-center">
                <div className="col-lg-12 col-12 d-flex align-items-center">
                  <div>
                    <h1 className="text-merriweather mb-3 text-indigo-3">
                      Bingung mulai dari mana?
                    </h1>
                    <p className="font-weight-light text-indigo-3">
                      Ikuti alur belajar terbaik yang telah <br className="desktop" /> kami desain
                      untuk kalian.
                    </p>
                    <a
                      href="https://buildwithangga.com/journey"
                      className="btn btn-primary mt-2 mt-lg-2 font-weight-medium"
                    >
                      LIHAT ALUR BELAJAR
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-4 col-12">
                  <img
                    className="d-none d-sm-block"
                    height="348"
                    alt="tools belajar yang digunakan di buildwithangga"
                    src="https://buildwithangga.com/themes/front/images/alur-belajar-menjadi-designer-dan-developer-buildwithangga.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default Kelas;
