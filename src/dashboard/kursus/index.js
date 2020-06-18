import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Kursus from './kursus';
import Sidebar from '../sidebar';
import DetailSidebar from './detail-sidebar';
import DetailKursus from './detail-kursus';
import './kursus.css';

function KursusMain() {
  const { path } = useRouteMatch();
  return (
    <div className="kursus-main">
      <Switch>
        <Route exact path={`${path}`}>
          <Sidebar />
          <Kursus />
        </Route>
        <Route path={`${path}/:kursusId/:sectionId/:contentId`}>
          <DetailSidebar />
          <DetailKursus />
        </Route>
      </Switch>
    </div>
  );
}

export default KursusMain;
