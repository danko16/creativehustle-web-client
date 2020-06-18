import React from 'react';
import DashboardSidebar from '../dashboard-sidebar';

function Kelas() {
  return (
    <div className="dashboard-main">
      <DashboardSidebar />
      <div className="row mb-4">
        <div className="col-12">
          <div className="card-no-shadow">
            <h4 className="card-title">Kelas Saya</h4>
            <p>Berikut ini adalah daftar Kelas yang anda ikuti.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6 mb-4">
          <div className="card">
            <img src="/assets/img/default-img.svg" width="284" height="160" alt="default" />
            <div className="kursus-body">
              <h4 className="m-0">Judul Kelas</h4>
              <p className="pl-1">Author Kelas</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="card">
            <img src="/assets/img/default-img.svg" width="284" height="160" alt="default" />
            <div className="kursus-body">
              <h4 className="m-0">Judul Kelas</h4>
              <p className="pl-1">Author Kelas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kelas;
