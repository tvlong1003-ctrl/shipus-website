import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ShippingCalculator from './components/ShippingCalculator';
import ProcessSection from './components/ProcessSection';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';
import SocialContact from './components/SocialContact';

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ShippingCalculator />
        <ProcessSection />
        <PricingTable />
      </main>
      <Footer />
      
      {/* ĐẶT Ở ĐÂY ĐỂ NÓ NỔI LÊN TRÊN CÙNG */}
      <SocialContact />
    </div>
  );
}

export default App;