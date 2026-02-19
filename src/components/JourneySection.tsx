import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "@/components/effects/SpotlightCard";

const steps = [
  { step: "01", title: "Register for the Hackathon", color: "primary" },
  { step: "02", title: "Idea confirmation End Date", color: "secondary" },
  { step: "03", title: "Grand Finale", color: "primary" },
];

const timeline = [
  { event: "Registrations Begin", date: "Feb 16, 2026", color: "primary" },
  { event: "Idea Confirmation End Date", date: "Mar 20, 2026", color: "secondary" },
  { event: "Grand Finale", date: "Mar 28, 2026", color: "primary" },
];

const DOT_SIZE = 20;   // px
const STEM_H = 48;   // px — stem between dot and card
const CARD_H = 80;   // px — approximate card height
// Total height of the timeline container
// above: CARD_H + STEM_H + dot_radius  |  below: dot_radius + STEM_H + CARD_H
const CONTAINER_H = CARD_H + STEM_H + DOT_SIZE / 2 + STEM_H + CARD_H; // ~288px

const JourneySection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  // The horizontal line sits at the vertical midpoint
  const lineTop = CARD_H + STEM_H; // px from top of container

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            YOUR PATH
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            What will your <span className="text-gradient-green">journey</span> look like?
          </h2>
        </motion.div>

        {/* Steps cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
            >
              <SpotlightCard className="p-6 flex items-center gap-4 group hover:border-primary/40 transition-all cursor-default">
                <span className={`text-3xl font-bold font-mono leading-none ${s.color === "primary" ? "text-primary" : "text-secondary"
                  } group-hover:scale-110 transition-transform duration-300`}>
                  {s.step}
                </span>
                <div className="h-8 w-px bg-border" />
                <span className="text-foreground font-medium text-sm">{s.title}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Timeline header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            TIMELINE
          </div>
          <h3 className="text-2xl md:text-4xl font-bold">
            Hackathon <span className="text-gradient-purple">Timeline</span>
          </h3>
        </motion.div>

        {/* ── Horizontal Timeline ── */}
        <div
          ref={timelineRef}
          className="relative w-full"
          style={{ height: `${CONTAINER_H}px` }}
        >
          {/* ── Horizontal line (sits at lineTop) ── */}
          <div
            className="absolute left-0 right-0 h-[2px] bg-border/30 rounded-full"
            style={{ top: lineTop }}
          />
          <motion.div
            className="absolute left-0 h-[2px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
            style={{ top: lineTop, width: lineWidth }}
          />

          {/* ── Dots + stems + cards ── */}
          {timeline.map((item, i) => {
            const isPrimary = item.color === "primary";
            const isAbove = i % 2 === 0; // 0,2 → card above line; 1 → card below

            // Horizontal position: evenly spaced at 16.5%, 50%, 83.5%
            const leftPct = `${16.5 + i * 33.5}%`;

            // Dot top = lineTop - dot_radius (so dot centre sits exactly on line)
            const dotTop = lineTop - DOT_SIZE / 2;

            // Stem: connects dot edge to card
            const stemTop = isAbove ? dotTop - STEM_H : dotTop + DOT_SIZE;
            const cardTop = isAbove ? stemTop - CARD_H : stemTop + STEM_H;

            return (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, y: isAbove ? -16 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="absolute group"
                style={{ left: leftPct, transform: "translateX(-50%)" }}
              >
                {/* Dot */}
                <div
                  className={`absolute w-5 h-5 rounded-full border-2 transition-all duration-300 ${isPrimary
                      ? "border-primary bg-background group-hover:bg-primary group-hover:shadow-[0_0_16px_hsl(142_60%_55%/0.7)]"
                      : "border-secondary bg-background group-hover:bg-secondary group-hover:shadow-[0_0_16px_hsl(262_60%_65%/0.7)]"
                    }`}
                  style={{ top: dotTop, left: "50%", transform: "translateX(-50%)" }}
                />

                {/* Stem */}
                <div
                  className={`absolute w-px ${isPrimary ? "bg-primary/40" : "bg-secondary/40"}`}
                  style={{
                    top: stemTop,
                    height: STEM_H,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />

                {/* Card */}
                <div
                  className={`absolute glass-card p-4 text-center transition-all duration-300 ${isPrimary ? "group-hover:border-primary/40" : "group-hover:border-secondary/40"
                    }`}
                  style={{
                    top: cardTop,
                    width: "160px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <p className="text-sm font-semibold text-foreground leading-snug">{item.event}</p>
                  <p className={`text-xs font-mono mt-1.5 ${isPrimary ? "text-primary" : "text-secondary"}`}>
                    {item.date}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-10 font-mono"
        >
          * Timeline is tentative and may be subject to change.
        </motion.p>
      </div>
    </section>
  );
};

export default JourneySection;
