import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">FitnessConnect</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/log">Workout Log</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;