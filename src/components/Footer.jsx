import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-logo">BNS&P</span>
          <p className="footer-tagline">Elegant events, crafted with passion.</p>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <a className="footer-phone" href="tel:+250784254440">+250 784 254 440</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} BNS&P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
