import React from 'react';

import { FaAward } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { AiFillFolderOpen } from 'react-icons/ai';

import AboutMePic from '../../assets/devRock.jpg';

import './About.css';

const About = () => {
  return (
    <section id='about'>
      <h5>What you should know</h5>
      <h2>about me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMePic} alt='about_me_pic'></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>

            <article className='about__card'>
              <FaReact className='about__icon' />
              <h5>Frontend</h5>
              <small>60%</small>
            </article>

            <article className='about__card'>
              <SiSpringboot className='about__icon' />
              <h5>Backend</h5>
              <small>40%</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>100+</small>
            </article>

          </div>

          <p>
          Junior full stack developer with 1+ years experience. Aspire to achieve high proficiency in Python, SQL (PostgreSQL, MySQL), HTML, CSS, JavaScript, Java, Three.js, React.js and Spring Boot in a full-time career as a full-stack developer.
          </p>

          <a href='#contact' className='btn btn-primary'>Message me</a>
            
        </div>

      </div>

    </section>
  )
}

export default About