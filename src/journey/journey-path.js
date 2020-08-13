import React from 'react';

function JourneyPath() {
  return (
    <div
      className="journey-path"
      style={{
        backgroundColor: 'rgba(15,219,255,0.09)',
        padding: '2%',
      }}
    >
      <div className="container">
        <div className="elementor-widget-container">
          <ul className="step-num">
            <li>
              <a href="#step1">
                <span className="num">1</span>
                <span className="num-txt">Membuat Akun</span>
              </a>
            </li>
            <li>
              <a href="#step2">
                <span className="num">2</span>
                <span className="num-txt">Pilih Kursus/kelas</span>
              </a>
            </li>
            <li>
              <a href="#step3">
                <span className="num">3</span>
                <span className="num-txt">Melakukan Pembayaran</span>
              </a>
            </li>
            <li>
              <a href="#step4">
                <span className="num">4</span>
                <span className="num-txt">Mulai Kursus</span>
              </a>
            </li>
            <li>
              <a href="#step5">
                <span className="num">5</span>
                <span className="num-txt">Konsultasi Trainer</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JourneyPath;
