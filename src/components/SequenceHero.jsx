import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Menggunakan sequence placeholder (Apple AirPods) karena belum ada assets pabrik.
// Untuk production, ganti string '/105/media/us...' dengan path folder '/sequence/frame_001.jpg'
const frameCount = 147;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, '0')}.jpg`;

const SequenceHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Preload images
  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
    
    return () => { isMounted = false; };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (!loaded) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    
    const setDimensions = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
    }
    setDimensions();

    const render = (progress) => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );
      
      requestAnimationFrame(() => {
        const img = images[frameIndex];
        if(!img) return;
        
        // object-fit: cover equivalent for canvas
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;  
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Memastikan gambar menjadi grayscale (kalau template sudah terlanjur berwarna, bisa dikontrol via CSS)
        context.drawImage(img, 0,0, img.width, img.height,
                          centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
        
        // Dark Overlay agar estetika hitam/emas tetap konsisten
        context.fillStyle = 'rgba(15, 17, 21, 0.85)';
        context.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    render(0);
    const unsubscribe = scrollYProgress.onChange(render);
    
    window.addEventListener('resize', () => {
       setDimensions();
       render(scrollYProgress.get());
    });
    
    return () => {
      unsubscribe();
      window.removeEventListener('resize', setDimensions);
    };
  }, [loaded, scrollYProgress, images]);

  // Animasi Teks Hero
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, -100, -100, -300]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 0.95], [1, 0, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#0F1115]">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!loaded && (
           <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-white gap-4 bg-[#0F1115]">
             <div className="w-48 h-1 bg-[#1C1F26] overflow-hidden">
                <div className="h-full bg-[#C2A878] transition-all duration-300" style={{ width: loadProgress + '%' }}></div>
             </div>
             <div className="font-clash tracking-[0.2em] text-xs text-white/50 uppercase">
               Memuat Aset Interaktif {loadProgress}%
             </div>
           </div>
        )}
        
        {/* Canvas for Image Sequence */}
        <canvas ref={canvasRef} className="w-full h-full object-cover grayscale brightness-75" />
        
        {/* Gradient Bottom for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0F1115] to-transparent z-10" />
        
        {/* Top Gradient for Navbar readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0F1115]/80 to-transparent z-10" />

        {/* Text Overlay Element */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-white flex flex-col items-center justify-center text-center pb-20 pointer-events-none pt-24"
        >
          <div className="max-w-5xl pointer-events-auto">
            <h1 className="font-clash text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] tracking-[-0.02em] mb-8">
              Kemitraan Produksi <br /> <span className="text-[#C2A878] italic font-normal">Garmen Presisi.</span>
            </h1>

            <p className="text-base md:text-lg xl:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed tracking-wide mt-6 mb-12">
              Standar mutu tinggi untuk seragam industri dan B2B. Kapasitas hingga 20.000+ pcs/bulan dengan presisi manufaktur modern.
              <br /><br />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2A878]">(Gulir perlahan ke bawah)</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#kontak" className="w-full sm:w-auto bg-white text-[#0F1115] px-10 py-4 font-medium text-xs tracking-widest uppercase hover:bg-[#C2A878] hover:text-[#0F1115] transition-all duration-500 rounded-none shadow-2xl shadow-white/5">
                Konsultasi Proyek
              </a>
              <a href="#layanan" className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 font-medium text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-500 rounded-none">
                Kapasitas Kami
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default SequenceHero;
