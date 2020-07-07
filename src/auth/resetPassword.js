import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import QS from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResponseMessage from '../shared/responseMessage';
import { authActions } from '../redux/reducers/auth';
import './resetPassword.css';

const mapStateToProps = (state) => ({
  message: state.auth.message,
  loading: state.auth.loading,
  is_error: state.auth.is_error,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqResetPassword: authActions.reqResetPassword,
      clearMsg: authActions.clearError,
    },
    dispatch
  );

function ResetPassword({ history, message, loading, is_error, clearMsg, reqResetPassword }) {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [type, setType] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const query = history.location.search;
    const parseQuery = QS.parse(query);
    if (!query || !parseQuery.token || !parseQuery.email || !parseQuery.type) {
      history.push('/');
    } else {
      setEmail(parseQuery.email);
      setToken(parseQuery.token);
      setType(parseQuery.type);
    }
  }, [history]);

  useEffect(() => {
    if (!loading && message.length) {
      setNotification({
        text: message,
        isError: is_error,
      });

      clearMsg();
    }
  }, [message, loading, clearMsg, is_error]);

  function passwordValidation(name, value) {
    const passwordFormat = /^(?=.*[0-9])(?=.{8,})/;
    if (value.length < 8) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Panjang password minimal 8 karakter',
      }));
      return false;
    }

    if (!value.match(passwordFormat)) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Password harus berisi minimal 1 angka',
      }));
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      newPassword: '',
      confirmPassword: '',
    });
    let isValid = true;
    isValid = passwordValidation('newPassword', newPassword);
    isValid = passwordValidation('confirmPassword', confirmPassword);

    if (newPassword !== confirmPassword) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: 'Confirm Password tidak cocok',
      }));
    }

    if (isValid) {
      reqResetPassword({
        email,
        new_password: newPassword,
        token,
        type,
      });
    }
  };

  return (
    <div className="container rp-container">
      {notification.text && (
        <ResponseMessage
          notification={notification}
          onDismiss={() => {
            setNotification({ text: '', isError: false });
            clearMsg();
          }}
        />
      )}
      <div className="rp-wrapper">
        <h3 className="h3 font-weight-bold pt-1">Reset Password</h3>
        <p>Masukan password baru anda</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input type="email" className="form-control" id="inputEmail" value={email} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Password Baru</label>
            <input
              type={showPassword.newPassword ? 'text' : 'password'}
              name="newPassword"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              value={newPassword}
              placeholder="Masukan Password Baru"
              className={errors.newPassword ? 'form-control is-invalid' : 'form-control'}
            />
            <i
              onClick={() => {
                setShowPassword((prev) => ({
                  ...prev,
                  newPassword: !prev.newPassword,
                }));
              }}
              className={`fa fa-eye${showPassword.newPassword ? '' : '-slash'}`}
            ></i>
            <div className="invalid-feedback">{errors.newPassword}</div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showPassword.confirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              placeholder="Confirm Password"
              className={errors.confirmPassword ? 'form-control is-invalid' : 'form-control'}
            />
            <i
              onClick={() => {
                setShowPassword((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }));
              }}
              className={`fa fa-eye${showPassword.confirmPassword ? '' : '-slash'}`}
            ></i>
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          </div>
          <button
            className="btn btn-info"
            type="submit"
            style={{
              float: 'right',
              marginTop: 15,
            }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

ResetPassword.propTypes = {
  reqResetPassword: PropTypes.func,
  history: PropTypes.object,
  message: PropTypes.string,
  loading: PropTypes.bool,
  is_error: PropTypes.bool,
  clearMsg: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(withRouter(ResetPassword));
