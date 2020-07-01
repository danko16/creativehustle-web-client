import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ResponseMessage from '../../shared/responseMessage';
import { authActions } from '../../redux/reducers/auth';
import './settings.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  message: state.auth.message,
  is_error: state.auth.is_error,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      clearMsg: authActions.clearError,
      reqUpdatePassword: authActions.reqUpdatePassword,
    },
    dispatch
  );

function Settings({ user, loading, reqUpdatePassword, message, is_error, clearMsg }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });
  const [error, setError] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    return () => {
      if (message) {
        clearMsg();
      }
    };
  }, [clearMsg, message]);

  useEffect(() => {
    if (!loading && message) {
      setNotification({ text: message, isError: is_error });
    }
  }, [user, message, is_error, loading]);

  function passwordValidation(name, value) {
    const passwordFormat = /^(?=.*[0-9])(?=.{8,})/;
    if (value.length < 8) {
      setError((prevState) => ({
        ...prevState,
        [name]: 'Panjang password minimal 8 karakter',
      }));
      return false;
    }

    if (!value.match(passwordFormat)) {
      setError((prevState) => ({
        ...prevState,
        [name]: 'Password harus berisi minimal 1 angka',
      }));
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    let isValid = true;
    isValid = passwordValidation('oldPassword', oldPassword);
    isValid = passwordValidation('newPassword', newPassword);
    isValid = passwordValidation('confirmPassword', confirmPassword);

    if (newPassword !== confirmPassword) {
      isValid = false;
      setError((prevState) => ({
        ...prevState,
        confirmPassword: 'Confirm Password tidak cocok',
      }));
    }

    if (isValid) {
      reqUpdatePassword({
        old_password: oldPassword,
        new_password: newPassword,
      });
    }
  };
  return (
    <div className="dashboard-main profile">
      <div className="settings-container">
        {notification.text && (
          <ResponseMessage
            notification={notification}
            onDismiss={() => {
              setNotification({ text: '', isError: false });
              clearMsg();
            }}
          />
        )}
      </div>
      <div className="settings-container card-no-shadow">
        <div className="text-center">
          <h4 className="card-title">Ganti Password</h4>
          <p className="m-0">Jagalah informasi akun sebaik mungkin</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="oldPassword">Password Lama</label>
            <input
              type={showPassword.oldPassword ? 'text' : 'password'}
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
              className={error.oldPassword ? 'form-control is-invalid' : 'form-control'}
              id="oldPassword"
              placeholder="Masukan Password Lama"
            />
            <i
              onClick={() => {
                setShowPassword((prev) => ({
                  ...prev,
                  oldPassword: !prev.oldPassword,
                }));
              }}
              className={`fa fa-eye${showPassword.oldPassword ? '' : '-slash'}`}
              aria-hidden="true"
            ></i>
            <span id="oldPassword-error" className="error invalid-feedback">
              {error.oldPassword}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Password Baru</label>
            <input
              type={showPassword.newPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              name="newPassword"
              className={error.newPassword ? 'form-control is-invalid' : 'form-control'}
              id="newPassword"
              placeholder="Masukan Password Baru"
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
            <span id="newPassword-error" className="error invalid-feedback">
              {error.newPassword}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showPassword.confirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              className={error.confirmPassword ? 'form-control is-invalid' : 'form-control'}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password Baru"
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
            <span id="confirmPassword-error" className="error invalid-feedback">
              {error.confirmPassword}
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

Settings.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  is_error: PropTypes.bool,
  clearMsg: PropTypes.func,
  reqUpdatePassword: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(Settings);
