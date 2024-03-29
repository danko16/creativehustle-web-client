import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { webinarActions } from '../redux/reducers/webinar';

import WebinarList from './webinar-list';
import './webinar.css';

const mapActionToProps = (dispatch) =>
  bindActionCreators({ reqCariWebinar: webinarActions.reqCariWebinar }, dispatch);

function Webinar({ reqCariWebinar }) {
  const [keywords, SetKeywords] = useState('');
  const [notFound, setNotFound] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSearch() {
    reqCariWebinar({ keywords });
    setNotFound(keywords);
  }
  return (
    <div className="webinar">
      <div
        className="py-4"
        style={{
          backgroundImage: 'url(/assets/img/cta-bg.png)',
        }}
      >
        <div className="webinar-head container d-flex py-4">
          <h1 className="text-center" style={{ color: '#fff' }}>
            <strong>Webinar Live bersama Instruktur</strong>
          </h1>
          <p
            className="text-center fs-18"
            style={{
              color: '#fefefe',
            }}
          >
            Dapatkan kesempatan untuk bisa belajar bareng instruktur di Creaitve Hustle id secara
            live dengan Webinar.
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
              placeholder="Cari Webinar"
              aria-label="webinar"
              aria-describedby="basic-addon1"
              style={{ maxWidth: 400 }}
            />
          </div>
        </div>
      </div>
      <WebinarList notFound={notFound} />
      <div
        className="container border-top--blue py-5"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(/assets/img/bg-gradient-right-1024x763-1.png)',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row row_rvrs fs-18">
          <div className="col-lg-6">
            <h2 className="mb-4">
              <strong>Bingung Cara ikut Webinar Online ?</strong>
            </h2>
            <p className="mb-4">
              Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle. Hanya
              perlu melalui 5 proses untuk dapat langsung mulai belajar bersama instruktur
              berpengalaman.
            </p>
            <div className="button-wrapper">
              <button className="to-learn-path" style={{ marginRight: '1rem' }}>
                <Link to={`/journey`} className="stretched-link">
                  <span className="sr-only">title for screen</span>
                </Link>
                <span className="et_pb_button_2">Lihat Cara Belajar</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>

              <button className="to-learn-path">
                <Link to={`/fitur-webinar`} className="stretched-link">
                  <span className="sr-only">title for screen</span>
                </Link>
                <span className="et_pb_button_2">Fitur Webinar</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              padding: '0 60px',
              marginBottom: 30,
            }}
          >
            <img
              src="/assets/img/Wait-for-it-2.jpeg"
              alt="Wait-for-it-2"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Webinar.propTypes = {
  reqCariWebinar: PropTypes.func,
};

export default connect(null, mapActionToProps)(Webinar);
