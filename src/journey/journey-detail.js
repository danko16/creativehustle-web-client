import React from 'react';
import { Link } from 'react-router-dom';

function JourneyDetail() {
  return (
    <div className="container journey-detail">
      <div className="row row_rvrs">
        <div className="col-lg-6" style={{ padding: '0 60px' }}>
          <img
            src="/assets/img/ezgif-2-d540788c4e50.png"
            alt="ezgif-2-d540788c4e50"
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
            Langkah paling awal untuk dapat mengikuti kursus atau kelas dari Creative Hustle adalah
            membuat akun terlebih dahulu. Tidak perlu kwatir, pembuatan akun gratis tanpa biaya
            apapun.
          </p>
          <button className="to-learn-path">
            <Link to={`/journey`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span>Daftar Akun</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="et_pb_text_6 et_pb_text">
            <p className="m-0">Langkah 2</p>
          </div>
          <h2 className="et_pb_head_2 mb-4">
            <strong>Pilih Kursus/Kelas</strong>
          </h2>
          <p className="mb-4">
            Terdapat berbagai kursus dan kelas yang dapat diambil di Creative Hustle. Semua kursus
            dan kelas kami jamin kualitasnya agar teman-teman mendapatkan ilmu setelah mengikutinya.{' '}
          </p>
          <button className="to-learn-path">
            <Link to={`/krusus`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span>Lihat Pilihan Kursus</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-lg-6" style={{ padding: '0 60px' }}>
          <img
            src="/assets/img/default-img.svg"
            alt="default"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <div className="row row_rvrs">
        <div className="col-lg-6" style={{ padding: '0 60px' }}>
          <img
            src="/assets/img/default-img.svg"
            alt="default"
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
            Setelah selesai memilih kursus atau kelas yang ingin ikuti, lakukan pembayaran dengan
            mudah melalui sistem yang kami buat dengan mengedepankan keamanan dalam pembayaran.
            Sstt.. tidak semua kursus dan kelas berbayar, ada yang gratis.
          </p>
          <button className="to-learn-path">
            <Link to={`/journey`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span>Lihat Pilihan Kursus</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="et_pb_text_6 et_pb_text">
            <p className="m-0">Langkah 4</p>
          </div>
          <h2 className="et_pb_head_2 mb-4">
            <strong>Mulai Kursus/Kelas</strong>
          </h2>
          <p className="mb-4">
            Setelah selesai memilih kelas atau kursus serta melakukan pembayaran, teman-teman dapat
            segera mulai untuk belajar dalam dasboard yang kami design khusus agar nyaman dan mudah
            ketika menyimak video.
          </p>
          <button className="to-learn-path">
            <Link to={`/journey`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span>Lihat Pilihan Kursus</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-lg-6" style={{ padding: '0 60px' }}>
          <img
            src="/assets/img/default-img.svg"
            alt="default"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <div className="row row_rvrs">
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
            Setelah selesai kelas banyak pertanyaan dan pemikiran yang ingin disampaikan ke
            instruktur ? Tenang, Creative Hustle membuat forum khusus agar untuk bertanya langsung
            pada instruktur kursus dan kelas tersebut.
          </p>
          <button className="to-learn-path">
            <Link to={`/journey`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span>Lihat Pilihan Kursus</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JourneyDetail;
