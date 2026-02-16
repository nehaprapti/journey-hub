import React from "react";
import SpotlightCard from "@/components/effects/SpotlightCard";

type BentoItem = {
  title: string;
  content: React.ReactNode;
};

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
      {items.map((it, idx) => (
        <SpotlightCard
          key={idx}
          className={`p-4 h-full relative overflow-hidden border border-white/5 bg-card/60 backdrop-blur ${layoutClasses[idx] || ""}`}
        >
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_55%)]" />
          </div>
          <h4 className="font-semibold mb-3 text-foreground relative">{it.title}</h4>
          <div className="text-sm text-muted-foreground leading-relaxed">{it.content}</div>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default MagicBento;
