import React from 'react';

import { Header } from './components/pageSubdivisions/header/Header.jsx';
import { Nav } from './components/pageSubdivisions/nav/Nav.jsx';
import { About } from './components/about/About.jsx';
import { Experiences } from './components/experiences/Experiences.jsx';
import { Projects } from './components/projects/Projects.jsx';
import { Education } from './components/education/Education.jsx';
import { Testimonials } from './components/testimonials/Testimonials.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Footer } from './components/pageSubdivisions/footer/Footer.jsx';


export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Projects />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
