import React from 'react';
import './Footer.css';
import { Globe, Mail, MapPin } from 'lucide-react';
import axiomriseLogo from '../assets/image.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Simplified 3-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Strategic Intent */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-logo">
              <img src={axiomriseLogo} alt="AxiomRise Logo" className="footer-logo-img" />
              <div className="logo-text">
                <span className="logo-main">Axiom</span>
                <span className="logo-sub">Rise</span>
              </div>
            </a>
            
            <p className="footer-bio">
              Empowering ASEAN enterprise architectures with premium organizational strategy, cyber-resiliency, and high-performance digital B2B solutions.
            </p>
            
            <div className="social-links">
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Global Presence">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col nav-col">
            <h4 className="footer-col-title">Corporate sitemap</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Our Mission</a></li>
              <li><a href="#capabilities">Core Capabilities</a></li>
              <li><a href="#architecture">IT Architecture</a></li>
              <li><a href="#security">Cyber Security SOC</a></li>
              <li><a href="#contact">Consult an Architect</a></li>
            </ul>
          </div>

          {/* Column 3: Regional Hubs */}
          <div className="footer-col office-col">
            <h4 className="footer-col-title">Regional presence</h4>
            
            <div className="office-item">
              <div className="office-icon">
                <MapPin size={16} />
              </div>
              <div className="office-details">
                <strong>PT AxiomRise Teknologi Indonesia</strong>
                <p>SCBD, Tower 2, Level 45, Kebayoran Baru, Jakarta Selatan</p>
              </div>
            </div>
            
            <div className="office-item">
              <div className="office-icon">
                <MapPin size={16} />
              </div>
              <div className="office-details">
                <strong>AxiomRise Pte Ltd (Singapore Hub)</strong>
                <p>Marina One East Tower, Level 30, Straits View, Singapore</p>
              </div>
            </div>

            <div className="office-item mail-item">
              <div className="office-icon">
                <Mail size={16} />
              </div>
              <div className="office-details">
                <a href="mailto:solutions@axiomrise.co.id" className="office-link">solutions@axiomrise.co.id</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="footer-baseline">
          <div className="footer-baseline-content">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} PT AxiomRise Teknologi Indonesia. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
