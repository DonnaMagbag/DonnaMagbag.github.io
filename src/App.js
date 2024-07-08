import './styles/styles1.css';

import { Redirect, Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom';

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
      <main>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/index.html" render={(props) => {
              const path = new URLSearchParams(props.location.search).get('path');
              return <Redirect to={path || '/'} />;
            }} />
            <Route component={Home} />
          </Switch>
        </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
