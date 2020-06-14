import React from 'react';

import Header from '../shared/header';
import Footer from '../shared/footer';
import PopularClass from './popular-class';
import Testimony from './testimony';
import RegisterOffer from './register-offer';

import './landing-page.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />

      <section className="container pt-4 pb-4">
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-6 mb-4">
            <h1>Bingung cara mulai cari penghasilan tambahan ?</h1>
            <p>
              Creative Huslte id platform belajar buat kalian yang ingin mencari penghasilan
              tambahan dengan cara kreatif. Dapatkan berbagai kemudahan belajar mulai dari :
            </p>
            <ul
              style={{
                paddingInlineStart: 'inherit',
                marginBottom: 50,
              }}
            >
              <li>Berbagai pilihan kursus lengkap</li>
              <li>Kesempatan belajar langsung via kelas online</li>
              <li>Dengan trainer yang berpengalaman mencari ‘cuan’ melalui dunia kreatif</li>
            </ul>
            <button className="find-course btn">Cari Kursus</button>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/img/header-img.png"
              alt="header"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">
              Bayangkan berbagai Keuntungan Belajar di <strong>Creative Hustle id</strong>
            </h2>
          </div>

          <div className="hdr_img row">
            <div className="col-md-6 col-lg-3">
              <img className="mb-3" src="/assets/img/head_1.png" width="90" height="90" alt="" />
              <span className="mb-2">Lengkap Berkualitas</span>
              <p className="text-center">
                Kursus dibuat melalui pengalaman yang dipadatkan untuk mudah dipahami dan
                dipraktikan.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <img className="mb-3" src="/assets/img/head_2.png" width="90" height="90" alt="" />
              <span className="mb-2">Mudah di akses</span>
              <p className="text-center">
                Dapat diakses dengan berbagai device baik laptop, PC, ataupun handphone.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <img className="mb-3" src="/assets/img/head_3.png" width="90" height="90" alt="" />
              <span className="mb-2">Akses Selamanya</span>
              <p className="text-center">
                Akses kelas yang telah dibeli untuk selamanya agar bisa diputar ulang hingga
                benar-benar paham.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <img className="mb-3" src="/assets/img/head_4.png" width="90" height="90" alt="" />
              <span className="mb-2">Offline download</span>
              <p className="text-center">
                Takut kuota habis ? Tenang, kursus dapat diunduh secara offline agar bisa
                mengaksesnya tanpa koneksi internet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PopularClass />
      <Testimony />
      <RegisterOffer />
      <Footer />
    </div>
  );
}

export default LandingPage;
