import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../utils/auth';
import { headerActions } from '../redux/reducers/header';

import Header from '../shared/header';
import Footer from '../shared/footer';
import JourneyPath from './journey-path';
import JourneyDetail from './journey-detail';
import DifClassCourse from './dif-class-course';
import HintDropdown from './hint-dropdown';
import './journey.css';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      showModal: headerActions.showModal,
    },
    dispatch
  );

function Journey({ showModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      showModal({
        show: false,
        type: null,
      });
    };
  }, [showModal]);

  return (
    <div className="journey">
      <Header />
      <div
        className="py-4 mb-5"
        style={{
          backgroundImage: 'url(/assets/img/Group-5204.png)',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
          backgroundPositionY: '40px',
        }}
      >
        <div className="text-center p-4">
          <h1 style={{ fontSize: 34 }}>
            <strong>5 Langkah Mulai Belajar di Creative Hustle</strong>
          </h1>
          <p className="fs-18">
            Kami membuat cara paling mudah untuk teman-teman belajar di Creative Hustle
          </p>
        </div>
        <div className="container">
          <img
            src="/assets/img/How-it-work-1280x255.png"
            alt="growmodo-how-it-works-02"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>

      <JourneyPath />
      <JourneyDetail />
      <DifClassCourse />
      <HintDropdown />
      <div
        style={{
          backgroundImage: 'url(/assets/img/cta-bg.png)',
          padding: '54px 0',
        }}
      >
        <div className="container fs-18">
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
            <button
              className="et_pb_button"
              onClick={() => {
                if (!isAuthenticated()) {
                  showModal({
                    show: true,
                    type: 'register',
                  });
                }
              }}
            >
              <span
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Daftar Akun
              </span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Journey.propTypes = {
  showModal: PropTypes.func,
};

export default connect(null, mapActionToProps)(Journey);
