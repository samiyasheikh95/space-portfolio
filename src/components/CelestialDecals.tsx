import { motion } from "motion/react";

// 1. Pink Retro Celestial Sparkle / Starburst (from pink-starburst.png vibe)
// Fits perfectly as a glowing layered element behind/beside key text or images
export function PinkStarburst({ className = "", size = 200, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ 
        opacity: [0.35, 0.65, 0.35],
        scale: [1, 1.06, 1],
        rotate: [0, 12, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`relative pointer-events-none mix-blend-screen select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_0_15px_rgba(236,156,157,0.55)]"
      >
        <defs>
          <radialGradient id="pinkSparkleGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EC9C9D" />
            <stop offset="35%" stopColor="#D3968C" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#105666" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0d3a46" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glowing envelope */}
        <circle cx="50" cy="50" r="45" fill="url(#pinkSparkleGrad)" opacity="0.65" />

        {/* 8-pointed handpicked retro starburst trail shape */}
        <path
          d="M 50 10 C 50 40 40 50 10 50 C 40 50 50 60 50 90 C 50 60 60 50 90 50 C 60 50 50 40 50 10"
          fill="#EC9C9D"
          opacity="0.9"
        />

        {/* Secondary diagonal sparkle accents */}
        <path
          d="M 50 30 C 50 45 45 50 30 50 C 45 50 50 55 50 70 C 50 55 55 50 70 50 C 55 50 50 45 50 30"
          fill="#F7F4D5"
          opacity="0.75"
          transform="rotate(45 50 50)"
        />

        {/* Glowing white core */}
        <ellipse cx="50" cy="50" rx="3" ry="3" fill="#FFFFFF" />
      </svg>
    </motion.div>
  );
}

// 2. Cosmic Star Trails Wave (from star-trails.png vibe)
// Serves as an elegant, fluid flowing divider line or border overlay
export function StarTrailsWave({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none mix-blend-screen overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto opacity-45 filter drop-shadow-[0_0_12px_rgba(247,244,213,0.35)]"
      >
        <defs>
          <linearGradient id="gradientGoldLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D3968C" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#F7F4D5" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#839958" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EC9C9D" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Sweeping cosmic stream paths */}
        <path
          d="M 50 320 C 120 180, 220 120, 360 220 C 480 320, 620 280, 750 80"
          stroke="url(#gradientGoldLine)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 70 300 C 150 160, 240 140, 370 240 C 490 330, 600 240, 730 110"
          stroke="url(#gradientGoldLine)"
          strokeWidth="2"
          opacity="0.85"
        />
        <path
          d="M 90 280 C 180 140, 260 160, 380 260 C 500 350, 580 210, 710 140"
          stroke="url(#gradientGoldLine)"
          strokeWidth="1"
          strokeDasharray="12 6"
        />

        {/* Multiple Sparkly Retro Stars along the trails */}
        {/* Star 1 */}
        <g transform="translate(140, 185)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#F7F4D5" />
          <circle cx="0" cy="0" r="1.5" fill="#FFF" />
        </g>
        {/* Star 2 */}
        <g transform="translate(365, 225) scale(0.7)">
          <path d="M 0 -15 Q 0 0 -15 0 Q 0 0 0 15 Q 0 0 15 0 Q 0 0 0 -15" fill="#EC9C9D" />
        </g>
        {/* Star 3 (Large Sparkle) */}
        <g transform="translate(560, 285) scale(1.3)">
          <path d="M 0 -18 Q 0 0 -18 0 Q 0 0 0 18 Q 0 0 18 0 Q 0 0 0 -18" fill="#F7F4D5" />
          <circle cx="0" cy="0" r="2.5" fill="#FFF" className="animate-ping" style={{ animationDuration: '3s' }} />
        </g>
        {/* Star 4 */}
        <g transform="translate(680, 175) scale(0.6)">
          <path d="M 0 -10 Q 0 0 -10 0 Q 0 0 0 10 Q 0 0 10 0 Q 0 0 0 -10" fill="#839958" />
        </g>
        {/* Star 5 */}
        <g transform="translate(250, 150) scale(0.8)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#D3968C" />
        </g>
        {/* Scattered tiny background speckles */}
        <circle cx="100" cy="280" r="1" fill="#F7F4D5" opacity="0.6" />
        <circle cx="210" cy="200" r="1.5" fill="#F7F4D5" opacity="0.8" />
        <circle cx="310" cy="180" r="1" fill="#EC9C9D" opacity="0.5" />
        <circle cx="480" cy="300" r="2" fill="#F7F4D5" opacity="0.7" />
        <circle cx="610" cy="220" r="1.5" fill="#839958" opacity="0.6" />
      </svg>
    </div>
  );
}

// 3. Purple Spiral celestial string (from purple-spiral.png vibe)
// Perfect for rotating behind photo frames, logos, or headers
export function PurpleStarSpiral({ className = "", size = 260, speed = 40 }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`pointer-events-none select-none mix-blend-screen ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-60 filter drop-shadow-[0_0_8px_rgba(211,150,140,0.4)]"
      >
        <defs>
          <linearGradient id="purpleSpiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#105666" />
            <stop offset="50%" stopColor="#D3968C" />
            <stop offset="100%" stopColor="#EC9C9D" />
          </linearGradient>
        </defs>

        {/* Handdrawn purple cord spiral path */}
        <path
          d="M 100 100 
             A 10 10 0 1 0 110 105 
             A 20 20 0 1 0 85 115 
             A 35 35 0 1 0 128 80 
             A 50 50 0 1 0 62 135 
             A 68 68 0 1 0 155 58 
             A 85 85 0 1 0 35 152 
             A 90 90 0 0 0 190 100"
          stroke="url(#purpleSpiralGrad)"
          strokeWidth="1.5"
          opacity="0.8"
          strokeLinecap="round"
        />

        {/* Gold star beads attached along the spiral string */}
        <g transform="translate(110, 105) scale(0.4)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#F7F4D5" />
        </g>
        <g transform="translate(85, 115) scale(0.45)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#D3968C" />
        </g>
        <g transform="translate(128, 80) scale(0.5)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#F7F4D5" />
        </g>
        <g transform="translate(62, 135) scale(0.5)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#839958" />
        </g>
        <g transform="translate(155, 58) scale(0.65)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#EC9C9D" />
        </g>
        <g transform="translate(35, 152) scale(0.7)">
          <path d="M 0 -12 Q 0 0 -12 0 Q 0 0 0 12 Q 0 0 12 0 Q 0 0 0 -12" fill="#F7F4D5" />
        </g>
        <g transform="translate(190, 100) scale(0.85)">
          <path d="M 0 -15 Q 0 0 -15 0 Q 0 0 0 15 Q 0 0 15 0 Q 0 0 0 -15" fill="#F7F4D5" />
        </g>
      </svg>
    </motion.div>
  );
}
