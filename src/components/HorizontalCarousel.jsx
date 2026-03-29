import React, { useState, useRef } from 'react';

const mockCarouselData = [
  {
    id: 1,
    imageA: "/images/model (2).png",
    imageB: "/images/model (1).png",
    title: "Item 1"
  },
  {
    id: 2,
    imageA: "/images/model (4).png",
    imageB: "/images/model (3).png",
    title: "Item 2"
  },
  {
    id: 3,
    imageA: "/images/model (6).png",
    imageB: "/images/model (5).png",
    title: "Item 3"
  },
  {
    id: 4,
    imageA: "/images/model (8).png",
    imageB: "/images/model (7).png",
    title: "Item 4"
  },
  {
    id: 5,
    imageA: "/images/model (10).png",
    imageB: "/images/model (9).png",
    title: "Item 5"
  },
  {
    id: 6,
    imageA: "/images/model (12).png",
    imageB: "/images/model (11).png",
    title: "Item 6"
  },
  {
    id: 7,
    imageA: "/images/model (13).png",
    imageB: "/images/model (14).png",
    title: "Item 7"
  },
  {
    id: 8,
    imageA: "/images/model (16).png",
    imageB: "/images/model (15).png",
    title: "Item 8"
  },
  {
    id: 9,
    imageA: "/images/model (18).png",
    imageB: "/images/model (17).png",
    title: "Item 9"
  }
];

export default function HorizontalCarousel({ onProductSelect }) {
  const [hoveredItemText, setHoveredItemText] = useState(null);
  const cursorRef = useRef(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      // Adding a slight offset to position the cursor text correctly relative to the pointer
      const x = e.clientX + 15;
      const y = e.clientY + 15;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#1c1c1c]">Latest Collections</h2>
        <p className="text-gray-500 mt-2">Explore our newest arrivals</p>
      </div>

      {/* Overflow container */}
      <div 
        className="relative w-full max-w-[100vw] overflow-hidden flex group carousel-container pb-8"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringContainer(true)}
        onMouseLeave={() => {
          setIsHoveringContainer(false);
          setHoveredItemText(null);
        }}
      >
        {/* Floating Cursor Tracker */}
        {isHoveringContainer && hoveredItemText && (
          <div 
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-50 bg-[#111] text-white px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center whitespace-nowrap"
            style={{ 
              willChange: 'transform'
            }}
          >
            {hoveredItemText}
          </div>
        )}
        
        {/* Track 1 */}
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {mockCarouselData.map((item) => (
            <CarouselItem 
              key={`first-${item.id}`} 
              item={item} 
              onSelect={onProductSelect} 
              onHoverChange={setHoveredItemText}
            />
          ))}
        </div>
        
        {/* Track 2 (Clone for infinite loop effect) */}
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {mockCarouselData.map((item) => (
            <CarouselItem 
              key={`second-${item.id}`} 
              item={item} 
              onSelect={onProductSelect}
              onHoverChange={setHoveredItemText}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

const CarouselItem = ({ item, onSelect, onHoverChange }) => {
  return (
    <div 
      onClick={() => onSelect && onSelect(item)}
      onMouseEnter={() => onHoverChange(item.title)}
      onMouseLeave={() => onHoverChange(null)}
      className="relative h-[450px] w-[253px] flex-shrink-0 mx-2 cursor-pointer overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-[1.02]"
    >
      <img 
        src={item.imageA} 
        alt={item.title} 
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img 
        src={item.imageB} 
        alt={`${item.title} alternate view`} 
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};