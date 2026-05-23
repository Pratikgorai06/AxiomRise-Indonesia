import React from 'react';
import './VisionMissionSection.css';
import { Compass, Target, CheckCircle2 } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section className="section vision-mission-section container">
      <div className="vm-container">
        
        <div className="vm-card glass-panel">
          <div className="vm-header">
            <h2 className="glow-text">V I S I O N</h2>
            <Compass className="vm-icon" size={28} />
          </div>
          <div className="vm-body">
            <p>
              To become the most trusted and forward-thinking business solutions company in Indonesia — driving sustainable growth and lasting impact for every client we serve.
            </p>
          </div>
        </div>
        
        <div className="vm-connector">
          <div className="connector-line top-line"></div>
          <div className="connector-line middle-line"></div>
          <div className="connector-line bottom-line"></div>
          <div className="connector-dot top-dot"></div>
          <div className="connector-dot middle-dot"></div>
          <div className="connector-dot bottom-dot"></div>
        </div>

        <div className="vm-card glass-panel">
          <div className="vm-header">
            <h2 className="glow-text">M I S S I O N</h2>
            <Target className="vm-icon" size={28} />
          </div>
          <div className="vm-body mission-list">
            
            <div className="mission-item">
              <CheckCircle2 className="mission-icon" size={24} />
              <p>Deliver world-class services that consistently exceed client expectations.</p>
            </div>
            
            <div className="mission-item">
              <CheckCircle2 className="mission-icon" size={24} />
              <p>Build long-term partnerships grounded in integrity and transparency.</p>
            </div>
            
            <div className="mission-item">
              <Target className="mission-icon" size={24} />
              <p>Bring innovative, locally relevant solutions to Indonesia's business landscape.</p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionSection;
