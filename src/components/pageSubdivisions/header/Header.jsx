import React from 'react';

import CTA from './CTA.jsx';
import thatsMe from '../../../assets/profilePic.jpg';
import HeaderSocials from './HeaderSocials.jsx';

import './Header.css';

const Header = () => {
  return (
    <header>

      <div className="container header__container">

        <h5>May I introduce myself? I am</h5>
        <h2>Dany Kratochwil</h2>
        <h5 className="text-light">Junior Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={thatsMe} alt='profile_pic' className='me__pic' />
        </div>

        <a href='#contact' className='scroll__down'>scroll down</a>
        
      </div>
      
    </header>
  )
}

export default Header