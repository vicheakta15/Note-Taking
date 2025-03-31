import React from 'react';

function Sidebar() {
  return (
    <div style={{ width: '250px', borderRight: '1px solid #ccc', padding: '10px', height: '100vh' }}>
      <h3>All Notes</h3>
      <input type="text" placeholder="Search all notes" style={{ width: '100%', padding: '5px', marginBottom: '10px' }} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: '5px 0' }}>New Note...</li>
      </ul>
    </div>
  );
}

export default Sidebar;