import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

interface GalacticParticle {
  angle: number;
  distance: number;
  speed: number;
  size: number;
  color: string;
  twinkleSpeed: number;
  phase: number;
}

export default function BackgroundCosmos() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create scattered background stars
    const stars: Star[] = Array.from({ length: 150 }, () => {
      const baseSize = Math.random() * 1.5 + 0.5;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: baseSize,
        baseSize,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.3 ? "#F7F4D5" : Math.random() > 0.5 ? "#EC9C9D" : "#D3968C",
      };
    });

    // Create a gorgeous central spiral galaxy of particles representing stardust
    const galacticParticles: GalacticParticle[] = Array.from({ length: 300 }, (_, i) => {
      // Golden Spiral formula coordinates
      const angle = i * 0.15;
      const distance = Math.pow(i, 1.1) * 1.5 + Math.random() * 40;
      const colors = ["#F7F4D5", "#EC9C9D", "#D3968C", "#839958", "#6be5e5"];
      
      return {
        angle,
        distance,
        speed: (0.0005 + Math.random() * 0.0008) * (1 - distance / 1000), // closer rotates slightly faster
        size: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.04 + 0.01,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse movement tracker
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinate: -0.5 to 0.5
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const render = () => {
      // Smooth mouse coordinate interpolation for organic tracking
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Deep galactic backdrop drawing
      ctx.fillStyle = "#0d3a46";
      ctx.fillRect(0, 0, width, height);

      // Create a gorgeous background vignette glow to give a volumetric celestial look
      const gradient = ctx.createRadialGradient(
        width / 2 + mouse.x * 120,
        height / 2 + mouse.y * 120,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      gradient.addColorStop(0, "rgba(16, 86, 102, 0.45)"); // Midnight glow
      gradient.addColorStop(0.5, "rgba(10, 51, 35, 0.2)"); // Mossy gradient
      gradient.addColorStop(1, "rgba(5, 20, 25, 0.95)"); // Deepest darkness
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 1. Draw static background stars with twinkling phase
      stars.forEach((star) => {
        star.phase += star.twinkleSpeed;
        const alpha = Math.sin(star.phase) * 0.6 + 0.4;
        star.size = star.baseSize * (0.8 + Math.sin(star.phase) * 0.3);

        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        // Parallax offset based on size & mouse coordinates
        const px = star.x + mouse.x * star.baseSize * 45;
        const py = star.y + mouse.y * star.baseSize * 45;
        
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw rotating custom stardust galaxy spiral
      ctx.globalAlpha = 1;
      const cx = width / 2 + mouse.x * 60;
      const cy = height / 2 + mouse.y * 60;

      galacticParticles.forEach((p) => {
        p.angle += p.speed;
        p.phase += p.twinkleSpeed;

        const x = cx + Math.cos(p.angle) * p.distance;
        const y = cy + Math.sin(p.angle) * p.distance;

        // Skip rendering if particle wanders completely off-screen
        if (x < -10 || x > width + 10 || y < -10 || y > height + 10) return;

        const alpha = Math.sin(p.phase) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.75;
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle bloom to slightly larger stardust particles
        if (p.size > 1.4 && Math.random() > 0.85) {
          ctx.beginPath();
          ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha * 0.12;
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cosmic-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
