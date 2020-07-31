import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { kursusActions } from '../redux/reducers/kursus';
import Header from '../shared/header';
import Footer from '../shared/footer';
import KursusList from './kursus-list';
import './kursus.css';

const mapActionToProps = (dispatch) =>
  bindActionCreators({ reqCariKursus: kursusActions.reqCariKursus }, dispatch);

function Kursus({ reqCariKursus }) {
  const [keywords, SetKeywords] = useState('');
  const [notFound, setNotFound] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSearch() {
    reqCariKursus({ keywords });
    setNotFound(keywords);
  }
  return (
    <div className="kursus">
      <Header />
      <div
        className="py-4"
        style={{
          backgroundImage: 'url(/assets/img/cta-bg.png)',
        }}
      >
        <div className="kursus-head container d-flex py-4">
          <h1 className="text-center" style={{ color: '#fff' }}>
            <strong>Pilihan Kursus di Creative Hustle</strong>
          </h1>
          <p
            className="text-center"
            style={{
              color: '#fefefe',
            }}
          >
            Bingung mulai dari mana, cari kursusmu di bawah ini
          </p>
          <div className="input-group mt-3">
            <div className="input-group-prepend" onClick={handleSearch}>
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="text"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              onChange={(e) => {
                SetKeywords(e.target.value);
              }}
              className="form-control"
              placeholder="Cari Kursus"
              aria-label="Kursus"
              aria-describedby="basic-addon1"
              style={{ maxWidth: 400 }}
            />
          </div>
        </div>
      </div>
      <KursusList notFound={notFound} />
      <div
        className="container border-top--blue py-5"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(/assets/img/bg-gradient-right-1024x763-1.png)',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row fs-18">
          <div
            className="col-lg-6"
            style={{
              padding: '0 60px',
              marginBottom: 30,
            }}
          >
            <img
              src="/assets/img/Wait-for-it-2.jpg"
              alt="Wait-for-it-2"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">
              <strong>Bingung Bagaimana Memulai Kursus ?</strong>
            </h2>
            <p className="mb-4">
              Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle. Hanya
              perlu melalui 5 proses untuk dapat langsung mulai belajar bersama instruktur
              berpengalaman.
            </p>
            <button className="to-learn-path">
              <Link to={`/journey`} className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span className="et_pb_button_2">Lihat Cara Belajar</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Kursus.propTypes = {
  reqCariKursus: PropTypes.func,
};

export default connect(null, mapActionToProps)(Kursus);
