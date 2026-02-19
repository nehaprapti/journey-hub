import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Wifi, Trophy, ChevronDown, NotebookPenIcon } from "lucide-react";
import TypewriterText from "@/components/effects/TypewriterText";
import Orb from "@/components/effects/Orb";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LineShadowText } from "@/components/ui/line-shadow-text";

const stats = [
  { icon: Users, label: "1-4 Members per team" },
  { icon: MapPin, label: "Sona College of Technology, Salem" },
  { icon: Wifi, label: "Offline" },
  { icon: Trophy, label: "INR 50k Prize Pool" },
  { icon: NotebookPenIcon, label: "Registration fee INR 250 each" },
];

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";
  const orbBg = isLight ? "#fafafa" : "#000000";
  const sectionBg = isLight ? "bg-[#fafafa]" : "bg-[#020202]";
  const titleColor = isLight ? "text-gray-900" : "text-white";

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${sectionBg}`}>

      {/* Orb — full-bleed background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.37}
          rotateOnHover
          hue={360}
          forceHoverState={false}
          backgroundColor={orbBg}
        />
      </div>

      {/* Foreground content — fully centered */}
      <div className="relative z-10 container mx-auto px-4 pt-20 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono text-primary">Hackathon Phase is Live</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg transition-colors duration-500 ${titleColor}`}
          >
            <span>Tech</span>
            <LineShadowText
              shadowColor={isLight ? "#16a34a" : "#4ade80"}
              className="italic"
            >
              Zeal
            </LineShadowText>
            <span className="text-gradient-green">{" '26"}</span>
          </motion.h1>

          {/* Typewriter subtitle */}
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

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="lg" asChild className="cursor-none" data-heart-cursor="true">
              <a href="https://vision.hack2skill.com/event/ai-for-bharat" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 + i * 0.06 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary backdrop-blur-sm text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:bg-primary/20"
              >
                <stat.icon size={15} />
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="mt-16 mb-4"
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
