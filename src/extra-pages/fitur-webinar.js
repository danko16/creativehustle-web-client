import React, { useEffect } from 'react';
import './fitur-kursus.css';

function FiturWebinar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fitur-kursus pt-5 fs-18">
      <section className="container py-5">
        <div
          className="row"
          style={{
            marginBottom: 40,
          }}
        >
          <div className="col-lg-5">
            <img src="/assets/img/177-980x551.jpg" alt="177-980x551" width="100%" height="auto" />
          </div>
          <div className="col-lg-7">
            <p className="et_pb_txt_0">FITUR WEBINAR</p>
            <h1>
              <strong>Belajar Bersama Mentor di Webinar</strong>
            </h1>
            <p>
              Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle dengan
              menghadirkan berbagai fitur dan kualitas pembelajaran dalam Webinar yang disajikan
              bersama mentor berpengalaman.
            </p>
          </div>
        </div>
        <div className="row" style={{ paddingTop: 45, fontWeight: 400 }}>
          <div className="col-lg-6">
            <div style={{ height: 60, marginBottom: 30 }}>
              <img src="/assets/icon/box_check.png" alt="box check" width="60" height="auto" />
            </div>
            <h3 className="mb-3">
              <strong>Webinar berkualitas</strong>
            </h3>
            <p>
              Materi Webinar di Creative Hustle dibuat oleh mentor <br className="xl" /> dengan
              memadatkan pengalaman serta topik bukan <br className="xl" /> hanya berdasarkan teori
              namun juga case study.
            </p>
          </div>
          <div className="col-lg-6">
            <div style={{ height: 60, marginBottom: 30 }}>
              <img src="/assets/icon/credit_card.png" alt="credit card" width="60" height="auto" />
            </div>
            <h3 className="mb-3">
              <strong>Investasi Ikut Webinar Murah</strong>
            </h3>
            <p>
              Ketika teman-teman mendaftar jadwal webinar, maka investasi biaya yang dibayarkan akan
              dapat diakses selamanya termasuk apabila nantinya materi dalam <br className="xl" />{' '}
              kursus diupdate ke versi terbaru.
            </p>
          </div>
        </div>
        <div className="row" style={{ paddingTop: 45, fontWeight: 400, marginBottom: 40 }}>
          <div className="col-lg-6">
            <div style={{ height: 60, marginBottom: 30 }}>
              <img
                src="/assets/icon/online-class-1.png"
                alt="online-class-1"
                width="60"
                height="auto"
              />
            </div>
            <h3 className="mb-3">
              <strong>Webinar Esklusif</strong>
            </h3>
            <p>
              Sering merasa susah berinteraksi akibat webinar terlalu banyak orang ? tenang, kami
              membuat webinar bersifat ekslusif yang hanya 50 orang untuk webinar premium{' '}
              <br className="xl" /> dan 100 untuk webinar gratis.
            </p>
          </div>
          <div className="col-lg-6">
            <div style={{ height: 60, marginBottom: 30 }}>
              <img src="/assets/icon/webinar.png" alt="webinar" width="60" height="auto" />
            </div>
            <h3 className="mb-3">
              <strong>Berinteraksi Langsung</strong>
            </h3>
            <p>
              Dengan ikut webinar, teman-teman punya kesempatan untuk langsung bertanya dengan
              mentor webinar. Kapan lagi bisa tanya jawab atau konsultasi langsung dengan mentor ?
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '3rem 0 6rem 0',
        }}
      >
        <div className="container">
          <div className="text-center et_pb_column_9_head">
            <h1>
              <strong>Perbedaan Webinar Gratis dan Premium ?</strong>
            </h1>
            <p>
              Buat teman-teman yang bingung apa sih perbedaan webinar gratis dan premium di{' '}
              {<br className="xl" />} Creative Hustle id coba lihat perbedaanya.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="et_pb_column_9">
                <div className="et_pb_column_9_title">
                  <h3 className="text-center">
                    <strong>Webinar Gratis</strong>
                  </h3>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Gratis, Ya kali bayar</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Berlangsung secara live</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Webinar berlangsung selama 45 menit</p>
                  </li>
                  <li>
                    {' '}
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Peserta maksimal 100 orang persesi</p>
                  </li>
                  <li>
                    {' '}
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Video berkualitas HD</p>
                  </li>
                  <li>
                    {' '}
                    <div style={{ width: 25 }}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <p className="disabled">Mendapatkan sekilas rekaman Webinar</p>
                  </li>
                  <li>
                    {' '}
                    <div style={{ width: 25 }}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <p className="disabled">Mendapatkan e-sertifikat Webinar</p>
                  </li>
                  <li>
                    {' '}
                    <div style={{ width: 25 }}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <p className="disabled">Mendapatkan bahan belajar</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="et_pb_column_9 blue">
                <div className="et_pb_column_9_title">
                  <h3 className="text-center" style={{ color: '#fff' }}>
                    <strong>Webinar Premium</strong>
                  </h3>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Investasi mulai Rp. 50.000</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Berlangsung secara live</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Webinar berlangsung selama 60 menit</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Peserta maksimal 50 orang persesi</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Video berkualitas HD</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Mendapatkan sekilas rekaman Webinar</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Mendapatkan e-sertifikat Webinar</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Mendapatkan bahan belajar</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: "url('/assets/img/cta-bg.png')",
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          padding: '54px 0px',
        }}
      >
        <div className="container">
          <div className="text-wrapper">
            <p>UDAH NGGA SABAR IKUT WEBINAR CREATIVE HUSTLE ?</p>
            <h2>
              Ayo segera lihat jadwal Webinar yang akan berlangsung, Jangan sampai telat daftar!
            </h2>
            <button className="et_pb_button">
              <a className="stretched-link" href="/webinar">
                <span className="sr-only">title for screen</span>
              </a>
              <span>Ikut Webinar</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiturWebinar;
