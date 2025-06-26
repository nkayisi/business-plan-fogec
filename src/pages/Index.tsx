
import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import EligibilitySection from '@/components/EligibilitySection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main>
        <Carousel />
        <EligibilitySection />
        <FeaturesSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
