import { motion } from "framer-motion";
import { BookOpen, Rocket, GraduationCap, Briefcase, Zap, Users } from "lucide-react";

const phases = [
  {
    icon: BookOpen,
    title: "Learning Phase",
    items: [
      "Hands-on skill development workshops on cloud skills and generative AI.",
      "Certificate for successful hands-on lab completion & technical blog submission.",
    ],
    color: "primary" as const,
  },
  {
    icon: Rocket,
    title: "Building Phase",
    items: [
      "National hackathon with separate challenge tracks for Students and Professionals.",
      "Cash prizes, recognition, and mentorship by AWS experts.",
    ],
    color: "secondary" as const,
  },
];

const participants = [
  { icon: GraduationCap, title: "Students", desc: "Currently enrolled in an undergraduate or postgraduate program." },
  { icon: Briefcase, title: "Professionals", desc: "Working full-time or part-time in any sector." },
  { icon: Zap, title: "Startups", desc: "Looking to build or enhance products using generative AI capabilities." },
  { icon: Users, title: "Freelancers", desc: "Independent developers seeking to showcase expertise and build a portfolio." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-green">Overview</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Tired of just reading about AI? It's time to start building.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            AI for Bharat is a two-phase program designed to help developers in India turn AI theory into practice. Learn key tools and gain hands-on experience through curated workshops and challenges. Join this nationwide movement bringing together the brightest developers to learn, innovate, and transform India's AI landscape.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`glass-card p-8 ${
                phase.color === "primary" ? "border-primary/30" : "border-secondary/30"
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                phase.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
              }`}>
                <phase.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                      phase.color === "primary" ? "bg-primary" : "bg-secondary"
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Who can participate */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Who can <span className="text-gradient-purple">participate?</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {participants.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon size={20} />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
