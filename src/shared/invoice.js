import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import disableScroll from 'disable-scroll';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { formatNumber, convertStatus } from '../utils/format';
import { invoiceActions } from '../redux/reducers/invoice';
import Loading from './loading';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  invoices: state.invoice.invoices,
  recent_invoice: state.invoice.recent_invoice,
  detail_invoice: state.invoice.detail_invoice,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqInvoice: invoiceActions.reqInvoice,
      setData: invoiceActions.setData,
    },
    dispatch
  );

function Invoice({
  invoiceId,
  reqInvoice,
  mode,
  invoices,
  recent_invoice,
  detail_invoice,
  setData,
  user,
  setInvoiceId,
}) {
  const history = useHistory();
  const [invoice, setInvoice] = useState(null);
  const divToPrint = useRef();

  useEffect(() => {
    if (invoiceId && invoices) {
      reqInvoice({ invoice_id: invoiceId }, mode);
    }
  }, [invoiceId, reqInvoice, invoices, mode]);

  useEffect(() => {
    if (detail_invoice && mode === 'detail') {
      setInvoice(detail_invoice);
    } else if (recent_invoice && mode === 'recent') {
      setInvoice(recent_invoice);
    }
  }, [recent_invoice, detail_invoice, mode]);

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

    disableScroll.on();
    input.classList.add('pdf');
    document.body.append(input);

    html2canvas(input, {
      scale: 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', [canvas.height, 1150]);

      pdf.addImage(imgData, 'PNG', 10, 15);
      if (mode === 'download') {
        pdf.save(`invoice#${invoice.id}.pdf`);
      } else if (mode === 'print') {
        pdf.autoPrint();
      }
      window.open(pdf.output('bloburl'), '_blank');
      document.body.removeChild(input);
      disableScroll.off();
    });
  }

  function renderItems() {
    return invoice.carts.map((val) =>
      val.type === 'course' ? (
        <tr key={val.course_id}>
          <td>{val.title} - Kursus *</td>
          <td className="text-center">Rp. {formatNumber(val.price)}</td>
        </tr>
      ) : (
        <tr key={val.webinar_id}>
          <td>{val.title} - Webinar *</td>
          <td className="text-center">Rp. {formatNumber(val.price)}</td>
        </tr>
      )
    );
  }

  return invoice && user ? (
    <div>
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
                      Rp. {formatNumber(invoice.total_price)}
                    </td>
                  </tr>
                  {invoice.total_promo_price !== 0 && (
                    <tr>
                      <td className="total-row text-right">
                        <strong>Diskon {Math.round(invoice.percentage)}%</strong>
                      </td>
                      <td className="total-row text-center">
                        Rp. {formatNumber(invoice.total_promo_price)}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="total-row text-right">
                      <strong>Total</strong>
                    </td>
                    <td className="total-row text-center">
                      Rp {formatNumber(invoice.final_price)}
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

        {mode === 'recent' && (
          <div
            className="btn btn-default"
            onClick={() => {
              setData('recent_invoice', null);
              setInvoiceId(null);
            }}
            style={{
              marginLeft: 12,
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
            Cari Invoice
          </div>
        )}

        {mode === 'detail' && invoice.status !== 'canceled' && invoice.status !== 'paid' && (
          <div
            className="btn btn-default"
            onClick={() => {
              setData('recent_invoice', invoice);
              history.push('/pembelian/konfirmasi');
            }}
            style={{
              marginLeft: 12,
            }}
          >
            <i className="fa fa-check" aria-hidden="true"></i>
            Konfirmasi
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

Invoice.propTypes = {
  invoiceId: PropTypes.number,
  reqInvoice: PropTypes.func,
  setData: PropTypes.func,
  user: PropTypes.object,
  mode: PropTypes.string,
  invoices: PropTypes.array,
  recent_invoice: PropTypes.object,
  detail_invoice: PropTypes.object,
  setInvoiceId: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(Invoice);
