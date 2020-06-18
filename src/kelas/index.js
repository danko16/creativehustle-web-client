import React from 'react';
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
          backgroundColor: '#3f506b',
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
      <Footer />
    </div>
  );
}

export default Kelas;
