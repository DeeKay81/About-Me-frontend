import React from 'react';
import emailjs from '@emailjs/browser';

import { useRef } from 'react';

import './Contact.css';

// import { AiOutlineMail } from 'react-icons/ai';
// import { BsWhatsapp } from 'react-icons/bs';
// import { RiMessengerLine } from 'react-icons/ri';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5oeghmy', 'template_2fi9bmg', form.current, 'mMt4lNSo3lrcMNMoq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Finally just</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        {/* on the left */}
        
        {/* <div className="contact__options"> */}
          
          {/* <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <a href='mailto:username@gmail.com' target='_blank' rel='noopener noreferrer'>contact me</a>
          </article> */}

          {/* <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send=phone+123456789' target='_blank' rel='noopener noreferrer'>contact me</a>
          </article> */}

          {/* <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <a href='https://m.me/Username' target='_blank'>contact me</a>
          </article> */}

        {/* </div> */}

        {/* on the right */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='subject' placeholder='Why do you contact me?' required />
          <input type='text' name='name' placeholder='How should I call you?' required />
          <input type='email' name='email' placeholder='What is your email address?' required />
          <textarea name='message' rows='7' placeholder='Tell me ...' required />
          <button type='submit' className='btn btn-primary'>Send through matrix ...</button>
        </form>
      </div>
    </section>
  )
}
