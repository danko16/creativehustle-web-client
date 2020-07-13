import React from 'react';

function Payment() {
  return (
    <div className="pembayaran pt-5">
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4 bank-list">
          <h5
            style={{
              margin: '14px 0',
            }}
          >
            Transfer Pembayaran:
          </h5>
          <div className="bank-wrapper">
            <div className="bank-logo">
              <img
                src="/assets/img/logo_bank_bca.png"
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
                <li>BCA</li>
                <li>87129021895</li>
                <li>Danang Eko Yudanto</li>
              </ul>
            </div>
          </div>
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
            <div className="bank-info">
              <ul>
                <li>Bank</li>
                <li>No. Rekening</li>
                <li>Penerima</li>
              </ul>
              <ul>
                <li>BNI</li>
                <li>87129021895</li>
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
                <li>823589181</li>
                <li>Danang Eko Yudanto</li>
              </ul>
            </div>
          </div>
          <div className="confirm-payment button">Konfirmasi Pembayaran</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
