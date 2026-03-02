import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Wifi, Trophy, ChevronDown, NotebookPenIcon } from "lucide-react";
import TypewriterText from "@/components/effects/TypewriterText";
import Orb from "@/components/effects/Orb";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef, useCallback } from "react";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, label: "2-4 Members per team" },
  { icon: MapPin, label: "Sona College of Technology, Salem" },
  { icon: Wifi, label: "Offline" },
  { icon: Trophy, label: "INR 30k Prize Pool" },
  { icon: NotebookPenIcon, label: "Registration fee INR 250 each" },
];

interface Star {
  x: number; y: number;
  baseX: number; baseY: number;
  size: number; alpha: number; alphaDir: number;
}

const collaborators = [
  { src: "/m.png",    alt: "Maadhyamik Technologies" },
  { src: "/mongo.png", alt: "MongoDB" },
  { src: "/ict.png",  alt: "ICT Academy" },
];

const STAR_COUNT = 180;
const CURSOR_RADIUS = 110;

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";
  const titleColor = isLight ? "text-gray-900" : "text-white";
  // Dark green in light mode keeps shader bgLuminance ≈ 0 → vivid dark-green orb
  const orbBg = isLight ? "#001a00" : "#000000";

  // ── Star canvas refs ──────────────────────────────────────────────
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const initStars = useCallback((w: number, h: number) => {
    starsRef.current = Array.from({ length: STAR_COUNT }, () => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return {
        x, y, baseX: x, baseY: y,
        size: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.7 + 0.15,
        alphaDir: Math.random() < 0.5 ? 1 : -1,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
      initStars(canvas.width, canvas.height);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (const s of starsRef.current) {
        // twinkle
        s.alpha += 0.004 * s.alphaDir;
        if (s.alpha > 0.9 || s.alpha < 0.1) s.alphaDir *= -1;

        // cursor repulsion
        const dx = s.x - mx, dy = s.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_RADIUS && dist > 0) {
          const f = ((CURSOR_RADIUS - dist) / CURSOR_RADIUS) * 7;
          s.x += (dx / dist) * f;
          s.y += (dy / dist) * f;
        }
        // drift back
        s.x += (s.baseX - s.x) * 0.045;
        s.y += (s.baseY - s.y) * 0.045;

        ctx.save();
        ctx.globalAlpha = s.alpha;

        if (s.size > 1.6) {
          // sparkle cross
          const arm = s.size * 2.8;
          ctx.strokeStyle = "#4ade80";
          ctx.lineWidth = s.size * 0.45;
          ctx.beginPath();
          ctx.moveTo(s.x - arm, s.y); ctx.lineTo(s.x + arm, s.y);
          ctx.moveTo(s.x, s.y - arm); ctx.lineTo(s.x, s.y + arm);
          ctx.stroke();
          ctx.fillStyle = "#bbf7d0";
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 0.55, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // soft glow dot
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 2.2);
          g.addColorStop(0, "#86efac");
          g.addColorStop(1, "transparent");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [initStars]);

  // Cycle through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through collaborator logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % collaborators.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Collaborators — Desktop: All 3 logos in a row */}
      <div className="absolute top-20 md:top-32 left-1/2 z-20 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-auto">
        <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-1">In collaboration with</p>
        <div className="flex items-center gap-4">
          {collaborators.map((collab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center w-40 h-24 rounded-2xl border border-green-400/40 bg-white/90 shadow-[0_0_0_1px_rgba(74,222,128,0.3),0_4px_28px_rgba(74,222,128,0.3)] overflow-hidden"
            >
              <img
                src={collab.src}
                alt={collab.alt}
                className="max-w-[85%] max-h-[80%] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collaborators — Mobile: Morphing single logo */}
      <div className="absolute top-20 left-1/2 z-20 transform -translate-x-1/2 flex md:hidden flex-col items-center gap-1.5 pointer-events-auto">
        <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">In collaboration with</p>
        <div className="relative flex items-center justify-center w-[130px] h-[76px] rounded-2xl border border-green-400/40 bg-white/90 shadow-[0_0_0_1px_rgba(74,222,128,0.3),0_4px_28px_rgba(74,222,128,0.3)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentLogoIndex}
              src={collaborators[currentLogoIndex].src}
              alt={collaborators[currentLogoIndex].alt}
              initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1,    filter: "blur(0px)" }}
              exit={{    opacity: 0, scale: 1.08, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute max-w-[85%] max-h-[80%] object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
      {/* Orb — transparent bg so site background shows through */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Orb
          hoverIntensity={0.37}
          rotateOnHover
          hue={360}
          forceHoverState={false}
          backgroundColor={orbBg}
        />
      </div>

      {/* Star canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[2] w-full h-full pointer-events-none" />

      {/* ── Badge + Title + Subtitle — absolutely centered inside the orb ── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-5 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs font-mono text-primary">Organized by Department of Information Technology</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={`text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight drop-shadow-lg transition-colors duration-500 ${titleColor}`}
        >
          <span>Tech</span>
          <LineShadowText shadowColor={isLight ? "#16a34a" : "#4ade80"} className="italic">Zeal</LineShadowText>
          <LineShadowText shadowColor={isLight ? "#16a34a" : "#4ade80"} className="italic text-primary">{" '26"}</LineShadowText>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base md:text-xl text-primary/90 h-7 md:h-8 drop-shadow"
        >
          <TypewriterText
            texts={["Learn Faster. Build Better.", "Innovate with AI.", "Transform India's Tech Landscape.","10hrs Industry Hackathon"]}
            speed={70}
          />
        </motion.div>
      </div>

      {/* ── Buttons + Stats + Scroll — normal flow below the orb area ── */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen px-4 pb-8 pt-8 gap-5">
        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-row gap-3 md:gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/register">
              Register Now
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>

        {/* Morphing Stats Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center"
        >
          <div className="relative flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary backdrop-blur-sm text-sm font-medium overflow-hidden min-w-[280px] justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStatIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center gap-2 absolute inset-0 justify-center"
              >
                {(() => {
                  const CurrentIcon = stats[currentStatIndex].icon;
                  return (
                    <>
                      <CurrentIcon size={16} />
                      <span>{stats[currentStatIndex].label}</span>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
            {/* Invisible placeholder to maintain badge size */}
            <div className="opacity-0 flex items-center gap-2">
              <Users size={16} />
              <span className="whitespace-nowrap">Sona College of Technology, Salem</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown size={24} className="text-primary/90" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
