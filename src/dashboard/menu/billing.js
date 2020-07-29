import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { convertStatus, formatNumber } from '../../utils/format';
import { convertSlashDate } from '../../utils/date';
import './billing.css';

const mapStateToProps = (state) => ({
  invoices: state.invoice.invoices,
});

function Billing({ invoices, history }) {
  function renderData() {
    return invoices.map((val) => (
      <tr
        key={val.id}
        onClick={() => {
          history.push(`/dashboard/billing/${val.id}`);
        }}
      >
        <th scope="row">{val.id}</th>
        <td>{convertSlashDate(val.date)}</td>
        <td>{convertSlashDate(val.expired)}</td>
        <td>Rp. {formatNumber(val.total_amount)}</td>
        <td className={val.status}>{convertStatus(val.status)}</td>
      </tr>
    ));
  }
  return (
    <div className="dashboard-main">
      <div className="billing card-no-shadow">
        <div className="title">
          <span>Invoices</span>
          <span>Invoice History</span>
        </div>
        <div className="input-group search-wrapper">
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
            <tbody>{renderData()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Billing.propTypes = {
  invoices: PropTypes.array,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(withRouter(Billing));
