import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Cpu, Palette, Eye, ChevronDown, FileCode, Video, FileText, Presentation, Github } from "lucide-react";
import SpotlightCard from "@/components/effects/SpotlightCard";
import ParallaxSection from "@/components/effects/ParallaxSection";

const guidelines = [
  { icon: Lightbulb, text: "Solutions should demonstrate meaningful use of AI, not rule-based logic alone" },
  { icon: Cpu, text: "Teams should clearly explain why AI is needed, not just how it is used" },
  { icon: Palette, text: "Use of AI-assisted development workflows is encouraged" },
  { icon: Eye, text: "Emphasis on clarity, usability, and responsible design" },
];

const evaluationCriteria = [
  { title: "Ideation & Creativity", pct: 30, desc: "Novelty, alignment with track, solution uniqueness", color: "primary" },
  { title: "Impact", pct: 20, desc: "Potential impact & clarity of beneficiaries", color: "secondary" },
  { title: "Technical Feasibility", pct: 30, desc: "Technical approach, plausibility & constraints", color: "primary" },
  { title: "Business Feasibility", pct: 20, desc: "Go-to-market, value proposition & sustainability", color: "secondary" },
];

const submissions = [
  { icon: FileCode, text: "A functional, working code prototype using Amazon Bedrock and/or Amazon Q" },
  { icon: Github, text: "Link to your GitHub repository" },
  { icon: Video, text: "A concise 3-minute video pitch demonstrating functionality" },
  { icon: FileText, text: "Technical blog on AWS Builder Center" },
  { icon: Presentation, text: "Presentation (Max 10-12 slides) summarizing your solution" },
];

const problemStatements = [
  {
    track: "Student Track",
    color: "primary" as const,
    problems: [
      { id: "01", title: "AI for Learning & Developer Productivity", desc: "Build an AI-powered solution that helps people learn faster, work smarter, or become more productive while building or understanding technology." },
      { id: "02", title: "AI for Media, Content & Digital Experiences", desc: "Design an AI-driven solution that helps create, manage, personalize, or distribute digital content more effectively." },
      { id: "03", title: "AI for Communities, Access & Public Impact", desc: "Build an AI-powered solution that improves access to information, resources, or opportunities for communities and public systems." },
    ],
  },
  {
    track: "Professional / Startup Track",
    color: "secondary" as const,
    problems: [
      { id: "01", title: "AI for Retail, Commerce & Market Intelligence", desc: "Build an AI-powered solution that enhances decision-making, efficiency, or user experience across retail, commerce, and marketplace ecosystems." },
      { id: "02", title: "AI for Healthcare & Life Sciences", desc: "Design an AI solution that improves efficiency, understanding, or support within healthcare or life-sciences ecosystems." },
      { id: "03", title: "AI for Rural Innovation & Sustainable Systems", desc: "Build an AI-powered solution that supports rural ecosystems, sustainability, or resource-efficient systems." },
    ],
  },
];

const GuidelinesSection = () => {
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);

  return (
    <section id="guidelines" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <ParallaxSection speed={0.15}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              RULES & GUIDELINES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Guidelines & <span className="text-gradient-green">Details</span>
            </h2>
          </motion.div>
        </ParallaxSection>

        {/* General Guidelines */}
        <div className="grid sm:grid-cols-2 gap-5 mb-24">
          {guidelines.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring" }}
            >
              <SpotlightCard className="p-6 flex items-start gap-4 h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <g.icon size={20} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Problem Statements */}
        {problemStatements.map((track) => (
          <div key={track.track} className="mb-16">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold mb-6"
            >
              <span className={track.color === "primary" ? "text-gradient-green" : "text-gradient-purple"}>
                {track.track}
              </span>{" "}
              Problem Statements
            </motion.h3>

            <div className="space-y-3">
              {track.problems.map((p) => {
                const isExpanded = expandedProblem === `${track.track}-${p.id}`;
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`glass-card overflow-hidden transition-all duration-300 cursor-pointer ${
                      isExpanded
                        ? track.color === "primary" ? "border-primary/40" : "border-secondary/40"
                        : "hover:border-border"
                    }`}
                    onClick={() => setExpandedProblem(isExpanded ? null : `${track.track}-${p.id}`)}
                  >
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-4">
                        <span className={`text-lg font-bold font-mono ${
                          track.color === "primary" ? "text-primary" : "text-secondary"
                        }`}>{p.id}</span>
                        <span className="text-sm font-medium text-foreground">{p.title}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} className="text-muted-foreground" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0">
                            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Evaluation Criteria */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 mt-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            JUDGING
          </div>
          <h3 className="text-2xl md:text-4xl font-bold">
            Evaluation <span className="text-gradient-purple">Criteria</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {evaluationCriteria.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <SpotlightCard className="p-6 text-center h-full">
                {/* Animated ring */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18" cy="18" r="15.9"
                      className="fill-none stroke-border"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="18" cy="18" r="15.9"
                      className={`fill-none ${c.color === "primary" ? "stroke-primary" : "stroke-secondary"}`}
                      strokeWidth="2"
                      strokeDasharray="100"
                      initial={{ strokeDashoffset: 100 }}
                      whileInView={{ strokeDashoffset: 100 - c.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className={`absolute inset-0 flex items-center justify-center text-lg font-bold font-mono ${
                    c.color === "primary" ? "text-primary" : "text-secondary"
                  }`}>
                    {c.pct}%
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{c.title}</h4>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* What to Submit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            SUBMISSION
          </div>
          <h3 className="text-2xl md:text-4xl font-bold">
            What to <span className="text-gradient-green">submit?</span>
          </h3>
        </motion.div>

        <div className="max-w-2xl space-y-4">
          {submissions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 150 }}
            >
              <SpotlightCard className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <s.icon size={18} />
                </div>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
