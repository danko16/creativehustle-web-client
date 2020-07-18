import React, { useState } from 'react';
import ClassNames from 'classnames';

/* eslint-disable */
function Confirmations() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <div className="container konfirmasi py-5">
      <div className="form-group row">
        <label
          className="col-sm-4 col-xs-12"
          htmlFor="name"
          style={{
            marginTop: 4,
            textAlign: 'right',
          }}
        >
          Nama{' '}
        </label>
        <div className="col-sm-5 col-xs-12">
          <input
            onInputCapture={() => {
              setError((prevState) => ({
                ...prevState,
                email: '',
              }));
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="name"
            name="name"
            autoComplete="name"
            className={ClassNames('form-control', { 'error-form': error.name })}
          />
          <small
            className={ClassNames('error-text form-text d-none', {
              'd-block': error.name,
            })}
          >
            {error.name}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Confirmations;
