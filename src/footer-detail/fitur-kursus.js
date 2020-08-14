import React, { useEffect } from 'react';
import './fitur-kursus.css';

function FiturKursus() {
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
            <img src="/assets/img/197.jpg" alt="197" width="100%" height="auto" />
          </div>
          <div className="col-lg-7">
            <p className="et_pb_txt_0">Fitur Kursus</p>
            <h1>
              <strong>Fitur dan Kualitas Kursus</strong>
            </h1>
            <p>
              Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle dengan
              menghadirkan berbagai fitur dan kualitas pembelajaran dalam kursus yang disajikan
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
              <strong>Kurikulum Berkualitas</strong>
            </h3>
            <p>
              Kurikulum Kursus di Creative Hustle memiliki standar <br className="xl" /> dalam
              pembuatannya sehingga teman-teman yang belajar <br className="xl" />
              akan mudah memahami mulai dari pemahaman sektor <br className="xl" />
              bisnis, kempuan teknis, cara menghasilkan uang, dan kesempatan lainnya.
            </p>
          </div>
          <div className="col-lg-6">
            <div style={{ height: 60, marginBottom: 30 }}>
              <img src="/assets/icon/credit_card.png" alt="credit card" width="60" height="auto" />
            </div>
            <h3 className="mb-3">
              <strong>Bayar Sekali Akses Selamanya</strong>
            </h3>
            <p>
              Ketika teman-teman membeli kursus, maka investasi biaya yang dibayarkan akan dapat
              diakses selamanya termasuk apabila nantinya materi dalam kursus diupdate ke versi
              terbaru.
            </p>
          </div>
        </div>
        <div className="row" style={{ paddingTop: 45, fontWeight: 400, marginBottom: 40 }}>
          <div className="col-lg-6">
            <div style={{ height: 60, marginBottom: 30 }}>
              <img
                src="/assets/icon/cloud_download.png"
                alt="offline download"
                width="60"
                height="auto"
              />
            </div>
            <h3 className="lg-3">
              <strong>Offline Download</strong>
            </h3>
            <p>
              Habis paket internet karena mengakses kursus ? Creative Hustle memberikan kesempatan
              untuk pembeli kursus <br className="xl" /> untuk dapat mendowload materi video kursus
              yang <br className="xl" /> diambil. Jadi teman-teman dapat mempelajari{' '}
              <br className="xl" /> walau tanpa koneksi.
            </p>
          </div>
          <div className="col-lg-6">
            <div style={{ height: 60, marginBottom: 30 }}>
              <img
                src="/assets/icon/group_people.png"
                alt="group people"
                width="60"
                height="auto"
              />
            </div>
            <h3 className="mb-3">
              <strong>Group Mentoring</strong>
            </h3>
            <p>
              Kursus pada Creative Hustle tidak hanya melalui video saja, melainkan juga memberikan
              kesempatan kepada teman-teman untuk berjejaring komunitas termasuk dengan mentor
              kursus.
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
              <strong>Perbedaan Kursus Gratis dan Premium ?</strong>
            </h1>
            <p>
              Buat teman-teman yang bingung apa sih perbedaan kursus gratis dan premium di{' '}
              <br className="xl" /> Creative Hustle id coba lihat perbedaanya.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="et_pb_column_9">
                <div className="et_pb_column_9_title">
                  <h3 className="text-center">
                    <strong>Kursus Gratis</strong>
                  </h3>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Gratis, Ya kali bayar</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Durasi kursus minimal 15 menit</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Berlangsung secara tidak langsung</p>
                  </li>
                  <li>
                    {' '}
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Video berkualitas HD</p>
                  </li>
                  <li>
                    {' '}
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Dapat didownload offline</p>
                  </li>
                  <li>
                    {' '}
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Peserta tidak terbatas dalam satu kursus</p>
                  </li>
                  <li>
                    {' '}
                    <div style={{ width: 25 }}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <p className="disabled">Update materi dan video kursus</p>
                  </li>
                  <li>
                    {' '}
                    <div style={{ width: 25 }}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <p className="disabled">Mendapatkan e-sertifikat kursus</p>
                  </li>
                  <li>
                    {' '}
                    <div style={{ width: 25 }}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <p className="disabled">Mendapatkan bahan belajar</p>
                  </li>
                  <li>
                    {' '}
                    <div style={{ width: 25 }}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <p className="disabled">Private telegram group</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="et_pb_column_9 blue">
                <div className="et_pb_column_9_title">
                  <h3 className="text-center" style={{ color: '#fff' }}>
                    <strong>Kursus Premium</strong>
                  </h3>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Investasi mulai Rp. 150.000,-</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Durasi kursus minimal 45 menit</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Berlangsung secara tidak langsung</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Video berkualitas HD</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Dapat didownload offline</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Peserta tidak terbatas dalam satu kursus</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Update materi dan video kursus</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Mendapatkan e-sertifikat kursus</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Mendapatkan bahan belajar</p>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>Private telegram group</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: "url('/assets/img/affiliate-cta-bg.jpg')",
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          padding: '54px 0px',
        }}
      >
        <div className="container">
          <div className="text-wrapper">
            <p>UDAH NGGA SABAR BELAJAR DI CREATIVE HUSTLE ?</p>
            <h2>
              Ayo segera pilih berbagai kursus yang tersedia dari kursus premium hingga gratis
            </h2>
            <button className="et_pb_button">
              <a className="stretched-link" href="/kursus">
                <span className="sr-only">title for screen</span>
              </a>
              <span>Lihat Kursus</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiturKursus;
