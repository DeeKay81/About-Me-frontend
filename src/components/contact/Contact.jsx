import React from 'react';
import emailjs from '@emailjs/browser';

import { useRef } from 'react';

import './Contact.css';


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
