import '../styles/styles1.css';

import React, { useState } from 'react';

import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    const serviceID = 'service_n30y6fp';
    const templateID = 'template_mvaqcv9';
    const userID = '1PF_E_gXpqSy7lwQx';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const userConfirmed = window.confirm('Do you want to open your default email application?');
    if (userConfirmed) {
      window.location.href = 'mailto:donna.magbag@gmail.com'; 
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>You can contact me via email at <a href="mailto:donna.magbag@gmail.com" onClick={handleEmailClick}>donna.magbag@gmail.com</a> or by filling out the form below:</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="cta-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
