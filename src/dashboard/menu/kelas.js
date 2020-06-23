import React from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../dashboard-sidebar';

function Kelas() {
  return (
    <div className="dashboard-main">
      <DashboardSidebar />
      {/*
      <div className="row mb-4">
        <div className="col-12">
          <div className="card-no-shadow">
            <h4 className="card-title">Kelas Saya</h4>
            <p>Berikut ini adalah daftar Kelas yang anda ikuti.</p>
          </div>
        </div>
      </div>*/}

      <div className="row mb-4">
        <div className="col-12">
          <div className="card-no-shadow py-5 text-center">
            <h2 className="card-title">Anda Belum Memiliki Kelas</h2>
            <p>Silahkan Cari Kelas Melalui Link di Bawah Ini</p>
            <button className="et_pb_button">
              <Link to={`/kelas`} className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span>Lihat Kelas</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kelas;
