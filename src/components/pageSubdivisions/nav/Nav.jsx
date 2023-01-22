import React from 'react';

import './Nav.css';

import { BiHomeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaAward, FaBook } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { useState } from 'react';


export const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>

      <a href='/DeeKay81/About-Me-frontend/#' 
        onClick={() => setActiveNav('/DeeKay81/About-Me-frontend/#')} 
        className={activeNav === '/DeeKay81/About-Me-frontend/#' ? 'active' : ''}>
          <BiHomeAlt />
      </a>

      <a href='#about' 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}>
        <CgProfile />
      </a>

      <a href='/DeeKay81/About-Me-frontend/experience'
        onClick={() => setActiveNav('/DeeKay81/About-Me-frontend/experience')} 
        className={activeNav === '/DeeKay81/About-Me-frontend/experience' ? 'active' : ''}>
        <FaAward />
      </a>

      <a href='/DeeKay81/About-Me-frontend/project'
        onClick={() => setActiveNav('/DeeKay81/About-Me-frontend/project')} 
        className={activeNav === '/DeeKay81/About-Me-frontend/project' ? 'active' : ''}>
        <AiFillFolderOpen />
      </a>

      <a href='/DeeKay81/About-Me-frontend/edu'
        onClick={() => setActiveNav('/DeeKay81/About-Me-frontend/edu')} 
        className={activeNav === '/DeeKay81/About-Me-frontend/edu' ? 'active' : ''}>
        <FaBook />
      </a>

      <a href='#testimonials'
        onClick={() => setActiveNav('#testimonials')} 
        className={activeNav === '#testimonials' ? 'active' : ''}>
        <BsFileEarmarkText />
      </a>

      <a href='#contact'
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}>
        <AiFillMessage />
      </a>
      
    </nav>
  )
}
