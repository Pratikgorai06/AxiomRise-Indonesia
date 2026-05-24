import React, { useState } from 'react';
import './ContactSection.css';
import { Phone, Mail, MapPin, Briefcase, ShieldAlert, Send } from 'lucide-react';

const ContactSection = () => {
  const [activePathway, setActivePathway] = useState('corporate'); // 'corporate' or 'cyber'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'consulting',
    scope: 'indonesia',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handlePathwaySelect = (pathway) => {
    setActivePathway(pathway);
    setFormData(prev => ({
      ...prev,
      interest: pathway === 'corporate' ? 'consulting' : 'security'
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', interest: activePathway === 'corporate' ? 'consulting' : 'security', scope: 'indonesia', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-section-wrapper" id="contact">
      <div className="blueprint-pattern"></div>
      
      <section className="contact-section container">
        <div className="contact-layout">
          {/* Left Column - Pathway selector & B2B Trust Details */}
          <div className="contact-content">
            <span className="contact-kicker">Connect With Us</span>
            <h2 className="contact-section-title">
              Initiate Your <br />
              <span className="highlight">Enterprise Partnership</span>
            </h2>
            
            <p className="contact-desc">
              Select your strategic pathway to connect with our dedicated corporate advisors 
              or principal technology architects.
            </p>
            
            <div className="contact-pathway-group">
              {/* Pathway 1: Corporate HR & Business */}
              <div 
                className={`contact-pathway-card ${activePathway === 'corporate' ? 'active' : ''}`}
                onClick={() => handlePathwaySelect('corporate')}
              >
                <div className="contact-pathway-icon-wrap">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3>HR Strategy & B2B Consulting</h3>
                  <p>Workforce planning, regional compliance, and corporate development.</p>
                </div>
              </div>
              
              {/* Pathway 2: Technology & Security */}
              <div 
                className={`contact-pathway-card ${activePathway === 'cyber' ? 'active' : ''}`}
                onClick={() => handlePathwaySelect('cyber')}
              >
                <div className="contact-pathway-icon-wrap">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h3>Cybersecurity & IT Architecture</h3>
                  <p>Threat auditing, infrastructure architecture, and database compliance.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Premium Cyber Glass Interactive Form */}
          <div className="contact-form-portal">
            <h3 className="contact-form-title">
              {activePathway === 'corporate' ? 'Corporate Advisory Board' : 'IT Security Desk'}
            </h3>
            <p className="contact-form-sub">
              {activePathway === 'corporate' 
                ? 'Request a consultation regarding regional HR alignment, staffing, and compliance.' 
                : 'Schedule a vulnerability audit or consult on complex enterprise network architecture.'}
            </p>
            
            {submitted ? (
              <div className="premium-glass-card" style={{ padding: '30px', textAlign: 'center', borderColor: 'var(--tech-accent-neon)' }}>
                <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>Consultation Request Submitted</h4>
                <p style={{ color: 'var(--tech-text-muted)', fontSize: '0.875rem' }}>An AxiomRise representative will respond to your corporate email within 12 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      placeholder="e.g. Budi Santoso" 
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Corporate Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      placeholder="name@company.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group-row">
                  <div className="form-field">
                    <label htmlFor="interest">Inquiry Type</label>
                    <select 
                      id="interest" 
                      name="interest" 
                      value={formData.interest} 
                      onChange={handleInputChange} 
                      className="form-input"
                    >
                      {activePathway === 'corporate' ? (
                        <>
                          <option value="consulting">Business Consulting</option>
                          <option value="hr">HR Strategy & Development</option>
                          <option value="regional">Regional ASEAN Scaling</option>
                        </>
                      ) : (
                        <>
                          <option value="security">Cybersecurity Resiliency</option>
                          <option value="architecture">Enterprise IT Architecture</option>
                          <option value="database">Database & Platform Integrations</option>
                        </>
                      )}
                    </select>
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="scope">Target Market</label>
                    <select 
                      id="scope" 
                      name="scope" 
                      value={formData.scope} 
                      onChange={handleInputChange} 
                      className="form-input"
                    >
                      <option value="indonesia">Indonesia Hub</option>
                      <option value="singapore">Singapore Region</option>
                      <option value="asean">Wider ASEAN Corridor</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-field">
                  <label htmlFor="message">Message Blueprint</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="form-input form-textarea" 
                    placeholder="Briefly describe your enterprise architecture objectives or staffing goals..." 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-tech btn-form-submit">
                  Transmit Consultation Blueprint
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;

