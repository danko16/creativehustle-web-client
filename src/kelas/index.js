import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
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
      <Footer />
    </div>
  );
}

export default Kelas;
