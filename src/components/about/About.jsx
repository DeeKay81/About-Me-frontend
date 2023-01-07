import React from 'react';

import { FaAward } from 'react-icons/fa';
import { SiSkillshare } from 'react-icons/si';
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
              <SiSkillshare className='about__icon' />
              <h5>Frontend : Backend</h5>
              <small>60:40</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>100+</small>
            </article>

          </div>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Perferendis explicabo in praesentium nam aut delectus hic. 
              Distinctio debitis provident, iusto saepe voluptatibus ut, 
              autem tempore magnam voluptates illo aut unde?
            </p>

            <a href='#contact' className='btn btn-primary'>Message me</a>
            
        </div>

      </div>

    </section>
  )
}

export default About