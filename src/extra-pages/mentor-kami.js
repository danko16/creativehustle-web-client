import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BottomToCw from '../shared/bottom-to-cw';
import './mentor-kami.css';

const mapStateToProps = (state) => ({
  mentors: state.mentor.mentors,
});

function MentorKami({ mentors }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function renderMentors() {
    return mentors.map((val) => {
      return (
        <div key={val.id} className="col-md-6 col-lg-4 col-xl-3 mentor-wrapper">
          <img
            src={
              val.teacher_assets.length ? val.teacher_assets[0].url : '/assets/img/default-img.svg'
            }
            alt="mentor profile"
            style={{
              width: 225,
              height: 225,
            }}
          />
          <h4 className="mentor-name">{val.full_name}</h4>
          <p className="mentor-job">{val.job}</p>
        </div>
      );
    });
  }
  return (
    <div className="mentor-kami fs-18">
      <div className="container">
        <div className="head">
          <p>
            <strong>SELAMAT DATANG DI CREATIVE HUSTLE</strong>
          </p>
          <h1>
            <strong>Kenalan dengan Mentor-mentor Keren !</strong>
          </h1>
          <p>
            Mentor di Creative Hustle memiliki pengalaman terbaik dibidangnya dan siap berbagi
            ilmunya untuk teman-teman melalui kursus atau kelas online.
          </p>
        </div>
        <div className="mentor">
          <div className="row">{renderMentors()}</div>
        </div>
      </div>
      <BottomToCw backgroundImage="url(/assets/img/affiliate-cta-bg.jpg)" />
    </div>
  );
}

MentorKami.propTypes = {
  mentors: PropTypes.array,
};

export default connect(mapStateToProps)(MentorKami);
