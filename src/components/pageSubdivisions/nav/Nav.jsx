import React from 'react';

import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { useState } from 'react';

import './Nav.css';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>

      <a href='/#' 
        onClick={() => setActiveNav('#')} 
        className={activeNav === '#' ? 'active' : ''}>
          <BiHomeAlt />
      </a>

      <a href='#about' 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>

      <a href='#experience'
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}>
        <GiTeacher />
      </a>

      <a href='#projects'
        onClick={() => setActiveNav('#projects')} 
        className={activeNav === '#projects' ? 'active' : ''}>
        <AiOutlineFundProjectionScreen />
      </a>

      <a href='#contact'
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}>
        <AiFillMessage />
      </a>
      
    </nav>
  )
}

export default Nav