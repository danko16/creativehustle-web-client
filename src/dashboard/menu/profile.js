import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import InputImage from '../../shared/inputImage';
import ResponseMessage from '../../shared/responseMessage';
import { authActions } from '../../redux/reducers/auth';
import './profile.css';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  message: state.auth.message,
  is_error: state.auth.is_error,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqUpdateProfile: authActions.reqUpdateProfile,
      clearMsg: authActions.clearError,
    },
    dispatch
  );

function Profile({ user, message, is_error, clearMsg, loading, reqUpdateProfile }) {
  const [file, setFile] = useState(null);
  const [notification, setNotification] = useState({
    text: '',
    isError: false,
  });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState({
    name: '',
    phone: '',
    image: '',
  });

  useEffect(() => {
    return () => {
      if (message) {
        clearMsg();
      }
    };
  }, [clearMsg, message]);

  useEffect(() => {
    if (!loading && user) {
      setImage(user.avatar);
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone ? user.phone : '');
    }

    if (!loading && message) {
      setNotification({ text: message, isError: is_error });
    }
  }, [user, message, is_error, loading]);

  function handleImageChange(e) {
    setError((state) => ({ ...state, image: '' }));
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.split('/')[1];
      var isValid = /(jpe?g|png)/i.test(type);

      if (!isValid) {
        setError((state) => ({ ...state, image: 'Image tidak valid' }));
        return;
      }
      setFile(e.target.files[0]);
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    let isValid = true;
    setError({
      name: '',
      phone: '',
      file: '',
    });
    //eslint-disable-next-line
    var phoneno = /^[+0-9][-\./0-9]{6,15}$/;
    if (!name) {
      isValid = false;
      setError((state) => ({ ...state, name: 'Tolong masukan nama' }));
    }

    if (!phoneno.test(phone.replace(/\s/g, ''))) {
      isValid = false;
      setError((state) => ({
        ...state,
        phone: 'nomer telepone tidak valid',
      }));
    }

    if (isValid && (name !== user.name || phone !== user.phone || file)) {
      reqUpdateProfile({
        name,
        phone,
        type: 'student',
        file,
      });
    }
  }

  return (
    <div className="dashboard-main profile">
      <div className="profile-container">
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
      <div className="profile-container card-no-shadow">
        <div className="text-center">
          <h4 className="card-title">Edit Profile</h4>
          <p className="m-0">Informasi valid adalah kunci keberhasilan</p>
        </div>
        <InputImage onChange={handleImageChange} image={image} style={{ paddingTop: 40 }} />
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="avatarImage">Input Image</label>
            <div className="input-group is-invalid">
              <div className={error.image ? 'custom-file is-invalid' : 'custom-file'}>
                <input
                  type="file"
                  className={error.image ? 'custom-file-input is-invalid' : 'custom-file-input'}
                  onChange={handleImageChange}
                  id="avatarImage"
                  onClick={() => {
                    setError((state) => ({ ...state, image: '' }));
                  }}
                />
                <label className="custom-file-label" htmlFor="avatarImage">
                  {file ? file.name : 'Choose file'}
                </label>
              </div>
            </div>

            <span id="avatarImage-error" className="error invalid-feedback">
              {error.image}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control "
              id="inputEmail"
              aria-describedby="emailHelp"
              value={email}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputName">Nama</label>
            <input
              name="inputName"
              onClick={() => {
                setError((state) => ({ ...state, name: '' }));
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              className={error.name ? 'form-control is-invalid' : 'form-control'}
              id="inputName"
              placeholder="Masukan Nama"
            />
            <span id="inputName-error" className="error invalid-feedback">
              {error.name}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone">Nomor Telepon</label>
            <input
              type="tel"
              className={error.phone ? 'form-control is-invalid' : 'form-control'}
              id="inputPhone"
              name="phone"
              value={phone}
              onClick={() => {
                setError((state) => ({ ...state, phone: '' }));
              }}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Masukan Nomor Telepon"
            />
            <span id="inputPhone-error" className="error invalid-feedback">
              {error.phone}
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

Profile.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  is_error: PropTypes.bool,
  clearMsg: PropTypes.func,
  reqUpdateProfile: PropTypes.func,
};

export default connect(mapStateToProps, mapActionToProps)(Profile);
