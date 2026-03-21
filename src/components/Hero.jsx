import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: custom * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0F1115]">
      {/* Background Image & Overlay with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2670&auto=format&fit=crop')",
          y: y1 
        }}
      />
      <div className="absolute inset-0 z-10 bg-[#0F1115]/80 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent opacity-100" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-white pt-24 flex flex-col items-center text-center">
        <div className="max-w-5xl">
          <div className="overflow-hidden mb-8">
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-clash text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] tracking-[-0.02em]"
            >
              Kemitraan Produksi <br /> <span className="text-[#C2A878] italic font-normal">Garmen Presisi.</span>
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-12 flex justify-center">
             <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-base md:text-lg xl:text-xl text-white/60 font-medium max-w-2xl leading-relaxed tracking-wide"
            >
              Standar mutu tinggi untuk seragam industri dan B2B. Kapasitas hingga 20.000+ pcs/bulan dengan presisi manufaktur modern.
            </motion.p>
          </div>

          <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a 
              href="#kontak"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white text-[#0F1115] px-10 py-4 rounded-none font-medium text-sm tracking-widest uppercase hover:bg-[#C2A878] hover:text-white transition-all duration-500"
            >
              Konsultasi Proyek
            </motion.a>
            
            <motion.a 
              href="#layanan"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border flex items-center justify-center gap-3 border-white/20 text-white px-10 py-4 rounded-none font-medium text-sm tracking-widest uppercase transition-all duration-500"
            >
              Eksplorasi Layanan
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
