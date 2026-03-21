import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ShippingCalculator from './components/ShippingCalculator';
import ProcessSection from './components/ProcessSection';
import PricingTable from './components/PricingTable';
import Auth from './components/Auth';
import Footer from './components/Footer';
import SocialContact from './components/SocialContact';
import TrackingDashboard from './components/TrackingDashboard';

const HomePage = () => (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ShippingCalculator />
          <ProcessSection />
          <PricingTable />
          <section id="auth-section">
            <Auth />
    </section>
    </main>
    <Footer />
        <SocialContact />
    </div>
);

function App() {
      return (
              <BrowserRouter>
                <div className="overflow-x-hidden">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
          <Route path="/tracking" element={<TrackingDashboard />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
