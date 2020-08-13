import React, { useEffect } from 'react';
import './cara-pembayaran.css';

function CaraPembayaran() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cara-pembayaran fs-18">
      <div className="container head-bg">
        <p>CARA PEMBAYARAN</p>
        <h1>
          <strong>Lakukan Pembayaran dengan Mudah dan Aman</strong>
        </h1>
        <p>
          Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle dengan
          menghadirkan berbagai fitur dan <br /> kualitas pembelajaran dalam kursus yang disajikan
          bersama mentor berpengalaman.
        </p>
      </div>
    </div>
  );
}

export default CaraPembayaran;
