import React from 'react';
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <>
    <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    </Helmet>
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <div className="footer-social">
        <a href="https://www.facebook.com" className='facebook' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" className='instagram' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; Copyright 2024 | Shivam Events | All rights reserved.</p>
        <p className='powered'>Powered by Unicoderr</p>
      </div>
      <div className="scroll-to-top">
        <a href="#top">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;
