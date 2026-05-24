import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ITArchitectureSection from './components/ITArchitectureSection';
import SecuritySection from './components/SecuritySection';
import TransformationLifecycle from './components/TransformationLifecycle';
import RegionalImpactSection from './components/RegionalImpactSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ITArchitectureSection />
      <SecuritySection />
      <TransformationLifecycle />
      <RegionalImpactSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
