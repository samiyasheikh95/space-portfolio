import { motion } from "motion/react";
import { Award, Feather, Volume2, Landmark } from "lucide-react";

interface SkillCategory {
  icon: string;
  category: string;
  tags: string[];
}

interface Badge {
  icon: string;
  name: string;
  sub: string;
}

export default function SkillsSection() {
  const skills: SkillCategory[] = [
    {
      icon: "✍️",
      category: "Content & Writing",
      tags: ["Content Writing", "Copywriting", "Editorial curation", "Blog Writing", "Storytelling"],
    },
    {
      icon: "📣",
      category: "Marketing & Social",
      tags: ["Social Media Mgmt", "Brand Strategy", "Campaign Planning", "Community Building", "Instagram Visuals"],
    },
    {
      icon: "📦",
      category: "Logistics & Ops",
      tags: ["Supply Chain Coord", "Vendor Management", "Inventory Control", "Process Improvement"],
    },
    {
      icon: "⚖️",
      category: "Legal & Research",
      tags: ["Legal Research", "Document Drafting", "Compliance tracking", "Case Analysis"],
    },
    {
      icon: "🎨",
      category: "Creative & Design",
      tags: ["Jewelry Design", "Multidisciplinary Art", "Visual Branding", "Canva graphics", "Photography", "Creative Direction"],
    },
    {
      icon: "🤝",
      category: "Leadership & Comm.",
      tags: ["Public Speaking", "Team Leadership", "Negotiation", "Event Management", "Stakeholder Mgmt"],
    },
  ];

  const badges: Badge[] = [
    { icon: "👑", name: "Student Council", sub: "House Captain" },
    { icon: "🌐", name: "Model United Nations", sub: "Best Delegate" },
    { icon: "🎤", name: "Debating & Extempore", sub: "Competitive Speaker" },
    { icon: "🔬", name: "Sahodaya BaalVigyan", sub: "Science Olympiad" },
    { icon: "🦈", name: "Shark Tank", sub: "Innovation Award" },
    { icon: "🏫", name: "Pathways School", sub: "Gurgaon Member" },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#0A3323]/35 to-transparent overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10">
        <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#839958] mb-3">
          TOOLKIT
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#F7F4D5] mb-12">
          Skills & <span className="italic text-[#EC9C9D]">Accolades</span>
        </h2>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-20 text-left">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-[#F7F4D5]/5 border border-[#F7F4D5]/10 group transition-all duration-300 hover:bg-[#F7F4D5]/10"
            >
              <div className="text-3xl mb-4 select-none">{skill.icon}</div>
              <h3 className="font-serif text-xl font-bold text-[#F7F4D5] mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-sans font-light tracking-wide px-2 py-1 bg-[#839958]/12 border border-[#839958]/20 text-[#839958] rounded-sm transition-colors group-hover:border-[#EC9C9D]/30 group-hover:text-[#EC9C9D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Glowing Bottom Line Decal */}
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#839958] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Badges and Honor Shelf */}
        <div className="w-full text-left">
          <h3 className="font-serif text-2xl md:text-3xl text-[#F7F4D5]/90 mb-8 font-bold flex items-center gap-2">
            <span>Badges of</span> <span className="italic text-[#EC9C9D]">Honour</span>
          </h3>

          <div className="relative p-1 border-2 border-[#D3968C]/20 w-full overflow-hidden bg-gradient-to-r from-[#105666]/10 via-[#0A3323]/20 to-[#105666]/10 shadow-xl">
            {/* Shelf backdrop indicator line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D3968C] via-[#839958] to-[#EC9C9D]" />

            {/* Badges Grid shelf */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 relative">
              {badges.map((badge, idx) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", damping: 15, stiffness: 120, delay: idx * 0.08 }}
                  whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1.5 : -1.5 }}
                  className="flex flex-col items-center justify-center p-5 bg-[#0a3323]/70 border border-[#D3968C]/20 rounded-none transition-all duration-300 hover:border-[#EC9C9D] hover:shadow-2xl hover:shadow-black/40 group relative"
                >
                  <div className="text-3xl mb-3 select-none filter drop-shadow-md group-hover:animate-bounce">
                    {badge.icon}
                  </div>
                  <h4 className="font-sans text-[11px] font-bold tracking-wider text-[#F7F4D5] text-center uppercase leading-tight mb-1">
                    {badge.name}
                  </h4>
                  <p className="font-serif italic text-[11px] text-[#EC9C9D] text-center font-normal">
                    {badge.sub}
                  </p>

                  {/* Micro gradient ring effect */}
                  <div className="absolute inset-0 -z-10 bg-[#EC9C9D]/5 opacity-0 group-hover:opacity-100 hover:blur-md transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
