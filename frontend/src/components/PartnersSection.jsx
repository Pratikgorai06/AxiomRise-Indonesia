import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  return (
    <section className="section partners-section container">
      <div className="partners-header">
        <h2 className="glow-text">The Trust Anchor: <span className="text-muted">Our Partner Ecosystem</span></h2>
        <p className="partners-subtitle">Integrated with industry-leading technology and service partners.</p>
      </div>

      <div className="partners-grid">
        
        <div className="partner-pedestal">
          <div className="pedestal-top"></div>
          <div className="partner-logo-container glass-panel">
            <h3 className="partner-logo cyverion">
              <span className="logo-icon">🛡️</span> CYVERION
            </h3>
          </div>
          <div className="pedestal-bottom"></div>
        </div>

        <div className="partner-pedestal">
          <div className="pedestal-top"></div>
          <div className="partner-logo-container glass-panel">
            <h3 className="partner-logo starshield">
              <span className="logo-icon">⭐</span> STAR SHIELD
            </h3>
          </div>
          <div className="pedestal-bottom"></div>
        </div>

        <div className="partner-pedestal">
          <div className="pedestal-top"></div>
          <div className="partner-logo-container glass-panel">
            <h3 className="partner-logo incall">
              <span className="logo-icon">🌐</span> inCall systems
            </h3>
          </div>
          <div className="pedestal-bottom"></div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
