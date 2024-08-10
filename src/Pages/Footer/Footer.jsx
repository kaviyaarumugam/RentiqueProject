// Footer.js
import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/Rentique-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
         <Link to="/"><img src = {logo} alt ='logo'/></Link>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <a href="/aboutus">About Us</a>
            <a href="/T&C">Terms And Conditions</a>
            <a href="/privacypolicy">Privacy Policy</a>
            
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <a href="/faqs">FAQ'S</a>
            <a href="/contactus">Contact Us</a>
            <a href="/returnpolicy">Return Policy</a>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/exclusives">Exclusives</a>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Rentique. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
