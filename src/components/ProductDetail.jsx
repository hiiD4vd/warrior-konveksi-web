import React, { useState, useEffect } from 'react';

export default function ProductDetail({ product, onBack }) {
  // Gracefully fallback
  const title = product ? product.title : "Exclusive Series";
  const imageA = product ? product.imageA : "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1400";
  const imageB = product ? product.imageB : "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1400";

  const [activeImage, setActiveImage] = useState(imageA);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111] animate-[fadeIn_0.5s_ease-out]">
      {/* Header / Nav */}
      <div className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Catalogue
        </button>
        <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-gray-400 hidden sm:block">
          Warrior Konveksi / {title}
        </span>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left: Interactive Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="relative w-full aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden group">
            <img 
              src={activeImage} 
              alt={title}
              key={activeImage} // force re-render for simple transition effect if needed
              className="w-full h-full object-cover object-center animate-[fadeIn_0.3s_ease-in-out] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex gap-4">
            {[imageA, imageB].map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`w-20 md:w-24 aspect-[4/5] overflow-hidden rounded-md transition-all duration-300 ${activeImage === img ? 'opacity-100 ring-1 ring-black ring-offset-4' : 'opacity-40 hover:opacity-100'}`}
              >
                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details & Specs */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start pt-2 lg:pt-10">
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mb-4">Sample Article</p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8 text-[#111]">{title}</h1>
          
          <p className="text-gray-600 leading-relaxed mb-10 text-sm md:text-base">
            Artikel {title} adalah manifestasi dari standar produksi kualitas tinggi kami. Sebagai mitra manufaktur yang handal, kami siap memproduksi koleksi serupa yang dikustomisasi penuh sesuai dengan DNA dan identitas *brand* Anda. Tersedia dalam berbagai pilihan material premium dan teknik sablon/bordir presisi.
          </p>

          <div className="space-y-5 mb-12">
            <div className="flex flex-col border-b border-gray-100 pb-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1.5 font-semibold">Material Options</span>
              <span className="font-medium text-sm">Cotton Combed 24s / 30s, Heavyweight Cotton 235gsm, French Terry</span>
            </div>
            <div className="flex flex-col border-b border-gray-100 pb-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1.5 font-semibold">Printing & Application</span>
              <span className="font-medium text-sm">Plastisol, Rubber, High-Density Print, Custom Embroidery (Bordir Komputer)</span>
            </div>
            <div className="flex flex-col border-b border-gray-100 pb-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1.5 font-semibold">Minimum Order Quantity (MOQ)</span>
              <span className="font-medium text-sm">50 Pcs / Design / Colorway</span>
            </div>
            <div className="flex flex-col border-b border-gray-100 pb-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1.5 font-semibold">Production Lead Time</span>
              <span className="font-medium text-sm">14 - 21 Working Days (Depends on queue)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button className="flex-1 bg-[#111] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
              Consult via WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
            <button className="flex-1 border border-gray-200 text-[#111] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:border-[#111] hover:bg-gray-50 transition-colors">
              Request Quotation
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center sm:text-left mt-2 italic">
            * Harga final bergantung pada spesifikasi desain, material, dan kuantitas.
          </p>
        </div>
        
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
