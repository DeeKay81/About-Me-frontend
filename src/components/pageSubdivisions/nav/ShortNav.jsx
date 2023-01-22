import React from 'react';

import './ShortNav.css';

import { BiHomeAlt } from 'react-icons/bi';
import { FaAward, FaBook } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { useState } from 'react';


export const ShortNav = () => {

  const [activeNav, setActiveNav] = useState('');

  return (
    <nav>

      <a href='/DeeKay81/About-Me-frontend' 
        onClick={() => setActiveNav('/DeeKay81/About-Me-frontend')} 
        className={activeNav === '/DeeKay81/About-Me-frontend' ? 'active' : ''}>
          <BiHomeAlt />
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
      
    </nav>
  )
}
