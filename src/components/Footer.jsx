import React from 'react';
import '../index.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa'; // Import FontAwesome icons

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <h2>SwapShelf</h2>
        <p>Join a thriving community to exchange books and discover new literary adventures.</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <FaPinterest />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SwapShelf. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
