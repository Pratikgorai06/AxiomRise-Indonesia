import React from 'react';
import './RegionalImpactSection.css';
import { Check } from 'lucide-react';
import aseanCorridorImg from '../assets/asean_enterprise_corridor.png';
import globalWorkforceImg from '../assets/global_workforce_asean.png';
import jakartaOfficeImg from '../assets/jakarta_b2b_office.png';

const RegionalImpactSection = () => {
  const points = [
    { title: "Singapore B2B standard", desc: "Rigorous standards aligned with high-performance Singapore operations." },
    { title: "Active NOC monitoring", desc: "Continuous surveillance and rapid-response network operations." },
    { title: "OT/IT secure alignment", desc: "Industrial operational technology fortified with IT cyber-defenses." },
    { title: "Indonesian local compliance", desc: "Complete regulatory compliance tailored to local Indonesian operators." },
    { title: "Industrial telemetry pipelines", desc: "Secured supply chain fleets and IoT telemetric telemetry." },
    { title: "Enterprise-grade SLA baseline", desc: "Guaranteed uptime baseline supported by strict SLAs." }
  ];

  return (
    <section className="regional-section" id="regional">
      
      <div className="container">
        <div className="regional-grid-layout">
          
          {/* Left Column: Authoritative Text & 6-Point Checkmark Grid */}
          <div className="regional-content-col">
            <span className="regional-kicker">Regional Scale & Sector Impact</span>
            <h2 className="regional-header-title-custom">
              Crafted for ASEAN <br />
              <span className="text-glow">Enterprise Scaling & Corridors.</span>
            </h2>
            <div className="heritage-accent-bar"></div>
            
            <p className="regional-description-custom">
              The main operational 'thrust' is to focus on integrating enterprise infrastructures 
              across Singapore and Indonesia, securing vulnerable networks and data pipelines 
              with high-compliance database frameworks and round-the-clock advisory.
            </p>
            
            {/* 2-Column Checkmark Grid */}
            <div className="checkmark-points-grid">
              {points.map((point, idx) => (
                <div key={idx} className="checkmark-point-item">
                  <div className="checkmark-icon-wrapper">
                    <Check size={14} className="checkmark-icon" />
                  </div>
                  <span className="checkmark-point-text">{point.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Single Premium Image Showcase Card */}
          <div className="regional-visual-col">
            <div className="blueprint-grid-visual-regional">
              <div className="blueprint-grid-axis axis-h"></div>
              <div className="blueprint-grid-axis axis-v"></div>
            </div>
            
            <div className="prestige-single-image-container premium-glass-card">
              <img 
                src={aseanCorridorImg} 
                alt="AxiomRise - ASEAN Industrial Logistics Corridor" 
                className="single-showcase-img" 
              />
              <div className="collage-card-overlay"></div>
              
              {/* Tech compliance badge */}
              <div className="prestige-card-badge">
                <span className="badge-pulse"></span>
                <span>ASEAN Corridor Active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegionalImpactSection;
