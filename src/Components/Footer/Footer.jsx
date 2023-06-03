import React from 'react';
import './Footer.css';
import LogoFooter from '../../Assets/Logo-footer.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-heading">
        <div className="heading-text"> People who are ready took these courses!</div>
        <button className="heading-button">Schedule Appointment</button>
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">
            <img src={LogoFooter} alt="Logo Footer" />
          </a>
          <p className="logo-info">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-link">
          <p>Links</p>
          <a href="/">Overons</a>
          <a href="/">Social</a>
          <a href="/">Counters</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer-company">
          <p>Company</p>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Contact</span>
        </div>
        <div className="footer-touch">
          <p>Get in touch</p>
          <span>Crechterwoord K12 182 DK Alknjkcb</span>
          <span>085-132567</span>
          <span>info@lobar.net</span>
        </div>
      </div>
      <div className="footer-bottom">© 2021 ar-shakir. All rights reserved</div>
    </div>
  );
};

export default Footer;
