import React from "react";
import './output.css';
// Component Imports
import Nav from './components/Nav/Nav.jsx'
import Hero from './components/Section/Hero/Hero.jsx'
import About from './components/Section/About/About.jsx'
import Classes from './components/Section/Classes/Classes.jsx'
import Shows from './components/Section/Shows/Shows.jsx'
import Contact from './components/Section/Contact/Contact.jsx'

// GH TEST

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
