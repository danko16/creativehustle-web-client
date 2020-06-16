import React from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../dashboard-sidebar';

function Main() {
  return (
    <div className="dashboard-main">
      <DashboardSidebar />
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Rekomendasi Kursus</h4>
              <p>
                Berikut ini adalah beberapa Kursus favorit di creative hustle yang mungkin sesuai
                untukmu.
              </p>
            </div>
            <div className="row">
              <div className="kursus col-md-12 col-lg-6">
                <img src="/assets/img/default-img.svg" alt="default" />
                <div className="kursus-body">
                  <h4 className="m-0">Judul Kursus</h4>
                  <p className="pl-1">Author kursus</p>
                </div>
              </div>
              <div className="kursus col-md-12 col-lg-6">
                <img src="/assets/img/default-img.svg" alt="default" />
                <div className="kursus-body">
                  <h4 className="m-0">Judul Kursus</h4>
                  <p className="pl-1">Author kursus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Progress Belajar</h4>
              <p>Berikut ini adalah daftar Kursus yang kamu ikuti</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Kursus</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to="/" title="Memulai Pemrograman Dengan Kotlin">
                          Memulai Pemrograman Dengan Kotlin
                        </Link>
                      </td>
                      <td>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-success"
                            role="progressbar"
                            aria-valuenow="10"
                            aria-valuemin="0"
                            style={{ width: '25%' }}
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="/" title="Membuat Aplikasi Android">
                          Membuat Aplikasi Android
                        </Link>
                      </td>
                      <td>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-success"
                            role="progressbar"
                            aria-valuenow="10"
                            aria-valuemin="0"
                            style={{ width: '50%' }}
                            aria-valuemax="100"
                          >
                            50%
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
