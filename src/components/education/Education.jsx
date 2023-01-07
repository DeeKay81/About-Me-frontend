import React from 'react';

import './Education.css';

import { BiCheck } from 'react-icons/bi';

const Education = () => {
  return (
    <section id='education'>
      <h5>Short summary of relevant</h5>
      <h2>education</h2>

      <div className='container education__container'>
        
        <article className='education'>
          <div className="education__head">
            <h3>School</h3>
          </div>

          <ul className='education__list'>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className='education'>
          <div className="education__head">
            <h3>1st & last job</h3>
          </div>

          <ul className='education__list'>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className='education'>
          <div className="education__head">
            <h3>Study</h3>
          </div>

          <ul className='education__list'>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='education__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

      </div>

    </section>
  )
}

export default Education