import React from 'react';
import PropTypes from 'prop-types';

function PembelianHead({ title }) {
  return (
    <div
      className="py-4"
      style={{
        backgroundImage: 'url(/assets/img/cta-bg.png)',
      }}
    >
      <div className="container pembelian-head d-flex py-4">
        <h1 className="text-center" style={{ color: '#fff' }}>
          <strong>{title}</strong>
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
  );
}

PembelianHead.propTypes = {
  title: PropTypes.string,
};

export default PembelianHead;
