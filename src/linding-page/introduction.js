import React from 'react';
import { Link } from 'react-router-dom';

function Introduction() {
  return (
    <>
      <section className="container pt-4 pb-5 fs-18">
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-6 mb-4">
            <h5 className="et_pb_text_0">SELAMAT DATANG DI CREATIVE HUSTLE</h5>
            <h1
              className="mb-4"
              style={{
                fontSize: 42,
                fontWeight: 600,
              }}
            >
              Ingin Belajar Mencari Penghasilan dengan <br /> Cara Kreatif ?
            </h1>
            <p className="mb-4">
              Creative Huslte id platform belajar buat kalian yang ingin mencari penghasilan dari
              dunia kreatif dari mentor berpengalaman. Dapatkan berbagai kemudahan <br /> belajar
              mulai dari :
            </p>
            <ul className="benefit-list">
              <li>
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Berbagai pilihan kursus lengkap</p>
              </li>
              <li>
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Kesempatan belajar langsung via webinar online</p>
              </li>
              <li>
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <p>Dengan trainer yang berpengalaman mencari ‘cuan’ melalui dunia kreatif</p>
              </li>
            </ul>
            <div className="d-flex intro btn-wrapper">
              <div>
                <button className="find-course btn">
                  <Link to={`/kursus`} className="stretched-link">
                    <span className="sr-only">title for screen</span>
                  </Link>
                  <span>Mulai Kursus</span>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </div>
              <div>
                <button className="find-class btn">
                  <Link to={`/webinar`} className="stretched-link">
                    <span className="sr-only">title for screen</span>
                  </Link>
                  <span>Ikut Webinar</span>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/img/Home1.jpeg"
              alt="header"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-5 border-top container--light-blue">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3" style={{ fontSize: 28 }}>
              Dapatkan berbagai Keuntungan Belajar di <strong>Creative Hustle</strong>
            </h2>
          </div>

          <div className="hdr_img row">
            <div className="col-md-6 col-lg-4">
              <img
                className="mb-3"
                src="/assets/icon/lecture.png"
                width="60"
                height="60"
                alt="lecture"
              />
              <div className="hdr_img_text">
                <span>Kurikulum Berkualitas</span>
                <p>Disusun dari pengalaman yang dipadatkan</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <img
                className="mb-3"
                src="/assets/icon/log-in.png"
                width="60"
                height="60"
                alt="login"
              />
              <div className="hdr_img_text">
                <span>Mudah di akses</span>
                <p>Dapat diakses dengan berbagai device.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <img
                className="mb-3"
                src="/assets/icon/forever.png"
                width="60"
                height="60"
                alt="forever"
              />
              <div className="hdr_img_text">
                <span>Akses Selamanya</span>
                <p>Akses kursus yang telah dibeli untuk selamanya.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <img
                className="mb-3"
                src="/assets/icon/online-class.png"
                width="60"
                height="60"
                alt="online_class"
              />
              <div className="hdr_img_text">
                <span>Webinar</span>
                <p>Kesempatan langsung belajar dengan mentor melalui Webinar</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <img
                className="mb-3"
                src="/assets/icon/conversation.png"
                width="60"
                height="60"
                alt="conversation"
              />
              <div className="hdr_img_text">
                <span>Konsultasi Mentor</span>
                <p>Dapatkan akses untuk konsultasi dengan Para Mentor.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <img
                className="mb-3"
                src="/assets/icon/cloud-computing.png"
                width="60"
                height="60"
                alt="cloud_computing"
              />
              <div className="hdr_img_text">
                <span>Offline download</span>
                <p>Takut kuota habis ? Tenang, kursus dan webinar dapat diunduh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
