import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { invoiceActions } from '../redux/reducers/invoice';

import Loading from '../shared/loading';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  invoice: state.invoice.invoice,
  prices: state.invoice.prices,
  carts: state.invoice.carts,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqInvoice: invoiceActions.reqInvoice,
    },
    dispatch
  );

function Invoice({ reqInvoice, invoice, user, prices, carts }) {
  const { invoiceId } = useParams();
  const divToPrint = useRef();

  useEffect(() => {
    reqInvoice({ invoice_id: invoiceId });
  }, [reqInvoice, invoiceId]);

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
            justifyContent: 'space-between',
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
          <div>
            <p>
              <strong>Dibayarkan kepada:</strong>
            </p>
            <p>
              Creativehustle.id <br /> Bendogantungan 2, sumberejo,
              <br /> klaten selatan <br /> Klaten 57426 <br /> Klaten, Jawa Tengah <br /> <br />
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
    <Loading />
  );
}

Invoice.propTypes = {
  reqInvoice: PropTypes.func,
  invoice: PropTypes.object,
  carts: PropTypes.array,
  prices: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapActionToProps)(Invoice);
