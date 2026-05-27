import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PinkStarburst, PurpleStarSpiral } from "./CelestialDecals";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 overflow-hidden z-10"
    >
      {/* Absolute Decorative Floating Elements */}
      <div className="absolute top-[20%] left-[8%] animate-float-soft opacity-30 select-none pointer-events-none">
        <Sparkles className="text-[#EC9C9D] w-12 h-12" />
      </div>
      <div className="absolute bottom-[25%] left-[45%] animate-float-soft opacity-20 select-none pointer-events-none" style={{ animationDelay: '4s' }}>
        <Sparkles className="text-[#839958] w-8 h-8" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Editorial Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-[#EC9C9D] mb-4 flex items-center gap-2"
          >
            <span>✦ WELCOME TO THE WORLD OF</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95] text-[#F7F4D5]"
          >
            SAMIYA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F4D5] via-[#EC9C9D] to-[#D3968C] animate-vibrato">
              SHEIKH
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#D3968C] mt-6 mb-4 font-normal"
          >
            Dynamic Professional · Logistics · Content Marketing · Creative Founder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="font-sans text-sm md:text-base leading-relaxed text-[#F7F4D5]/70 max-w-lg mb-8 font-light"
          >
            Bridging the worlds of operations, storytelling, and entrepreneurship — from Indore to the world. Crafting narratives, organizing flows, and handcrafting treasures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#about"
              className="group flex items-center gap-3 px-8 py-4 border border-[#EC9C9D] text-[#F7F4D5] font-sans text-xs tracking-widest uppercase relative overflow-hidden transition-all duration-300 hover:text-[#0A3323] hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Sliding Background */}
              <div className="absolute inset-0 bg-[#EC9C9D] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4 text-[#EC9C9D] group-hover:text-[#0A3323] transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Creative Scrapbook Cutout Collage */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 h-[410px] md:h-[480px] relative z-10 select-none">
          {/* 1. Underlying Purple Spiral decalling */}
          <div className="absolute z-0 transform translate-x-[-15%] translate-y-[5%]">
            <PurpleStarSpiral size={320} speed={45} />
          </div>

          {/* 2. Glowy pink starburst overlapping */}
          <div className="absolute top-[2%] right-[5%] z-20">
            <PinkStarburst size={160} delay={1.5} />
          </div>

          {/* 3. Floating planet with ring construct */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-5%] right-[-2%] z-30 select-none pointer-events-none"
          >
            <svg width="105" height="105" viewBox="0 0 110 110" fill="none" className="filter drop-shadow-[0_0_20px_rgba(211,150,140,0.4)]">
              <circle cx="55" cy="55" r="32" fill="url(#planetG)" opacity="0.95" />
              <ellipse cx="55" cy="55" rx="55" ry="12" fill="none" stroke="#839958" strokeWidth="1.5" opacity="0.75" transform="rotate(-15 55 55)" />
              <circle cx="45" cy="45" r="5" fill="#D3968C" opacity="0.4" />
              <circle cx="68" cy="62" r="3" fill="#F7F4D5" opacity="0.3" />
              <defs>
                <radialGradient id="planetG" cx="40%" cy="35%" r="70%">
                  <stop offset="0%" stopColor="#EC9C9D" />
                  <stop offset="50%" stopColor="#105666" />
                  <stop offset="100%" stopColor="#0A3323" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>

          {/* 4. Left floating gradient mushroom */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[2%] left-[-5%] z-30 pointer-events-none"
          >
            <svg width="42" height="52" viewBox="0 0 45 55" fill="none" className="filter drop-shadow-[0_0_8px_rgba(236,156,157,0.35)]">
              <ellipse cx="22.5" cy="22" rx="20" ry="13" fill="#EC9C9D" opacity="0.8" />
              <ellipse cx="22.5" cy="22" rx="15" ry="8" fill="#F7F4D5" opacity="0.45" />
              <circle cx="14" cy="20" r="2.5" fill="#F7F4D5" opacity="0.8" />
              <circle cx="28" cy="17" r="2" fill="#F7F4D5" opacity="0.6" />
              <rect x="19" y="32" width="7" height="16" rx="3.5" fill="#D3968C" opacity="0.85" />
            </svg>
          </motion.div>

          {/* 5. Right floating gradient mushroom (scaled down, mossy) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-[10%] right-[-4%] z-30 scale-75 pointer-events-none"
          >
            <svg width="42" height="52" viewBox="0 0 45 55" fill="none" className="filter drop-shadow-[0_0_8px_rgba(131,153,88,0.35)]">
              <ellipse cx="22.5" cy="22" rx="20" ry="13" fill="#839958" opacity="0.85" />
              <circle cx="15" cy="18" r="2.5" fill="#F7F4D5" opacity="0.6" />
              <circle cx="27" cy="21" r="1.5" fill="#F7F4D5" opacity="0.5" />
              <rect x="19" y="32" width="7" height="16" rx="3.5" fill="#105666" opacity="0.8" />
            </svg>
          </motion.div>

          {/* 6. Primary Portrait frame featuring Samiya Sheikh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.7 }}
            className="relative w-[260px] h-[340px] md:w-[280px] md:h-[370px] z-10 group"
          >
            {/* Elegant thin frame outline and corners */}
            <div className="absolute inset-0 border border-[#D3968C]/35 transform scale-[1.015] pointer-events-none" />

            {/* Photo frame corners */}
            <div className="absolute top-[-6px] left-[-6px] w-[18px] h-[18px] border-t-2 border-l-2 border-[#EC9C9D] z-20 pointer-events-none" />
            <div className="absolute top-[-6px] right-[-6px] w-[18px] h-[18px] border-t-2 border-r-2 border-[#EC9C9D] z-20 pointer-events-none" />
            <div className="absolute bottom-[-6px] left-[-6px] w-[18px] h-[18px] border-b-2 border-l-2 border-[#EC9C9D] z-20 pointer-events-none" />
            <div className="absolute bottom-[-6px] right-[-6px] w-[18px] h-[18px] border-b-2 border-r-2 border-[#EC9C9D] z-20 pointer-events-none" />

            {/* actual high-end zoomable image inside frame */}
            <div className="w-full h-full overflow-hidden border border-[#D3968C]/40 bg-[#0c2e36] flex items-center justify-center">
              <img
                src="https://i.ibb.co/3mGZsb90/IMG-20260516-WA0030.jpg"
                alt="Samiya Sheikh - Logistics, Content Strategy, Founder of pearlkitty"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Glowing behind-photo-frame decal glow */}
            <div className="absolute inset-10 -z-10 bg-gradient-to-r from-[#EC9C9D] to-[#D3968C] opacity-45 blur-3xl pointer-events-none group-hover:opacity-75 transition-opacity" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
