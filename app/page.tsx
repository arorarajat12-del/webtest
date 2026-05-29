import AudienceSection from '@/components/AudienceSection';
import DifferenceSection from '@/components/DifferenceSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import ProofSection from '@/components/ProofSection';
import ServicesSection from '@/components/ServicesSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <WhatWeDoSection />
        <ServicesSection />
        <ProcessSection />
        <ProofSection />
        <AudienceSection />
        <DifferenceSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
