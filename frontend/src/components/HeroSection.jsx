import React, { useRef, useEffect } from 'react';
import './HeroSection.css';
import { ShieldCheck, Briefcase, Layers, ArrowUpRight } from 'lucide-react';
import jakartaOfficeImg from '../assets/jakarta_b2b_office.png';
import securityImg from '../assets/indonesia_security_center.png';
import consultingImg from '../assets/business_consulting.png';
import aseanImg from '../assets/asean_enterprise_corridor.png';

const HeroSection = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const scrollToMiddle = () => {
      if (cardsContainerRef.current && window.innerWidth <= 640) {
        const container = cardsContainerRef.current;
        const cardsElements = container.children;
        if (cardsElements.length > 1) {
          const secondCard = cardsElements[1];
          const containerWidth = container.offsetWidth;
          const cardWidth = secondCard.offsetWidth;
          const cardLeft = secondCard.offsetLeft;
          const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2;
          container.scrollTo({
            left: scrollPosition,
            behavior: 'auto'
          });
        }
      }
    };

    const timer = setTimeout(scrollToMiddle, 150);

    window.addEventListener('resize', scrollToMiddle);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', scrollToMiddle);
    };
  }, []);

  const cards = [
    {
      label: 'Enterprise Consulting',
      isNew: false,
      title: 'HR Strategy & B2B Scale',
      desc: 'Organizational frameworks, talent pipeline, and regional compliance.',
      icon: <Briefcase size={18} />,
      img: consultingImg,
      imgAlt: 'AxiomRise Business Consulting',
      accent: 'blue',
    },
    {
      label: 'Cybersecurity',
      isNew: true,
      title: 'OJK & BSSN Compliance',
      desc: "Protect your enterprise with Jakarta-based SOC and Indonesia's compliance frameworks.",
      icon: <ShieldCheck size={18} />,
      img: securityImg,
      imgAlt: 'AxiomRise Security Operations',
      accent: 'gold',
    },
    {
      label: 'Regional Reach',
      isNew: false,
      title: 'ASEAN Enterprise Scale',
      desc: 'Singapore-led delivery with deep Indonesia-first execution and on-ground teams.',
      icon: <Layers size={18} />,
      img: aseanImg,
      imgAlt: 'AxiomRise ASEAN Corridor',
      accent: 'terracotta',
    },
  ];

  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow-top" />
      <div className="hero-glow-bottom-left" />

      <div className="hero-container container">
        {/* ── Centered Headline Block ── */}
        <div className="hero-top">
          <div className="hero-kicker-badge">
            • PT AXIOMRISE TEKNOLOGI INDONESIA
          </div>

          <h1 className="hero-title">
            Bridging Corporate <span className="text-brand">Trust</span><br />
            with Deep-Tech Capabilities.
          </h1>

          <p className="hero-description">
            Empowering ASEAN enterprise architectures with premium consulting,
            cyber-resiliency frameworks, and high-performance digital business models.
          </p>
        </div>

        {/* ── 3-Column Feature Cards ── */}
        <div className="hero-cards-row" ref={cardsContainerRef}>
          {cards.map((card, idx) => (
            <div key={idx} className={`hero-feature-card accent-${card.accent}`}>
              <div className="hero-card-left">
                <div className="hero-card-label-row">
                  <div className={`hero-card-icon-wrap accent-icon-${card.accent}`}>
                    {card.icon}
                  </div>
                  <span className="hero-card-label">{card.label}</span>
                  {card.isNew && <span className="hero-card-new-badge">NEW</span>}
                </div>
                <h3 className="hero-card-title">{card.title}</h3>
                <p className="hero-card-desc">{card.desc}</p>
              </div>
              <div className="hero-card-right">
                <img
                  src={card.img}
                  alt={card.imgAlt}
                  className="hero-card-img"
                />
                <div className="hero-card-img-overlay" />
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA Strip ── */}
        <div className="hero-bottom-cta">
          <span className="hero-bottom-cta-text">
            Ready to transform your enterprise architecture.
          </span>
          <a href="#contact" className="hero-bottom-cta-link">
            Schedule a Consultation <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
