import React from 'react';
import './AdvantageSection.css';
import { Settings, ShieldCheck, Handshake } from 'lucide-react';

const AdvantageSection = () => {
  return (
    <section className="section advantage-section container">
      <div className="advantage-header">
        <h2 className="glow-text">The AxiomRise Advantage</h2>
        <p className="advantage-subtitle">
          We deliver the scale of a global workforce combined with deep regional knowledge of the ASEAN market.
        </p>
      </div>

      <div className="advantage-layout">
        
        <div className="advantage-map-container">
          {/* Simple dot map representation using CSS grid/flex or an abstract graphic */}
          <div className="abstract-map">
            <div className="map-node node-1"></div>
            <div className="map-node node-2"></div>
            <div className="map-node node-3"></div>
            <div className="map-node node-4"></div>
            <div className="map-connection conn-1"></div>
            <div className="map-connection conn-2"></div>
            <div className="map-connection conn-3"></div>
          </div>
        </div>

        <div className="advantage-cards">
          
          <div className="advantage-card glass-panel">
            <div className="adv-icon-container">
              <Settings className="adv-icon" size={36} />
            </div>
            <div className="adv-content">
              <h3>Innovative Approach</h3>
              <p>Modern methodologies and creative solutions that stay ahead of market dynamics.</p>
            </div>
          </div>

          <div className="advantage-card glass-panel">
            <div className="adv-icon-container">
              <ShieldCheck className="adv-icon" size={36} />
            </div>
            <div className="adv-content">
              <h3>High Quality Standards</h3>
              <p>Every service passes rigorous quality control to ensure consistently outstanding results.</p>
            </div>
          </div>

          <div className="advantage-card glass-panel">
            <div className="adv-icon-container">
              <Handshake className="adv-icon" size={36} />
            </div>
            <div className="adv-content">
              <h3>Long-Term Commitment</h3>
              <p>We build enduring partnerships built on trust — not just one-off transactions.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
