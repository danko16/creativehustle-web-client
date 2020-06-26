import React from 'react';
import './profile.css';
function Settings() {
  return (
    <div className="dashboard-main profile">
      <div className="profile-container card-no-shadow">
        <div className="text-center">
          <h4 className="card-title">Ganti Password</h4>
          <p className="m-0">Jagalah informasi akun sebaik mungkin</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="oldPassword">Password Lama</label>
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              placeholder="Masukan Password Lama"
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Password Baru</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Masukan Password Baru"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password Baru"
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

export default Settings;
