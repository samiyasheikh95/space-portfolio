import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Gallery", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c2e36]/80 backdrop-blur-xl border-b border-[#D3968C]/15 shadow-lg"
          : "bg-[#0d3a46]/30 backdrop-blur-sm border-b border-[#D3968C]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-serif text-2xl tracking-widest text-[#F7F4D5] hover:text-[#EC9C9D] transition-colors duration-300 flex items-center gap-2 group"
        >
          <span>SAMIYA SHEIKH</span>
          <Sparkles className="w-4 h-4 text-[#EC9C9D] group-hover:rotate-12 transition-transform duration-500" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative text-xs tracking-widest text-[#F7F4D5]/75 font-sans uppercase hover:text-[#EC9C9D] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-[#EC9C9D] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#F7F4D5] p-2 hover:text-[#EC9C9D] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[68px] z-40 bg-[#0A3323]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col p-8 gap-6 border-t border-[#D3968C]/10 md:hidden ${
          mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6 justify-center items-start flex-1 text-left">
          {menuItems.map((item, index) => (
            <li
              key={item.label}
              className="w-full transform transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${index * 100}ms` : "0ms",
                transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
              }}
            >
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl tracking-wide text-[#F7F4D5] hover:text-[#EC9C9D] block w-full py-2 hover:translate-x-2 transition-transform duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-xs text-[#F7F4D5]/40 font-mono border-t border-[#D3968C]/15 pt-6">
          samiyasheikh95@gmail.com
        </div>
      </div>
    </nav>
  );
}
