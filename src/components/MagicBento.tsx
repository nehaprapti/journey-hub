import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/effects/SpotlightCard";

type BentoItem = {
  title: string;
  content: React.ReactNode;
};

// Alternating spotlight colours: even index → green, odd → violet
const spotlightColors = [
  "rgba(74, 222, 128, 0.10)",   // green
  "rgba(139, 92, 246, 0.10)",   // violet
];

// Matching border glow on hover
const glowBorders = [
  "hover:border-primary/50 hover:shadow-[0_0_28px_4px_rgba(74,222,128,0.18)]",
  "hover:border-secondary/50 hover:shadow-[0_0_28px_4px_rgba(139,92,246,0.18)]",
];

const MagicBento: React.FC<{ items: BentoItem[] }> = ({ items }) => {
  const layoutClasses = [
    "lg:col-start-1 lg:row-start-1",
    "lg:col-start-2 lg:row-start-1",
    "lg:col-start-3 lg:row-start-1 lg:col-span-2",
    "lg:col-start-1 lg:row-start-2 lg:col-span-2",
    "lg:col-start-3 lg:row-start-2",
    "lg:col-start-4 lg:row-start-2",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4">
      {items.map((it, idx) => {
        const colorIdx = idx % 2;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-24px" }}
            transition={{
              delay: idx * 0.07,
              type: "spring",
              stiffness: 160,
              damping: 20,
            }}
            whileHover={{
              y: -8,
              scale: 1.025,
              transition: { type: "spring", stiffness: 300, damping: 22 },
            }}
            className={`${layoutClasses[idx] || ""}`}
          >
            <SpotlightCard
              spotlightColor={spotlightColors[colorIdx]}
              className={`
                p-4 h-full relative overflow-hidden
                border border-white/5 bg-card/60 backdrop-blur
                transition-[border-color,box-shadow] duration-300
                ${glowBorders[colorIdx]}
              `}
            >
              {/* Static purple radial tint */}
              <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_55%)]" />
              </div>

              <h4 className="font-semibold mb-3 text-foreground relative">
                {it.title}
              </h4>
              <div className="text-sm text-muted-foreground leading-relaxed relative">
                {it.content}
              </div>
            </SpotlightCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MagicBento;
