import React from 'react';

import './Education.css';

import { BiCheck } from 'react-icons/bi';


const data = [
  {
    id: 1,
    title: 'School',
    listing1: 'Elementary and High School',
    listing2: 'Professional School for IT'
  },

  {
    id: 2,
    title: '1st & last job',
    listing1: 'IT Technician',
    listing2: 'Sales Manager'
  },

  {
    id: 3,
    title: 'Study',
    listing1: 'Information Technology',
    listing2: 'Full Stack Developer Studies'
  },
]

export const Education = () => {

  return (
    <section id='education'>
      <h5>Short summary of relevant</h5>
      <h2>education</h2>

      <div className='container education__container'>
        {
          data.map((
            {
              id, title, listing1, listing2, listing3, listing4, listing5, listing6, listing7
            }
          ) => {
            return (
              <article key={id} className='education'>
                <div className="education__head">
                  <h3>{title}</h3>
                </div>

                <ul className='education__list'>
                  <li>
                    <BiCheck className='education__list-icon' />
                    <p>{listing1}</p>
                  </li>
                  <li>
                    <BiCheck className='education__list-icon' />
                    <p>{listing2}</p>
                  </li>
                </ul>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}
