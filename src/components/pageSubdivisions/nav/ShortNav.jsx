import React from 'react';

import './ShortNav.css';

import { BiHomeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaAward, FaBook } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { useState } from 'react';


export const ShortNav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>

      <a href='/' 
        onClick={() => setActiveNav('/')} 
        className={activeNav === '/' ? 'active' : ''}>
          <BiHomeAlt />
      </a>

      <a href='/experience'
        onClick={() => setActiveNav('/experience')} 
        className={activeNav === '/experience' ? 'active' : ''}>
        <FaAward />
      </a>

      <a href='/project'
        onClick={() => setActiveNav('/project')} 
        className={activeNav === '/project' ? 'active' : ''}>
        <AiFillFolderOpen />
      </a>

      <a href='/edu'
        onClick={() => setActiveNav('/edu')} 
        className={activeNav === '/edu' ? 'active' : ''}>
        <FaBook />
      </a>
      
    </nav>
  )
}
