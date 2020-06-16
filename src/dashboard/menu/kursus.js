import React from 'react';
import DashboardSidebar from '../dashboard-sidebar';

function Kursus() {
  return (
    <div className="dashboard-main">
      <DashboardSidebar />
      <div className="row mb-4">
        <div className="col-12">
          <div className="title">
            <h4 className="card-title">Kursus Saya</h4>
            <p>Berikut ini adalah daftar kursus yang anda ikuti.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6 mb-4">
          <div className="card">
            <img src="/assets/img/default-img.svg" width="284" height="160" alt="default" />
            <div className="kursus-body">
              <h4 className="m-0">Judul Kursus</h4>
              <p className="pl-1">Author kursus</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="card">
            <img src="/assets/img/default-img.svg" width="284" height="160" alt="default" />
            <div className="kursus-body">
              <h4 className="m-0">Judul Kursus</h4>
              <p className="pl-1">Author kursus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kursus;
