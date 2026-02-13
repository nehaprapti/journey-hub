import { motion } from "framer-motion";
import { User } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";
import SpotlightCard from "@/components/effects/SpotlightCard";

const committee = [
  { name: "Hack2skill Team", role: "Organizing Partner", desc: "Platform & event management", gradient: "from-primary to-primary/50" },
  { name: "AWS Experts", role: "Technical Mentors", desc: "Workshops, judging & mentorship", gradient: "from-secondary to-secondary/50" },
  { name: "Industry Leaders", role: "Judges Panel", desc: "Evaluating innovation & impact", gradient: "from-primary to-secondary" },
  { name: "Community Partners", role: "Outreach & Support", desc: "Developer community engagement", gradient: "from-secondary to-primary" },
];

const CommitteeSection = () => {
  return (
    <section id="committee" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            THE TEAM
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Organizing <span className="text-gradient-purple">Committee</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The minds behind AI for Bharat — bringing together innovation partners to drive India's AI journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committee.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring" }}
            >
              <TiltCard>
                <SpotlightCard className="p-8 text-center h-full group">
                  {/* Avatar with gradient ring */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${m.gradient} opacity-30 group-hover:opacity-60 transition-opacity blur-sm`} />
                    <div className="relative w-full h-full rounded-full bg-card border border-border flex items-center justify-center group-hover:border-secondary/40 transition-all">
                      <User size={30} className="text-muted-foreground group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{m.name}</h4>
                  <p className="text-xs text-primary font-mono mb-3">{m.role}</p>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
