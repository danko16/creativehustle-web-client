import React from 'react';
import Header from '../shared/header';
import Sidebar from './sidebar';
import Main from './main';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default Dashboard;
