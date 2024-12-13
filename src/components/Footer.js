// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 BookChainNova. All rights reserved.</p>
      <p>
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
