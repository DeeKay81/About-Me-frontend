import React from 'react';

import './Education.css';

import { BiCheck } from 'react-icons/bi';


const data = [
  {
    title: 'School',
    listing: 'Lorem ipsum dolor sit amet consectetur.'
  },

  {
    title: '1st & last job',
    listing: 'Lorem ipsum dolor sit amet consectetur.'
  },

  {
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
              title, listing
            }
          ) => {
            return (
              <article className='education'>
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
