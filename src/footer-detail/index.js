import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Title from '../shared/title';
import TentangKami from './tentang-kami';
import './footer-detail.css';

function FooterDetail() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Redirect to={`${path}/tentang`} />
      </Route>
      <Route path={`${path}/tentang`}>
        <Title title="Tentang Kami" />
        <TentangKami />
      </Route>
    </Switch>
  );
}

export default FooterDetail;
