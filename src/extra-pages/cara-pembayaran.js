import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './cara-pembayaran.css';

function CaraPembayaran() {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cara-pembayaran fs-18">
      <div className="container head-bg">
        <div className="text-center p-4">
          <p>CARA PEMBAYARAN</p>
          <h1>
            <strong>Lakukan Pembayaran dengan Mudah dan Aman</strong>
          </h1>
          <p>
            Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle dengan
            menghadirkan berbagai fitur dan <br className="xl" /> kualitas pembelajaran dalam kursus
            yang disajikan bersama mentor berpengalaman.
          </p>
        </div>
      </div>
      <div
        className="journey-path"
        style={{
          backgroundColor: 'rgba(15, 219, 255, 0.09)',
          padding: '2%',
        }}
      >
        <div className="container">
          <div className="elementor-widget-container">
            <ul className="step-num">
              <li>
                <a href="#step1">
                  <span className="num">1</span>
                  <span className="num-txt">Pilih dan Checkout</span>
                </a>
              </li>
              <li>
                <a href="#step2">
                  <span className="num">2</span>
                  <span className="num-txt">Melakukan Pembayaran</span>
                </a>
              </li>
              <li>
                <a href="#step3">
                  <span className="num">3</span>
                  <span className="num-txt">Konfirmasi Pembayaran</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div id="step1" className="anchor"></div>
          <div className="col-lg-6" style={{ padding: '0 60px' }}>
            <img
              src="/assets/img/pendaftaran.png"
              alt="pendaftaran"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="col-lg-6">
            <div className="et_pb_text_6 et_pb_text">
              <p className="m-0">Langkah 1</p>
            </div>
            <h2 className="et_pb_head_2 mb-4">
              <strong>Pilih dan Check Out</strong>
            </h2>
            <p className="mb-4">
              Setelah login dan memilih kursus atau webinar mana yang ingin diikuti, Segera menuju
              keranjang untuk melihat pilihan kursus atau webinar yang diambil. Teman-teman juga
              dapat memasukan kode kupon pada halaman ini.
            </p>
            <button
              className="to-learn-path"
              onClick={() => {
                history.push('/pembelian/keranjang');
              }}
            >
              <span className="et_pb_button_2">Lihat Keranjang</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="row row_rvrs">
          <div id="step2" className="anchor"></div>
          <div className="col-lg-6">
            <div className="et_pb_text_6 et_pb_text">
              <p className="m-0">Langkah 2</p>
            </div>
            <h2 className="et_pb_head_2 mb-4">
              <strong>Lakukan Pembayaran</strong>
            </h2>
            <p className="mb-4">
              Setelah memastikan bahwa kursus atau webinar telah <br className="xl" /> sesusai klik
              tombol Check out dan melakukan pembayaran. Akan ada tertera jelas nantinya harus
              mengirim berapa dan kirim ke rekening apa.
            </p>
            <p style={{ fontStyle: 'italic' }}>
              Maaf masih manual karena payment gateway sedang kami proses.
            </p>
          </div>
          <div className="col-lg-6" style={{ padding: '0 60px' }}>
            <img
              src="/assets/img/pxas.png"
              alt="pexas"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
        <div className="row">
          <div id="step3" className="anchor"></div>
          <div className="col-lg-6" style={{ padding: '0 60px' }}>
            <img
              src="/assets/img/pendaftaran.png"
              alt="pendaftaran"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="col-lg-6">
            <div className="et_pb_text_6 et_pb_text">
              <p className="m-0">Langkah 3</p>
            </div>
            <h2 className="et_pb_head_2 mb-4">
              <strong>Konfrimasi Pembayaran</strong>
            </h2>
            <p className="mb-4">
              Setelah melakukan pembayaran, selanjutnya adalah mengkonfirmasi pembayaran melalui
              formulir yang telah <br className="xl" /> kami buat. Dalam 1 x 24 jam kami akan
              konfrimasi pembayaran dan setelah terkonfirmasi teman-teman <br className="xl" /> bisa
              memulai kursus atau webinar.
            </p>
            <button
              className="to-learn-path"
              onClick={() => {
                history.push('/pembelian/konfirmasi');
              }}
            >
              <span className="et_pb_button_2">Konfrimasi Pembayaran</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="cta-bg">
        <div className="container">
          <p>SUDAH TIDAK SABAR UNTUK MULAI KURSUS DI CREATIVE HUSTLE ?</p>
          <h2>
            <strong>Ayo segera ikut kursus dan webinar yang tersedia!</strong>
          </h2>
        </div>
        <div className="et_pb_button_wrapper">
          <button className="et_pb_button">
            <Link className="stretched-link" to="/kursus" />
            <span
              style={{
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Lihat Kursus
            </span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
          <button className="et_pb_button">
            <Link className="stretched-link" to="/webinar" />
            <span
              style={{
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Lihat Webinar
            </span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaraPembayaran;
