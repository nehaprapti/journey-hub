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
  { event: "Idea confirmation End Date", date: "Mar 20, 2026", color: "secondary" },
  { event: "Grand Finale", date: "Mar 28, 2026", color: "primary" },
];

const JourneySection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
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

        {/* Steps - horizontal scroll on mobile */}
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
                <span className={`text-3xl font-bold font-mono leading-none ${
                  s.color === "primary" ? "text-primary" : "text-secondary"
                } group-hover:scale-110 transition-transform duration-300`}>
                  {s.step}
                </span>
                <div className="h-8 w-px bg-border" />
                <span className="text-foreground font-medium text-sm">{s.title}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            TIMELINE
          </div>
          <h3 className="text-2xl md:text-4xl font-bold">
            Hackathon <span className="text-gradient-purple">Timeline</span>
          </h3>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Static line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border/30" />
          {/* Animated fill line */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary"
            style={{ height: lineHeight }}
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${item.event}-${i}`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative flex items-center mb-10 group"
              >
                {/* Dot */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10`}>
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    item.color === "primary"
                      ? "border-primary bg-background group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(74,222,128,0.5)]"
                      : "border-secondary bg-background group-hover:bg-secondary group-hover:shadow-[0_0_12px_rgba(167,139,250,0.5)]"
                  }`} />
                </div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}>
                  <div className={`glass-card p-4 inline-block transition-all duration-300 ${
                    item.color === "primary" ? "group-hover:border-primary/40" : "group-hover:border-secondary/40"
                  }`}>
                    <p className="text-sm font-semibold text-foreground">{item.event}</p>
                    <p className={`text-xs font-mono mt-1 ${
                      item.color === "primary" ? "text-primary" : "text-secondary"
                    }`}>{item.date}</p>
                  </div>
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
