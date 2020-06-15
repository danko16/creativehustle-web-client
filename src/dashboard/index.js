import React from 'react';
import Header from '../shared/header';
import Sidebar from './sidebar';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Main from './main';
import DashboardSidebar from './dashboard-sidebar';
import './dashboard.css';

function Dashboard() {
  let { url } = useRouteMatch();
  return (
    <div className="dashboard-container">
      <Header />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path={`${url}/`}>
            <Redirect to={`${url}/progress`} />
          </Route>
          <Route path={`${url}/progress`}>
            <Main />
          </Route>
          <Route path={`${url}/kursus`}>
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
          </Route>
          <Route path={`${url}/kelas`}>
            <div className="dashboard-main">
              <DashboardSidebar />
              <div className="row mb-4">
                <div className="col-12">
                  <div className="title">
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
          </Route>
          <Route path={`${url}/profil`}>
            <div className="dashboard-main"></div>
          </Route>
          <Route path={`${url}/pengaturan`}>
            <div className="dashboard-main"></div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
