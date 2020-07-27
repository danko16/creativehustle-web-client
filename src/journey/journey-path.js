import React from 'react';
import { Link } from 'react-router-dom';

function JourneyPath() {
  return (
    <div
      className="journey-path"
      style={{
        backgroundColor: 'rgba(15,219,255,0.09)',
        padding: '2%',
      }}
    >
      <div className="container">
        <div className="elementor-widget-container">
          <ul className="step-num">
            <li className="active">
              <Link to="/pembelian/keranjang">
                <span className="num">1</span>
                <span className="num-txt">Membuat Akun</span>
              </Link>
            </li>
            <li>
              <Link to="#step2">
                <span className="num">2</span>
                <span className="num-txt">Pilih Kursus/kelas</span>
              </Link>
            </li>
            <li>
              <Link to="#step3">
                <span className="num">3</span>
                <span className="num-txt">Melakukan Pembayaran</span>
              </Link>
            </li>
            <li>
              <Link to="#step3">
                <span className="num">4</span>
                <span className="num-txt">Mulai Kursus</span>
              </Link>
            </li>
            <li>
              <Link to="#step3">
                <span className="num">5</span>
                <span className="num-txt">Konsultasi Trainer</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JourneyPath;
