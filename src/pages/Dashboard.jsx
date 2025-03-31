import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>New Note...</h2>
        <textarea placeholder="Start typing your note..." style={{ width: '100%', height: '80vh' }} />
      </div>
    </div>
  );
}

export default Dashboard;