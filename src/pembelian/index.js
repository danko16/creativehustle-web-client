import React from 'react';
import { useRouteMatch, Switch, Route, NavLink } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

import Cart from './cart';
import Payment from './payment';
import Confirmations from './confirmations';
import PembelianHead from './pembelian-head';
import NotLogin from './not-login';
import './pembelian.css';

function Pembelian() {
  const { path } = useRouteMatch();

  function getActiveUrl() {
    const fullUrl = window.location.href.split('/');
    return fullUrl[fullUrl.length - 1];
  }

  function handleTitleHeader() {
    switch (getActiveUrl()) {
      case 'keranjang':
        return 'Keranjang Belanja';
      case 'bayar':
        return 'Pembayaran';
      case 'konfirmasi':
        return 'Konfirmasi';
      default:
        return 'Keranjang Belanja';
    }
  }

  return (
    <div className="pembelian">
      <PembelianHead title={handleTitleHeader()} />
      <div className="container py-5">
        <div className="tab-wrapper d-flex">
          <NavLink className="tabbed-options" to={`${path}/keranjang`}>
            <span>Keranjang Belanja</span>
          </NavLink>
          <NavLink className="tabbed-options" to={`${path}/bayar`}>
            <span>Pembayaran</span>
          </NavLink>
          <NavLink className="tabbed-options" to={`${path}/konfirmasi`}>
            <span>Konfirmasi</span>
          </NavLink>
          <div className="slider"></div>
        </div>
      </div>

      <Switch>
        <Route path={`${path}/keranjang`}>
          <Cart />
        </Route>
        <Route path={`${path}/bayar`}>
          {isAuthenticated() ? <Payment /> : <NotLogin type="bayar" />}
        </Route>
        <Route path={`${path}/konfirmasi`}>
          {isAuthenticated() ? <Confirmations /> : <NotLogin type="konfirmasi" />}
        </Route>
      </Switch>
    </div>
  );
}

export default Pembelian;
