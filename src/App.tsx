import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import BackgroundCosmos from "./components/BackgroundCosmos";
import { StarTrailsWave } from "./components/CelestialDecals";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const requestRef = useRef<number | null>(null);
  const ringPosRef = useRef({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });

  // Handle cursor mouse position tracking with physics ease
  useEffect(() => {
    // Check if device is desktop
    const checkViewport = () => {
      setIsDesktop(window.innerWidth > 900 && !('ontouchstart' in window));
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const animateRing = () => {
      const dx = mousePosRef.current.x - ringPosRef.current.x;
      const dy = mousePosRef.current.y - ringPosRef.current.y;
      
      // Interpolate with a smooth 0.12 coefficient to create a luxurious follow delay
      ringPosRef.current.x += dx * 0.12;
      ringPosRef.current.y += dy * 0.12;
      
      setRingPos({ x: ringPosRef.current.x, y: ringPosRef.current.y });
      requestRef.current = requestAnimationFrame(animateRing);
    };

    if (window.innerWidth > 900 && !('ontouchstart' in window)) {
      window.addEventListener("mousemove", handleMouseMove);
      requestRef.current = requestAnimationFrame(animateRing);
    }

    return () => {
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Wire up cursor hover feedback for interactive tags
  useEffect(() => {
    const handleAddHoverListeners = () => {
      const hoverables = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    // Delay listener hook slightly to verify DOM is fully populated
    const timer = setTimeout(handleAddHoverListeners, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen bg-[#0d3a46] selection:bg-[#EC9C9D]/35 selection:text-[#fff] overflow-x-hidden ${isDesktop ? "cursor-none" : ""}`}>
      
      {/* 1. Custom Interactive Physics Cursor (Desktop Only) */}
      {isDesktop && (
        <>
          <div
            className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 mix-blend-screen"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              background: isHovered
                ? "radial-gradient(circle, #839958 0%, #D3968C 100%)"
                : "radial-gradient(circle, #a8f5e0 0%, #6be5e5 100%)",
              boxShadow: isHovered
                ? "0 0 30px rgba(131, 153, 140, 1)"
                : "0 0 30px rgba(168, 245, 224, 0.8)",
            }}
          />
          <div
            className="fixed rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 border-2 mix-blend-screen"
            style={{
              left: `${ringPos.x}px`,
              top: `${ringPos.y}px`,
              width: isHovered ? "56px" : "36px",
              height: isHovered ? "56px" : "36px",
              borderColor: isHovered ? "rgba(236,156,157,0.7)" : "rgba(168,245,224,0.4)",
              boxShadow: isHovered
                ? "0 0 40px rgba(236,156,157,0.4)"
                : "0 0 30px rgba(168,245,224,0.15)",
            }}
          />
        </>
      )}

      {/* 2. Interactive Cosmic Canvas Background starscape */}
      <BackgroundCosmos />

      {/* 3. Global Navigation Bar */}
      <Navbar />

      {/* 4. Scrollable Sections Layout */}
      <div className="relative w-full">
        {/* Hero Banner Section */}
        <HeroSection />

        {/* Dynamic section spacer trails */}
        <StarTrailsWave className="w-full max-w-7xl mx-auto py-1.5 opacity-40" />

        {/* Profile History Narrative Section */}
        <AboutSection />

        {/* Dynamic section spacer trails */}
        <StarTrailsWave className="w-full max-w-7xl mx-auto py-1.5 opacity-40 rotate-[180deg]" />

        {/* Collapsible Chronology Section */}
        <ExperienceSection />

        {/* Portfolio Showcase Bento grid */}
        <PortfolioSection />

        {/* Detailed technical toolbox and honor shells */}
        <SkillsSection />

        {/* Dynamic bottom section spacer */}
        <StarTrailsWave className="w-full max-w-7xl mx-auto py-1.5 opacity-30" />

        {/* Connection coordinate form */}
        <ContactSection />
      </div>

      {/* 5. Styled Footer */}
      <footer className="relative py-12 px-6 text-center border-t border-[#F7F4D5]/5 bg-[#0a3323]/50 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider text-[#F7F4D5]/30">
          <p className="font-sans font-light">
            Designed with ✧ & ✿ for{" "}
            <span className="font-semibold text-[#D3968C]">Samiya Sheikh</span> · Indore, MP
          </p>
          <p className="font-mono text-[10px]">
            © {new Date().getFullYear()} Samiya Sheikh · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

