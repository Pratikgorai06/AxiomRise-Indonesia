import React from 'react';
import './PartnersSection.css';
import cyverionLogo from '../assets/Partner logo/cyverion.png';
import starshieldLogo from '../assets/Partner logo/starshield.png';
import incallLogo from '../assets/Partner logo/axiomrise.png';

const PartnersSection = () => {
  const logos = [
    { src: cyverionLogo, alt: "Cyverion" },
    { src: starshieldLogo, alt: "Star Shield" },
    { src: incallLogo, alt: "inCall Systems" }
  ];

  // Duplicate logos multiple times to ensure a seamless infinite scrolling width
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="partners-section-wrapper" id="partners">
      <div className="blueprint-pattern"></div>
      
      <section className="partners-section container">
        <div className="partners-header">
          <span className="partners-kicker">Unified Strengths</span>
          <h2 className="partners-header-title">
            Our Partner <span className="text-primary-solid">Ecosystem</span>
          </h2>
          <p className="partners-subtitle">
            Seamlessly integrated with industry-leading global technology and ASEAN consulting networks.
          </p>
        </div>
      </section>
      
      {/* Auto-scrolling infinite logo marquee */}
      <div className="partners-marquee-container">
        <div className="partners-marquee-track">
          {marqueeLogos.map((logo, idx) => (
            <div key={idx} className="partner-logo-wrapper">
              <img src={logo.src} alt={logo.alt} className="partner-logo-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
