import React from 'react';
import './ITArchitectureSection.css';
import { Square } from 'lucide-react';

const ITArchitectureSection = () => {
  return (
    <section className="section it-architecture-section container">
      <div className="it-header">
        <h2 className="glow-text">Enterprise IT Architecture: <span className="text-muted">Operations & Transformation</span></h2>
      </div>

      <div className="it-columns">
        <div className="it-column">
          <div className="it-column-header glass-panel">
            <h3>IT Resource Augmentation</h3>
          </div>
          <div className="it-column-body glass-panel">
            <div className="it-list">
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Time & material contractors</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Hourly / daily / monthly engagements</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Retail & Healthcare IT roles</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Project & delivery managers</span>
              </div>
            </div>
            {/* Connection line overlay */}
            <div className="it-connection-line"></div>
          </div>
        </div>

        <div className="it-column">
          <div className="it-column-header glass-panel">
            <h3>IT Managed Services</h3>
          </div>
          <div className="it-column-body glass-panel">
            <div className="it-list">
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>End-to-end IT operations</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Infrastructure monitoring</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Systems administration</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Help desk & NOC support</span>
              </div>
            </div>
            <div className="it-connection-line"></div>
          </div>
        </div>

        <div className="it-column">
          <div className="it-column-header glass-panel">
            <h3>Digital Transformation</h3>
          </div>
          <div className="it-column-body glass-panel">
            <div className="it-list">
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Cloud migration & adoption</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Enterprise architecture design</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>ERP/EHR implementations</span>
              </div>
              <div className="it-list-item">
                <Square className="it-icon" size={16} fill="var(--primary-glow)" />
                <span>Process automation</span>
              </div>
            </div>
            <div className="it-connection-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITArchitectureSection;
