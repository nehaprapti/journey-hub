import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "@/components/effects/SpotlightCard";

const steps = [
  { step: "01", title: "Register & Submit Idea", color: "primary" },
  { step: "02", title: "Online Presentation", color: "secondary" },
  { step: "03", title: "Grand Finale", color: "primary" },
];

const timeline = [
  { event: "Registrations Begin", date: "Mar 01, 2026", color: "primary" },
  { event: "Idea Submission Deadline", date: "Mar 24, 2026", originalDate: "Mar 20, 2026", color: "secondary" },
  { event: "Shortlist Announcement", date: "Mar 26, 2026", originalDate: "Mar 24, 2026", color: "secondary" },
  { event: "Grand Finale", date: "Mar 28, 2026", color: "primary" },
];

const DOT_SIZE = 20;
const CARD_AREA_H = 120; // height reserved above/below line for card+stem

const JourneySection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

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
        <div className="overflow-x-auto">
          <div
            ref={timelineRef}
            className="relative min-w-[700px]"
            style={{ height: `${CARD_AREA_H * 2 + DOT_SIZE}px` }}
          >
            {/* Animated progress line — sits at vertical midpoint */}
            <div
              className="absolute left-0 right-0 h-[2px] bg-border/30 rounded-full"
              style={{ top: `${CARD_AREA_H}px` }}
            />
            <motion.div
              className="absolute left-0 h-[2px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
              style={{ top: `${CARD_AREA_H}px`, width: lineWidth }}
            />

            {/* ── One column per timeline item ── */}
            <div className="absolute inset-0 flex">
              {timeline.map((item, i) => {
                const isPrimary = item.color === "primary";
                const isAbove = i % 2 === 0;

                return (
                  <motion.div
                    key={item.event}
                    initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="flex-1 flex flex-col items-center"
                  >
                    {/* ── Top half: card if isAbove, else empty ── */}
                    <div
                      className="flex flex-col items-center justify-end w-full"
                      style={{ height: `${CARD_AREA_H}px` }}
                    >
                      {isAbove ? (
                        <>
                          <div
                            className={`glass-card p-3 text-center transition-all duration-300 w-[130px] group cursor-default ${isPrimary ? "hover:border-primary/40" : "hover:border-secondary/40"}`}
                          >
                            <p className="text-xs font-semibold text-foreground leading-snug">{item.event}</p>
                            <p className={`text-[11px] font-mono mt-1.5 ${isPrimary ? "text-primary" : "text-secondary"}`}>
                              {item.originalDate ? (
                                <span className="line-through text-muted-foreground mr-2">{item.originalDate}</span>
                              ) : null}
                              {item.date}
                            </p>
                          </div>
                          {/* stem below card */}
                          <div className={`w-px flex-1 ${isPrimary ? "bg-primary/40" : "bg-secondary/40"}`} />
                        </>
                      ) : (
                        <div className="flex-1" />
                      )}
                    </div>

                    {/* ── Dot on the line ── */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 z-10 transition-all duration-300 ${
                        isPrimary
                          ? "border-primary bg-background hover:bg-primary hover:shadow-[0_0_16px_hsl(142_60%_55%/0.7)]"
                          : "border-secondary bg-background hover:bg-secondary hover:shadow-[0_0_16px_hsl(262_60%_65%/0.7)]"
                      }`}
                      style={{ marginTop: `-${DOT_SIZE / 2}px`, marginBottom: `-${DOT_SIZE / 2}px` }}
                    />

                    {/* ── Bottom half: card if !isAbove, else empty ── */}
                    <div
                      className="flex flex-col items-center justify-start w-full"
                      style={{ height: `${CARD_AREA_H}px` }}
                    >
                      {!isAbove ? (
                        <>
                          {/* stem above card */}
                          <div className={`w-px flex-1 ${isPrimary ? "bg-primary/40" : "bg-secondary/40"}`} />
                          <div
                            className={`glass-card p-3 text-center transition-all duration-300 w-[130px] group cursor-default ${isPrimary ? "hover:border-primary/40" : "hover:border-secondary/40"}`}
                          >
                            <p className="text-xs font-semibold text-foreground leading-snug">{item.event}</p>
                            <p className={`text-[11px] font-mono mt-1.5 ${isPrimary ? "text-primary" : "text-secondary"}`}>
                              {item.originalDate ? (
                                <span className="line-through text-muted-foreground mr-2">{item.originalDate}</span>
                              ) : null}
                              {item.date}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="flex-1" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
