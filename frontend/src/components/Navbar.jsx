import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X, ArrowRight } from 'lucide-react';
import axiomriseLogo from '../assets/image.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Professional B2B Logo */}
        <a href="#" className="navbar-logo" onClick={handleLinkClick}>
          <img src={axiomriseLogo} alt="AxiomRise Logo" className="navbar-logo-img" />
          <div className="logo-text">
            <span className="logo-main">Axiom</span>
            <span className="logo-sub">Rise</span>
            <span className="logo-badge">INDONESIA</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#security" className="nav-link">Security</a>
          <a href="#lifecycle" className="nav-link">Lifecycle</a>
          <a href="#regional" className="nav-link">Regional</a>
          <a href="#partners" className="nav-link">Partners</a>
        </div>

        {/* Action Button */}
        <div className="navbar-actions">
          <a href="#contact" className="btn btn-navbar">
            Consult Architect
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          <a href="#about" className="mobile-nav-link" onClick={handleLinkClick}>About</a>
          <a href="#capabilities" className="mobile-nav-link" onClick={handleLinkClick}>Capabilities</a>
          <a href="#architecture" className="mobile-nav-link" onClick={handleLinkClick}>Architecture</a>
          <a href="#security" className="mobile-nav-link" onClick={handleLinkClick}>Security</a>
          <a href="#lifecycle" className="mobile-nav-link" onClick={handleLinkClick}>Lifecycle</a>
          <a href="#regional" className="mobile-nav-link" onClick={handleLinkClick}>Regional</a>
          <a href="#partners" className="mobile-nav-link" onClick={handleLinkClick}>Partners</a>
          <a href="#contact" className="mobile-nav-link btn-mobile-cta" onClick={handleLinkClick}>
            Consult Architect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
