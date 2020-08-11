import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Title from '../shared/title';
import TentangKami from './tentang-kami';
import FiturKursus from './fitur-kursus';
import './footer-detail.css';

function FooterDetail() {
  const { path } = useRouteMatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Redirect to={`${path}/tentang`} />
      </Route>
      <Route path={`${path}/tentang`}>
        <Title title="Tentang Kami" />
        <TentangKami />
      </Route>
      <Route path={`${path}/fitur`}>
        <Title title="Fitur Kursus" />
        <FiturKursus />
      </Route>
    </Switch>
  );
}

export default FooterDetail;
