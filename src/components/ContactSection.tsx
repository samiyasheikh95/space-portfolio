import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Phone, Sparkles, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate luxury-grade tactile sending delay
    setTimeout(() => {
      setStatus("sent");
      // Reset after success
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-transparent via-[#0A3323]/50 to-[#0A3323]/95 overflow-hidden z-10 min-h-[80vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left Side: Connect Metadata Card */}
        <div className="md:col-span-5 flex flex-col items-start text-left justify-center">
          <p className="text-xs font-sans tracking-[0.35em] uppercase text-[#839958] mb-3">
            LET'S TALK
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl font-bold leading-tight text-[#F7F4D5] mb-8">
            Let's <br />
            <span className="italic text-[#EC9C9D]">Connect</span>
          </h2>

          <div className="space-y-6 w-full pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-[#D3968C]/30 flex items-center justify-center text-sm text-[#D3968C] group-hover:border-[#EC9C9D] group-hover:text-[#EC9C9D] transition-colors duration-300">
                <MapPin size={18} />
              </div>
              <span className="font-sans text-sm text-[#F7F4D5]/80 font-light tracking-wide">
                Indore, Madhya Pradesh, India
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-[#D3968C]/30 flex items-center justify-center text-sm text-[#D3968C] group-hover:border-[#EC9C9D] group-hover:text-[#EC9C9D] transition-colors duration-300">
                <Mail size={18} />
              </div>
              <a
                href="mailto:samiyasheikh95@gmail.com"
                className="font-sans text-sm text-[#D3968C] hover:text-[#EC9C9D] transition-colors duration-300 font-normal tracking-wide"
              >
                samiyasheikh95@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-[#D3968C]/30 flex items-center justify-center text-sm text-[#D3968C] group-hover:border-[#EC9C9D] group-hover:text-[#EC9C9D] transition-colors duration-300">
                <Phone size={18} />
              </div>
              <a
                href="tel:+919691080851"
                className="font-sans text-sm text-[#D3968C] hover:text-[#EC9C9D] transition-colors duration-300 font-normal tracking-wide"
              >
                +91 96910 80851
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="md:col-span-7 w-full bg-[#105666]/5 border border-[#D3968C]/15 p-8 relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold tracking-widest text-[#839958] uppercase">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="How shall I head you?"
                required
                className="w-full bg-[#F7F4D5]/5 border border-[#D3968C]/25 px-4 py-3.5 text-sm text-[#F7F4D5] rounded-none outline-none focus:border-[#EC9C9D] focus:bg-[#EC9C9D]/5 transition-all duration-300 font-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold tracking-widest text-[#839958] uppercase">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                required
                className="w-full bg-[#F7F4D5]/5 border border-[#D3968C]/25 px-4 py-3.5 text-sm text-[#F7F4D5] rounded-none outline-none focus:border-[#EC9C9D] focus:bg-[#EC9C9D]/5 transition-all duration-300 font-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold tracking-widest text-[#839958] uppercase">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full bg-[#F7F4D5]/5 border border-[#D3968C]/25 px-4 py-3.5 text-sm text-[#F7F4D5] rounded-none outline-none focus:border-[#EC9C9D] focus:bg-[#EC9C9D]/5 transition-all duration-300 font-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold tracking-widest text-[#839958] uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or just say hello ✨"
                required
                rows={4}
                className="w-full bg-[#F7F4D5]/5 border border-[#D3968C]/25 px-4 py-3.5 text-sm text-[#F7F4D5] rounded-none outline-none focus:border-[#EC9C9D] focus:bg-[#EC9C9D]/5 transition-all duration-300 resize-none font-sans"
              />
            </div>

            {/* Tactile button trigger with loading statuses */}
            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full py-4 border border-[#EC9C9D] text-xs font-sans tracking-widest uppercase transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 group cursor-pointer ${
                status === "sent" ? "border-[#839958] text-[#839958]" : "text-[#F7F4D5] hover:text-[#0A3323]"
              }`}
            >
              {/* Sliding Background */}
              {status === "idle" && (
                <div className="absolute inset-0 bg-[#EC9C9D] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
              )}

              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.span>
                )}

                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[#EC9C9D]"
                  >
                    <span>Sending...</span>
                    <svg className="animate-spin h-3.5 w-3.5 text-[#EC9C9D]" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                    </svg>
                  </motion.span>
                )}

                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[#839958] font-bold"
                  >
                    <span>Sent Successfully!</span>
                    <Check size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>

          {/* Micro background decor sparkles */}
          <div className="absolute bottom-[-15px] right-[-15px] opacity-25 select-none pointer-events-none">
            <Sparkles className="text-[#EC9C9D] w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
