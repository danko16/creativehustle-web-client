import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import KursusList from './kursus-list';
import './kursus.css';

function Talent() {
  return (
    <div className="kursus">
      <Header />
      <div
        className="py-4"
        style={{
          backgroundColor: '#3f506b',
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
      <Footer />
    </div>
  );
}

export default Talent;
