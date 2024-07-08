import './styles/styles1.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import React from 'react';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
