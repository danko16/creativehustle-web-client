import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClassNames from 'classnames';

import Cart from './cart';
import Payment from './payment';
import Confirmations from './confirmations';
import './pembelian.css';

function Pembelian() {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  function renderPages() {
    switch (activeTab) {
      case 2:
        return <Payment />;
      case 3:
        return <Confirmations />;
      default:
        return <Cart />;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setActiveTab(parseInt(tab));
  }, [tab]);

  return (
    <div className="pembelian">
      <div
        className="py-4"
        style={{
          backgroundImage: 'url(/assets/img/cta-bg.png)',
        }}
      >
        <div className="container pembelian-head d-flex py-4">
          <h1 className="text-center" style={{ color: '#fff' }}>
            <strong>Keranjang Pembelian</strong>
          </h1>
          <p
            className="text-center"
            style={{
              color: '#fefefe',
            }}
          >
            tiga cara mudah pembelian dengan cara lihat keranjang pembelian, bayar, dan konfirmasi
          </p>
        </div>
      </div>
      <div className="container py-5">
        <div className="d-flex tab-wrapper">
          <div
            className={ClassNames('tabbed-options', {
              active: activeTab === 1,
            })}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <span>Keranjang Pembelian</span>
          </div>
          <div
            className={ClassNames('tabbed-options', {
              active: activeTab === 2,
            })}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            <span>Pembayaran</span>
          </div>
          <div
            className={ClassNames('tabbed-options', {
              active: activeTab === 3,
            })}
            onClick={() => {
              setActiveTab(3);
            }}
          >
            <span>Konfirmasi</span>
          </div>
          <div className="slider"></div>
        </div>

        {renderPages()}
      </div>
    </div>
  );
}

export default Pembelian;
