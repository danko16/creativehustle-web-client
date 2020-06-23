import React from 'react';

function JourneyPath() {
  return (
    <div
      style={{
        backgroundColor: 'rgba(15,219,255,0.09)',
        padding: '2%',
      }}
    >
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="text-center jp_intro">
            <h2>
              <strong>1.</strong>
            </h2>
            <h4>
              <strong>Membuat Akun</strong>
            </h4>
          </div>
          <div className="text-center jp_intro">
            <h2>
              <strong>2.</strong>
            </h2>
            <h4>
              <strong>Pilih Kursus/kelas</strong>
            </h4>
          </div>
          <div className="text-center jp_intro">
            <h2>
              <strong>3.</strong>
            </h2>
            <h4>
              <strong>Melakukan Pembayaran</strong>
            </h4>
          </div>
          <div className="text-center jp_intro">
            <h2>
              <strong>4.</strong>
            </h2>
            <h4>
              <strong>Mulai Kursus</strong>
            </h4>
          </div>
          <div className="text-center jp_intro">
            <h2>
              <strong>5.</strong>
            </h2>
            <h4>
              <strong>Konsultasi Trainer</strong>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyPath;
