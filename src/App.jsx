import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SequenceHero from './components/SequenceHero';
import TrustBanner from './components/TrustBanner';
import AboutCapacity from './components/AboutCapacity';
import Services from './components/Services';
import FooterContact from './components/FooterContact';
import HorizontalCarousel from "./components/HorizontalCarousel";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-inter text-[#0F1115]">
      <Navbar />
      {/* Conditional Rendering based on selectedProduct state */}
      {selectedProduct ? (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
      ) : (
        <>
          <SequenceHero />
          <TrustBanner />
          <AboutCapacity />
          <Services />
          <HorizontalCarousel onProductSelect={setSelectedProduct} />
          <FooterContact />
        </>
      )}
    </div>
  );
}

export default App;
