import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ITArchitectureSection from './components/ITArchitectureSection';
import SecuritySection from './components/SecuritySection';
import TransformationLifecycle from './components/TransformationLifecycle';
import RegionalImpactSection from './components/RegionalImpactSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightTheme]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Smooth scroll to top for "#" or "#top"
        if (href === '#' || href === '#top') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          return;
        }
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Adjust scroll offset based on fixed navbar heights (desktop scrolled 76px, mobile scrolled 64px)
          const isMobile = window.innerWidth <= 992;
          const navbarHeight = isMobile ? 64 : 76;
          
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="app">
      <Navbar isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ITArchitectureSection />
      <SecuritySection />
      <TransformationLifecycle />
      <RegionalImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
