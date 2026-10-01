import React from 'react'
import ServicesHero from '../components/service/ServicesHero';
import CoreServices from '../components/service/CoreServices';
import DevelopmentApproach from '../components/service/DevelopmentApproach';
import WhyMiniwix from '../components/service/WhyMiniwix';
import Technologies from '../components/service/Technologies';
import WorkPhilosophy from '../components/service/WorkPhilosophy';
import ServicesFAQ from '../components/service/ServicesFAQ';
import ServicesCTA from '../components/service/ServicesCTA';

export const metadata = {
  title: "Services | MINIWIX",
  description:
    "Web applications, Android apps, SaaS products, backend APIs, developer tools, and custom software from MINIWIX.",
};

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <CoreServices />
      <DevelopmentApproach />
      <WhyMiniwix />
      <Technologies />
      <WorkPhilosophy />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
};

export default ServicesPage;