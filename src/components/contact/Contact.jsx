// import React from 'react';
import './Contact.css';
import {FaRegEnvelope} from 'react-icons/fa'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message Sent");
    emailjs.sendForm( 'service_87dmxbi', 'template_im8tu6f', form.current, 'qxeNI-zObpB82UiiY');
    e.target.reset();
  }; 

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <FaRegEnvelope className='contact__option-icon' />
            <h4>Email</h4>
            <h5>karan731373@gmail.com</h5>
            <a href='mailto:karan731373@gmail.com'>Send a message</a>
          </article>
          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Karan Maggo</h5>
            <a href='https://m.me/abhishek.bhanot.961'>Send a message</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91-8968731373</h5>
            <a href='https://api.whatsapp.com/send?phone=+918968731373'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact