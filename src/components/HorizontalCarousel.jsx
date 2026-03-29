import React from 'react';

const mockCarouselData = [
  {
    id: 1,
    imageA: "/images/model (2).jpeg",
    imageB: "/images/model (1).jpeg",
    title: "Item 1"
  },
  {
    id: 2,
    imageA: "/images/model (4).jpeg",
    imageB: "/images/model (3).jpeg",
    title: "Item 2"
  },
  {
    id: 3,
    imageA: "/images/model (6).jpeg",
    imageB: "/images/model (5).jpeg",
    title: "Item 3"
  },
  {
    id: 4,
    imageA: "/images/model (8).jpeg",
    imageB: "/images/model (7).jpeg",
    title: "Item 4"
  },
  {
    id: 5,
    imageA: "/images/model (10).jpeg",
    imageB: "/images/model (9).jpeg",
    title: "Item 5"
  },
  {
    id: 6,
    imageA: "/images/model (12).jpeg",
    imageB: "/images/model (11).jpeg",
    title: "Item 6"
  },
  {
    id: 7,
    imageA: "/images/model (13).jpeg",
    imageB: "/images/model (14).jpeg",
    title: "Item 7"
  },
  {
    id: 8,
    imageA: "/images/model (16).jpeg",
    imageB: "/images/model (15).jpeg",
    title: "Item 8"
  },
  {
    id: 9,
    imageA: "/images/model (18).jpeg",
    imageB: "/images/model (17).jpeg",
    title: "Item 9"
  }
];

export default function HorizontalCarousel({ onProductSelect }) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#1c1c1c]">Latest Collections</h2>
        <p className="text-gray-500 mt-2">Explore our newest arrivals</p>
      </div>

      {/* Overflow container */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex group">
        
        {/* Track 1 */}
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {mockCarouselData.map((item) => (
            <CarouselItem key={`first-${item.id}`} item={item} onSelect={onProductSelect} />
          ))}
        </div>
        
        {/* Track 2 (Clone for infinite loop effect) */}
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {mockCarouselData.map((item) => (
            <CarouselItem key={`second-${item.id}`} item={item} onSelect={onProductSelect} />
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

const CarouselItem = ({ item, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect && onSelect(item)}
      // Removed group/item since we are now relying on the parent container's "group" class
      className="relative h-[450px] w-[253px] flex-shrink-0 mx-2 cursor-pointer overflow-hidden rounded-xl bg-gray-200"
    >
      <img 
        src={item.imageA} 
        alt={item.title} 
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-0 group-hover:opacity-0"
      />
      <img 
        src={item.imageB} 
        alt={`${item.title} alternate view`} 
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-0 group-hover:opacity-100"
      />
      
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-bold tracking-wide text-white uppercase">{item.title}</h3>
        <span className="text-sm text-gray-300 font-medium tracking-wider">Quick View</span>
      </div>
    </div>
  );
};