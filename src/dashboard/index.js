import React from 'react';
import Header from '../shared/header';
import Sidebar from './sidebar';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Progress from './menu/progress';
import Kursus from './menu/kursus';
import Kelas from './menu/kelas';
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
            <Progress />
          </Route>
          <Route path={`${url}/kursus`}>
            <Kursus />
          </Route>
          <Route path={`${url}/kelas`}>
            <Kelas />
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
