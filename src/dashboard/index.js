import React from 'react';
import Header from '../shared/header';
import Sidebar from './sidebar';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Progress from './menu/progress';
import Kursus from './kursus';
import Kelas from './menu/kelas';
import './dashboard.css';

function Dashboard() {
  let { path } = useRouteMatch();
  return (
    <div className="dashboard-container">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={`${path}`}>
            <Redirect to={`${path}/progress`} />
          </Route>
          <Route path={`${path}/progress`}>
            <Sidebar />
            <Progress />
          </Route>
          <Route path={`${path}/kursus`}>
            <Kursus />
          </Route>
          <Route path={`${path}/kelas`}>
            <Sidebar />
            <Kelas />
          </Route>
          <Route path={`${path}/profil`}>
            <Sidebar />
            <div className="dashboard-main"></div>
          </Route>
          <Route path={`${path}/pengaturan`}>
            <Sidebar />
            <div className="dashboard-main"></div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
