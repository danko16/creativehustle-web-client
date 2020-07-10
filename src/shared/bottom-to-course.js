import React from 'react';
import { Link } from 'react-router-dom';

function BottomToCourse() {
  return (
    <div
      style={{
        backgroundImage: 'url(/assets/img/cta-bg.png)',
        padding: '54px 0',
      }}
    >
      <div className="container">
        <div
          className="text-center py-4"
          style={{
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#fff',
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: 34,
              color: '#fff',
            }}
          >
            Ayo segera daftar dan mulai belajar cara menghasilkan uang dengan cara kreatif
          </h2>
          <p
            style={{
              marginBottom: 28,
            }}
          >
            Tidak perlu download / kartu kredit. Cukup daftar langsung belajar.
          </p>
          <button className="et_pb_button">
            <Link to={`/kursus`} className="stretched-link">
              <span className="sr-only">title for screen</span>
            </Link>
            <span>Lihat Kursus</span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomToCourse;
