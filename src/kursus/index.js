import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/header';
import Footer from '../shared/footer';
import KursusList from './kursus-list';
import './kursus.css';

function Talent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Cari Kursus"
              aria-label="Kursus"
              aria-describedby="basic-addon1"
              style={{ maxWidth: 400 }}
            />
          </div>
        </div>
      </div>
      <KursusList />
      <div
        className="container border-top--blue py-5"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(/assets/img/bg-gradient-right-1024x763-1.png)',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row">
          <div
            className="col-lg-6"
            style={{
              padding: '0 60px',
              marginBottom: 30,
            }}
          >
            <img
              src="/assets/img/ezgif-6-61036b878dfe.png"
              alt="ezgif-6-61036b878dfe"
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

export default Talent;
