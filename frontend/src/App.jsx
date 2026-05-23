import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionMissionSection from './components/VisionMissionSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ITArchitectureSection from './components/ITArchitectureSection';
import SecuritySection from './components/SecuritySection';
import AdvantageSection from './components/AdvantageSection';
import TransformationLifecycle from './components/TransformationLifecycle';
import RegionalImpactSection from './components/RegionalImpactSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <CapabilitiesSection />
      <ITArchitectureSection />
      <SecuritySection />
      <AdvantageSection />
      <TransformationLifecycle />
      <RegionalImpactSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}

export default App;
