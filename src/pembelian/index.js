import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import Cart from './cart';
import Payment from './payment';
import Confirmations from './confirmations';
import PembelianHead from './pembelian-head';
import './pembelian.css';

function Pembelian() {
  const { path } = useRouteMatch();

  return (
    <div className="pembelian">
      <Switch>
        <Route path={`${path}/keranjang`}>
          <PembelianHead title="Keranjang Belanja" />
          <Cart />
        </Route>
        <Route path={`${path}/bayar/:invoiceId`}>
          <PembelianHead title="Pembayaran" />
          <Payment />
        </Route>
        <Route path={`${path}/konfirmasi/:invoiceId`}>
          <PembelianHead title="Konfirmasi" />
          <Confirmations />
        </Route>
      </Switch>
    </div>
  );
}

export default Pembelian;
