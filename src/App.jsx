import React from 'react';
import Navbar from './components/Navbar';
import SequenceHero from './components/SequenceHero';
import TrustBanner from './components/TrustBanner';
import AboutCapacity from './components/AboutCapacity';
import Services from './components/Services';
import FooterContact from './components/FooterContact';
import HorizontalCarousel from "./components/HorizontalCarousel";

function App() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-inter text-[#0F1115]">
      <Navbar />
      <SequenceHero />
      <TrustBanner />
      <AboutCapacity />
      <Services />
      <HorizontalCarousel />
      <FooterContact />
    </div>
  );
}

export default App;
