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
              <strong>Lengkap dengan Webinar</strong>
            </h2>
            <p className="mb-4">
              Creative Hustle tidak hanya membuat kursus <br className="lg" /> tetapi juga
              menghadirkan Webinar bersama <br className="lg" /> para mentor untuk memberikan
              pengalaman <br className="lg" /> penyajian langsung untuk para Huslter.
            </p>
            <button className="to-learn-path">
              <Link to="/webinar" className="stretched-link">
                <span className="sr-only">title for screen</span>
              </Link>
              <span className="et_pb_button_2">Ikuti Webinar</span>
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
              Kami membuat cara paling mudah untuk teman-teman <br className="xl" />
              belajar di Creative Hustle. Hanya perlu melalui 5 proses <br className="xl" /> untuk
              dapat langsung mulai belajar bersama instruktur berpengalaman.
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
