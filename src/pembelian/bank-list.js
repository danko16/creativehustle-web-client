import React from 'react';

function BankList() {
  return (
    <div className="bank-list">
      <h5 className="bank-list-title">Transfer Pembayaran:</h5>
      <div className="bank-wrapper">
        <div className="bank-logo">
          <img
            src="/assets/img/logo_bank_bni.png"
            alt="bca"
            style={{
              width: '120px',
              height: 'auto',
            }}
          />
        </div>
        <div
          className="bank-info"
          style={{
            justifyContent: 'start',
          }}
        >
          <ul>
            <li>Bank</li>
            <li>No. Rekening</li>
            <li>Penerima</li>
          </ul>
          <ul
            style={{
              marginLeft: 20,
            }}
          >
            <li>BNI</li>
            <li>0722620388</li>
            <li>Danang Eko Yudanto</li>
          </ul>
        </div>
      </div>
      <div className="bank-wrapper">
        <div className="bank-logo">
          <img
            src="/assets/img/logo_bank_mandiri.png"
            alt="bca"
            style={{
              width: '120px',
              height: 'auto',
            }}
          />
        </div>
        <div className="bank-info">
          <ul>
            <li>Bank</li>
            <li>No. Rekening</li>
            <li>Penerima</li>
          </ul>
          <ul>
            <li>MANDIRI</li>
            <li>1370016138576</li>
            <li>Reezky Pradata Sanjaya</li>
          </ul>
        </div>
      </div>
      <div className="bank-wrapper">
        <div className="bank-logo">
          <img
            src="/assets/img/logo_btpn.png"
            alt="bca"
            style={{
              width: '100px',
              height: 'auto',
            }}
          />
        </div>
        <div className="bank-info">
          <ul>
            <li>Bank</li>
            <li>No. Rekening</li>
            <li>Penerima</li>
          </ul>
          <ul>
            <li>BTPN</li>
            <li>90020619442</li>
            <li>Reezky Pradata Sanjaya</li>
          </ul>
        </div>
      </div>
      <div className="confirm-payment button">Konfirmasi Pembayaran</div>
    </div>
  );
}

export default BankList;
