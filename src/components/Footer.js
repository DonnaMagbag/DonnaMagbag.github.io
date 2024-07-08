import '../styles/styles1.css';

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Donna Magbag. All rights reserved.</p>
      <div className="social-icons">
            <a href="https://github.com/DonnaMagbag" className="github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            </a>
                
            <a href="https://www.linkedin.com/in/donna-magbag/" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            </a>
        </div>
    </footer>
  );
};

export default Footer;
