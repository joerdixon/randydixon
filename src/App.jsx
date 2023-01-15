import React from "react";
import './style.css';
// Component Imports
import Nav from './components/Navigation/Nav.jsx'
import Hero from './components/Section/Hero.jsx'
import About from './components/Section/About.jsx'
import Classes from './components/Section/Classes.jsx'
import Shows from './components/Section/Shows.jsx'
import Contact from './components/Section/Contact.jsx'

export default () => (
  <>    
    <Nav />
    <Hero />
    <About />
    <Classes />
    <Shows />
    <Contact />
  </>
);
