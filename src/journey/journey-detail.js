import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { headerActions } from '../redux/reducers/header';
import { isAuthenticated } from '../utils/auth';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      showRegister: headerActions.showModal,
    },
    dispatch
  );

function JourneyDetail({ showRegister, history }) {
  useEffect(() => {
    return () => {
      showRegister({
        show: false,
        type: null,
      });
    };
  }, [showRegister]);
  return (
    <div className="container journey-detail fs-18">
      <div className="row">
        <div id="step1" className="anchor"></div>
        <div className="col-lg-6" style={{ padding: '0 60px' }}>
          <img
            src="/assets/img/pendaftaran.jpeg"
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
            <strong>Membuat Akun</strong>
          </h2>
          <p className="mb-4">
            Langkah paling awal untuk dapat mengikuti kursus atau webinar dari Creative Hustle
            adalah membuat akun terlebih dahulu. Tidak perlu kwatir, pembuatan akun gratis tanpa
            biaya apapun.
          </p>
          <button
            className="to-learn-path"
            onClick={() => {
              const isAuth = isAuthenticated();
              if (!isAuth) {
                showRegister({
                  show: true,
                  type: 'register',
                });
              }
            }}
          >
            <span className="et_pb_button_2">Daftar Akun</span>
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
            <strong>Pilih Kursus/Webinar</strong>
          </h2>
          <p className="mb-4">
            Terdapat berbagai kursus dan webinar yang dapat diambil di Creative Hustle. Semua kursus
            dan webinar kami jamin kualitasnya agar teman-teman mendapatkan ilmu setelah
            mengikutinya.{' '}
          </p>
          <div className="to-learn-path-wrapper">
            <button className="to-learn-path">
              <Link to={`/kursus`} className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span className="et_pb_button_2">Lihat Pilihan Kursus</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>

            <button className="to-learn-path">
              <Link to={`/webinar`} className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span className="et_pb_button_2">Lihat Jadwal Webinar</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
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
            src="/assets/img/ezgif-1-42777db772fd.png"
            alt="ezgif-1-42777db772fd"
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
            <strong>Melakukan Pembayaran</strong>
          </h2>
          <p className="mb-4">
            Setelah selesai memilih kursus atau webinar yang ingin ikuti, lakukan pembayaran dengan
            mudah melalui sistem yang kami buat dengan mengedepankan keamanan dalam pembayaran.
            Sstt.. tidak semua kursus dan webinar berbayar, ada yang gratis.
          </p>
          <button className="to-learn-path">
            <Link to={`/kursus`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span className="et_pb_button_2">Lihat Pilihan Kursus</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="row row_rvrs">
        <div id="step4" className="anchor"></div>
        <div className="col-lg-6">
          <div className="et_pb_text_6 et_pb_text">
            <p className="m-0">Langkah 4</p>
          </div>
          <h2 className="et_pb_head_2 mb-4">
            <strong>Mulai Kursus/Webinar</strong>
          </h2>
          <p className="mb-4">
            Setelah selesai memilih webinar atau kursus serta melakukan pembayaran, teman-teman
            dapat segera mulai untuk belajar dalam dasboard yang kami design khusus agar nyaman dan
            mudah ketika menyimak video.
          </p>
          <button
            className="to-learn-path"
            onClick={() => {
              const isAuth = isAuthenticated();
              if (!isAuth) {
                showRegister({
                  show: true,
                  type: 'login',
                });
              } else {
                history.push('/dashboard');
              }
            }}
          >
            <span className="et_pb_button_2">Masuk ke Dasboard</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-lg-6" style={{ padding: '0 60px' }}>
          <img
            src="/assets/img/Home1.jpeg"
            alt="Home1"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <div className="row">
        <div id="step5" className="anchor"></div>
        <div className="col-lg-6" style={{ padding: '0 60px' }}>
          <img
            src="/assets/img/ezgif-2-c0a66fc9be92.png"
            alt="ezgif-2-c0a66fc9be92"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className="col-lg-6">
          <div className="et_pb_text_6 et_pb_text">
            <p className="m-0">Langkah 5</p>
          </div>
          <h2 className="et_pb_head_2 mb-4">
            <strong>Konsultasi Trainer</strong>
          </h2>
          <p className="mb-4">
            Setelah selesai webinar banyak pertanyaan dan pemikiran yang ingin disampaikan ke
            instruktur ? Tenang, Creative Hustle membuat forum telegram bersama mentor untuk setiap
            user yang membeli kursus agar dapat bertanya langsung dengan para mentor dan Kesempatan
            tanya jawab langsung dalam program Webinar
          </p>
        </div>
      </div>
    </div>
  );
}

JourneyDetail.propTypes = {
  showRegister: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, mapActionToProps)(withRouter(JourneyDetail));
