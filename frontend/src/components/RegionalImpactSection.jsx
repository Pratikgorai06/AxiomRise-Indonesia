import React from 'react';
import './RegionalImpactSection.css';
import { Landmark, Building2, Shield, Wallet, Stethoscope, Factory } from 'lucide-react';
import aseanCorridorImg from '../assets/asean_enterprise_corridor.png';

const RegionalImpactSection = () => {
  const sectors = [
    { title: "Government & Public Sector", icon: <Landmark size={22} /> },
    { title: "Banking & Financial Services", icon: <Building2 size={22} /> },
    { title: "Insurance & Capital Markets", icon: <Shield size={22} /> },
    { title: "Fintech & Digital Payments", icon: <Wallet size={22} /> },
    { title: "Healthcare & Life Sciences", icon: <Stethoscope size={22} /> },
    { title: "Manufacturing & Technology", icon: <Factory size={22} /> }
  ];

  return (
    <section className="regional-section" id="regional">
      <div className="blueprint-pattern"></div>
      
      <div className="container">
        <div className="regional-header">
          <span className="regional-kicker">Regional Scale & Sector Impact</span>
          <h2 className="regional-header-title">
            Empowering ASEAN <span className="text-primary-solid">Enterprise</span>
          </h2>
          <p className="regional-subtitle">
            Strategic technology advisory and deployment across high-compliance industrial corridors.
          </p>
        </div>

        <div className="regional-layout">
          {/* Left Column: Premium ASEAN Industrial Tech Corridor Showcase */}
          <div className="regional-visual">
            <div className="blueprint-grid-visual">
              <div className="blueprint-grid-axis axis-h"></div>
              <div className="blueprint-grid-axis axis-v"></div>
            </div>
            
            <div className="regional-showcase-frame">
              <img 
                src={aseanCorridorImg} 
                alt="AxiomRise - ASEAN Enterprise Industrial Corridor" 
                className="regional-showcase-img"
              />
              <div className="regional-frame-overlay"></div>
              <div className="regional-visual-border-accent"></div>
            </div>
            
            {/* Minimalist floating stats card */}
            <div className="regional-floating-badge">
              <span className="regional-badge-val">High-Compliance Logistics & Operations</span>
            </div>
          </div>

          {/* Right Column: Sectors Grid */}
          <div className="sectors-grid">
            {sectors.map((sector, idx) => (
              <div key={idx} className="sector-card">
                <div className="sector-icon">
                  {sector.icon}
                </div>
                <h3 className="sector-title">{sector.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalImpactSection;
