import React from 'react';
import './Footer.css';
import footerImage from './img/up-arrow.png';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='footer-main'>
      <main className='main-text'>
        <h1>Let's Build<span className="together">together</span></h1>
        <p className='contact-me'>Contact me: <br></br><span className='email'>sagnikkundu96@gmail.com</span></p>
      </main>

      <div className="footer-content">
        <p className='creator'>Designed & Developed by <br></br><span className='name'>Sagnik Kundu</span></p>
        <p className='copyright'>© 2024 - All Rights Reserved</p>
        <a href="#top" className="go-to-top">
        <img src={footerImage} alt="Go to top" />
        <p className='go-to-top'>Go to top</p>
      </a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;