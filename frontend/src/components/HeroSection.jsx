import React from 'react';
import './HeroSection.css';
import { Shield, UserCheck, Cpu, ArrowRight } from 'lucide-react';
import jakartaOfficeImg from '../assets/jakarta_b2b_office.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="blueprint-pattern"></div>
      
      <div className="hero-container container">
        {/* Left Column - Authoritative Business & HR Content */}
        <div className="hero-content">
          <div className="hero-kicker-badge">
            <span className="hero-kicker-dot"></span>
            PT AxiomRise Teknologi Indonesia
          </div>
          
          <h1 className="hero-title">
            Bridging <span className="text-brand">Corporate Trust</span> <br />
            with Deep-Tech Capabilities.
          </h1>
          
          <p className="hero-description">
            Empowering ASEAN enterprise architectures with premium organizational consulting, 
            cyber-resiliency frameworks, and high-performance digital business models. We build the 
            resilient foundations for your regional scale.
          </p>
          
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">
              Explore Solutions
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary-heritage">
              Consult an Architect
            </a>
          </div>
          
          <div className="hero-trust-indicators">
            <div className="trust-item">
              <span className="trust-item-val">15+</span>
              <span className="trust-item-label">ASEAN Enterprise Partners</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-val">99.9%</span>
              <span className="trust-item-label">Security Uptime Baseline</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-val">100%</span>
              <span className="trust-item-label">Regional Compliance</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Premium Jakarta SCBD Boardroom Graphic Showcase */}
        <div className="hero-visual">
          <div className="blueprint-grid-visual">
            <div className="blueprint-grid-axis axis-h"></div>
            <div className="blueprint-grid-axis axis-v"></div>
          </div>
          
          {/* Framed SCBD Boardroom Image */}
          <div className="hero-showcase-frame">
            <img 
              src={jakartaOfficeImg} 
              alt="AxiomRise - Jakarta SCBD Boardroom" 
              className="hero-showcase-img"
            />
            <div className="hero-frame-overlay"></div>
          </div>
          
          {/* Card 1: Cyber Resilience (Neon Blue Theme) */}
          <div className="hero-floating-card card-1">
            <div className="float-icon-wrap icon-blue">
              <Shield size={20} />
            </div>
            <div>
              <div className="float-card-title">Cyber Resiliency</div>
              <div className="float-card-sub">Active Threat Mitigation</div>
            </div>
          </div>
          
          {/* Card 2: HR Strategy (Prestige Gold Theme) */}
          <div className="hero-floating-card card-2">
            <div className="float-icon-wrap icon-gold">
              <UserCheck size={20} />
            </div>
            <div>
              <div className="float-card-title">HR Strategy</div>
              <div className="float-card-sub">Talent & Capability Scale</div>
            </div>
          </div>
          
          {/* Card 3: B2B Technology (Indonesian Terracotta Theme) */}
          <div className="hero-floating-card card-3">
            <div className="float-icon-wrap icon-terracotta">
              <Cpu size={20} />
            </div>
            <div>
              <div className="float-card-title">B2B Core Scale</div>
              <div className="float-card-sub">Enterprise Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


