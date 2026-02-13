import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, Wifi, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, label: "1-4 Team Members" },
  { icon: Clock, label: "Age 18+" },
  { icon: MapPin, label: "India" },
  { icon: Wifi, label: "Online" },
  { icon: Trophy, label: "INR 40 Lakhs Prize Pool" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-foreground">AI for </span>
          <span className="text-gradient-green">Bharat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-mono text-lg md:text-xl text-muted-foreground mb-10"
        >
          Learn Faster. Build Better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-muted-foreground">
              <stat.icon size={18} className="text-primary" />
              <span className="text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
