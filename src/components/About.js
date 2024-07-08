import '../styles/styles1.css';

import React from 'react';
import profileImage from '../assets/temporary-profile-pic.jpg';

const About = () => {
    return (
      <div className="about">
        <div className="about-container">
          <div className="about-image">
            <img src={profileImage} alt="Donna Magbag" /> 
          </div>
          <div className="about-content">
          <h1>About Me</h1>
        <p>Hi, I'm Donna Magbag, a passionate full-stack software developer with a diverse background in chemical engineering, 
        massage therapy, and software development. My journey through these fields has equipped me with a unique blend of problem-solving 
        skills and a commitment to creating impactful software solutions.</p>

        <h2>Software Development Background</h2>
        <p>I completed a Java software development boot camp last year, gaining proficiency in various technologies and contributing to several projects. 
        My portfolio includes web applications like <a href="/projects">Apothecary’s Garden</a>, 
        <a href="/projects"> Mystery Educator</a>, and <a href="/projects">Island Hopping Adventures</a>, 
        showcasing my ability to tackle complex problems and deliver effective solutions.</p>

        <h2>Skills</h2>
        <ul>
          <li>Languages & Frameworks: Java, JavaScript, HTML, CSS, SQL, React, Node.js, Express, Spring Framework</li>
          <li>Development Practices: Agile (Scrum), Test-Driven Development, REST APIs</li>
          <li>Design & Tools: Web/Mobile Responsive Design, Git</li>
        </ul>

        <h2>What I Offer</h2>
        <p>While I enjoy all aspects of software development, I have a particular affinity for back-end development. 
        My engineering background has honed my analytical and problem-solving abilities, making me adept at tackling 
        challenging issues efficiently.</p>
        <p>As a massage therapist with a keen interest in health and wellness, I bring a unique perspective to projects 
        in this domain but am equally excited about exploring other fields. I represent women in technology and am passionate 
        about encouraging more women to enter the tech industry.</p>

        <h2>Personal Interests</h2>
        <p>When I'm not coding, you can find me practicing yoga or diving into new learning opportunities. I am a continual learner,
        always seeking to expand my knowledge and skills.</p>

        <h2>Freelance Opportunities</h2>
        <p>I am currently available for freelance projects while waiting for full-time opportunities. Let's connect and see 
        how we can collaborate to create something amazing. Feel free to <a href="/contact"> reach out </a> 
        if you have any questions or if you'd like to discuss potential projects.</p>
          </div>
        </div>
      </div>
    );
  };

export default About;
