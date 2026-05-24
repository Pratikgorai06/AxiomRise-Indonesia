import React from 'react';
import './CapabilitiesSection.css';
import { Briefcase, Factory, ShieldAlert, ShoppingBag, Truck, Lightbulb, UserPlus, Handshake, Activity } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Business Consulting",
      desc: "Strategic organizational analysis, regional market readiness, and actionable B2B scaling frameworks.",
      icon: <Briefcase size={26} />
    },
    {
      title: "Manufacturing & Retail Support",
      desc: "Industrial IT system optimization, OT/IT convergence models, database resilience, and shop floor security.",
      icon: <Factory size={26} />
    },
    {
      title: "Cybersecurity Architectures",
      desc: "Relentless protection frameworks: security testing, ISO alignment, secure database auditing, and active monitoring.",
      icon: <ShieldAlert size={26} />
    },
    {
      title: "E-Commerce Integrations",
      desc: "Enterprise-grade transactions portals, customized secure checkout grids, and high-performance databases.",
      icon: <ShoppingBag size={26} />
    },
    {
      title: "Logistics Optimization",
      desc: "Real-time fleet telemetry architectures, secure supply-chain pipelines, and automated last-mile integrations.",
      icon: <Truck size={26} />
    },
    {
      title: "Innovation Engineering",
      desc: "Futuristic digital frameworks, cloud native deployments, and next-generation API systems integration.",
      icon: <Lightbulb size={26} />
    },
    {
      title: "HR Strategy & Dev",
      desc: "Talent pipeline architecture, technical capacity building, and digital capability training for workforces.",
      icon: <UserPlus size={26} />
    },
    {
      title: "Strategic Partnerships",
      desc: "High-value corporate integrations, multi-lateral alliances, and secure digital networks across ASEAN.",
      icon: <Handshake size={26} />
    },
    {
      title: "Healthcare Architectures",
      desc: "Specialized high-compliance hospital systems management, medical database hardening, and local compliance seals.",
      icon: <Activity size={26} />
    }
  ];

  return (
    <div className="capabilities-section-wrapper" id="capabilities">
      <div className="blueprint-pattern-dark"></div>
      
      <section className="capabilities-section container">
        <div className="capabilities-header">
          <span className="capabilities-kicker">Integrated B2B Portfolio</span>
          <h2 className="capabilities-header-title">
            The Capability <span className="text-glow">Matrix</span>
          </h2>
          <p className="capabilities-subtitle">
            Premium enterprise consulting, structural IT design, and uncompromising cybersecurity architectures.
          </p>
        </div>
        
        <div className="matrix-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="matrix-card glass-panel">
              <div className="matrix-icon">
                {cap.icon}
              </div>
              <h3 className="matrix-card-title">{cap.title}</h3>
              <p className="matrix-card-desc">{cap.desc}</p>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesSection;

