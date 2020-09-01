import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './bottom-to-cw.css';

function BottomToCw({ backgroundImage }) {
  return (
    <div
      className="btcw cta-bg"
      style={{
        backgroundImage,
      }}
    >
      <div className="container">
        <p>SUDAH TIDAK SABAR UNTUK MULAI KURSUS DI CREATIVE HUSTLE ?</p>
        <h2>
          <strong>Ayo segera ikut kursus dan webinar yang tersedia!</strong>
        </h2>
      </div>
      <div className="et_pb_button_wrapper">
        <button className="et_pb_button">
          <Link className="stretched-link" to="/kursus" />
          <span
            style={{
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Lihat Kursus
          </span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
        <button className="et_pb_button">
          <Link className="stretched-link" to="/webinar" />
          <span
            style={{
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Lihat Webinar
          </span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

BottomToCw.propTypes = {
  backgroundImage: PropTypes.string,
};

export default BottomToCw;
