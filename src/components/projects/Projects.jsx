import React from 'react';

import './Projects.css';

/* import 4-6 project pics here from assets */
import image1 from '../../assets/project1-img.jpg'; /* just an example */
import aboutMeAppPic from '../../assets/about-me-app.png';
import ticTacToeAppPic from '../../assets/tic-tac-toe-app.png';
import centipedeAppPic from '../../assets/centipede-app.png';


const data = [
  {
    id: 1,
    image: aboutMeAppPic, // change image
    title: 'About me (React.js)', // change name
    github: 'https://github.com/DeeKay81/About-Me' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 2,
    image: ticTacToeAppPic, // change image
    title: 'Tic Tac Toe (Python)', // change name
    github: 'https://github.com/DeeKay81/Tic-Tac-Toe' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 3,
    image: centipedeAppPic, // change image
    title: 'Centipede (JavaScript)', // change name
    github: 'https://github.com/DeeKay81/Centipede' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 4,
    image: image1, // change image
    title: '--- Collecting data (SQL) ---', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 5,
    image: image1, // change image
    title: '--- Authorization (Java, Spring) ---', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  },

  {
    id: 6,
    image: image1, // change image
    title: '--- Cubing (Three.js) ---', // change name
    github: 'https://github.com' // change path
    // demo: 'https://PATH TO A DEMO IF WANTED' // change path
  }
]

export const Projects = () => {
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
                  <img src={image} alt={title}></img>
                </div>
    
                <h3>{title}</h3>
              
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
