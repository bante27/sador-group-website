import React from 'react';
import AboutHero from '../features/about/components/AboutHero';
import VisionMission from '../features/about/components/VisionMission';
import CoreValues from '../features/about/components/CoreValues';
import TechnologyCapabilities from '../features/about/components/TechnologyCapabilities';
import CompanyTimeline from '../features/about/components/CompanyTimeline';
import GrowthInnovation from '../features/about/components/GrowthInnovation';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export function AboutPage() {
  const schemas = [
    generateWebPageSchema(
      'About Sador Group | Technology Ecosystem & Vision',
      'Discover Sador Group’s vision, mission, core values, technology capabilities, and organizational journey in digital transformation.',
      '/about'
    ),
    generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <SEO
        title="About Sador Group | Technology Ecosystem & Vision"
        description="Discover Sador Group’s vision, mission, core values, technology capabilities, and organizational journey in digital transformation."
        path="/about"
        schema={schemas}
      />
      <AboutHero />
      <VisionMission />
      <CoreValues />
      <TechnologyCapabilities />
      <CompanyTimeline />
      <GrowthInnovation />
    </div>
  );
}

export default AboutPage;
