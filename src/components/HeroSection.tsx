import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Wifi, Trophy, ChevronDown, NotebookPenIcon } from "lucide-react";
import TypewriterText from "@/components/effects/TypewriterText";
import AnimatedGrid from "@/components/effects/AnimatedGrid";
import Prism from "@/components/Prism";

const stats = [
  { icon: Users, label: "1-4 Members per team" },
  { icon: MapPin, label: "Sona College of Technology, Salem" },
  { icon: Wifi, label: "Offline" },
  { icon: Trophy, label: "INR 50k Prize Pool" },
  { icon: NotebookPenIcon, label: "Registration fee INR 250 each" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid overlay */}
      <AnimatedGrid />

      {/* Prism background (full-bleed) */}
      <div className="absolute inset-0 z-0">
        <Prism scale={3.6} hueShift={0} colorFrequency={1.2} glow={0.8} bloom={1.6} saturation={1} tint="#222226" suspendWhenOffscreen={false} />
      </div>

      {/* Radial glows for extra depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/6 blur-[100px] pointer-events-none" />

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono text-primary">Hackathon Phase is Live</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg"
          >
            <span>TechZeal </span>
            <span className="text-gradient-green">'26</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-primary/90 mb-10 h-8 drop-shadow"
          >
            <TypewriterText
              texts={["Learn Faster. Build Better.", "Innovate with AI.", "Transform India's Tech Landscape."]}
              speed={70}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="https://vision.hack2skill.com/event/ai-for-bharat" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 + i * 0.06 }}
                className="flex items-center gap-2 text-primary/90 drop-shadow"
              >
                <stat.icon size={18} className="text-primary" />
                <span className="text-sm font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
