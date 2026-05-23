import React from 'react';
import './ContactSection.css';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section contact-section container">
      <div className="contact-layout">
        
        <div className="contact-content">
          <h2 className="glow-text">Initiate Partnership</h2>
          <p className="contact-desc">
            We're ready to help you unlock your enterprise's full potential. Contact us today for a strategic consultation.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <Phone size={28} className="glow-blue" />
            </div>
            <div className="contact-info">
              <h3>Phone</h3>
              <p className="contact-value">+6221-3156995</p>
              <p className="contact-sub">(Available Mon-Fri, 9AM-6PM WIB)</p>
            </div>
          </div>

          <div className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <Mail size={28} className="glow-blue" />
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p className="contact-value">contact@axiomrise.id</p>
              <p className="contact-value">support@axiomrise.id</p>
              <p className="contact-sub">(We respond within 24 hours)</p>
            </div>
          </div>

          <div className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <MapPin size={28} className="glow-blue" />
            </div>
            <div className="contact-info">
              <h3>Address</h3>
              <p className="contact-value">
                Jl. Taman Kebon Sirih III No.11 A,<br/>
                Tanah Abang – Jakarta Pusat,<br/>
                Indonesia
              </p>
            </div>
          </div>

          <div className="contact-card glass-panel">
            <div className="contact-icon-wrapper">
              <Globe size={28} className="glow-blue" />
            </div>
            <div className="contact-info">
              <h3>Digital Base</h3>
              <p className="contact-value">axiomrise.id</p>
              <p className="contact-sub">(Visit us online)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
