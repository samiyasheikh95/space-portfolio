import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

interface Job {
  id: number;
  icon: string;
  dates: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
}

export default function ExperienceSection() {
  const [openNode, setOpenNode] = useState<number | null>(0); // Default open first one

  const jobs: Job[] = [
    {
      id: 0,
      icon: "🏢",
      dates: "2023 – Present",
      title: "Content & Operations Associate",
      company: "Studio in Grey",
      location: "Indore (MP)",
      bullets: [
        "Managed end-to-end content production workflows and detailed editorial calendars.",
        "Coordinated cross-functional teams to deliver client and internal assets on time.",
        "Developed custom brand identity copy and integrated visual content models.",
        "Streamlined backend operational structures to skyrocket daily team efficiency.",
      ],
    },
    {
      id: 1,
      icon: "🛍️",
      dates: "2022 – 2023",
      title: "Retail & Brand Coordinator",
      company: "Pop Shop",
      location: "Indore (MP)",
      bullets: [
        "Supervised creative merchandising, local inventory setups, and vendor negotiations.",
        "Created custom experiential pop-up locations and in-store showcase structures.",
        "Designed and maintained social media campaigns that bolstered community interactions.",
        "Coordinated with micro-influencers and regional designers on cross-branding plans.",
      ],
    },
    {
      id: 2,
      icon: "📿",
      dates: "2021 – Present",
      title: "Founder & Creative Director",
      company: "pearlkitty",
      location: "Indore (MP)",
      bullets: [
        "Founded and styled an independent handcrafted bead jewelry & bespoke accessories label.",
        "Currated design catalogs, sourced beads/mounts, and hand-built original jewelry.",
        "Orchestrated regional workshops to mentor children and adults in jewelry crafts.",
        "Took full charge of product photography, graphical content, and self-publishing setups.",
        "Managed client delivery logic, custom order streams, packaging, and micro-logistics.",
      ],
    },
    {
      id: 3,
      icon: "⚖️",
      dates: "2021 (3 Months)",
      title: "Legal Intern",
      company: "Deepesh Joshi & Associates",
      location: "Indore (MP)",
      bullets: [
        "Conducted detailed legal research on property covenants, civil liabilities, and agency laws.",
        "Drafted basic affidavits, litigation reports, and corporate contract drafts.",
        "Shadowed senior advocates in courts and compiled client meeting summaries.",
      ],
    },
    {
      id: 4,
      icon: "🏛️",
      dates: "2020 (2 Months)",
      title: "Legal Research Intern",
      company: "Advocate Junaid Ahmad",
      location: "Indore (MP)",
      bullets: [
        "Prepared reference binders and case summaries on personal laws and commercial litigation.",
        "Evaluated jurisprudential patterns of high courts and documented case briefs.",
      ],
    },
    {
      id: 5,
      icon: "🌍",
      dates: "2020 – 2021",
      title: "Youth Engagement Coordinator",
      company: "Mu20.world",
      location: "Remote",
      bullets: [
        "Directed student-facing operations and virtual delegation programs.",
        "Steered digital community forums and content campaigns on youth leadership.",
        "Aligned collaborative efforts across 15+ student delegations globally.",
      ],
    },
    {
      id: 6,
      icon: "🎯",
      dates: "2019 – 2020",
      title: "Social Media & Content Lead",
      company: "YouthGenX",
      location: "Remote",
      bullets: [
        "Spearheaded visual strategy across popular channels including Instagram and LinkedIn.",
        "Produced 80+ unique layouts, slide decks, and captions on active youth affairs.",
        "Spearheaded virtual audience engagement, elevating followers organically on IG.",
      ],
    },
    {
      id: 7,
      icon: "📊",
      dates: "2019",
      title: "Administrative & Accounts Intern",
      company: "C.A Ayushi",
      location: "Indore (MP)",
      bullets: [
        "Audited basic accounts journals, tax files, and local compliance worksheets.",
        "Maintained client relations and sorted digital assets for fast reporting.",
      ],
    },
    {
      id: 8,
      icon: "🎓",
      dates: "2018 – 2019",
      title: "Content & Outreach Intern",
      company: "Muniversiti Edcorp",
      location: "Indore (MP)",
      bullets: [
        "Drafted informational slide sheets and student study packages.",
        "Arranged local high-school outreach campaigns, promoting public-speaking formats.",
      ],
    },
  ];

  const handleToggle = (id: number) => {
    setOpenNode(openNode === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-start">
        <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#839958] mb-3">
          CAREER PATH
          
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#F7F4D5] mb-12">
          Chronology & <span className="italic text-[#EC9C9D]">Impact</span>
        </h2>

        {/* Timeline Path Container */}
        <div className="w-full relative pl-6 md:pl-12 border-l-2 border-[#D3968C]/15 space-y-8 text-left">
          {jobs.map((job, idx) => {
            const isOpen = openNode === job.id;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4) }}
                className={`relative w-full rounded-none bg-[#105666]/10 border border-[#D3968C]/12 backdrop-blur-sm p-6 transition-all duration-300 select-none cursor-pointer group hover:bg-[#105666]/20 hover:border-[#EC9C9D]/30 ${
                  isOpen ? "border-[#EC9C9D]/50 bg-[#105666]/25 shadow-lg shadow-black/10" : ""
                }`}
                onClick={() => handleToggle(job.id)}
              >
                {/* Custom icon positioning on the absolute left line */}
                <div
                  className={`absolute left-[-41px] md:left-[-69px] top-6 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#D3968C] bg-[#0d3a46] flex items-center justify-center text-lg md:text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(236,156,157,0.4)] ${
                    isOpen ? "border-[#EC9C9D] bg-[#EC9C9D] text-[#0A3323]" : "text-[#F7F4D5]"
                  }`}
                >
                  {job.icon}
                </div>

                {/* Job Summary Banner */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-[#839958] font-mono flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.dates}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#F7F4D5] leading-tight group-hover:text-[#EC9C9D] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#EC9C9D]">
                      <span className="font-sans font-medium">{job.company}</span>
                      <span className="text-[#F7F4D5]/30 hidden sm:inline">•</span>
                      <span className="text-[#F7F4D5]/60 flex items-center gap-1 font-light text-xs font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#839958] flex-shrink-0" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-1 rounded-full border border-[#D3968C]/30 text-[#D3968C] group-hover:text-[#EC9C9D] group-hover:border-[#EC9C9D] transition-colors flex-shrink-0 mt-2">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {/* Expandable Bullet Points accordion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 pt-5 border-t border-[#D3968C]/15 space-y-3.5 pl-1">
                        {job.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="font-sans text-sm font-light text-[#F7F4D5]/85 leading-relaxed relative pl-5 flex items-start"
                          >
                            <span className="absolute left-0 text-[#EC9C9D] text-xs mt-0.5 select-none font-sans">
                              ✦
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Quick tap helper bar */}
                {!isOpen && (
                  <div className="mt-4 text-[10px] text-[#F7F4D5]/35 font-mono uppercase tracking-widest text-right flex items-center justify-end gap-1 select-none">
                    <span>Tap to expand</span>
                    <span>▾</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
