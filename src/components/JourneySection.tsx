import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Register for the Hackathon", color: "primary" },
  { step: "02", title: "Form Your Team for Hackathon", color: "secondary" },
  { step: "03", title: "Attend Live Workshops", color: "primary" },
  { step: "04", title: "Select a Problem Statement", color: "secondary" },
  { step: "05", title: "Submit Your Idea", color: "primary" },
  { step: "06", title: "Wait for Shortlist Announcement", color: "secondary" },
  { step: "07", title: "Build & Submit Your Prototype", color: "primary" },
  { step: "08", title: "Wait for Final Shortlist", color: "secondary" },
  { step: "09", title: "Grand Finale", color: "primary" },
];

const timeline = [
  { event: "Registrations Begin", date: "Nov 10, 2025", color: "primary" },
  { event: "Learning Phase Begins", date: "Nov 10, 2025", color: "secondary" },
  { event: "Learning Phase Ends", date: "Jan 11, 2026", color: "primary" },
  { event: "Problem Statement Reveal", date: "Jan 13, 2026", color: "secondary" },
  { event: "Idea Submission Phase Begins", date: "Jan 13, 2026", color: "primary" },
  { event: "Registrations Close", date: "Feb 15, 2026", color: "secondary" },
  { event: "Idea Submission Phase Ends", date: "Feb 15, 2026", color: "primary" },
  { event: "Initial Shortlist Announcement", date: "Mar 3, 2026", color: "secondary" },
  { event: "Prototype Submission Ends", date: "Mar 12, 2026", color: "primary" },
  { event: "Final Shortlist Announcement", date: "Apr 1, 2026", color: "secondary" },
  { event: "Winner Announcement", date: "Apr 8, 2026", color: "primary" },
];

const JourneySection = () => {
  return (
    <section id="journey" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          What will your <span className="text-gradient-green">journey</span> look like?
        </motion.h2>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 flex items-start gap-4 group hover:border-primary/40 transition-all"
            >
              <span className={`text-2xl font-bold font-mono ${
                s.color === "primary" ? "text-primary" : "text-secondary"
              }`}>
                {s.step}
              </span>
              <span className="text-foreground font-medium pt-1">{s.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-12 text-center"
        >
          Hackathon <span className="text-gradient-purple">Timeline</span>
        </motion.h3>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={`${item.event}-${i}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative flex items-center gap-4 mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10 ${
                item.color === "primary" ? "bg-primary" : "bg-secondary"
              }`} />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
              }`}>
                <p className="text-sm font-semibold text-foreground">{item.event}</p>
                <p className="text-xs text-muted-foreground font-mono">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          *Please note that the timeline is tentative and may be subject to change.
        </p>
      </div>
    </section>
  );
};

export default JourneySection;
