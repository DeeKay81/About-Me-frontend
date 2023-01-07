/*
ger:
Die Abkürzung CTA steht für „Call-to-Action“. 
Gemeint sind damit Handlungsaufforderungen in Form von 
Buttons, Links oder auch in Texten.

en:
The abbreviation CTA stands for "Call to Action". 
This means calls for action in the form of 
buttons, links or texts.
*/

import React from 'react';

import CV from '../../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA