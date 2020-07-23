import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { invoiceActions } from '../redux/reducers/invoice';
import { isAuthenticated } from '../utils/auth';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  invoice: state.invoice.invoice,
  prices: state.invoice.prices,
  carts: state.invoice.carts,
  message: state.invoice.message,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqInvoice: invoiceActions.reqInvoice,
    },
    dispatch
  );

function Invoice({ reqInvoice, invoice, user, prices, carts, message }) {
  const divToPrint = useRef();
  const [error, setError] = useState({
    invoiceId: '',
  });
  const [invoiceId, setInvoiceId] = useState();

  useEffect(() => {
    if (message) {
      setError({
        invoiceId: message,
      });
    }
  }, [message]);

  function convertStatus(status) {
    switch (status) {
      case 'unpaid':
        return 'Belum Terbayar';
      case 'paid':
        return 'Lunas';
      case 'pending':
        return 'Menunggu Konfirmasi';
      case 'canceled':
        return 'di Batalkan';
      default:
        return 'Menunggu Konfirmasi';
    }
  }

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function convertDate(mode) {
    if (mode === 'date') {
      const date = new Date(invoice.date);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
    } else if (mode === 'expired') {
      const date = new Date(invoice.expired);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
    }
  }

  function converToPdf(mode) {
    const input = divToPrint.current.cloneNode(true);

    input.classList.add('pdf');
    document.body.append(input);

    html2canvas(input, {
      scale: 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', [canvas.height, 1150]);

      pdf.addImage(imgData, 'PNG', 10, 15);
      if (mode === 'download') {
        pdf.save('invoice#520930.pdf');
      } else if (mode === 'print') {
        pdf.autoPrint();
      }
      window.open(pdf.output('bloburl'), '_blank');
      document.body.removeChild(input);
    });
  }

  function renderItems() {
    return carts.map((val) =>
      val.type === 'course' ? (
        <tr key={val.course_id}>
          <td>{val.title} - Kursus *</td>
          <td className="text-center">Rp. {formatNumber(val.price)}</td>
        </tr>
      ) : (
        <tr key={val.class_id}>
          <td>{val.title} - Kelas *</td>
          <td className="text-center">Rp. {formatNumber(val.price)}</td>
        </tr>
      )
    );
  }

  return invoice && prices && carts && user ? (
    <>
      <div ref={divToPrint} className="invoice">
        <div className="text-center">
          <img
            src="/assets/img/creative-hustle.png"
            alt="logo"
            style={{
              width: 280,
              height: 'auto',
            }}
          />
          <h3
            style={{
              margin: '18px 0',
            }}
          >
            Invoice <strong>#{invoice.id}</strong>
          </h3>
          <div className="invoice-status">
            Status: <span className={invoice.status}>{convertStatus(invoice.status)}</span>
          </div>
          <span className="small-text">
            Terbit: {convertDate('date')}
            <br />
            Kadaluwarsa: {convertDate('expired')}
          </span>
        </div>
        <hr></hr>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p>
              <strong>Ditagihkan kepada:</strong>
            </p>
            <p>
              {user.name}
              <br />
              {user.email}
            </p>
          </div>
        </div>
        <div>
          <p>
            <strong>Dibayarkan kepada: </strong>
            <br />
            <span>Salah satu rekening di bawah ini</span>
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <p>
              <strong>BNI</strong> <br /> 0722620388
              <br /> Danang Eko Yudanto
            </p>
            <p>
              <strong>MANDIRI</strong> <br /> 1370016138576
              <br /> Reezky Pradata Sanjaya
            </p>
            <p>
              <strong>BTPN</strong> <br /> 90020619442
              <br /> Reezky Pradata Sanjaya
            </p>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>Invoice Items</strong>
            </h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-condensed">
                <thead>
                  <tr>
                    <td>
                      <strong>Deskripsi</strong>
                    </td>
                    <td width="20%" className="text-center">
                      <strong>Harga</strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {renderItems()}
                  <tr>
                    <td className="total-row text-right">
                      <strong>Sub Total</strong>
                    </td>
                    <td className="total-row text-center">
                      Rp. {formatNumber(prices.total_price)}
                    </td>
                  </tr>
                  {prices.total_promo_price && (
                    <tr>
                      <td className="total-row text-right">
                        <strong>Diskon {Math.round(prices.percentage)}%</strong>
                      </td>
                      <td className="total-row text-center">
                        Rp. {formatNumber(prices.total_price - prices.total_promo_price)}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="total-row text-right">
                      <strong>Total</strong>
                    </td>
                    <td className="total-row text-center">
                      Rp{' '}
                      {formatNumber(
                        prices.total_promo_price ? prices.total_promo_price : prices.total_price
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="invoice-dp">
        <div
          className="btn btn-default"
          onClick={() => {
            converToPdf('download');
          }}
        >
          <i className="fa fa-download" aria-hidden="true"></i>
          Download
        </div>
        <div
          className="btn btn-default"
          onClick={() => {
            converToPdf('print');
          }}
        >
          <i className="fa fa-print" aria-hidden="true"></i>
          Print
        </div>
      </div>
    </>
  ) : (
    <div className="empty-invoice">
      <h2>Silahkan Masukan No Invoice</h2>
      <p>
        masukan no invoice untuk melihat
        <br /> invoice anda
      </p>
      <div className="form-group">
        <label htmlFor="invoiceId">No Invoice </label>
        <input
          onChange={(e) => {
            setInvoiceId(e.target.value);
          }}
          onInputCapture={() => {
            setError((prevState) => ({
              ...prevState,
              invoiceId: '',
            }));
          }}
          type="number"
          name="invoiceId"
          className={ClassNames('form-control', { 'error-form': error.invoiceId })}
        />
        <small
          className={ClassNames('error-text form-text d-none', {
            'd-block': error.invoiceId,
          })}
        >
          {error.invoiceId}
        </small>
      </div>
      <div
        className="cari-invoice"
        onClick={() => {
          let isValid = true;
          setError({
            invoiceId: '',
          });
          if (!isAuthenticated()) {
            isValid = false;
            setError((state) => ({ ...state, invoiceId: 'Silahkan login/register' }));
          }
          if (!invoiceId) {
            isValid = false;
            setError((state) => ({ ...state, invoiceId: 'Tolong masukan invoice id' }));
          }

          if (isValid) {
            reqInvoice({ invoice_id: invoiceId });
          }
        }}
      >
        Cari Invoice
      </div>
    </div>
  );
}

Invoice.propTypes = {
  reqInvoice: PropTypes.func,
  invoice: PropTypes.object,
  carts: PropTypes.array,
  prices: PropTypes.object,
  user: PropTypes.object,
  message: PropTypes.string,
};

export default connect(mapStateToProps, mapActionToProps)(Invoice);
