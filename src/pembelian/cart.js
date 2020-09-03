import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cartActions } from '../redux/reducers/cart';
import { invoiceActions } from '../redux/reducers/invoice';
import { formatNumber } from '../utils/format';

const mapStateToProps = (state) => ({
  carts: state.cart.carts,
  total_prices: state.cart.total_prices,
  coupons: state.cart.coupons,
  message: state.cart.message,
  isError: state.cart.is_error,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      addInvoice: invoiceActions.addInvoice,
      deleteCart: cartActions.deleteCart,
      reqCoupon: cartActions.reqCoupon,
      clearMsg: cartActions.clearError,
      setCoupon: cartActions.coupon,
    },
    dispatch
  );

function Cart({
  carts,
  total_prices,
  addInvoice,
  message,
  isError,
  clearMsg,
  deleteCart,
  coupons,
  reqCoupon,
  setCoupon,
}) {
  const [couponName, setCouponName] = useState('');
  const [couponError, setCouponError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (message && isError) {
      setCouponError(message);
      clearMsg();
    }
  }, [message, isError, clearMsg]);

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

  function handleAddInvoice() {
    const courses_id = [],
      webinars_id = [];
    carts.forEach((val) => {
      if (val.type === 'course') {
        courses_id.push(val.course_id);
      } else if (val.type === 'webinar') {
        webinars_id.push(val.webinar_id);
      }
    });

    addInvoice({ courses_id, webinars_id });
  }

  function getType(cart) {
    if (cart.type === 'course') {
      return 'Kursus';
    } else {
      return 'Webinar';
    }
  }

  function renderCoupons() {
    return coupons.map((coupon) => (
      <li key={coupon.id} style={{ marginBottom: 10 }}>
        <i
          onClick={() => {
            const newCoupons = coupons.filter((val) => val.id !== coupon.id);
            const finalPrice = total_prices.final_price + coupon.discounts;
            const totalPromoPrice = total_prices.total_promo_price - coupon.discounts;
            let percentage = 0;
            if (totalPromoPrice !== 0) {
              percentage = (totalPromoPrice / total_prices.total_price) * 100;
            }
            const newPrices = {
              final_price: finalPrice,
              percentage: Math.round(percentage),
              total_price: total_prices.total_price,
              total_promo_price: totalPromoPrice,
            };

            setCoupon({ coupons: newCoupons, total_prices: newPrices });
          }}
          className="fa fa-times"
          aria-hidden="true"
        ></i>{' '}
        <strong>{coupon.name}</strong> di pakai
      </li>
    ));
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
            to={val.type === 'course' ? `/kursus/${val.course_id}` : `/webinar/${val.webinar_id}`}
            className="stretched-link"
          >
            <span className="sr-only">title for screen</span>
          </Link>
          <p>
            <strong>
              {val.title} - {getType(val)}*
            </strong>
          </p>
          <p>By {val.teacher_name}</p>
        </div>
        <div>
          <p style={{ color: '#f44336', width: ' max-content' }}>
            <strong>
              {val.type === 'free'
                ? 'Gratis'
                : `Rp. ${formatNumber(val.promo_price ? val.promo_price : val.price)}`}
              <i style={{ marginLeft: 6 }} className="fa fa-tag" aria-hidden="true"></i>
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
                type: 'single',
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

  function handleReqCoupon() {
    if (!couponName) {
      setCouponError('Kupon tidak di temukan');
      return;
    }

    reqCoupon({ coupon_name: couponName });
  }

  function renderCart() {
    return (
      <div className="row">
        <div className="col-lg-8 pl-0">{renderCartItems()}</div>
        <div className="col-lg-4 pr-0">
          <div className="cart-total card-no-shadow">
            <p className="total-label">Total: </p>
            <h2
              className="total-price"
              style={total_prices.total_promo_price === 0 ? { marginBottom: 22 } : null}
            >
              <strong>Rp {formatNumber(total_prices.final_price)}</strong>
            </h2>
            {total_prices.total_promo_price !== 0 && (
              <p className="total-promo-price">Rp {formatNumber(total_prices.total_price)}</p>
            )}
            {total_prices.percentage !== 0 && (
              <p className="total-discount">diskon {Math.round(total_prices.percentage)} %</p>
            )}
            <div onClick={handleAddInvoice} className="pay-btn">
              Bayar
            </div>
            <div className="coupon">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className={ClassNames('form-control', {
                    'error-form': couponError.length > 0,
                  })}
                  onChange={(e) => {
                    setCouponName(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleReqCoupon();
                    }
                  }}
                  onInputCapture={() => {
                    setCouponError('');
                  }}
                  placeholder="Masukan Kupon"
                />
                <div className="input-group-prepend" onClick={handleReqCoupon}>
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
              <small
                className={ClassNames('error-text form-text d-none', {
                  'd-block': couponError,
                })}
                style={{ marginBottom: '1rem', marginTop: '-0.8rem' }}
              >
                {couponError}
              </small>{' '}
              <ul>{renderCoupons()}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container cart pb-5">{carts.length > 0 ? renderCart() : renderEmptyCart()}</div>
  );
}

Cart.propTypes = {
  carts: PropTypes.array,
  total_prices: PropTypes.object,
  coupons: PropTypes.array,
  addInvoice: PropTypes.func,
  deleteCart: PropTypes.func,
  reqCoupon: PropTypes.func,
  message: PropTypes.string,
  isError: PropTypes.bool,
  clearMsg: PropTypes.func,
  setCoupon: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(Cart);
