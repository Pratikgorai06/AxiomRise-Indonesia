import React from 'react';
import './AboutSection.css';
import { Globe, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section about-section container">
      <div className="about-grid">
        <div className="about-content glass-panel">
          <h2 className="section-title glow-text">Your Trusted Business Partner</h2>
          <p className="about-description">
            PT AxiomRise Teknologi is a premier business solutions firm committed to delivering trusted, results-driven services across Indonesia.
          </p>
        </div>
        
        <div className="about-cards-container">
          <div className="about-card glass-panel">
            <div className="card-icon-container">
              <Globe className="card-icon" size={40} />
            </div>
            <div className="card-content">
              <h3>Across Every Industry</h3>
              <p>Delivering measurable results across diverse industrial sectors throughout Indonesia.</p>
            </div>
          </div>
          
          <div className="about-card glass-panel">
            <div className="card-icon-container">
              <Users className="card-icon" size={40} />
            </div>
            <div className="card-content">
              <h3>Professional Team</h3>
              <p>Backed by seasoned experts committed to precision-tailored solutions for every client.</p>
            </div>
          </div>
          
          <div className="about-card glass-panel">
            <div className="card-icon-container">
              <TrendingUp className="card-icon" size={40} />
            </div>
            <div className="card-content">
              <h3>Results-Oriented</h3>
              <p>Every engagement is driven by a clear focus on tangible outcomes that create real competitive advantage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
