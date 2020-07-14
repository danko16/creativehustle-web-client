import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Invoice() {
  function converToPdf(mode) {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      pdf.addImage(imgData, 'PNG', 8, 5);
      if (mode === 'download') {
        pdf.save('download.pdf');
      } else if (mode === 'print') {
        pdf.autoPrint();
      }
      window.open(pdf.output('bloburl'), '_blank');
    });
  }

  return (
    <>
      <div id="divToPrint" className="invoice">
        <div className="text-center">
          <img src="/assets/img/creative-hustle.png" alt="logo" />
          <h3
            style={{
              margin: '18px 0',
            }}
          >
            Invoice <strong>#520930</strong>
          </h3>
          <div className="invoice-status">
            Status: <span className="unpaid">Belum Terbayar</span>
          </div>
          <span className="small-text">
            Terbit: 11/07/2020
            <br />
            Kadaluwarsa: 18/07/2020
          </span>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-sm-6 pl-0">
            <p>
              <strong>Ditagihkan kepada:</strong>
            </p>
            <p>
              Reezky Pradata
              <br />
              reezkypradata@gmail.com
            </p>
          </div>
          <div className="col-sm-6 pr-0">
            <p>
              <strong>Dibayarkan kepada:</strong>
            </p>
            <p>
              Creativehustle.id <br /> Bendogantungan 2, sumberejo, klaten selatan <br /> Klaten
              57426 <br /> Klaten, Jawa Tengah <br /> <br />
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
                  <tr>
                    <td>Domain Registration - reezky.com - 1 Year/s (11/07/2020 - 10/07/2021) *</td>
                    <td className="text-center">Rp 129.000,00</td>
                  </tr>
                  <tr>
                    <td className="total-row text-right">
                      <strong>Sub Total</strong>
                    </td>
                    <td className="total-row text-center">Rp 129.000,00</td>
                  </tr>
                  <tr>
                    <td className="total-row text-right">
                      <strong>10.00% PPN</strong>
                    </td>
                    <td className="total-row text-center">Rp 12.900,00</td>
                  </tr>
                  <tr>
                    <td className="total-row text-right">
                      <strong>Total</strong>
                    </td>
                    <td className="total-row text-center">Rp 141.900,00</td>
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
  );
}

export default Invoice;
