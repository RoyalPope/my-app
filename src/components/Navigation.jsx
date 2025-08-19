import React, { useState } from 'react';
import logo from '../assets/images/logo.jpeg';

import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="BNS&P Logo" className="nav-logo-image" />
            <span>BNS&P</span>
          </div>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-link" onClick={() => scrollToSection('home')}>
            Home
          </div>
          <div className="nav-link" onClick={() => scrollToSection('about')}>
            About Us
          </div>
          <div className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact Us
          </div>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 