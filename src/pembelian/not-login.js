import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { headerActions } from '../redux/reducers/header';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      showModal: headerActions.showModal,
    },
    dispatch
  );

function NotLogin({ showModal, type }) {
  useEffect(() => {
    return () => {
      showModal({
        show: false,
        type: null,
      });
    };
  }, [showModal]);
  function renderInfo() {
    if (type === 'bayar') {
      return (
        <p>
          silahkan login/register untuk melihat invoice terakhir anda <br /> dan melakukan
          pembayaran
        </p>
      );
    } else if (type === 'konfirmasi') {
      return <p>silahkan login/register untuk melakukan konfirmasi</p>;
    }
  }
  return (
    <div className="not-login pb-5">
      <h2>Anda belum login</h2>
      {renderInfo()}
      <div className="auth-wrapper">
        <div
          className="auth-invoice"
          onClick={() => {
            showModal({
              show: true,
              type: 'login',
            });
          }}
        >
          Login
        </div>
        <div
          className="auth-invoice"
          onClick={() => {
            showModal({
              show: true,
              type: 'register',
            });
          }}
          style={{
            backgroundColor: '#6582ff',
            marginLeft: '2rem',
          }}
        >
          Register
        </div>
      </div>
    </div>
  );
}

NotLogin.propTypes = {
  showModal: PropTypes.func,
  type: PropTypes.string,
};

export default connect(null, mapActionToProps)(NotLogin);
