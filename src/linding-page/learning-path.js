import React from 'react';
import { Link } from 'react-router-dom';

function LearningPath() {
  return (
    <div className="border-top lp-landing fs-18">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            style={{
              padding: '0 60px',
              marginBottom: 30,
            }}
          >
            <img
              src="/assets/img/okex2.jpg"
              alt="642-scaled"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="col-lg-6 lp-title">
            <h2 className="mb-4">
              <strong>Lengkap dengan Kelas Online</strong>
            </h2>
            <p className="mb-4">
              Creative Hustle tidak hanya membuat kursus tetapi <br /> juga menghadirkan Kelas
              Online bersama para <br /> mentor untuk memberikan pengalaman penyajian <br />{' '}
              langsung untuk para Huslter.
            </p>
            <button className="to-learn-path">
              <Link to="/kelas" className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span className="et_pb_button_2">Ikuti Kelas Online</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="row lp-2-row lp-title-left">
          <div
            className="col-lg-6"
            style={{
              marginBottom: 30,
            }}
          >
            <h2 className="mb-4">
              <strong>Dengan kemudahan Belajar</strong>
            </h2>
            <p className="mb-4">
              Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle. Hanya
              perlu melalui 5 proses untuk dapat langsung mulai belajar bersama instruktur
              berpengalaman.
            </p>
            <button className="to-learn-path">
              <Link to={`/journey`} className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span className="et_pb_button_2">Lihat Cara Belajar</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
          <div
            className="col-lg-6"
            style={{
              padding: '0 60px',
              marginBottom: 30,
            }}
          >
            <img
              src="/assets/img/Wait-for-it-2.jpg"
              alt="Wait-for-it-2"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPath;
