import React from 'react';

const mockCarouselData = [
  {
    id: 1,
    imageA: "https://images.unsplash.com/photo-1594938298598-70f70df85c22?q=80&w=800",
    imageB: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800",
    title: "Item 1"
  },
  {
    id: 2,
    imageA: "https://images.unsplash.com/photo-1606240298038-f9960ffbb70a?q=80&w=800",
    imageB: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800",
    title: "Item 2"
  },
  {
    id: 3,
    imageA: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=800",
    imageB: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
    title: "Item 3"
  },
  {
    id: 4,
    imageA: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
    imageB: "https://images.unsplash.com/photo-1550614000-4b95d4ebf04d?q=80&w=800",
    title: "Item 4"
  },
  {
    id: 5,
    imageA: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=800",
    imageB: "https://images.unsplash.com/photo-1485230895905-eb8b26117d69?q=80&w=800",
    title: "Item 5"
  }
];

export default function HorizontalCarousel({ onProductSelect }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f4f0] py-20 flex flex-col items-center">
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
      className="relative h-[450px] w-[350px] flex-shrink-0 mx-4 cursor-pointer overflow-hidden rounded-xl bg-gray-200"
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