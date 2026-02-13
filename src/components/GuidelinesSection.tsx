import { motion } from "framer-motion";
import { Lightbulb, Cpu, Palette, Eye } from "lucide-react";

const guidelines = [
  { icon: Lightbulb, text: "Solutions should demonstrate meaningful use of AI, not rule-based logic alone" },
  { icon: Cpu, text: "Teams should clearly explain why AI is needed, not just how it is used" },
  { icon: Palette, text: "Use of AI-assisted development workflows is encouraged" },
  { icon: Eye, text: "Emphasis on clarity, usability, and responsible design" },
];

const evaluationCriteria = [
  { title: "Ideation & Creativity", pct: "30%", desc: "Novelty, alignment with track, solution uniqueness" },
  { title: "Impact", pct: "20%", desc: "Potential impact & clarity of beneficiaries" },
  { title: "Technical Feasibility", pct: "30%", desc: "Technical approach, plausibility & constraints" },
  { title: "Business Feasibility", pct: "20%", desc: "Go-to-market, value proposition & sustainability" },
];

const submissions = [
  "A functional, working code prototype using Amazon Bedrock and/or Amazon Q",
  "Link to your GitHub repository",
  "A concise 3-minute video pitch demonstrating functionality",
  "Technical blog on AWS Builder Center",
  "Presentation (Max 10-12 slides) summarizing your solution",
];

const GuidelinesSection = () => {
  return (
    <section id="guidelines" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Guidelines & <span className="text-gradient-green">Details</span>
        </motion.h2>

        {/* General Guidelines */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {guidelines.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <g.icon size={20} />
              </div>
              <p className="text-sm text-muted-foreground">{g.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Evaluation Criteria */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-10"
        >
          Evaluation <span className="text-gradient-purple">Criteria</span>
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {evaluationCriteria.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <span className={`text-3xl font-bold font-mono ${
                i % 2 === 0 ? "text-primary" : "text-secondary"
              }`}>
                {c.pct}
              </span>
              <h4 className="text-sm font-semibold text-foreground mt-3 mb-2">{c.title}</h4>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What to Submit */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-10"
        >
          What to <span className="text-gradient-green">submit?</span>
        </motion.h3>

        <div className="max-w-2xl space-y-4">
          {submissions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 glass-card p-5"
            >
              <span className="text-primary font-mono font-bold text-sm mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-muted-foreground">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
