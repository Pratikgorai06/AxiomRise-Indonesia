import React from 'react';
import './ITArchitectureSection.css';
import { Square } from 'lucide-react';

const ITArchitectureSection = () => {
  return (
    <section className="it-architecture-section" id="architecture">
      <div className="blueprint-pattern-dark"></div>
      
      <div className="container">
        <div className="it-header">
          <span className="it-kicker">Systems & Infrastructure</span>
          <h2 className="it-header-title">
            Enterprise IT <span className="text-glow">Architecture</span>
          </h2>
        </div>

        <div className="it-columns">
          {/* Column 1: Augmentation */}
          <div className="it-column">
            <div className="it-column-header">
              <h3>IT Resource Augmentation</h3>
            </div>
            <div className="it-column-body">
              <div className="it-list">
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Time & material contractors</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Hourly / daily / monthly engagements</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Retail & Healthcare IT roles</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Project & delivery managers</span>
                </div>
              </div>
              <div className="it-connection-line"></div>
            </div>
          </div>

          {/* Column 2: Managed Services */}
          <div className="it-column">
            <div className="it-column-header">
              <h3>IT Managed Services</h3>
            </div>
            <div className="it-column-body">
              <div className="it-list">
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>End-to-end IT operations</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Infrastructure monitoring</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Systems administration</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Help desk & NOC support</span>
                </div>
              </div>
              <div className="it-connection-line"></div>
            </div>
          </div>

          {/* Column 3: Transformation */}
          <div className="it-column">
            <div className="it-column-header">
              <h3>Digital Transformation</h3>
            </div>
            <div className="it-column-body">
              <div className="it-list">
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Cloud migration & adoption</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Enterprise architecture design</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>ERP/EHR implementations</span>
                </div>
                <div className="it-list-item">
                  <Square className="it-icon" size={16} fill="var(--tech-accent-neon)" />
                  <span>Process automation</span>
                </div>
              </div>
              <div className="it-connection-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITArchitectureSection;

