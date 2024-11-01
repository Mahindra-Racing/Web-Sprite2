// Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to='/InfoPage' className="footer-link" >Info Page</Link>
        <div className="footer-links">
          <a>About Us</a>
          <a>Contact</a>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Formula E. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
