import '../styles/styles1.css';

import React from 'react';

// import ThemeToggle from './ThemeToggle';

const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <h1>Donna Magbag</h1>
        <p>full-stack software developer</p>
       {/* <div className="social-icons">
            <a href="https://github.com/DonnaMagbag" className="github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            </a>
                
            <a href="https://www.linkedin.com/in/donna-magbag/" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            </a>
        </div>
        */}
      {/*  <button className="cta-button" onClick={() => window.location.href='/contact'}>CONTACT ME</button> */}
       {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default Home;
