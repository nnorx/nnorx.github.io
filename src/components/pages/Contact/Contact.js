import React from 'react';
import HeroSectionContact from './HeroSectionContact';
import { contactObjOne } from './Data';


import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

init("user_7A6hmVeSfbIyigLZxEszs");

function sendEmail(e){
  e.preventDefault();

  emailjs.sendForm('service_bumfgd7', 'template_3puf2mi', e.target, 'user_7A6hmVeSfbIyigLZxEszs')
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
      console.log('FAILED...', error);
  });
  e.target.reset();
}

function Contact() {
  return (
    <>
      <HeroSectionContact {...contactObjOne} />

      <div className="box">
        <form onSubmit={sendEmail}>
          <div className="row pt-2">
              <div className="col-8 form-group mx-auto">
                  <input type="text" className="form-control" placeholder="Name" name="name"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                  <input type="email" className="form-control" placeholder="Email Address" name="email"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                  <input type="text" className="form-control" placeholder="Subject" name="subject"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                  <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                  <input type="submit" className="btn btn-info" value="Send Message"></input>
              </div>
            </div>
          </form>
        </div>
    </>
  );
}

export default Contact;
