import '../styles/styles1.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">DM</a> {/* Logo text linking to the home page */}
      </div>
      <nav className="nav">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
