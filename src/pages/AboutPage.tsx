import React from 'react';
import AboutHero from '../features/about/components/AboutHero';
import VisionMission from '../features/about/components/VisionMission';
import CoreValues from '../features/about/components/CoreValues';
import TechnologyCapabilities from '../features/about/components/TechnologyCapabilities';
import CompanyTimeline from '../features/about/components/CompanyTimeline';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AboutHero />
      <VisionMission />
      <CoreValues />
      <TechnologyCapabilities />
      <CompanyTimeline />
    </div>
  );
}

export default AboutPage;
