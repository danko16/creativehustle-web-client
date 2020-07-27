import React from 'react';
import './billing.css';
import { convertStatus } from '../../utils/format';

function Billing() {
  return (
    <div className="dashboard-main">
      <div className="billing card-no-shadow">
        <div className="title">
          <span>Invoices</span>
          <span>Invoice History</span>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <input type="text" className="form-control" />
        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Invoice #</th>
                <th scope="col">Tanggal Terbit</th>
                <th scope="col">Tanggal Kadaluwarsa</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>12/07/2020</td>
                <td>12/07/2020</td>
                <td>Rp. 200.000</td>
                <td className="unpaid">{convertStatus('unpaid')}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>12/07/2020</td>
                <td>12/07/2020</td>
                <td>Rp. 200.000</td>
                <td className="paid">{convertStatus('paid')}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>12/07/2020</td>
                <td>12/07/2020</td>
                <td>Rp. 200.000</td>
                <td className="pending">{convertStatus('pending')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Billing;
