import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cart-modal.css';

function CartModal({ setShowCartModal, detailKursus, history }) {
  function handleClick(event) {
    if (event.target.className === 'cart-modal') {
      setShowCartModal(false);
    }
  }
  return (
    <div
      onMouseDown={(event) => {
        handleClick(event);
      }}
      className="cart-modal"
    >
      <div className="cart-modal-content">
        <div>
          <h3>ditambahkan ke Keranjang</h3>
          <i
            onClick={() => {
              setShowCartModal(false);
            }}
            className="fa fa-times"
            aria-hidden="true"
          ></i>
        </div>
        <div className="cart-modal-item">
          <img
            src={detailKursus.thumbnail}
            alt="thumbnail"
            style={{
              maxWidth: '130px',
              height: 'auto',
            }}
          />
          <div>
            <p style={{ fontSize: 14 }}>
              <strong>{detailKursus.title} </strong>
            </p>
            <p style={{ fontSize: 12 }}>By {detailKursus.teacher_name}</p>
          </div>
          <div
            style={{ fontSize: 14 }}
            onClick={() => {
              history.push('/pembelian/keranjang');
            }}
          >
            Lihat Keranjang
          </div>
        </div>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  setShowCartModal: PropTypes.func,
  detailKursus: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(CartModal);
