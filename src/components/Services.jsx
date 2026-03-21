import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesList = [
  {
    id: '01',
    title: 'Kemeja PDH / PDL',
    desc: 'Seragam representatif dengan material drill premium yang menunjang mobilitas dan estetika korporat.',
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1500&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Wearpack Safety',
    desc: 'Pakaian keselamatan fungsional dengan fitur reflektif dan material tahan uji untuk sektor industri berat.',
    img: 'https://images.unsplash.com/photo-1621685799982-f5449fbdd4c9?q=80&w=1500&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Kaos Polo Eksklusif',
    desc: 'Esensi kasual perusahaan melalui rajutan katun presisi dan aplikasi bordir komputer resolusi tinggi.',
    img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1500&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Seragam Medis / Lab',
    desc: 'Standar higienis tinggi dengan material anti-statis dan anti-bakteri untuk area steril dan cleanroom.',
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1500&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'Jaket & Outerwear',
    desc: 'Siluet modern untuk aktivitas lapangan dan manajemen, material water-repellent dengan konstruksi kokoh.',
    img: 'https://images.unsplash.com/photo-1551028719-0c1efcf2b2fe?q=80&w=1500&auto=format&fit=crop'
  }
];

const Services = () => {
  const [activeImg, setActiveImg] = useState(servicesList[0].img);

  return (
    <section id="layanan" className="py-24 md:py-32 bg-[#0F1115] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-4xl md:text-5xl mb-6 tracking-tight">
              Kapasitas Produk.
            </h2>
            <p className="text-white/50 text-base lg:text-lg font-light tracking-wide leading-relaxed max-w-2xl">
              Portofolio produksi terintegrasi. Dari seragam representatif hingga pakaian pelindung keselamatan dengan spesifikasi teknis tinggi.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left: List */}
        <div className="lg:col-span-7 flex flex-col border-t border-white/5">
          {servicesList.map((service) => (
            <motion.div
              key={service.id}
              className="group py-10 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer relative"
              onMouseEnter={() => setActiveImg(service.img)}
              initial="initial"
              whileHover="hover"
            >
              {/* Highlight Background on Hover */}
              <div className="absolute inset-0 bg-[#FAFAFA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0 duration-700 ease-in-out" />
              
              <div className="relative z-10 flex gap-6 md:gap-12 w-full pr-8">
                <span className="font-inter text-[#C2A878] font-medium text-sm md:text-base group-hover:text-[#C2A878] transition-colors mt-2 tracking-[0.2em]">
                  {service.id}
                </span>
                <div>
                  <h3 className="font-clash text-2xl md:text-3xl font-medium mb-4 text-white group-hover:text-[#0F1115] transition-colors duration-500 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/40 group-hover:text-[#0F1115]/60 transition-colors duration-500 max-w-md text-sm md:text-base leading-relaxed font-light tracking-wide">
                    {service.desc}
                  </p>
                </div>
              </div>
              {/* Arrow */}
              <div className="relative z-10 hidden sm:flex items-center justify-center w-12 h-12 rounded-none border border-white/10 group-hover:border-[#0F1115]/10 group-hover:bg-[#0F1115] transition-all duration-500 shrink-0 overflow-hidden">
                <ArrowUpRight strokeWidth={1.5} className="text-white w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Dynamic Image */}
        <div className="lg:col-span-5 hidden lg:block h-[600px] sticky top-32">
          <div className="w-full h-full relative rounded-none overflow-hidden bg-[#1C1F26] group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={activeImg}
                alt="Service"
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover saturate-50 group-hover:saturate-100 transition-all duration-1000"
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F1115] to-transparent opacity-50" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
