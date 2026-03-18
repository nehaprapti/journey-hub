import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Neha Prapti P",
    dept: "Dept of IT",
    linkedin: "https://www.linkedin.com/in/neha-prapti",
    color: "primary",
    initials: "NP",
  },
  {
    name: "Thiganth K",
    dept: "Dept of IT",
    linkedin: "https://www.linkedin.com/in/thiganth-k",
    color: "secondary",
    initials: "TK",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

const TechTeamSection = () => {
  return (
    <section id="tech-team" className="section-padding relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-secondary/4 blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            BUILT WITH Passion
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient-green">Contributors</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The team that designed and developed this platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              className="flex flex-col items-center gap-4 group"
            >
              {/* Circle avatar */}
              <div
                className={`relative w-28 h-28 rounded-full flex items-center justify-center text-2xl font-bold border-2 transition-transform duration-300 group-hover:scale-105 ${
                  member.color === "primary"
                    ? "border-primary/50 bg-primary/10 text-primary shadow-[0_0_30px_hsl(142_60%_55%/0.2)]"
                    : "border-secondary/50 bg-secondary/10 text-secondary shadow-[0_0_30px_hsl(262_60%_65%/0.2)]"
                }`}
              >
                {member.initials}
                {/* Animated ring */}
                <span
                  className={`absolute inset-0 rounded-full animate-pulse ${
                    member.color === "primary" ? "ring-2 ring-primary/20" : "ring-2 ring-secondary/20"
                  }`}
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="text-base font-semibold text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{member.dept}</p>
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full border transition-colors ${
                  member.color === "primary"
                    ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
                    : "border-secondary/40 bg-secondary/10 text-secondary hover:bg-secondary/20"
                }`}
              >
                <Linkedin size={13} />
                Connect
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTeamSection;
