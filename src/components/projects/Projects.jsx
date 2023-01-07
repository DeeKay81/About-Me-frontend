import React from 'react';

import './Projects.css';

/* import 4-6 project pics here from assets */
import image1 from '../../assets/project1-img.jpg'; /* just an example */

const data = [
  {
    id: 1,
    image: image1, // change image
    title: 'Project 1 name', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 2,
    image: image1, // change image
    title: 'Project 2 name', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 3,
    image: image1, // change image
    title: 'Project 3 name', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 4,
    image: image1, // change image
    title: 'Project 4 name', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 5,
    image: image1, // change image
    title: 'Project 5 name', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 6,
    image: image1, // change image
    title: 'Project 6 name', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Dive into some of my</h5>
      <h2>projects</h2>

      <div className="container projects__container">
        
        {
          data.map((
            {
              id, image, title, github //, demo
            }
          ) => {
            return (

              <article key={id} className='projects__item'>
                
                <div className="projects__item-image">
                  <img src={image} alt={title}></img> {/* change to image name */}
                </div>
    
                <h3>{title}</h3> {/* change to image name */}
              
                <div className="projects__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>go to ...</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>demo</a> */}
                </div>

            </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Projects