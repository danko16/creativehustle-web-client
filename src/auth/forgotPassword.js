import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResponseMessage from '../shared/responseMessage';
import { authActions } from '../redux/reducers/auth';
import './forgotPassword.css';

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  message: state.auth.message,
  is_error: state.auth.is_error,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      clearMsg: authActions.clearError,
      reqForgotPassword: authActions.reqForgotPassword,
    },
    dispatch
  );

function ForgotPassword({ reqForgotPassword, message, loading, is_error, clearMsg }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });
  useEffect(() => {
    if (!loading && message.length) {
      setNotification({
        text: message,
        isError: is_error,
      });

      clearMsg();
    }
  }, [message, loading, clearMsg, is_error]);

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    setError('');

    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailFormat.test(email)) {
      isValid = false;
      setError('Alamat email tidak valid');
    }

    if (isValid) {
      reqForgotPassword({
        email,
        type: 'student',
      });
    }
  }

  return (
    <div className="container fp-container">
      {notification.text && (
        <ResponseMessage
          notification={notification}
          onDismiss={() => {
            setNotification({ text: '', isError: false });
            clearMsg();
          }}
        />
      )}
      <div className="fp-wrapper">
        <h3 className="h3 font-weight-bold pt-1">Lupa Password</h3>
        <p>Masukan email untuk reset password</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="inputEmail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onInputCapture={() => {
                setError('');
              }}
              value={email}
              placeholder="Email Address"
              className={error ? 'form-control is-invalid' : 'form-control'}
            />
            <div className="invalid-feedback">{error}</div>
          </div>
          <button
            className="btn btn-info"
            type="submit"
            onClick={(e) => {
              e.target.blur();
            }}
          >
            Kirim Email
          </button>
        </form>
      </div>
    </div>
  );
}

ForgotPassword.propTypes = {
  message: PropTypes.string,
  loading: PropTypes.bool,
  is_error: PropTypes.bool,
  clearMsg: PropTypes.func,
  reqForgotPassword: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(ForgotPassword);
