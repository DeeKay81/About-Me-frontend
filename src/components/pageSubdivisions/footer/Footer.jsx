import React from 'react';

import './Footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>

      <a href='/#' className='footer__logo'>DeeKay</a>

      <ul className='permalinks'>
        <li><a href='/#'>HoMe</a></li>
        <li><a href='#about'>about me</a></li>
        <li><a href='#experience'>experiences</a></li>
        <li><a href='#projects'>projects</a></li>
        <li><a href='#education'>education</a></li>
        <li><a href='#testimonials'>testimonials</a></li>
        <li><a href='#contact'>contact me</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DeeKay. All rights reserved.</small>
      </div>

    </footer>
  )
}
