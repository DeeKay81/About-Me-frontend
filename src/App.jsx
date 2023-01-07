import React from 'react';

import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Education from './components/education/Education.jsx';
import Experience from './components/experience/Experience.jsx';
import Footer from './components/pageSubdivisions/footer/Footer.jsx';
import Header from './components/pageSubdivisions/header/Header.jsx';
import Nav from './components/pageSubdivisions/nav/Nav.jsx';
import Projects from './components/projects/Projects.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
