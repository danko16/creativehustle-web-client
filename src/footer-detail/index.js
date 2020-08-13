import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Title from '../shared/title';
import TentangKami from './tentang-kami';
import FiturKursus from './fitur-kursus';
import FiturWebinar from './fitur-webinar';
import CaraPembayaran from './cara-pembayaran';
import Bantuan from './bantuan';
import KontakKami from './kontak-kami';
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
      <Route path={`${path}/fitur-kursus`}>
        <Title title="Fitur Kursus" />
        <FiturKursus />
      </Route>
      <Route path={`${path}/fitur-webinar`}>
        <Title title="Fitur Webinar" />
        <FiturWebinar />
      </Route>
      <Route path={`${path}/cara-pembayaran`}>
        <Title title="Cara Pembayaran" />
        <CaraPembayaran />
      </Route>
      <Route path={`${path}/kontak-kami`}>
        <Title title="Kontak Kami" />
        <KontakKami />
      </Route>
      <Route path={`${path}/bantuan`}>
        <Title title="Pusat Bantuan" />
        <Bantuan />
      </Route>
    </Switch>
  );
}

export default FooterDetail;
