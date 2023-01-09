import React from 'react';

import './Experiences.css';

import { AiFillCheckCircle } from 'react-icons/ai';


const frontendData = [
  {
    id: 1,
    skill: 'HTLM',
    experiencelvl: 'advanced beginner'
  },

  {
    id: 2,
    skill: 'CSS',
    experiencelvl: 'advanced beginner'
  },

  {
    id: 3,
    skill: 'JavaScript',
    experiencelvl: 'advanced beginner'
  },

  {
    id: 4,
    skill: 'Three.js',
    experiencelvl: 'beginner'
  },

  {
    id: 5,
    skill: 'React.js',
    experiencelvl: 'advanced beginner'
  },

  {
    id: 6,
    skill: 'some Frameworks',
    experiencelvl: 'advanced beginner'
  }
]

const backendData = [
  {
    id: 1,
    skill: 'Python',
    experiencelvl: 'advanced beginner'
  },

  {
    id: 2,
    skill: 'SQL (PostgreSQL, MySQL)',
    experiencelvl: 'advanced beginner'
  },

  {
    id: 3,
    skill: 'Java',
    experiencelvl: 'advanced beginner'
  },

  {
    id: 4,
    skill: 'Spring Boot & Security',
    experiencelvl: 'beginner'
  },

  {
    id: 5,
    skill: 'REST API',
    experiencelvl: 'advanced beginner'
  }
]

export const Experiences = () => {

  return (
    <section id='experience'>
      <h5>These are my</h5>
      <h2>experiences</h2>
      
      <div className="container experience__container">
        
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontendData.map((
                {
                  id, skill, experiencelvl
                }
              ) => {
                return (
                  <article key={id} className='experience__details '>
                  <AiFillCheckCircle className='experience__details-icon' />
                  <div>
                    <h4>{skill}</h4>
                    <small className='text-black-light'>{experiencelvl}</small>
                  </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            {
              backendData.map((
                {
                  id, skill, experiencelvl
                }
              ) => {
                return (
                  <article key={id} className='experience__details '>
                  <AiFillCheckCircle className='experience__details-icon' />
                  <div>
                    <h4>{skill}</h4>
                    <small className='text-black-light'>{experiencelvl}</small>
                  </div>
                  </article>
                )
              })
            }
          </div>
        </div>

      </div>
    </section>
  )
}
