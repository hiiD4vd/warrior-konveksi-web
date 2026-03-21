import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio', 'Kontak'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 backdrop-blur-xl bg-white/70 shadow-sm border-b border-gray-100' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-clash font-semibold text-xl tracking-[0.15em] transition-colors duration-500 ${isScrolled ? 'text-[#0F1115]' : 'text-white'}`}>
          WARRIOR
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`text-sm tracking-wide font-medium transition-colors duration-300 ${
                isScrolled ? 'text-[#0F1115]/60 hover:text-[#0F1115]' : 'text-white/60 hover:text-white'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="hidden lg:block">
          <motion.a
            href="#kontak"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-7 py-3 rounded-none font-medium text-xs tracking-widest uppercase transition-all duration-300 border ${
              isScrolled 
                ? 'bg-[#0F1115] text-white border-[#0F1115] hover:bg-[#C2A878] hover:border-[#C2A878]' 
                : 'bg-white text-[#0F1115] border-white hover:bg-transparent hover:text-white'
            }`}
          >
            Minta Penawaran
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
             <X size={28} className={isScrolled ? 'text-[#0F1115]' : 'text-[#0F1115]'} />
          ) : (
             <Menu size={28} className={isScrolled ? 'text-[#0F1115]' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col space-y-6 border-t border-gray-100"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-lg tracking-wide font-medium text-[#0F1115]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#kontak" className="bg-[#0F1115] text-white px-6 py-4 font-medium text-xs tracking-widest text-center uppercase block mt-4">
            Minta Penawaran
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
