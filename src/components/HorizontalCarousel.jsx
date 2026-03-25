import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HorizontalCarousel() {
  // 1. Ref untuk mendeteksi area mana yang akan memicu efek scroll ini
  const targetRef = useRef(null);

  // 2. Mengambil data seberapa jauh user sudah men-scroll area targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 3. Mengubah nilai scroll (0 sampai 1) menjadi pergeseran ke kiri (0% sampai -75%)
  // Angka -75% ini bisa disesuaikan tergantung seberapa banyak gambar yang kamu punya
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    // Wrapper luar: h-[300vh] memberikan ruang agar user butuh waktu lama untuk scroll ke bawah
    <section ref={targetRef} className="relative h-[300vh] bg-[#f4f4f0]">
      
      {/* Area sticky: menempel di layar penuh selama user men-scroll wrapper luar */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Kontainer gambar yang akan bergeser ke kiri secara dinamis */}
        <motion.div style={{ x }} className="flex gap-8 px-10">
          
          {/* Looping data katalog/gambar di sini */}
          {items.map((item) => (
            <Card item={item} key={item.id} />
          ))}

        </motion.div>

      </div>
    </section>
  );
}

// --- KOMPONEN KARTU GAMBAR ---
const Card = ({ item }) => {
  return (
    <div className="group relative h-[500px] w-[400px] overflow-hidden bg-gray-200">
      {/* Gambar Background dengan efek zoom saat di-hover */}
      <div
        style={{
          backgroundImage: `url(${item.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
      ></div>
      
      {/* Overlay Text */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-bold text-white uppercase">{item.title}</h3>
        <p className="text-sm text-gray-200">{item.desc}</p>
      </div>
    </div>
  );
};

// --- DATA DUMMY (Nanti ganti dengan foto seragam/pabrik) ---
const items = [
  {
    id: 1,
    title: "Kemeja PDH Eksekutif",
    desc: "Bahan: American Drill",
    url: "https://images.unsplash.com/photo-1594938298598-70f70df85c22?q=80&w=800",
  },
  {
    id: 2,
    title: "Wearpack Safety",
    desc: "Standar Industri Pertambangan",
    url: "https://images.unsplash.com/photo-1606240298038-f9960ffbb70a?q=80&w=800",
  },
  {
    id: 3,
    title: "Seragam Medis",
    desc: "Anti Bakteri & Nyaman",
    url: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=800",
  },
  {
    id: 4,
    title: "Jaket Bomber Komunitas",
    desc: "Bahan: Taslan Waterproof",
    url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
  },
  {
    id: 5,
    title: "Kaos Polo Promosi",
    desc: "Bahan: Lacoste Pique",
    url: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=800",
  },
];