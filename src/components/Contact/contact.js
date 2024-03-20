import React, { useRef } from 'react';
import './contact.css';
import Gama from '../../assets/client-3.png';
import Dunkin from '../../assets/client-2.png';
import Lbc from '../../assets/client-1.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import LinkendinIcon from '../../assets/linkendin-icon.png';
import UpworkIcon from '../../assets/upwork-icon.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2c5oqj', 'template_uze9vmw', form.current, 'wFeYM1rJhLu0J8B6F')
      .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent !')
        }, (error) => {
            console.log('FAILED...', error.text);
          });
    };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have  worked with includes
            </p>
            <div className="clientImgs">
                <img src={Gama} alt="Client" className="clientImg" />
                <img src={Dunkin} alt="Client" className="clientImg" />
                <img src={Lbc} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='from_name' required />
              <input type="email" className="email" placeholder='Your Email' name='from_email' required />
              <textarea className="msg" name="message" rows="5" placeholder='Your Message' required></textarea>
              <button type='submit' value='Send' className='submitBtn'>Submit</button>
              <div className="links">
                <a href='https://www.facebook.com/reggie.tabianan' rel='noreferrer' target='_blank'><img src={FacebookIcon} alt="Facebook" className="link" /></a>
                <a href='https://www.linkedin.com/in/reggie-tabianan-387032237/' rel='noreferrer' target='_blank'><img src={LinkendinIcon} alt="Linkendin" className="link" /></a>
                <a href='https://www.upwork.com/freelancers/~01781503933a97d728' rel='noreferrer' target='_blank'><img src={UpworkIcon} alt="Upwork" className="link" /></a>
              </div>
            </form>
        </div>
    </section>
  );
};

export default Contact