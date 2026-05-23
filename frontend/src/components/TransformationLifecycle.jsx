import React from 'react';
import './TransformationLifecycle.css';
import { MessageSquare, Search, Rocket, Eye } from 'lucide-react';

const TransformationLifecycle = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We listen carefully to understand your challenges, goals, and vision in depth.",
      icon: <MessageSquare size={24} />
    },
    {
      num: "02",
      title: "Analysis & Strategy",
      desc: "Our experts design a bespoke solution tailored to your exact context and objectives.",
      icon: <Search size={24} />
    },
    {
      num: "03",
      title: "Implementation",
      desc: "Flawless execution at the highest professional standard — on time and within budget.",
      icon: <Rocket size={24} />
    },
    {
      num: "04",
      title: "Review & Support",
      desc: "Ongoing monitoring and after-service support for consistently optimized performance.",
      icon: <Eye size={24} />
    }
  ];

  return (
    <section className="section lifecycle-section container">
      <div className="lifecycle-header">
        <h2 className="glow-text">The Transformation Lifecycle</h2>
        <p className="lifecycle-subtitle">Four clear steps from first conversation to lasting results.</p>
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
  );
};

export default TransformationLifecycle;
