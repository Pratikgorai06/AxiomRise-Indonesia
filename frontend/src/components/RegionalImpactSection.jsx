import React from 'react';
import './RegionalImpactSection.css';
import { Landmark, Building2, Shield, Wallet, Stethoscope, Factory } from 'lucide-react';

const RegionalImpactSection = () => {
  const sectors = [
    { title: "Government & Public Sector", icon: <Landmark size={24} /> },
    { title: "Banking & Financial Services", icon: <Building2 size={24} /> },
    { title: "Insurance & Capital Markets", icon: <Shield size={24} /> },
    { title: "Fintech & Digital Payments", icon: <Wallet size={24} /> },
    { title: "Healthcare & Life Sciences", icon: <Stethoscope size={24} /> },
    { title: "Manufacturing & Technology", icon: <Factory size={24} /> }
  ];

  return (
    <section className="section regional-section container">
      <div className="regional-header">
        <h2 className="glow-text">Regional Scale & Sector Impact</h2>
      </div>

      <div className="regional-layout">
        
        {/* Abstract Dot Map with Pings */}
        <div className="regional-map-container">
          <div className="dot-map"></div>
          
          <div className="location-pin sg">
            <div className="ping-ring"></div>
            <div className="pin-card glass-panel">
              <h4>Singapore</h4>
              <p>HQ & Centre of Excellence</p>
            </div>
          </div>

          <div className="location-pin apac">
            <div className="ping-ring"></div>
            <div className="pin-card glass-panel">
              <h4>APAC</h4>
              <p>Regional Client Programs</p>
            </div>
          </div>

          <div className="location-pin global">
            <div className="ping-ring"></div>
            <div className="pin-card glass-panel">
              <h4>Global</h4>
              <p>Remote Engagements</p>
            </div>
          </div>
          
        </div>

        {/* Sectors Grid */}
        <div className="sectors-grid">
          {sectors.map((sector, idx) => (
            <div key={idx} className="sector-card glass-panel">
              <div className="sector-icon">
                {sector.icon}
              </div>
              <h3 className="sector-title">{sector.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RegionalImpactSection;
