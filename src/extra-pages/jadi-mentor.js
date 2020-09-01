import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './jadi-mentor.css';

function JadiMentor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jadi-mentor fs-18">
      <div className="container">
        <div className="head">
          <p>
            <strong>SELAMAT DATANG DI CREATIVE HUSTLE</strong>
          </p>
          <h1>
            <strong>Ayo Gabung jadi Mentor</strong>
          </h1>
          <p>
            Dapatkan penghasilan tambahan melalui kursus dan kelas untuk turut berkontribusi dalam
            peningkatan kualitas jutaan sumber daya manusia Indonesia.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src="/assets/img/Mentor-hp2.jpg" alt="Mentor-hp2" width="100%" height="auto" />
          </div>
          <div className="col-lg-6">
            <div className="benefit-as-mentor">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <div>
                <h5>Berbagai pengalaman dan skill berharga</h5>
                <span>
                  Bagikan keahlian kamu kepada lebih pengguna Creative Hustle di seluruh Indonesia.
                  Saatnya menginspirasi tanpa henti.
                </span>
              </div>
            </div>
            <div className="benefit-as-mentor">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <div>
                <h5>Susun materi belajar dalam bentuk video</h5>
                <p>
                  Creative Hustle akan memberikan dukungan teknis dari awal sampai akhir proses
                  produksi video. Teman-teman bebas menyusun video belajar yang interaktif dan
                  efektif sesuai tujuan.
                </p>
              </div>
            </div>
            <div className="benefit-as-mentor">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <div>
                <h5>Dapatkan penghasilan</h5>
                <p>
                  Tuai pundi-pundi rupiah dari keahlian teman-teman dan dikenal sebagai seorang
                  praktisi di disiplin ilmu yang ajarkan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center">
          <strong>Alur menjadi Mentor</strong>
        </h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <img src="/assets/img/177-980x551.jpg" alt="177-980x551" width="100%" height="auto" />
            <h5 className="be-mentor-title">
              <strong>1. Mendaftar Sebagai Mentor</strong>
            </h5>
            <p>
              Untuk menjadi mentor wajib untuk mengisi formulir yang sudah kami siapkan di halaman
              ini.
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <img src="/assets/img/432-1.jpg" alt="432-1" width="100%" height="auto" />
            <h5 className="be-mentor-title">
              <strong>2. Produksi &#38; Review</strong>
            </h5>
            <p>
              Tim Creative Hustle akan mereview berkas kamu dan setelah di approve maka mentor dapat
              mengirimkan <br className="xl" /> video kursus yang dikirimkan.
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <img src="/assets/img/197.jpg" alt="197" width="100%" height="auto" />
            <h5 className="be-mentor-title">
              <strong>3. Mulai Kursus atau Webinar</strong>
            </h5>
            <p>
              Mulai publikasi kursus atau webinar pertama yang telah kamu buat pada Creative Hustle
              dan dapatkan royalti setiap pembelian.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-to-contact-us">
        <h5>
          <strong>Mentor Creative Hustle</strong>
        </h5>
        <h1>
          <strong>
            Ayo gabung menjadi mentor dan memberikan dampak untuk Ekonomi Kreatif di Indonesia
          </strong>
        </h1>
        <p>
          Mari berkontribusi dalam peningkatan kualitas jutaan sumber daya manusia Indonesia, dengan
          menjadi mentor di kursus maupun kelas.
        </p>
        <button
          className="et_pb_button"
          style={{
            marginTop: '2rem',
          }}
        >
          <Link className="stretched-link" to="/kontak-kami" />
          <span
            style={{
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Hubungi Creative Hustle
          </span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default JadiMentor;
