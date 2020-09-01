import React, { useEffect } from 'react';
import './verifikasi-sertifikat.css';

function VerifikasiSertifikat() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="verifikasi-sertifikat fs-18">
      <div className="container">
        <div className="head">
          <p>
            <strong>TERIMA KASIH TELAH BELAJAR DI CREATIVE HUSTLE</strong>
          </p>
          <h1>
            <strong>Verifikasi Sertifikat</strong>
          </h1>
          <p>Masukan kode sertifikatmu dibawah untuk memverifikasi sertifikat</p>
          <div className="search-wrapper">
            <input type="text" className="form-control search-input" />
            <button className="search-button">Search</button>
          </div>
          <button className="et_pb_button">
            <span
              style={{
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Periksa
            </span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifikasiSertifikat;
