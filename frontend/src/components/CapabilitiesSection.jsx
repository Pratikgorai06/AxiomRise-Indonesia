import React, { useRef, useState, useEffect } from 'react';
import './CapabilitiesSection.css';
import {
  Compass, Settings, Lock, ShoppingBag,
  PackageCheck, Zap, Users2, Handshake, HeartPulse,
  ChevronLeft, ChevronRight
} from 'lucide-react';

import consultingImg from '../assets/business_consulting.png';
import manufacturingImg from '../assets/manufacturing_support.png';
import securityImg from '../assets/cybersecurity_arch.png';
import ecommerceImg from '../assets/ecommerce_int.png';
import logisticsImg from '../assets/logistics_opt.png';
import innovationImg from '../assets/innovation_eng.png';
import hrImg from '../assets/hr_strategy.png';
import partnershipImg from '../assets/strategic_partnerships.png';
import healthcareImg from '../assets/healthcare_arch.png';

const CapabilitiesSection = () => {
  const scrollContainerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('right');

  const capabilities = [
    {
      title: "Business Consulting",
      desc: "Strategic organizational analysis, regional market readiness, and actionable B2B scaling frameworks.",
      icon: <Compass size={18} />,
      img: consultingImg,
      colorClass: "blue-glow"
    },
    {
      title: "Manufacturing & Retail Support",
      desc: "Industrial IT system optimization, OT/IT convergence models, database resilience, and shop floor security.",
      icon: <Settings size={18} />,
      img: manufacturingImg,
      colorClass: "gold-glow"
    },
    {
      title: "Cybersecurity Architectures",
      desc: "Relentless protection frameworks: security testing, ISO alignment, secure database auditing, and active monitoring.",
      icon: <Lock size={18} />,
      img: securityImg,
      colorClass: "terracotta-glow"
    },
    {
      title: "E-Commerce Integrations",
      desc: "Enterprise-grade transactions portals, customized secure checkout grids, and high-performance databases.",
      icon: <ShoppingBag size={18} />,
      img: ecommerceImg,
      colorClass: "blue-glow"
    },
    {
      title: "Logistics Optimization",
      desc: "Real-time fleet telemetry architectures, secure supply-chain pipelines, and automated last-mile integrations.",
      icon: <PackageCheck size={18} />,
      img: logisticsImg,
      colorClass: "gold-glow"
    },
    {
      title: "Innovation Engineering",
      desc: "Futuristic digital frameworks, cloud native deployments, and next-generation API systems integration.",
      icon: <Zap size={18} />,
      img: innovationImg,
      colorClass: "terracotta-glow"
    },
    {
      title: "HR Strategy & Dev",
      desc: "Talent pipeline architecture, technical capacity building, and digital capability training for workforces.",
      icon: <Users2 size={18} />,
      img: hrImg,
      colorClass: "blue-glow"
    },
    {
      title: "Strategic Partnerships",
      desc: "High-value corporate integrations, multi-lateral alliances, and secure digital networks across ASEAN.",
      icon: <Handshake size={18} />,
      img: partnershipImg,
      colorClass: "gold-glow"
    },
    {
      title: "Healthcare Architectures",
      desc: "Specialized high-compliance hospital systems management, medical database hardening, and local compliance seals.",
      icon: <HeartPulse size={18} />,
      img: healthcareImg,
      colorClass: "terracotta-glow"
    }
  ];

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);

      const maxScrollLeft = scrollWidth - clientWidth;
      if (maxScrollLeft <= 0) {
        setActiveSlide(0);
        return;
      }

      const percentage = scrollLeft / maxScrollLeft;
      const index = Math.min(
        Math.round(percentage * (capabilities.length - 1)),
        capabilities.length - 1
      );
      setActiveSlide(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollState);
      updateScrollState();
      window.addEventListener('resize', updateScrollState);
    }
    return () => {
      if (container) container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  // Back-and-forth automated scrolling track with hover pause
  useEffect(() => {
    if (isHovered) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (maxScrollLeft <= 0) return;

      if (scrollDirection === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          setScrollDirection('left');
          container.scrollTo({
            left: scrollLeft - 300,
            behavior: 'smooth'
          });
        } else {
          container.scrollTo({
            left: scrollLeft + 300,
            behavior: 'smooth'
          });
        }
      } else {
        if (scrollLeft <= 15) {
          setScrollDirection('right');
          container.scrollTo({
            left: scrollLeft + 300,
            behavior: 'smooth'
          });
        } else {
          container.scrollTo({
            left: scrollLeft - 300,
            behavior: 'smooth'
          });
        }
      }
    };

    const interval = setInterval(autoScroll, 2500);
    return () => clearInterval(interval);
  }, [isHovered, scrollDirection]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (maxScrollLeft > 0) {
        const targetScrollLeft = (index / (capabilities.length - 1)) * maxScrollLeft;
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="capabilities-section-wrapper" id="capabilities">

      <section className="capabilities-section container">
        <div className="capabilities-header-row">
          <div className="capabilities-title-area">
            <span className="capabilities-kicker">Integrated B2B Portfolio</span>
            <h2 className="capabilities-header-title">
              Our Core <span className="text-glow">Capabilities</span>
            </h2>
            <p className="capabilities-subtitle">
              Premium enterprise consulting, structural IT design, and uncompromising cybersecurity architectures.
            </p>
          </div>

          <div className="capabilities-nav-buttons">
            <button
              className={`nav-arrow-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className={`nav-arrow-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="capabilities-scroll-track"
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {capabilities.map((cap, idx) => (
            <div key={idx} className="matrix-scroll-card premium-glass-card">

              {/* Card visual header (B2B Photo) with glowing outlines and corner icon badge */}
              <div className="matrix-card-visual-header">
                <img src={cap.img} alt={cap.title} className="matrix-card-photo" />
                <div className="matrix-card-grid-lines"></div>
                <div className="matrix-card-visual-glow"></div>

                {/* Translucent corner icon badge */}
                <div className={`matrix-card-icon-badge ${cap.colorClass}`}>
                  {cap.icon}
                </div>
              </div>

              {/* Text detail body */}
              <div className="matrix-card-text-body">
                <h3 className="matrix-card-title">{cap.title}</h3>
                <p className="matrix-card-desc">{cap.desc}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="capabilities-pagination-dots">
          {capabilities.map((_, idx) => (
            <button
              key={idx}
              className={`pagination-dot ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesSection;
