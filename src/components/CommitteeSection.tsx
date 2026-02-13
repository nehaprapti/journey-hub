import { motion } from "framer-motion";
import { User } from "lucide-react";

const committee = [
  { name: "Hack2skill Team", role: "Organizing Partner", desc: "Platform & event management" },
  { name: "AWS Experts", role: "Technical Mentors", desc: "Workshops, judging & mentorship" },
  { name: "Industry Leaders", role: "Judges Panel", desc: "Evaluating innovation & impact" },
  { name: "Community Partners", role: "Outreach & Support", desc: "Developer community engagement" },
];

const CommitteeSection = () => {
  return (
    <section id="committee" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 text-center"
        >
          Organizing <span className="text-gradient-purple">Committee</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          The minds behind AI for Bharat — bringing together innovation partners to drive India's AI journey.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committee.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card p-8 text-center group hover:border-secondary/40 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
                <User size={28} />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{m.name}</h4>
              <p className="text-xs text-primary font-mono mb-3">{m.role}</p>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
