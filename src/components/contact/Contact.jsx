import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import {useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mvdxhsv', 'template_lgjjlcg', form.current, {
        publicKey: 'fz460jhK-G8PeWVws',
      })
      
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:wwwanwr2016@gmail.com" target="_blank">Send a Massege</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Massenger</h4>
            <h5>anwralssadhcv</h5>
            <a href="https://m.me/anwr.alssadh" target="_blank">Send a Massege</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+967 774 101 089</h5>
            <a href="https://api.whatsapp.com/send?phone+967774101089" target="_blank">Send a Massege</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder=' Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Massege</button>


        </form>
      </div>
    </section>
  )
}

export default Contact

