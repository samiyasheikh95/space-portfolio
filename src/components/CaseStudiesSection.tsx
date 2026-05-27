import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MapPin, Briefcase, Clock, Calendar, AlertCircle, CheckCircle2, ChevronRight, Layers } from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  project: string;
  location: string;
  format: string;
  scope: string;
  scopeLabel: string;
  role: string;
  complications: {
    num: string;
    title: string;
    description: string;
  }[];
  resolutions: {
    title: string;
    description: string;
  }[];
  outcomes: {
    metrics: { value: string; label: string }[];
    summary: string;
  };
  gallery?: {
    src: string;
    alt: string;
    tag: string;
    caption: string;
  }[];
}

export default function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState<string>("case-01");

  const caseStudies: CaseStudy[] = [
    {
      id: "case-01",
      number: "01",
      title: "Simultaneous Dual-Format Production",
      project: "Festive Lookbook & Product Shoot",
      location: "Heritage Resort, Indore",
      format: "Model Lookbook + Studio Tabletop",
      scope: "Single Day, Hard Deadline",
      scopeLabel: "Scope",
      role: "On-Set Operations Lead, Set Curator & Production Coordinator",
      complications: [
        {
          num: "01",
          title: "Missing Infrastructure: The Backdrop Vanished",
          description: "The studio tabletop setup depended entirely on a black seamless backdrop—left behind in the city. Discovered on location with no retrieval window. The cottage interior was heating up fast, and the backdrop was non-negotiable for the product aesthetic. The submission clock was already running."
        },
        {
          num: "02",
          title: "Lighting Collapse: Outdoor Chaos in Peak Heat",
          description: "Moving outside meant harsh shadows, inconsistent colour temperature, and a closing window of usable natural light. The setup had to be completely restructured and executed before the light window narrowed further. No additional crew, no extra time built into the schedule."
        },
        {
          num: "03",
          title: "Concurrent Production Crisis: Missing Key Costume",
          description: "Mid-day, a signature look from the festive collection—locked into the shot list—was discovered still in the city. No time to retrieve it. The model's schedule was immovable. That look either happened with what was on hand or it didn't happen at all."
        }
      ],
      resolutions: [
        {
          title: "Reconstructing the Setup",
          description: "Black fabric sheets were sourced immediately from available materials and used to reconstruct the seamless on-site. The entire tabletop unit was moved outside to an open, shaded corridor of the cottage that offered diffused indirect light without the interior heat trap. Shot sequencing was immediately reorganised to front-load all products requiring the most controlled light. The photographer was briefed on revised priorities within minutes. The entire tabletop unit was operational again in under 30 minutes."
        },
        {
          title: "Bridging the Costume Gap",
          description: "The missing costume was reconceived as a styled look using pieces already on location. Separates were re-paired, and a dupatta was re-draped to shift the silhouette. Strategically, the look was repositioned in the shot list as a transition outfit rather than a hero look—a move that actually strengthened the narrative arc of the sequence and gave the photographer a cleaner visual progression."
        },
        {
          title: "Synchronised Execution",
          description: "Both units operated on a shared 20-minute checkpoint system communicated via messaging. Set changes on the model side were pre-staged in an adjacent space to keep reset time under 15 minutes. The product shoot wrapped with the final usable light. The model shoot completed its full shot list."
        }
      ],
      outcomes: {
        metrics: [
          { value: "2", label: "Complete units delivered on deadline" },
          { value: "0", label: "Reshoots flagged in post-production" }
        ],
        summary: "Full product catalogue and complete lookbook sequence. The improvised black fabric backdrop held cleanly across all product frames. The reconstructed costume look was selected as a grid post for the campaign launch. Every problem that day was unplanned. None of them showed in the final work."
      },
      gallery: [
        {
          src: "https://i.ibb.co/XZ7T1fbX/IMG-20260527-WA0046.jpg",
          alt: "Production Feedback & Testimonial Capture 01",
          tag: "Festive Lookbook Styling",
          caption: "Studio Backdrop & Costume Highlights"
        },
        {
          src: "https://i.ibb.co/p6FG9yns/IMG-20260527-WA0047.jpg",
          alt: "Production Feedback & Testimonial Capture 02",
          tag: "Client Appreciation",
          caption: "Direct Feedback on Rapid Delivery"
        },
        {
          src: "https://i.ibb.co/W4QMFpfd/IMG-20260527-WA0048.jpg",
          alt: "Production Feedback & Testimonial Capture 03",
          tag: "Studio Process Capture",
          caption: "Continuous Multi-Format Execution Details"
        }
      ]
    },
    {
      id: "case-02",
      number: "02",
      title: "Live Event Coverage at Scale",
      project: "Brand Activation & Community Pop-Up",
      location: "Indore (MP)",
      format: "Full-Day Event Coverage — Instagram Reels, Carousels, Stories",
      scope: "Single Day, Real-Time Posting",
      scopeLabel: "Timeline",
      role: "Content Strategist & On-Ground Production Lead",
      complications: [
        {
          num: "01",
          title: "Key Personnel Loss: Videographer Cancelled Hours Before",
          description: "No notice. No contingency in place. The primary videographer dropped out on the morning of the event, leaving a full Reel production brief, carousel shoot list, and live coverage hanging. An eight-Reel production, carousel sets, and live Stories coverage—all scheduled to post the same day—were suddenly without a camera operator or camera."
        },
        {
          num: "02",
          title: "Equipment Chain Failure: Camera Arrives Without Storage",
          description: "A replacement camera was sourced and dispatched from an alternate location. En route, the memory card was misplaced. The camera arrived on location operational but completely unusable—no functional storage, no way to begin shooting. At a single-day live event, there is no second window. The light, the crowd energy, the key moments—they happen once."
        }
      ],
      resolutions: [
        {
          title: "Parallel Recovery Systems",
          description: "A compatible memory card was sourced locally and arrived on-set before the event's opening segment concluded. In parallel, a backup shooting plan was activated: two additional smartphones were designated as secondary capture units for B-roll and crowd coverage. Nothing stopped rolling while the primary camera was being sourced."
        },
        {
          title: "Triage & Restructured Priorities",
          description: "The original shot list was immediately segmented into three priority tiers: hero Reel moments, carousel content, and supplementary footage. High-value moments—stage openings, key brand interactions, product reveals—were identified in advance on the run sheet and assigned to specific operators. The revised brief was communicated to every person holding a device before the memory card arrived."
        },
        {
          title: "Live Editing & Compressed Workflow",
          description: "Once the primary camera was operational, a compressed version of the original plan ran: Reel-first capture at every setup, carousels shot during natural crowd lulls, and Stories as a continuous thread throughout the day. Editing ran simultaneously with the shoot. Reels were cut natively in CapCut between setups using pre-built caption and hashtag templates. The first Reel posted before the event hit its midpoint."
        }
      ],
      outcomes: {
        metrics: [
          { value: "8/8", label: "Reels delivered within the event day" },
          { value: "47k+", label: "Combined Reel views within four days" }
        ],
        summary: "All carousel content was scheduled and live by evening. Stories ran uninterrupted from doors-open to close—no visible gap in coverage despite the two-hour equipment crisis at the start. The client reported their highest single-day Instagram reach of the year. The event felt, to every external viewer, like a fully resourced production. It was one person, two phones, one recovered camera, and no room for error."
      },
      gallery: [
        {
          src: "https://i.ibb.co/N2d7VckL/IMG-20260527-WA0044.jpg",
          alt: "Production Feedback & Testimonial Capture 01",
          tag: "Production Echo",
          caption: "Happy Customer Feedback & Festive Lookbook Styling Outcome"
        },
        {
          src: "https://i.ibb.co/hxGFv3jp/IMG-20260527-WA0045.jpg",
          alt: "Production Feedback & Testimonial Capture 02",
          tag: "Campaign Launch",
          caption: "Client Gratitude & Direct Message Appreciation Snapshot"
        }
      ]
    }
  ];

  const currentCase = caseStudies.find(c => c.id === activeCase) || caseStudies[0];

  return (
    <section id="case-studies" className="relative py-24 px-6 md:px-12 bg-[#0c2e36]/30 overflow-hidden z-10 border-b border-[#F7F4D5]/5">
      <div className="max-w-7xl mx-auto flex flex-col text-left">
        <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#839958] mb-3">
          STRATEGIC RESOLUTIONS
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#F7F4D5] mb-12">
          Case <span className="italic text-[#EC9C9D]">Studies</span>
        </h2>

        {/* Outer grid */}
        <div className="grid grid-cols-12 gap-8 w-full mt-2">
          {/* Sidebar / Case Selector */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <p className="text-[11px] font-mono tracking-wider uppercase text-[#F7F4D5]/40 mb-1 border-b border-[#D3968C]/10 pb-2">
              Select Case Study
            </p>
            {caseStudies.map((cs) => {
              const isActive = cs.id === activeCase;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveCase(cs.id)}
                  className={`w-full text-left p-6 border transition-all duration-300 relative rounded-none flex items-start gap-4 cursor-pointer group ${
                    isActive
                      ? "bg-[#105666]/25 border-[#EC9C9D] shadow-lg shadow-black/25"
                      : "bg-[#105666]/5 border-[#D3968C]/15 hover:border-[#D3968C]/50 hover:bg-[#105666]/10"
                  }`}
                >
                  <span className={`font-mono text-xs ${isActive ? "text-[#EC9C9D]" : "text-[#839958]"} font-bold`}>
                    {cs.number}.
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-serif text-lg font-bold leading-snug transition-colors ${isActive ? "text-[#F7F4D5]" : "text-[#F7F4D5]/70 group-hover:text-[#F7F4D5]"}`}>
                      {cs.title}
                    </h3>
                    <p className="text-xs font-sans font-light text-[#F7F4D5]/50 mt-2 line-clamp-1">
                      {cs.project}
                    </p>
                  </div>
                  <ChevronRight size={16} className={`text-[#EC9C9D] mt-1 transition-transform duration-300 ${isActive ? "translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"}`} />
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="col-span-12 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="border border-[#D3968C]/15 bg-[#105666]/12 backdrop-blur-md p-8 md:p-10 relative flex flex-col h-full min-h-[500px]"
              >
                {/* Visual Header */}
                <span className="absolute top-8 right-8 font-mono text-[56px] font-bold text-[#F7F4D5]/5 leading-none select-none">
                  CASE {currentCase.number}
                </span>

                {/* Overarching Meta Title */}
                <div className="border-b border-[#D3968C]/10 pb-6 mb-8">
                  <span className="text-[10px] font-mono tracking-widest text-[#EC9C9D] uppercase block mb-2 font-bold">
                    ACTIVE PROJECT RECONSTRUCTION
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4D5]">
                    {currentCase.title}
                  </h3>
                  
                  {/* Metadata Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} className="text-[#839958] shrink-0" />
                      <div>
                        <p className="text-[9px] font-mono text-[#F7F4D5]/40 uppercase tracking-wider">Project</p>
                        <p className="text-xs font-sans text-[#F7F4D5]/80 font-medium line-clamp-1">{currentCase.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#839958] shrink-0" />
                      <div>
                        <p className="text-[9px] font-mono text-[#F7F4D5]/40 uppercase tracking-wider">Location</p>
                        <p className="text-xs font-sans text-[#F7F4D5]/80 font-medium line-clamp-1">{currentCase.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers size={14} className="text-[#839958] shrink-0" />
                      <div>
                        <p className="text-[9px] font-mono text-[#F7F4D5]/40 uppercase tracking-wider">Format</p>
                        <p className="text-xs font-sans text-[#F7F4D5]/80 font-medium line-clamp-1">{currentCase.format}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#839958] shrink-0" />
                      <div>
                        <p className="text-[9px] font-mono text-[#F7F4D5]/40 uppercase tracking-wider">{currentCase.scopeLabel}</p>
                        <p className="text-xs font-sans text-[#F7F4D5]/80 font-medium line-clamp-1">{currentCase.scope}</p>
                      </div>
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div className="mt-4 pt-4 border-t border-[#D3968C]/5 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono bg-[#839958]/15 text-[#F7F4D5] px-2.5 py-1 uppercase tracking-wider border border-[#839958]/25">
                      Role
                    </span>
                    <span className="text-xs font-sans font-light text-[#F7F4D5]/90 italic">
                      {currentCase.role}
                    </span>
                  </div>
                </div>

                {/* Complications & Resolutions Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                  {/* The Complications column */}
                  <div className="flex flex-col gap-6">
                    <h4 className="text-xs font-mono font-bold tracking-widest text-[#EC9C9D] uppercase flex items-center gap-2 pb-2 border-b border-[#EC9C9D]/10">
                      <AlertCircle size={14} />
                      The Complications
                    </h4>
                    <div className="space-y-6">
                      {currentCase.complications.map((comp) => (
                        <div key={comp.num} className="bg-[#0c2e36]/40 p-4 border-l-2 border-[#EC9C9D]/40 hover:border-[#EC9C9D] transition-colors">
                          <span className="text-[10px] font-mono text-[#EC9C9D] block mb-1 uppercase font-semibold">
                            Crisis {comp.num}
                          </span>
                          <h5 className="font-serif text-sm font-bold text-[#F7F4D5] mb-2 leading-tight">
                            {comp.title}
                          </h5>
                          <p className="font-sans text-xs font-light text-[#F7F4D5]/70 leading-relaxed">
                            {comp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How It Was Resolved column */}
                  <div className="flex flex-col gap-6">
                    <h4 className="text-xs font-mono font-bold tracking-widest text-[#839958] uppercase flex items-center gap-2 pb-2 border-b border-[#839958]/20">
                      <CheckCircle2 size={14} className="text-[#839958]" />
                      Crisis Workflow & resolutions
                    </h4>
                    <div className="space-y-6">
                      {currentCase.resolutions.map((res, index) => (
                        <div key={index} className="bg-[#0c2e36]/20 p-4 border-l-2 border-[#839958]/30 hover:border-[#839958] transition-colors">
                          <span className="text-[10px] font-mono text-[#839958] block mb-1 uppercase font-semibold">
                            Resolution Action {index + 1}
                          </span>
                          <h5 className="font-serif text-sm font-bold text-[#F7F4D5] mb-2 leading-tight">
                            {res.title}
                          </h5>
                          <p className="font-sans text-xs font-light text-[#F7F4D5]/70 leading-relaxed">
                            {res.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcomes Section */}
                <div className="mt-8 pt-8 border-t border-[#D3968C]/15 flex flex-col gap-6">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-[#839958] uppercase flex items-center gap-2 pb-2 border-b border-[#D3968C]/10">
                    <Sparkles size={14} className="text-[#839958] shrink-0" />
                    Deliverables & Outcomes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    {currentCase.outcomes.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-[#105666]/15 border border-[#839958]/20 p-5 flex flex-col justify-center text-left">
                        <span className="font-serif text-3xl md:text-3xl font-bold text-[#EC9C9D] block mb-1">
                          {metric.value}
                        </span>
                        <span className="font-sans text-[11px] text-[#F7F4D5]/70 leading-snug">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                    <div className="bg-[#105666]/5 border border-[#D3968C]/10 p-5 flex flex-col justify-center min-h-[80px] md:col-span-1">
                      <p className="font-sans text-xs font-light text-[#F7F4D5]/80 leading-relaxed italic">
                        "{currentCase.outcomes.summary}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Optional Gallery Section */}
                {currentCase.gallery && (
                  <div className="mt-8 pt-8 border-t border-[#D3968C]/15 flex flex-col gap-6 w-full">
                    <h4 className="text-xs font-mono font-bold tracking-widest text-[#EC9C9D] uppercase flex items-center gap-2 pb-2 border-b border-[#D3968C]/10">
                      <Sparkles size={14} className="text-[#EC9C9D] shrink-0" />
                      Visual Testimony & On-Set Production Captures
                    </h4>
                    <div className={`grid grid-cols-1 ${currentCase.gallery.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-6`}>
                      {currentCase.gallery.map((img, idx) => (
                        <div key={idx} className={`border border-[#D3968C]/15 overflow-hidden group relative bg-[#0c2e36]/30 ${currentCase.gallery.length === 3 ? "h-[300px]" : "h-[360px]"}`}>
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                            <span className="text-[9px] font-mono uppercase text-[#EC9C9D] tracking-wider block">{img.tag}</span>
                            <span className="text-xs font-sans text-[#F7F4D5]/90">{img.caption}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
