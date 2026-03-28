import React, { useRef, useState } from 'react';

export default function ProductDetail({ product, onBack }) {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // High performance custom cursor tracking
  const handleMouseMove = (e) => {
    if (!cursorRef.current || !containerRef.current) return;
    const { clientX, clientY } = e;
    cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
  };

  // Gracefully fallback to some default values in case the component loads without a product
  const title = product ? product.title : "Exclusive Series";
  const heroImage = product ? product.imageB : "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1400";

  return (
    <section className="min-h-screen bg-[#f4f4f0] flex flex-col items-center justify-center p-8">
      
      {/* Back Button */}
      <div className="w-full max-w-[500px] mb-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-[#1c1c1c] transition-colors cursor-pointer relative z-50 uppercase tracking-widest text-xs font-bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Carousel
        </button>
      </div>

      <div className="mb-8 text-center pt-8">
        <h1 className="text-4xl font-bold uppercase tracking-tight text-[#1c1c1c]">{title}</h1>
        <p className="text-gray-600 mt-2 tracking-wide text-sm">Hover over the image to inspect</p>
      </div>

      {/* Main Image Container */}
      <div 
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-[500px] aspect-[4/5] bg-gray-300 overflow-hidden cursor-none rounded-sm shadow-2xl"
      >
        <img 
          src={heroImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />

        {/* Custom Cursor Element */}
        <div 
          ref={cursorRef}
          className={`fixed top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center transition-opacity duration-300 ease-out ${
            isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transform: 'translate3d(-100px, -100px, 0)' }}
        >
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md text-[#1c1c1c] px-5 py-2.5 rounded-full shadow-xl border border-white/20 -translate-x-1/2 -translate-y-1/2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase">Model wears size OS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
