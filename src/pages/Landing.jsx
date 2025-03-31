import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Landing.css';

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="landing-content">
        <h1>The easiest way to take notes</h1>
        <button>Sign Up Now</button>
      </div>
    </div>
  );
}

export default Landing;