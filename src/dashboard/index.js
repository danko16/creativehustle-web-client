import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import Sidebar from './sidebar';
import DashboardSidebar from './dashboard-sidebar';
import DetailDashboardSidebar from './kursus/detail-dashboard-sidebar';
import Progress from './menu/progress';
import Kursus from './menu/kursus';
import Webinar from './menu/webinar';
import Billing from './menu/billing';
import Profile from './menu/profile';
import Settings from './menu/settings';
import DetailSidebar from './kursus/detail-sidebar';
import DetailKursus from './kursus/detail-kursus';
import WebinarDetail from './webinar/detail-webinar';
import WebinarDetailSidebar from './webinar/detail-sidebar';
import WebinarDetailDashboardSidebar from './webinar/detail-dashboard-sidebar';
import BillingDetail from './billing';
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
          <DetailDashboardSidebar />
          <DetailKursus />
        </Route>
        <Route exact path={`${path}/webinar`}>
          <DashboardSidebar />
          <Sidebar />
          <Webinar />
        </Route>
        <Route path={`${path}/webinar/:webinarId/:no`}>
          <WebinarDetailSidebar />
          <WebinarDetailDashboardSidebar />
          <WebinarDetail />
        </Route>
        <Route exact path={`${path}/billing`}>
          <DashboardSidebar />
          <Sidebar />
          <Billing />
        </Route>
        <Route path={`${path}/billing/:invoiceId`}>
          <DashboardSidebar />
          <Sidebar />
          <BillingDetail />
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
