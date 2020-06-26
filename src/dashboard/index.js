import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { kursusSayaAction } from '../redux/reducers/kursus-saya';

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

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqKursusSaya: kursusSayaAction.reqKursus,
      reqRekomendasi: kursusSayaAction.reqRekomendasi,
    },
    dispatch
  );

function Dashboard({ reqKursusSaya, reqRekomendasi }) {
  let { path } = useRouteMatch();
  useEffect(() => {
    reqKursusSaya();
    reqRekomendasi();
  }, [reqKursusSaya, reqRekomendasi]);
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

Dashboard.propTypes = {
  reqKursusSaya: PropTypes.func,
  reqRekomendasi: PropTypes.func,
};

export default connect(null, mapActionToProps)(Dashboard);
