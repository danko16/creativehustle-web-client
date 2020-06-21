import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { kursusSayaAction } from '../redux/reducers/kursus-saya';

import Header from '../shared/header';
import Sidebar from './sidebar';
import Progress from './menu/progress';
import Kursus from './kursus';
import Kelas from './menu/kelas';
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

Dashboard.propTypes = {
  reqKursusSaya: PropTypes.func,
  reqRekomendasi: PropTypes.func,
};

export default connect(null, mapActionToProps)(Dashboard);
