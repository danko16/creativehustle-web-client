import React from 'react';
import Header from '../shared/header';
import Sidebar from './sidebar';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Main from './main';
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
            <div>Test</div>
          </Route>
          <Route path={`${url}/kelas`}>
            <div>Test</div>
          </Route>
          <Route path={`${url}/profil`}>
            <div>Test</div>
          </Route>
          <Route path={`${url}/pengaturan`}>
            <div>Test</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
