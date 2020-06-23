import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/header';
import Footer from '../shared/footer';
import KelasList from './kelas-list';
import './kelas.css';

function Kelas() {
  return (
    <div className="kelas">
      <Header />
      <div
        className="py-4"
        style={{
          backgroundImage: 'url(/assets/img/cta-bg.png)',
        }}
      >
        <div className="kelas-head container d-flex py-4">
          <h1 className="text-center" style={{ color: '#fff' }}>
            <strong>Kelas Online Live bersama Instruktur</strong>
          </h1>
          <p
            className="text-center"
            style={{
              color: '#fefefe',
            }}
          >
            Dapatkan kesempatan untuk bisa belajar bareng instruktur di Creaitve Hustle id secara
            live di Kelas Online.
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
              placeholder="Cari kelas"
              aria-label="kelas"
              aria-describedby="basic-addon1"
              style={{ maxWidth: 400 }}
            />
          </div>
        </div>
      </div>
      <KelasList />
      <div className="container border-top--blue py-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-4">
              <strong>Bingung Cara ikut Kelas Online ?</strong>
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
              <span>Lihat Cara Belajar</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
          <div
            className="col-lg-6"
            style={{
              padding: '0 60px',
              marginBottom: 30,
            }}
          >
            <img
              src="/assets/img/642-3-scaled.jpg"
              alt="642-scaled"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kelas;
