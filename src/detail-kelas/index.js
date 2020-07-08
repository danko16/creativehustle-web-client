import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../shared/title';
import './detail-kelas.css';

function DetailKelas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="detail-kelas">
      <Title />
      <div className="container">
        <div className="row dk-thumbnail-wrapper">
          <div className="col-lg-6">
            <img
              src="/assets/img/kelas full stack web javascript developer buildwith angga.png"
              alt="test"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="col-lg-6 p-0">
            <div className="et_pb_text_inner">
              <h4>Beginner Class: Microstock – 26 Juni 2020</h4>
              <h1>
                <strong>Cara Memulai Berjualan Shutterstock hingga menghasilkan Dollar</strong>
              </h1>
            </div>
            <div className="btn-wrp">
              <button className="subscribe-kelas">
                <span>Daftar Kelas</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row dk-content-wrapper">
          <div
            className="col-lg-8"
            style={{
              paddingRight: '2rem',
            }}
          >
            <h3>
              <strong>Tentang Kelas</strong>
            </h3>
            <p>
              Your content goes here. Edit or remove this text inline or in the module Content
              settings. You can also style every aspect of this content in the module Design
              settings and even apply custom CSS to this text in the module Advanced settings.
            </p>
            <h3>
              <strong>Yang Akan Dipelajari</strong>
            </h3>
            <ul>
              <li>1. Konsep asuransi jiwa</li>
              <li>2. Berkenalan dengan berbagai pilihan asuransi jiwa</li>
              <li>3. Cara membaca polis asuransi jiwa</li>
              <li>4. Tools untuk memilih asuransi jiwa yang sesuai kebutuhan keluarga</li>
              <li>5. Tools untuk menghitung kebutuhan Uang Pertanggungan</li>
            </ul>
            <h3>
              <strong>Mentor Kelas</strong>
            </h3>
            <div className="row">
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
              <div className="col-lg-6">
                <h5>Reezky pradata</h5>
                <h6
                  style={{
                    paddingTop: 10,
                    color: '#aaa',
                  }}
                >
                  Asik
                </h6>
                <p>
                  Your content goes here. Edit or remove this text inline or in the module Content
                  settings. You can also style every aspect of this content in the module Design
                  settings and even apply custom CSS to this text in the module Advanced settings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h3>
              <strong>Investasi Mengikuti Kelas</strong>
            </h3>
            <div>
              <h3>RP. 100.000/orang</h3>
              <p className="akses font-weight-light">sekali bayar untuk selamanya</p>
            </div>
            <h3>
              <strong>Jadwal dan Durasi</strong>
            </h3>
            <ul>
              <li>Tanggal : 20 Juni 2020</li>
              <li>Pukul : 20.00 – 21.00</li>
              <li>Durasi : 60 Menit</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="et_pb_row_2">
        <h3
          className="text-center"
          style={{
            color: '#fff',
          }}
        >
          Ayo segera ikuti kelas ini untuk investasi ilmunya
        </h3>
        <button className="et_pb_button">
          <Link to={`/kelas`} className="stretched-link">
            <span className="sr-only">title for screen</span>
          </Link>
          <span>Lihat Kelas</span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default DetailKelas;
