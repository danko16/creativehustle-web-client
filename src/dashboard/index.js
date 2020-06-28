import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import Sidebar from './sidebar';
import DashboardSidebar from './dashboard-sidebar';
import Progress from './menu/progress';
import Kursus from './menu/kursus';
import Kelas from './menu/kelas';
import Profile from './menu/profile';
import Settings from './menu/settings';
import DetailSidebar from './kursus/detail-sidebar';
import DetailKursus from './kursus/detail-kursus';
import './dashboard.css';

function Dashboard() {
  let { path } = useRouteMatch();
  return (
    <div className="dashboard-container">
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/progress`} />
        </Route>
        <Route path={`${path}/progress`}>
          <DashboardSidebar />
          <Sidebar />
          <Progress />
        </Route>
        <Route exact path={`${path}/kursus`}>
          <DashboardSidebar />
          <Sidebar />
          <Kursus />
        </Route>
        <Route path={`${path}/kursus/:kursusId/:contentId`}>
          <DetailSidebar />
          <DetailKursus />
        </Route>
        <Route path={`${path}/kelas`}>
          <DashboardSidebar />
          <Sidebar />
          <Kelas />
        </Route>
        <Route path={`${path}/profil`}>
          <DashboardSidebar />
          <Sidebar />
          <Profile />
        </Route>
        <Route path={`${path}/pengaturan`}>
          <DashboardSidebar />
          <Sidebar />
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
