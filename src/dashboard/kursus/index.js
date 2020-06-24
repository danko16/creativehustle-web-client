import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Kursus from './kursus';
import DetailSidebar from './detail-sidebar';
import DetailKursus from './detail-kursus';
import './kursus.css';

function KursusMain() {
  const { path } = useRouteMatch();

  return (
    <div className="kursus-main">
      <Switch>
        <Route exact path={`${path}`}>
          <Kursus />
        </Route>
        <Route path={`${path}/:kursusId/:contentId`}>
          <DetailSidebar />
          <DetailKursus />
        </Route>
      </Switch>
    </div>
  );
}

export default KursusMain;
