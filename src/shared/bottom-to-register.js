import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isAuthenticated } from '../utils/auth';
import PropTypes from 'prop-types';
import { headerActions } from '../redux/reducers/header';

import './bottom-to-register.css';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      showModal: headerActions.showModal,
    },
    dispatch
  );

function BottomToRegister({ showModal }) {
  useEffect(() => {
    return () => {
      showModal({
        show: false,
        type: null,
      });
    };
  }, [showModal]);

  return (
    <div className="bottom_reg">
      <div className="container">
        <div className="text-center py-4 fs-18">
          <h2>Ayo segera daftar dan mulai belajar cara menghasilkan uang dengan cara kreatif</h2>
          <p>Tidak perlu download / kartu kredit. Cukup daftar langsung belajar.</p>
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
  );
}

BottomToRegister.propTypes = {
  showModal: PropTypes.func,
};

export default connect(null, mapActionToProps)(BottomToRegister);
