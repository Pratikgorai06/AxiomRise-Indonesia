import React from 'react';
import './CapabilitiesSection.css';
import { Briefcase, Factory, ShieldAlert, ShoppingBag, Truck, Lightbulb, UserPlus, Handshake, Activity } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Business Consulting",
      desc: "Strategic analysis and actionable plans for sustainable growth.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Manufacturing & Retail",
      desc: "Industrial IT support, systems integration, OT/IT convergence, and security.",
      icon: <Factory size={32} />
    },
    {
      title: "Cybersecurity",
      desc: "End-to-end security: assessments, compliance, and monitoring.",
      icon: <ShieldAlert size={32} />
    },
    {
      title: "E-Commerce Solutions",
      desc: "Full-stack platforms, digital storefronts, and marketplace integration.",
      icon: <ShoppingBag size={32} />
    },
    {
      title: "Logistics Management",
      desc: "Supply chain optimization, fleet management, last-mile delivery.",
      icon: <Truck size={32} />
    },
    {
      title: "Innovation & Technology",
      desc: "Digital transformation and cutting-edge tech for competitive advantage.",
      icon: <Lightbulb size={32} />
    },
    {
      title: "HR Development",
      desc: "Training and capability building to future-proof your workforce.",
      icon: <UserPlus size={32} />
    },
    {
      title: "Strategic Partnership",
      desc: "Beneficial alliances to expand your network and opportunities.",
      icon: <Handshake size={32} />
    },
    {
      title: "Healthcare",
      desc: "Specialized enterprise IT implementation and management.",
      icon: <Activity size={32} />
    }
  ];

  return (
    <section className="section capabilities-section container">
      <div className="capabilities-header">
        <h2 className="glow-text">The Capability Matrix: <span className="text-muted">End-to-End Enterprise Solutions</span></h2>
      </div>
      
      <div className="matrix-grid">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="matrix-card glass-panel">
            <div className="matrix-icon">
              {cap.icon}
            </div>
            <div className="matrix-content">
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
