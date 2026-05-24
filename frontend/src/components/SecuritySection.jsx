import React, { useState } from 'react';
import './SecuritySection.css';
import { 
  ShieldCheck, 
  Globe, 
  Crosshair, 
  FileCheck, 
  Eye, 
  ShieldAlert, 
  CheckCircle2, 
  Users2, 
  Layers 
} from 'lucide-react';
import indonesiaSecurityImg from '../assets/indonesia_security_center.png';
import advantageImg from '../assets/global_workforce_asean.png';

const SecuritySection = () => {
  const [activeTab, setActiveTab] = useState('security');

  const securityServices = [
    {
      icon: <ShieldAlert size={20} strokeWidth={1.5} />,
      title: 'OJK & BSSN Compliance',
      desc: 'End-to-end alignment with Indonesian financial and national cybersecurity regulatory frameworks.'
    },
    {
      icon: <Eye size={20} strokeWidth={1.5} />,
      title: 'Jakarta SOC Operations',
      desc: '24/7 Security Operations Center monitoring with real-time threat intelligence and rapid incident response.'
    },
    {
      icon: <FileCheck size={20} strokeWidth={1.5} />,
      title: 'ISO 27001 Readiness',
      desc: 'Structured advisory and gap analysis to achieve ISO 27001 certification across enterprise environments.'
    },
    {
      icon: <Crosshair size={20} strokeWidth={1.5} />,
      title: 'Penetration Testing',
      desc: 'Rigorous offensive security assessments targeting Indonesia-specific infrastructure and digital assets.'
    }
  ];

  const advantages = [
    {
      icon: <Globe size={20} strokeWidth={1.5} />,
      title: 'Global-Scale Delivery',
      desc: 'Access to a Singapore-led principal network with delivery capabilities spanning the full ASEAN corridor.'
    },
    {
      icon: <Users2 size={20} strokeWidth={1.5} />,
      title: 'Indonesia-First Execution',
      desc: 'On-ground teams in Jakarta fluent in OJK, BSSN, and local enterprise procurement frameworks.'
    },
    {
      icon: <Layers size={20} strokeWidth={1.5} />,
      title: 'Full-Stack Integration',
      desc: 'End-to-end capabilities from infrastructure architecture to cybersecurity and digital transformation.'
    },
    {
      icon: <CheckCircle2 size={20} strokeWidth={1.5} />,
      title: 'Compliance-First Posture',
      desc: 'Every engagement is structured around regulatory compliance — OJK, ISO 27001, and BSSN standards.'
    }
  ];

  return (
    <section className="security-section" id="security">
      <div className="blueprint-pattern-dark"></div>
      <div className="container">
        
        {/* Header Area */}
        <div className="security-header">
          <span className="security-kicker">Unified Security &amp; Regional Scale</span>
          <h2 className="security-header-title">
            Enterprise Trust, <span className="text-brand-gradient">Engineered for ASEAN</span>
          </h2>

          {/* Interactive Modern Segmented Control Switcher */}
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

        {/* Tab Contents */}
        <div className="security-tab-wrapper">
          
          {/* TAB 1: SECURITY */}
          {activeTab === 'security' && (
            <div className="security-tab-layout active-fade-in">
              {/* Left Column: Image Showcase */}
              <div className="security-visual">
                <div className="blueprint-grid-visual"></div>
                <div className="blueprint-grid-axis axis-h"></div>
                <div className="blueprint-grid-axis axis-v"></div>

                <div className="security-showcase-frame">
                  <img
                    src={indonesiaSecurityImg}
                    alt="Jakarta Cybersecurity Operations Center"
                    className="security-showcase-img"
                  />
                  <div className="security-frame-overlay"></div>
                  <div className="security-floating-indicator">
                    <span className="indicator-dot blinking"></span>
                    <span className="indicator-label">SOC Active — Jakarta, ID</span>
                  </div>
                </div>
                <div className="security-visual-border-accent"></div>
              </div>

              {/* Right Column: Text & Service Cards */}
              <div className="security-content">
                <span className="tab-label-kicker">Cybersecurity &amp; Compliance</span>
                <h3 className="tab-title">
                  Enterprise Security <span className="highlight-text">Built for Indonesia</span>
                </h3>
                <div className="heritage-accent-bar"></div>
                <p className="tab-desc-paragraph">
                  From Jakarta-based SOC operations to BSSN compliance advisory — we provide 
                  comprehensive cybersecurity architecture for high-compliance Indonesian enterprises.
                </p>

                <div className="tab-cards-grid">
                  {securityServices.map((service, i) => (
                    <div className="combined-feature-card glass-panel" key={i}>
                      <div className="combined-card-icon-box">{service.icon}</div>
                      <div className="combined-card-info">
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ADVANTAGE */}
          {activeTab === 'advantage' && (
            <div className="security-tab-layout active-fade-in">
              {/* Left Column: Image Showcase */}
              <div className="security-visual">
                <div className="blueprint-grid-visual"></div>
                <div className="blueprint-grid-axis axis-h"></div>
                <div className="blueprint-grid-axis axis-v"></div>

                <div className="security-showcase-frame">
                  <img
                    src={advantageImg}
                    alt="AxiomRise – Global Workforce ASEAN"
                    className="security-showcase-img"
                  />
                  <div className="security-frame-overlay"></div>
                  <div className="security-floating-indicator indicator-gold">
                    <span className="indicator-dot blinking-gold"></span>
                    <span className="indicator-label gold-lbl">Regional Network Corridor</span>
                  </div>
                </div>
                <div className="security-visual-border-accent border-gold"></div>
              </div>

              {/* Right Column: Text & Service Cards */}
              <div className="security-content">
                <span className="tab-label-kicker kicker-gold">Global Workforce &amp; Local Edge</span>
                <h3 className="tab-title">
                  The <span className="highlight-text-gold">AxiomRise Advantage</span>
                </h3>
                <div className="heritage-accent-bar"></div>
                <p className="tab-desc-paragraph">
                  We deliver the scale of a global workforce combined with deep regional knowledge 
                  of the ASEAN market. Our positioning bridges Singapore's standards with 
                  Indonesia's fastest growing enterprises.
                </p>

                <div className="tab-cards-grid">
                  {advantages.map((advantage, i) => (
                    <div className="combined-feature-card glass-panel card-gold-hover" key={i}>
                      <div className="combined-card-icon-box icon-gold-box">{advantage.icon}</div>
                      <div className="combined-card-info">
                        <h4>{advantage.title}</h4>
                        <p>{advantage.desc}</p>
                      </div>
                    </div>
                  ))}
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
