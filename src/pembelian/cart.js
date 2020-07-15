import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="container cart py-5">
      <div className="row">
        <div className="col-lg-8 pl-0">
          <div className="cart-item">
            <img
              className="img__cover"
              src="/assets/img/ezgif-2-d540788c4e50.png"
              alt="thumbnail"
              style={{
                maxWidth: '130px',
                height: 'auto',
              }}
            />
            <div>
              <p>
                <strong>Leadership Essentials [Accredited] </strong>
              </p>
              <p>By Braco Pobric and 1 other Current</p>
            </div>
            <div>
              <p style={{ color: '#f44336' }}>
                <strong>
                  Rp269,000 <i className="fa fa-tag" aria-hidden="true"></i>
                </strong>
              </p>
              <p
                style={{
                  textDecoration: 'line-through',
                }}
              >
                Rp1,399,000
              </p>
            </div>
            <div>
              <p className="remove-cart-item">
                Hapus <i className="fa fa-times" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default Cart;
