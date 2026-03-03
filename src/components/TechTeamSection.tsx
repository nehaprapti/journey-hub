import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Code2, Palette, Terminal } from "lucide-react";

const team = [
  {
    name: "Neha Prapti",
    dept: "Dept of IT",
    role: "UI/UX & Frontend",
    linkedin: "https://www.linkedin.com/in/neha-prapti",
    color: "primary" as const,
    initials: "NP",
    contributions: ["Design", "Frontend", "Animations"],
    icon: Palette,
    file: "neha.tsx",
    lineCount: 312,
  },
  {
    name: "Thiganth K",
    dept: "Dept of IT - ADS ",
    role: "Frontend & Architecture",
    linkedin: "https://www.linkedin.com/in/thiganth-k",
    color: "secondary" as const,
    initials: "TK",
    contributions: ["Frontend", "Architecture", "Performance"],
    icon: Terminal,
    file: "thiganth.tsx",
    lineCount: 143,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      type: "spring" as const,
      stiffness: 160,
      damping: 20,
    },
  }),
};

function MemberCard({ member, i }: { member: (typeof team)[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });
  const isPrimary = member.color === "primary";
  const Icon = member.icon;

  const accentColor = isPrimary ? "hsl(142 60% 55%)" : "hsl(262 60% 65%)";
  const spotlightRgba = isPrimary
    ? "rgba(74,222,128,0.10)"
    : "rgba(139,92,246,0.10)";
  const borderHover = isPrimary
    ? "hover:border-primary/50 hover:shadow-[0_0_36px_hsl(142_60%_55%/0.18)]"
    : "hover:border-secondary/50 hover:shadow-[0_0_36px_hsl(262_60%_65%/0.18)]";
  const avatarGlow = isPrimary
    ? "shadow-[0_0_40px_hsl(142_60%_55%/0.35)]"
    : "shadow-[0_0_40px_hsl(262_60%_65%/0.35)]";
  const tagCls = isPrimary
    ? "border-primary/30 bg-primary/10 text-primary"
    : "border-secondary/30 bg-secondary/10 text-secondary";

  return (
    <motion.div
      key={member.name}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="w-full max-w-md"
    >
      <div
        ref={cardRef}
        onMouseMove={(e) => {
          if (!cardRef.current) return;
          const r = cardRef.current.getBoundingClientRect();
          setSpot({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
        }}
        onMouseLeave={() => setSpot((s) => ({ ...s, visible: false }))}
        className={`relative overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur transition-all duration-300 ${borderHover}`}
      >
        {/* Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: spot.visible ? 1 : 0,
            background: `radial-gradient(380px circle at ${spot.x}px ${spot.y}px, ${spotlightRgba}, transparent 65%)`,
          }}
        />

        {/* Terminal title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/40">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground/70 flex items-center gap-1.5">
            <Code2 size={11} />
            {member.file}
          </span>
          <span className="ml-auto font-mono text-[10px] text-muted-foreground/50">
            {member.lineCount} lines
          </span>
        </div>

        {/* Card body */}
        <div className="flex gap-5 p-5">
          {/* Avatar column */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div
              className={`relative w-20 h-20 rounded-xl flex items-center justify-center text-xl font-bold ${avatarGlow} ${
                isPrimary
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/30"
                  : "bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary border border-secondary/30"
              }`}
            >
              {member.initials}
              {/* Corner glow pip */}
              <span
                className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                  isPrimary ? "bg-primary" : "bg-secondary"
                } animate-pulse`}
              />
            </div>
            {/* Role icon badge */}
            <div
              className={`p-2 rounded-lg border ${
                isPrimary
                  ? "border-primary/20 bg-primary/5 text-primary"
                  : "border-secondary/20 bg-secondary/5 text-secondary"
              }`}
            >
              <Icon size={14} />
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <p className="text-base font-semibold text-foreground leading-tight">
                {member.name}
              </p>
              <p
                className="text-xs font-mono mt-0.5"
                style={{ color: accentColor }}
              >
                {member.role}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {member.dept}
              </p>
            </div>

            {/* Contribution tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {member.contributions.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tagCls}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LinkedIn */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border self-start transition-colors ${
                isPrimary
                  ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
                  : "border-secondary/40 bg-secondary/10 text-secondary hover:bg-secondary/20"
              }`}
            >
              <Linkedin size={12} />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-[2px]"
          style={{
            background: `linear-gradient(90deg, ${accentColor}55, ${accentColor}22, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

const TechTeamSection = () => {
  return (
    <section id="tech-team" className="section-padding relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-secondary/4 blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            BUILT WITH PASSION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient-green">Contributors</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The minds that designed and engineered this platform from the ground up.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTeamSection;
