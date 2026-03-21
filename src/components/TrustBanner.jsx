import React from 'react';

const regions = [
  "Jababeka", "MM2100", "KIIC", "Delta Silicon", "Suryacipta", "GIIC", 
  "Jababeka", "MM2100", "KIIC", "Delta Silicon", "Suryacipta", "GIIC"
];

const TrustBanner = () => {
  return (
    <div className="bg-[#0F1115] text-white py-6 border-b border-[#1C1F26] overflow-hidden relative z-30 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-6">
        <p className="font-clash font-medium text-[#C2A878] whitespace-nowrap uppercase tracking-[0.15em] text-xs shrink-0">
          Dipercaya Oleh Kawasan:
        </p>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden w-full mask-edges justify-start">
          <div className="animate-scroll-marquee flex whitespace-nowrap items-center shrink-0 w-max">
             {regions.map((region, idx) => (
                <div key={idx} className="flex items-center px-8">
                  <span className="text-xl md:text-2xl font-clash font-medium text-white/20 uppercase tracking-[0.1em]">{region}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1C1F26] mx-8 opacity-50"></div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
    </div>
  );
};

export default TrustBanner;
