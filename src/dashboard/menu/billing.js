import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import ClassNames from 'classnames';
import { convertStatus, formatNumber } from '../../utils/format';
import { convertSlashDate } from '../../utils/date';
import './billing.css';

const mapStateToProps = (state) => ({
  invoices: state.invoice.invoices,
});

function useOutsideAlerter(ref, setOpenViewCount) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenViewCount(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setOpenViewCount]);
}

function Billing({ invoices, history }) {
  const [invoicesData, setInvoicesData] = useState(null);
  const [openViewCount, setOpenViewCount] = useState(false);
  const [activeCount, setActiveCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(10);
  const viewCount = useRef(null);

  useEffect(() => {
    if (invoices && invoices.length > 0) {
      setInvoicesData(invoices.slice(0, 10));
    }
  }, [invoices]);

  useOutsideAlerter(viewCount, setOpenViewCount);

  function renderData() {
    return invoicesData.map((val) => (
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

  function searchInvoice(event) {
    const filteredInvoices = invoices.filter((val) =>
      val.id.toString().includes(event.target.value)
    );
    if (filteredInvoices.length < 1) {
      showCountView(count);
    } else {
      setInvoicesData(filteredInvoices.slice(0, count));
    }
  }

  function showCountView(count) {
    if (count !== 'All') {
      setInvoicesData(invoices.slice(0, count));
    } else if (count === 'All') {
      setInvoicesData(invoices);
    }
  }

  function paginationData(start) {
    const from = start * count;
    const end = (start + 1) * count;
    setInvoicesData(invoices.slice(from, end));
  }

  function renderPagination() {
    const page = Math.ceil(invoices.length / count);
    const pagination = [];
    for (let i = 1; i <= page; i++) {
      pagination.push(
        <li
          key={i}
          className={ClassNames('page-item', {
            active: i === currentPage,
          })}
          onClick={() => {
            setCurrentPage(i);
            paginationData(i - 1);
          }}
        >
          <div className="page-link">{i}</div>
        </li>
      );
    }
    return pagination;
  }

  function nextPage() {
    const page = Math.ceil(invoices.length / count);
    if (currentPage !== page) {
      paginationData(currentPage);
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage - 1 > 0) {
      paginationData(currentPage - 2);
      setCurrentPage(currentPage - 1);
    }
  }

  return invoicesData && invoicesData.length > 0 ? (
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
          <input
            type="number"
            onChange={searchInvoice}
            placeholder="Cari Invoice Id"
            className="form-control"
          />
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
        <div className="pagination-wrapper">
          <div className="view-count-wrapper">
            <span>Menampilkan 1 sampai</span>
            <div
              ref={(val) => {
                viewCount.current = val;
              }}
              className="view-count"
              onClick={() => {
                setOpenViewCount(!openViewCount);
              }}
            >
              {count} <i className="fa fa-angle-down" aria-hidden="false"></i>
              <ul
                className={ClassNames('view-count-list', {
                  open: openViewCount,
                })}
              >
                <li
                  className={ClassNames({
                    active: activeCount === 10,
                  })}
                  onMouseEnter={() => {
                    setActiveCount(10);
                  }}
                  onClick={() => {
                    setCount(10);
                    showCountView(10);
                  }}
                >
                  10
                </li>
                <li
                  className={ClassNames({
                    active: activeCount === 25,
                  })}
                  onMouseEnter={() => {
                    setActiveCount(25);
                  }}
                  onClick={() => {
                    setCount(25);
                    showCountView(25);
                  }}
                >
                  25
                </li>
                <li
                  className={ClassNames({
                    active: activeCount === 50,
                  })}
                  onMouseEnter={() => {
                    setActiveCount(50);
                  }}
                  onClick={() => {
                    setCount(50);
                    showCountView(50);
                  }}
                >
                  50
                </li>
                <li
                  className={ClassNames({
                    active: activeCount === 'All',
                  })}
                  onMouseEnter={() => {
                    setActiveCount('All');
                  }}
                  onClick={() => {
                    setCount('All');
                    showCountView('All');
                  }}
                >
                  All
                </li>
              </ul>
            </div>
            <span>dari {invoices.length} data</span>
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li onClick={prevPage} className="page-item">
                <div className="page-link">Prev</div>
              </li>
              {renderPagination()}
              <li onClick={nextPage} className="page-item">
                <div className="page-link">Next</div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  ) : (
    <div className="dashboard-main">
      <div className="card-no-shadow py-5 text-center">
        <h2 className="card-title">Anda Belum Memiliki Sejarah Invoice</h2>
        <p>Silahkan Melakukan Pembelian untuk Melihat Sejarah invoice Anda</p>
        <button className="et_pb_button">
          <Link to={`/pembelian/keranjang`} className="stretched-link">
            <span className="sr-only">title for screen</span>
          </Link>
          <span>Lihat Keranjang</span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

Billing.propTypes = {
  invoices: PropTypes.array,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(withRouter(Billing));
