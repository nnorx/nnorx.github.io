import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Nick Norcross © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com/in/nicholas-norcross/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.github.com/nnorx'
              }
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
