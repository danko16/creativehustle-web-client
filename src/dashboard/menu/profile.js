import React from 'react';
import './profile.css';
function Profile() {
  return (
    <div className="dashboard-main profile">
      <div className="profile-container card-no-shadow">
        <div className="text-center">
          <h4 className="card-title">Edit Profile</h4>
          <p className="m-0">Informasi valid adalah kunci keberhasilan</p>
        </div>
        <img src="/assets/img/default-avatar.png" alt="default"></img>
        <form>
          <div className="form-group">
            <label htmlFor="inputFile">Foto Profil</label>
            <input type="file" className="form-control-file" id="inputFile" />
          </div>
          <div className="form-group">
            <label htmlFor="inputName">Nama</label>
            <input type="text" className="form-control" id="inputName" placeholder="Masukan Nama" />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Masukan Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone">Nomor Telepon</label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              name="phone"
              placeholder="Masukan Nomor Telepon"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
