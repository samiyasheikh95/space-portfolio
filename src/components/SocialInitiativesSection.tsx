import React from "react";
import { motion } from "motion/react";
import { Heart, Instagram, Users, Sparkles, Sprout, Award } from "lucide-react";

interface Initiative {
  id: number;
  icon: React.ReactNode;
  title: string;
  role: string;
  location: string;
  year: string;
  desc: string;
  link?: string;
  linkLabel?: string;
  bullets?: string[];
}

export default function SocialInitiativesSection() {
  const initiatives: Initiative[] = [
    {
      id: 0,
      icon: <Instagram className="w-5 h-5 text-[#EC9C9D]" />,
      title: "thegriefcare",
      role: "Founder",
      location: "Digital / Instagram",
      year: "2020 – Present",
      desc: "Founded an independent mental health awareness and resource accessibility touchpoint on Instagram. Created safe virtual spaces, self-care journals, and supportive communities for processing grief and loss.",
      link: "https://instagram.com/thegriefcare",
      linkLabel: "Visit @thegriefcare on Instagram",
    },
    {
      id: 1,
      icon: <Users className="w-5 h-5 text-[#EC9C9D]" />,
      title: "S.H.E. Foundation",
      role: "Active Organising Member",
      location: "Indore (MP)",
      year: "2021 – Present",
      desc: "Drive community empowerment programs, local meet-ups, and environmental sanitation drives. Help raise critical resources for low-income women, menstrual hygiene kits, and local green initiatives.",
      bullets: [
        "Curate safe offline meetups and advocacy structures for women.",
        "Design and promote fundraising campaigns in the Indore region."
      ]
    },
    {
      id: 2,
      icon: <Sprout className="w-5 h-5 text-[#EC9C9D]" />,
      title: "Kleemshree NGO",
      role: "Education Collaborator",
      location: "Indore (MP)",
      year: "2022 – Present",
      desc: "Collaborate with local educators to empower children below the poverty line. Champion interactive educational pathways, baseline learning tests, and student support materials.",
      bullets: [
        "Coordinate books and supplies mobilization drives.",
        "Mentor students on fundamental literacy, hygiene awareness, and public speaking."
      ]
    },
    {
      id: 3,
      icon: <Heart className="w-5 h-5 text-[#EC9C9D]" />,
      title: "Fundraising Pop-up Stalls",
      role: "Independent Organizer",
      location: "Indore / Exhibition Sites",
      year: "Ongoing",
      desc: "Set up high-profile aesthetic pop-up stands at regional craft fairs, colleges, and flea markets. Showcase custom crafts, beadwork, and upcycled items, directing 100% of proceeds to partner NGOs.",
    }
  ];

  return (
    <section id="initiatives" className="relative py-24 px-6 md:px-12 bg-[#0a3323]/22 overflow-hidden z-10 border-t border-b border-[#F7F4D5]/5">
      <div className="max-w-7xl mx-auto flex flex-col items-left">
        <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#839958] mb-3">
          GIVING BACK
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#F7F4D5] mb-12">
          Social <span className="italic text-[#EC9C9D]">Initiatives</span>
        </h2>

        {/* Bento/Card Layout */}
        <div className="grid grid-cols-12 gap-6 w-full">
          {initiatives.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`col-span-12 ${
                item.id === 0 || item.id === 3 ? "md:col-span-12 lg:col-span-6" : "md:col-span-12 lg:col-span-6"
              } border border-[#D3968C]/15 bg-[#105666]/10 backdrop-blur-md p-8 group hover:border-[#EC9C9D]/40 transition-all duration-300 relative`}
            >
              {/* Corner badge index style */}
              <div className="absolute top-6 right-8 text-[11px] font-mono text-[#839958] tracking-widest uppercase flex items-center gap-1.5 opacity-60">
                <Sparkles className="w-3 h-3 text-[#EC9C9D]" />
                {item.year}
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full border border-[#D3968C]/30 flex items-center justify-center bg-[#0d2e36] text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#F7F4D5] group-hover:text-[#EC9C9D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#EC9C9D]/80 uppercase tracking-widest mt-1">
                    {item.role} &middot; <span className="text-xs text-[#F7F4D5]/50 capitalize font-sans font-light tracking-normal">{item.location}</span>
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm font-light text-[#F7F4D5]/80 leading-relaxed mb-6">
                {item.desc}
              </p>

              {item.bullets && (
                <ul className="space-y-2 mb-6 border-t border-[#D3968C]/10 pt-4">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="font-sans text-xs font-light text-[#F7F4D5]/70 flex items-start gap-2">
                      <span className="text-[#EC9C9D]">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.link && (
                <div className="mt-auto">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#EC9C9D] hover:text-[#EC9C9D]/80 hover:underline transition-all"
                  >
                    <span>{item.linkLabel}</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
