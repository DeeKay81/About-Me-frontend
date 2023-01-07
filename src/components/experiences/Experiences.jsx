import React from 'react';

import './Experiences.css';

import { AiFillCheckCircle } from 'react-icons/ai';

const Experiences = () => {
  return (
    <section id='experience'>
      <h5>These are my</h5>
      <h2>experiences</h2>

      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            
            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-black-light'>advanced beginner</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-black-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-black-light'>advanced beginner</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Three.js</h4>
                <small className='text-black-light'>beginner</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-black-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>some Frameworks</h4>
                <small className='text-black-light'>advanced beginner</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            
            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-black-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>SQL (PostgreSQL, MySQL)</h4>
                <small className='text-black-light'>advanced beginner</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-black-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Spring Boot & Security</h4>
                <small className='text-black-light'>beginner</small>
              </div>
            </article>

            <article className='experience__details '>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Rest Api</h4>
                <small className='text-black-light'>advanced beginner</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experiences