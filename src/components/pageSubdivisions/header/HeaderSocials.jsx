import React from 'react';
import CC from '../../../assets/codecool-logo-removed-backgrnd.png';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href='https://linkedin.com' target='__blank' rel='noopener noreferrer'>
          <BsLinkedin />
        </a>

        <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
          <BsGithub />
        </a>

        <a href='https://codecool.com/at/' target='_blank' rel='noopener noreferrer'>
          <img src={CC} alt='cc-pic' className='cc__pic' />
        </a>

    </div>
  )
}
