import React, { useRef } from 'react';
import ContactStyle from "../Styles/Contact.styles";
import selfie from '../images/selfie.svg';

import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendMail = e => {
    e.preventDefault();

    emailjs.sendForm('service_hn72frn', 'template_yz6447y', e.target, 'usDQb92wxOFZV4bh-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    };
  


  return (
    <ContactStyle id="con">
      <div>
        <span>Contact us</span>
        <p>Contact With Us</p>
      </div>
      <form onSubmit={sendMail}>
        <div className="name">
          <label className="red">Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="email">
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="location">
          <label>Location</label>
          <input type="text" name="user_location" required />
        </div>
        <div className="subject">
          <label>Subject</label>
          <input type="text" name="user_subject" required />
        </div>
        <div className="message">
          <label>Message</label>
          <textarea name="message" required />
        </div>
      
        <input type="submit" className="submit" value="Send Message" />
      
      </form>
      <img src={selfie} alt="" />
    </ContactStyle>
  )
};

export default Contact;