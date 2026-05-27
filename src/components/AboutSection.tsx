import { motion } from "motion/react";
import { PinkStarburst } from "./CelestialDecals";

interface TimelineNode {
  emoji: string;
  title: string;
  desc: string;
}

export default function AboutSection() {
  const timelineNodes: TimelineNode[] = [
    { emoji: "🌱", title: "Indore, MP", desc: "Where the story began — rooted in vibrant culture" },
    { emoji: "🎓", title: "Pune & Beyond", desc: "Deep intellectual growth & academic exploration" },
    { emoji: "💼", title: "Professional World", desc: "Forging paths in Logistics, Content Marketing & Legal Research" },
    { emoji: "✨", title: "pearlkitty Jewellers", desc: "Expressing creative entrepreneurship through handcrafted gems" },
    { emoji: "🚀", title: "Today & Forward", desc: "Aggregating operations, storytelling, and impactful building" },
  ];

  const skillPills = [
    "Logistics & Supply Chain",
    "Content Strategy",
    "Brand Building",
    "Creative Entrepreneurship",
    "Legal Research",
    "Community Building",
    "Social Media",
    "Handmade Jewelry Creation",
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#0A3323]/40 to-[#105666]/20 overflow-hidden z-10"
    >
      {/* Visual background collage element */}
      <div className="absolute top-[35%] left-[-100px] z-0 opacity-40">
        <PinkStarburst size={250} delay={3} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left: Interactive Timeline Visual */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#839958] mb-3">
            THE JOURNEY
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-[#F7F4D5]/90 mb-10 font-bold">
            Milestones & Milieus
          </h3>

          <div className="flex flex-col relative pl-4 border-l border-[#D3968C]/20 space-y-10 w-full">
            {timelineNodes.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start gap-4 relative group"
              >
                {/* Custom glowing bullet icon with emoji */}
                <div className="w-10 h-10 rounded-full border border-[#D3968C] flex items-center justify-center bg-[#0d2e36] text-lg flex-shrink-0 z-10 shadow-lg group-hover:bg-[#D3968C] group-hover:text-[#0A3323] transition-all duration-300">
                  {node.emoji}
                </div>

                <div className="flex-1 min-w-0 pr-4">
                  <h4 className="font-serif text-lg font-bold text-[#F7F4D5] leading-tight">
                    {node.title}
                  </h4>
                  <p className="font-sans text-xs text-[#D3968C] mt-1 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Detailed Story Copy */}
        <div className="lg:col-span-7 flex flex-col justify-start text-left items-start">
          <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#EC9C9D] mb-3">
            ABOUT ME
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#F7F4D5] mb-8">
            The <span className="italic text-[#EC9C9D]">Samiya</span> Story
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 font-serif text-lg text-[#F7F4D5]/80 font-light leading-relaxed"
          >
            <p>
              I am a <strong className="font-bold text-[#EC9C9D]">multifaceted professional</strong> whose career weaves together the ultimate precision of logistics, the sophisticated art of storytelling, and the unstoppable heart of an entrepreneur. From managing complex supply chains to deploying campaigns that touch lives, I enjoy bringing equal measures of analytical and aesthetic thinking together.
            </p>
            <p>
              As the architect of <strong className="font-bold text-[#839958]">pearlkitty</strong>, I channel my creative core into designing and hand-assembling custom jewelry and visual content. I believe deeply in visual narratives, proving that elegant results can emerge from highly disciplined operations.
            </p>
            <p>
              Through background work in law, digital media management, youth outreach, and visual strategy, I seek projects that require high organizational bandwidth and creative audacity.
            </p>
          </motion.div>

          {/* Skill pills with fancy hover effect */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {skillPills.map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 border border-[#839958]/35 bg-[#839958]/5 text-xs text-[#839958] font-sans tracking-widest uppercase hover:bg-[#839958] hover:text-[#0A3323] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 pointer-events-auto"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
