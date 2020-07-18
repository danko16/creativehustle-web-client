import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cartActions } from '../redux/reducers/cart';

const mapStateToProps = (state) => ({
  carts: state.cart.carts,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteCart: cartActions.deleteCart,
    },
    dispatch
  );

function Cart({ carts, deleteCart }) {
  function renderEmptyCart() {
    return (
      <div className="shopping-list--empty">
        <img
          src="/assets/icon/icons8-add-shopping-cart-80.png"
          alt="cart"
          style={{
            padding: '25px 0',
          }}
        />
        <p>Keranjang belanjamu kosong, ayo segera cari kursus favoritmu</p>
        <Link className="keep-shopping-action" to="/kursus">
          Cari Kursus
        </Link>
      </div>
    );
  }

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function renderCartItems() {
    return carts.map((val) => (
      <div key={val.cart_id} className="cart-item">
        <img
          className="img__cover"
          src={val.thumbnail}
          alt="thumbnail"
          style={{
            maxWidth: '130px',
            height: 'auto',
          }}
        />
        <div>
          <Link
            to={val.type === 'course' ? `/kursus/${val.course_id}` : `/kelas/${val.class_id}`}
            className="stretched-link"
          >
            <span className="sr-only">title for screen</span>
          </Link>
          <p>
            <strong>{val.title}</strong>
          </p>
          <p>By {val.teacher_name}</p>
        </div>
        <div>
          <p style={{ color: '#f44336' }}>
            <strong>
              Rp. {formatNumber(val.promo_price ? val.promo_price : val.price)}{' '}
              <i className="fa fa-tag" aria-hidden="true"></i>
            </strong>
          </p>
          {val.promo_price && (
            <p
              style={{
                textDecoration: 'line-through',
              }}
            >
              Rp. {formatNumber(val.price)}
            </p>
          )}
        </div>
        <div>
          <p
            className="remove-cart-item"
            onClick={() => {
              deleteCart({
                cart_id: val.cart_id,
              });
            }}
          >
            Hapus <i className="fa fa-times" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    ));
  }

  function renderCart() {
    return (
      <div className="row">
        <div className="col-lg-8 pl-0">{renderCartItems()}</div>
        <div className="col-lg-4 pr-0">
          <div className="cart-total card-no-shadow">
            <p>Total: </p>
            <h2>
              <strong>Rp 269,000</strong>
            </h2>
            <p>Rp1,399,000</p>
            <p>81% off</p>
            <Link to="/pembelian/bayar">Bayar</Link>
            <div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Masukan Kupon" />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: '#ec5252',
                    }}
                  >
                    Pakai
                  </span>
                </div>
              </div>
              <ul>
                <li>
                  <i className="fa fa-times" aria-hidden="true"></i> <strong>LEARNNOW</strong> di
                  pakai
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container cart py-5">{carts.length > 0 ? renderCart() : renderEmptyCart()}</div>
  );
}

Cart.propTypes = {
  carts: PropTypes.array,
  deleteCart: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(Cart);
