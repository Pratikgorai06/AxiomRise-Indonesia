import React from 'react';
import './SecuritySection.css';
import { Crosshair, FileCheck, Eye, ShieldAlert, Shield } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section className="section security-section container">
      <div className="security-header">
        <h2 className="glow-text">Enterprise Security Architecture</h2>
        <p className="security-subtitle">Uncompromising, 24/7 Protection for Mission-Critical Assets.</p>
      </div>

      <div className="security-layout">
        <div className="security-radar">
          <div className="radar-circle circle-1"></div>
          <div className="radar-circle circle-2"></div>
          <div className="radar-circle circle-3"></div>
          <div className="radar-line horizontal"></div>
          <div className="radar-line vertical"></div>
          <div className="radar-sweep"></div>
          <div className="radar-center-icon">
            <Shield size={64} className="glow-blue" />
          </div>
        </div>

        <div className="security-services">
          
          <div className="security-card glass-panel offset-1">
            <div className="sec-icon-container">
              <Crosshair className="sec-icon" size={32} />
            </div>
            <div className="sec-content">
              <h3>Offensive Security</h3>
              <p>Security assessments & penetration testing to identify vulnerabilities before they are exploited.</p>
            </div>
          </div>

          <div className="security-card glass-panel offset-2">
            <div className="sec-icon-container">
              <FileCheck className="sec-icon" size={32} />
            </div>
            <div className="sec-content">
              <h3>Compliance & Governance</h3>
              <p>Rigorous alignment with global standards, including ISO 27001 implementation.</p>
            </div>
          </div>

          <div className="security-card glass-panel offset-3">
            <div className="sec-icon-container">
              <Eye className="sec-icon" size={32} />
            </div>
            <div className="sec-content">
              <h3>Continuous Overwatch</h3>
              <p>SOC as a Service (Security Operations Center) providing relentless 24/7 monitoring.</p>
            </div>
          </div>

          <div className="security-card glass-panel offset-4">
            <div className="sec-icon-container">
              <ShieldAlert className="sec-icon" size={32} />
            </div>
            <div className="sec-content">
              <h3>Threat Neutralization</h3>
              <p>Rapid incident response & digital forensics to contain and analyze breaches.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
