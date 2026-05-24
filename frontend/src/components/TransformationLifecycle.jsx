import React from 'react';
import './TransformationLifecycle.css';
import { MessageSquare, Search, Rocket, Eye } from 'lucide-react';

const TransformationLifecycle = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "Deep-listening assessments to map out strategic business goals and technical roadblocks in depth.",
      icon: <MessageSquare size={20} />
    },
    {
      num: "02",
      title: "Analysis & Strategy",
      desc: "Bespoke design specifications establishing robust cybersecurity, databases, and network architectures.",
      icon: <Search size={20} />
    },
    {
      num: "03",
      title: "Integration & Deployment",
      desc: "High-grade technical implementation led by principal engineers—delivered on time under rigorous SLA baselines.",
      icon: <Rocket size={20} />
    },
    {
      num: "04",
      title: "Relentless Overwatch",
      desc: "Continuous active system audits, real-time threat-hunting models, and support for regional enterprise scale.",
      icon: <Eye size={20} />
    }
  ];

  return (
    <div className="lifecycle-section-wrapper" id="lifecycle">
      <div className="blueprint-pattern-dark"></div>
      
      <section className="lifecycle-section container">
        <div className="lifecycle-header">
          <span className="lifecycle-kicker">Organizational Frameworks</span>
          <h2 className="lifecycle-header-title">
            The Transformation <span className="text-glow">Lifecycle</span>
          </h2>
          <p className="lifecycle-subtitle">
            A meticulous four-stage B2B technical journey from discovery to resilient scaled operations.
          </p>
        </div>
        
        <div className="lifecycle-timeline">
          {/* Horizontal glowing line connecting the steps */}
          <div className="timeline-line"></div>
          
          <div className="lifecycle-steps">
            {steps.map((step, idx) => (
              <div key={idx} className="lifecycle-step">
                
                {/* Connecting node on the timeline line */}
                <div className="timeline-node">
                  <div className="timeline-node-inner"></div>
                </div>
                
                <div className="step-card glass-panel">
                  <div className="step-card-header">
                    <span className="step-number">{step.num}</span>
                    <div className="step-icon">
                      {step.icon}
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransformationLifecycle;
