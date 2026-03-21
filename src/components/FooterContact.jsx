import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const FooterContact = () => {
  return (
    <section id="kontak" className="bg-[#FFFFFF] relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        
        {/* Left: Contact Info & Maps */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block px-4 py-1.5 border border-[#C2A878]/30 text-[#C2A878] font-medium text-xs mb-8 tracking-[0.15em] uppercase">
            Hubungi Kami
          </div>
          <h2 className="font-clash font-medium text-4xl md:text-5xl text-[#0F1115] mb-8 leading-[1.15] tracking-tight">
            Mari Konsultasikan <br /> <span className="text-[#C2A878] italic font-normal">Kebutuhan Anda.</span>
          </h2>
          <p className="text-[#0F1115]/60 text-base md:text-lg mb-16 max-w-md leading-relaxed font-light tracking-wide">
            Konsultasikan pemilihan material, rancangan desain, hingga estimasi timeline produksi dengan tim ahli kami.
          </p>

          <div className="space-y-10 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-none border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#0F1115]" size={20} strokeWidth={1.5} />
                </div>
                <div className="w-full">
                  <h4 className="font-medium text-[#0F1115] text-sm uppercase tracking-widest mb-2">Pabrik & Kantor Cikarang</h4>
                  <p className="text-[#0F1115]/60 leading-relaxed font-light text-sm mb-4">Jl. Industri Pratama Blok C1 No.12<br/>Kawasan Industri Jababeka II<br/>Bekasi, Jawa Barat 17530</p>
                  
                  {/* Embedded Google Maps (Grayscale filter to match aesthetic) */}
                  <div className="w-full h-48 border border-[#E5E7EB] overflow-hidden group">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.733575997232!2d107.12759811476945!3d-6.300589195439733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6985a1af1fffff%3A0xc0d235061cdb5e0!2sKawasan%20Pusat%20Industri%20Jababeka!5e0!3m2!1sen!2sid!4v1680153091924!5m2!1sen!2sid" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-700 pointer-events-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-none border border-[#E5E7EB] flex items-center justify-center shrink-0">
                 <Phone className="text-[#0F1115]" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-[#0F1115] text-sm uppercase tracking-widest mb-2">Telepon Resmi</h4>
                <p className="text-[#0F1115]/80 font-medium text-lg tracking-wide">0852-2278-0202</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-none border border-[#E5E7EB] flex items-center justify-center shrink-0">
                <Mail className="text-[#0F1115]" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-[#0F1115] text-sm uppercase tracking-widest mb-2">Alamat Surel</h4>
                <p className="text-[#0F1115]/80 text-base font-light tracking-wide">sales@warriorkonveksi.com</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 border border-[#E5E7EB] text-[#0F1115] flex items-center justify-center hover:bg-[#0F1115] hover:text-white transition-all duration-500">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 border border-[#E5E7EB] text-[#0F1115] flex items-center justify-center hover:bg-[#0F1115] hover:text-white transition-all duration-500">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>

        {/* Right: Lead Gen Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#FAFAFA] p-10 md:p-14 border border-[#E5E7EB] relative h-fit"
        >
          <h3 className="font-clash font-medium text-2xl text-[#0F1115] mb-10 tracking-tight">Permintaan Penawaran</h3>
          
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-[#0F1115]/60">Nama Perwakilan</label>
                <input type="text" className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-3 focus:outline-none focus:border-[#0F1115] transition-colors rounded-none placeholder-gray-400 font-light text-[#0F1115]" placeholder="Mis. John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-[#0F1115]/60">Nama Perusahaan</label>
                <input type="text" className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-3 focus:outline-none focus:border-[#0F1115] transition-colors rounded-none placeholder-gray-400 font-light text-[#0F1115]" placeholder="PT Karya Mandiri" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#0F1115]/60">Estimasi Kuantitas</label>
              <select className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-3 focus:outline-none focus:border-[#0F1115] transition-colors rounded-none text-[#0F1115] font-light appearance-none">
                <option value="">Pilih Kuantitas</option>
                <option value="50-100">50 - 100 Pcs</option>
                <option value="101-500">101 - 500 Pcs</option>
                <option value="501-2000">501 - 2000 Pcs</option>
                <option value=">2000">&gt; 2000 Pcs</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#0F1115]/60">Detail Kebutuhan</label>
              <textarea rows={3} className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-3 focus:outline-none focus:border-[#0F1115] transition-colors rounded-none resize-none placeholder-gray-400 font-light text-[#0F1115]" placeholder="Jelaskan kebutuhan spesifik Anda..."></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#0F1115] text-[#FAFAFA] py-5 mt-4 rounded-none font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#C2A878] hover:text-[#0F1115] transition-colors duration-500 flex items-center justify-center gap-4 group"
              type="button"
            >
              Kirim Pesan 
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform duration-500" />
            </motion.button>
          </form>
        </motion.div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#E5E7EB] py-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[#0F1115]/40 text-xs font-medium tracking-widest uppercase">
             &copy; 2026 Warrior Konveksi.
           </p>
           <div className="flex gap-8 text-xs text-[#0F1115]/40 font-medium tracking-widest uppercase">
              <a href="#" className="hover:text-[#0F1115] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#0F1115] transition-colors duration-300">Terms of Service</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;
