import React, { useState } from 'react';
import './SecuritySection.css';
import { 
  ShieldCheck, 
  Globe, 
  Check
} from 'lucide-react';
import indonesiaSecurityImg from '../assets/indonesia_security_center.png';
import advantageImg from '../assets/global_workforce_asean.png';
import cyberSecurityArchImg from '../assets/cybersecurity_arch.png';
import jakartaOfficeImg from '../assets/jakarta_b2b_office.png';

const SecuritySection = () => {
  const [activeTab, setActiveTab] = useState('security');

  const securityServices = [
    { title: 'OJK & BSSN Compliance', desc: 'Indonesian financial and national cybersecurity frameworks.' },
    { title: 'Jakarta SOC Operations', desc: '24/7 Security Operations Center threat monitoring.' },
    { title: 'ISO 27001 Readiness', desc: 'Structured gap analysis to achieve global compliance certifications.' },
    { title: 'Penetration Testing', desc: 'Offensive security assessments targeting local digital infrastructure.' }
  ];

  const advantages = [
    { title: 'Global-Scale Delivery', desc: 'Singapore-led principal delivery with regional scale.' },
    { title: 'Indonesia-First Execution', desc: 'On-ground teams fluent in local procurement and frameworks.' },
    { title: 'Full-Stack Integration', desc: 'Capabilities spanning systems design, security, and cloud.' },
    { title: 'Compliance-First Posture', desc: 'All structures aligned with standard corporate compliance rules.' }
  ];

  return (
    <section className="security-section" id="security">
      
      <div className="container">
        {/* Section Header with Segmented Switcher */}
        <div className="security-header">
          <span className="security-kicker">Unified Security &amp; Regional Scale</span>
          <h2 className="security-header-title">
            Enterprise Trust, <span className="text-brand-gradient">Engineered for ASEAN</span>
          </h2>
          
          <div className="tab-switcher-container">
            <button 
              className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <ShieldCheck size={18} />
              <span>Cybersecurity &amp; Compliance</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'advantage' ? 'active' : ''}`}
              onClick={() => setActiveTab('advantage')}
            >
              <Globe size={18} />
              <span>The AxiomRise Advantage</span>
            </button>
          </div>
        </div>

        {/* Tab Layout System */}
        <div className="security-tab-wrapper">
          
          {/* TAB 1: CYBERSECURITY & COMPLIANCE */}
          {activeTab === 'security' && (
            <div className="security-grid-layout active-fade-in">
              
              {/* Left Content Column */}
              <div className="security-content-col">
                <span className="tab-label-kicker">Cybersecurity &amp; Compliance</span>
                <h3 className="tab-title-custom">
                  Enterprise Security <br />
                  <span className="highlight-text">Built for Indonesian Core.</span>
                </h3>
                <div className="heritage-accent-bar"></div>
                
                <p className="tab-desc-paragraph-custom">
                  From Jakarta-based SOC operations to OJK and BSSN compliance advisory — we provide 
                  comprehensive cybersecurity architecture for high-compliance enterprise operators.
                </p>

                {/* 2-Column Checkmark Grid */}
                <div className="security-checkmark-grid">
                  {securityServices.map((service, i) => (
                    <div key={i} className="security-checkmark-item">
                      <div className="security-check-icon-wrapper">
                        <Check size={14} className="security-check-icon" />
                      </div>
                      <span className="security-check-text">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Showcase: Single Premium Image Showcase Card */}
              <div className="security-visual-col">
                <div className="blueprint-grid-visual-security">
                  <div className="blueprint-grid-axis axis-h"></div>
                  <div className="blueprint-grid-visual-security"></div>
                </div>

                <div className="prestige-single-image-container premium-glass-card">
                  <img 
                    src={indonesiaSecurityImg} 
                    alt="AxiomRise - Active Threat Hunting SOC Room" 
                    className="single-showcase-img" 
                  />
                  <div className="collage-card-overlay"></div>
                  
                  {/* Security Badge */}
                  <div className="prestige-card-badge">
                    <span className="badge-pulse"></span>
                    <span>SOC Threat Active</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: THE AXIOMRISE ADVANTAGE */}
          {activeTab === 'advantage' && (
            <div className="security-grid-layout active-fade-in">
              
              {/* Left Content Column */}
              <div className="security-content-col">
                <span className="tab-label-kicker kicker-gold">Global Workforce &amp; Local Edge</span>
                <h3 className="tab-title-custom">
                  The Regional <br />
                  <span className="highlight-text-gold">AxiomRise Advantage.</span>
                </h3>
                <div className="heritage-accent-bar"></div>
                
                <p className="tab-desc-paragraph-custom">
                  We deliver the scale of a global workforce combined with deep regional execution. 
                  Our positioning bridges Singapore's standards with Indonesia's fastest growing enterprises.
                </p>

                {/* 2-Column Checkmark Grid */}
                <div className="security-checkmark-grid">
                  {advantages.map((advantage, i) => (
                    <div key={i} className="security-checkmark-item">
                      <div className="security-check-icon-wrapper wrapper-gold">
                        <Check size={14} className="security-check-icon icon-gold" />
                      </div>
                      <span className="security-check-text">{advantage.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Showcase: Single Premium Image Showcase Card */}
              <div className="security-visual-col">
                <div className="blueprint-grid-visual-security">
                  <div className="blueprint-grid-axis axis-h"></div>
                  <div className="blueprint-grid-visual-security"></div>
                </div>

                <div className="prestige-single-image-container advantage-single premium-glass-card">
                  <img 
                    src={advantageImg} 
                    alt="AxiomRise - Singapore-Indonesia Delivery Workforce" 
                    className="single-showcase-img" 
                  />
                  <div className="collage-card-overlay"></div>
                  
                  {/* Capacity Badge */}
                  <div className="prestige-card-badge badge-gold">
                    <span className="badge-pulse pulse-gold"></span>
                    <span>Workforce Active</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
