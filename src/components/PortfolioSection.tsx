import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ChevronRight, ChevronLeft } from "lucide-react";

interface MediaItem {
  id: number;
  src: string;
  category: string;
  title: string;
  gridSpan: string; // for bento layout
}

export default function PortfolioSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const galleryItems: MediaItem[] = [
    {
      id: 0,
      src: "https://i.ibb.co/B24nQn1p/IMG-20260516-WA0040.jpg",
      category: "Handmade Jewelry",
      title: "pearlkitty — Original Creations",
      gridSpan: "col-span-12 md:col-span-12 lg:col-span-6 h-[340px]",
    },
    {
      id: 1,
      src: "https://i.ibb.co/Lz12ShPG/IMG-20260516-WA0059.jpg",
      category: "pearlkitty",
      title: "Pop-Up Events & Handmade Craft Workshops",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[340px]",
    },
    {
      id: 2,
      src: "https://i.ibb.co/nMJrytpx/IMG-20260525-WA0020.jpg",
      category: "Writing",
      title: "Magazine Features & Published Layouts",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4 h-[280px]",
    },
    {
      id: 3,
      src: "https://i.ibb.co/xQM12Dm/IMG-20260525-WA0021.jpg",
      category: "Content",
      title: "Written Articles, Copywriting & Analytical Essays",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4 h-[280px]",
    },
    {
      id: 4,
      src: "https://i.ibb.co/3ySq13tm/IMG-20260516-WA0035.jpg",
      category: "Social Media",
      title: "Socially Active — Brand Strategy & Visual curation",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4 h-[280px]",
    },
    {
      id: 5,
      src: "https://i.ibb.co/tT36w9ps/IMG-20260516-WA0034.jpg",
      category: "Community",
      title: "Elegant Muslimah — Organic Visual Brand Graphics",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-5 h-[320px]",
    },
    {
      id: 6,
      src: "https://i.ibb.co/cKPKH5Lg/IMG-20260525-WA0025.jpg",
      category: "Custom Merch",
      title: "Local Merchandise Design & Production Coordinate",
      gridSpan: "col-span-12 md:col-span-12 lg:col-span-7 h-[320px]",
    },
    {
      id: 7,
      src: "https://i.ibb.co/3Y8gX7C5/IMG-20260516-WA0038.jpg",
      category: "Brand Identity",
      title: "pearlkitty — Design Guidelines & Graphics",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[290px]",
    },
    {
      id: 8,
      src: "https://i.ibb.co/gZyrvcrx/IMG-20260516-WA0024.jpg",
      category: "Youth Outreach",
      title: "Mu20 Youth Program Promotional Material",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-6 h-[290px]",
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeId === null) return;
    setActiveId((activeId + 1) % galleryItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeId === null) return;
    setActiveId((activeId - 1 + galleryItems.length) % galleryItems.length);
  };

  const activeItem = activeId !== null ? galleryItems.find((i) => i.id === activeId) : null;

  return (
    <section
      id="portfolio"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#105666]/10 to-transparent overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col text-left">
        <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#EC9C9D] mb-3">
          CREATIVE WORK
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#F7F4D5] mb-12">
          Endeavours & <span className="italic text-[#EC9C9D]">Creations</span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5 auto-rows-auto w-full">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className={`${item.gridSpan} relative bg-[#105666]/10 border border-[#D3968C]/15 overflow-hidden group cursor-pointer transition-all duration-500 hover:border-[#EC9C9D] hover:shadow-2xl shadow-black/20`}
              onClick={() => setActiveId(item.id)}
            >
              {/* Media Image with strict Referrer checking */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.0] group-hover:contrast-[1.12]"
                referrerPolicy="no-referrer"
              />

              {/* Underlying Gradient & Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-[#0A3323]/95 via-[#0A3323]/70 to-transparent flex flex-col justify-end p-6 text-left opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#EC9C9D] mb-1.5 font-bold">
                  {item.category}
                </span>
                <h4 className="font-serif text-base sm:text-lg text-[#F7F4D5]/95 leading-snug font-semibold mt-0.5 group-hover:text-white transition-colors">
                  {item.title}
                </h4>

                {/* Micro hovering eye icon indicator */}
                <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 text-[#EC9C9D]">
                  <Eye size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
            onClick={() => setActiveId(null)}
          >
            {/* Close Button top-right */}
            <button
              onClick={() => setActiveId(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white transition-all cursor-pointer z-[1010]"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Navigation Handles */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-black/40 border border-white/10 text-white/60 hover:text-white hover:bg-black/80 transition-all cursor-pointer z-[1010]"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-black/40 border border-white/10 text-white/60 hover:text-white hover:bg-black/80 transition-all cursor-pointer z-[1010]"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-8 bg-[#0c2e36] border border-[#D3968C]/20 p-6 md:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Display */}
              <div className="w-full md:w-3/5 max-h-[70vh] flex items-center justify-center overflow-hidden border border-[#D3968C]/15 bg-black/50 relative">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-w-full max-h-[60vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text context panel */}
              <div className="w-full md:w-2/5 flex flex-col text-left justify-center">
                <span className="text-xs font-mono tracking-widest text-[#EC9C9D] uppercase font-bold mb-2">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#F7F4D5] font-bold leading-tight mb-4">
                  {activeItem.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#F7F4D5]/60 font-light leading-relaxed mb-6">
                  Featured project illustrating Samiya Sheikh's custom-crafted visual, tactile, or copywriting work. Handled with full logistical care from initial concept to showcase launch.
                </p>

                <div className="text-[10px] font-mono text-[#839958] flex items-center gap-2">
                  <span>✦ INDORE - MULTI DISCIPLINARY</span>
                  <span>•</span>
                  <span>MEMBER SPECIFIC</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
