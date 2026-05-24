import React from 'react';
import './AboutSection.css';
import { Globe, Users, TrendingUp, Shield } from 'lucide-react';
import teamImg from '../assets/indonesian_b2b_team.png';

const AboutSection = () => {
  return (
    <section className="section about-section" id="about">
      <div className="blueprint-pattern"></div>
      
      <div className="about-container container">
        {/* Row 1: Narrative & Team Showcase Frame */}
        <div className="about-main-grid">
          {/* Left: Text Statements */}
          <div className="about-content">
            <span className="about-kicker">Local Integration & Regional Scale</span>
            <h2 className="about-section-title">
              Your Anchored Hub for <br />
              <span className="highlight">ASEAN Enterprise Technology</span>
            </h2>
            <div className="heritage-accent-bar"></div>
            
            <p className="about-description">
              PT AxiomRise Teknologi Indonesia represents the strategic intersection of Singapore's 
              high-performance corporate IT standards and localized Indonesian execution. We help enterprise 
              operators scale securely while maintaining complete regulatory compliance.
            </p>
            <p className="about-description-secondary">
              By aligning with our regional operational network, B2B companies gain access to seasoned principal 
              consultants, certified cybersecurity architects, and elite full-stack integration frameworks tailored 
              specifically to the complex demands of the ASEAN market.
            </p>
          </div>
          
          {/* Right: Framed B2B Executive Team Image */}
          <div className="about-visual-frame">
            <img 
              src={teamImg} 
              alt="AxiomRise - Professional B2B Team Indonesia" 
              className="about-visual-img"
            />
            <div className="about-visual-overlay"></div>
            <div className="about-visual-border-accent"></div>
          </div>
        </div>
        
        {/* Row 2: Premium 4-Box Horizontal Stats Showcase */}
        <div className="about-stats-row">
          {/* Stat Box 1: Partners */}
          <div className="about-stat-card">
            <div className="about-stat-icon-wrapper">
              <Globe size={22} />
            </div>
            <div>
              <span className="about-stat-number">15+</span>
              <span className="about-stat-title">ASEAN Partnerships</span>
              <p className="about-stat-desc">Strategic alliances powering regional expansion and B2B scale.</p>
            </div>
          </div>
          
          {/* Stat Box 2: Uptime */}
          <div className="about-stat-card">
            <div className="about-stat-icon-wrapper">
              <TrendingUp size={22} />
            </div>
            <div>
              <span className="about-stat-number">99.9%</span>
              <span className="about-stat-title">Systems Uptime</span>
              <p className="about-stat-desc">Continuous high-performance cloud architectures running mission-critical solutions.</p>
            </div>
          </div>
          
          {/* Stat Box 3: Protected Transactions */}
          <div className="about-stat-card">
            <div className="about-stat-icon-wrapper">
              <Shield size={22} />
            </div>
            <div>
              <span className="about-stat-number">250M+</span>
              <span className="about-stat-title">Protected Hits</span>
              <p className="about-stat-desc">Active security monitoring safeguards database connections daily.</p>
            </div>
          </div>
          
          {/* Stat Box 4: Experts */}
          <div className="about-stat-card">
            <div className="about-stat-icon-wrapper">
              <Users size={22} />
            </div>
            <div>
              <span className="about-stat-number">100%</span>
              <span className="about-stat-title">Local Compliance</span>
              <p className="about-stat-desc">Rigorous regulatory compliance alignment targeting Indonesian enterprises.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


