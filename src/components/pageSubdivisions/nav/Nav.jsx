import React from 'react';

import './Nav.css';

import { BiHomeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaAward } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { useState } from 'react';


export const Nav = () => {

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
        <CgProfile />
      </a>

      <a href='#experience'
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}>
        <FaAward />
      </a>

      <a href='#projects'
        onClick={() => setActiveNav('#projects')} 
        className={activeNav === '#projects' ? 'active' : ''}>
        <AiFillFolderOpen />
      </a>

      <a href='#contact'
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}>
        <AiFillMessage />
      </a>
      
    </nav>
  )
}
