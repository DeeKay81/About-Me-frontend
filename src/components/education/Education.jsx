import React from 'react';

import './Education.css';

import { BiCheck } from 'react-icons/bi';


const data = [
  {
    id: 1,
    title: 'School',
    listing: 'Lorem ipsum dolor sit amet consectetur.'
  },

  {
    id: 2,
    title: '1st & last job',
    listing: 'Lorem ipsum dolor sit amet consectetur.'
  },

  {
    id: 3,
    title: 'Study',
    listing: 'Lorem ipsum dolor sit amet consectetur.'
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
              id, title, listing
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
                    <p>{listing}</p>
                  </li>
                  <li>
                    <BiCheck className='education__list-icon' />
                    <p>{listing}</p>
                  </li>
                  <li>
                    <BiCheck className='education__list-icon' />
                    <p>{listing}</p>
                  </li>
                  <li>
                    <BiCheck className='education__list-icon' />
                    <p>{listing}</p>
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
