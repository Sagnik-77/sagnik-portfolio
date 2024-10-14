import React from 'react';
import './App.css';
import Home from './Home';
import Skills from './Skills'
import Projects from './Projects';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div id="home"><Home /></div>
      <Skills />
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <div id="contact"><Footer /></div>
    </div>
  );
}

export default App;