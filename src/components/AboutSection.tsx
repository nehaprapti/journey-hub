import { motion } from "framer-motion";
import { BookOpen, Rocket, GraduationCap, Briefcase, Zap, Users, Award, Trophy, BookCheck, Star, Network } from "lucide-react";
import SpotlightCard from "@/components/effects/SpotlightCard";
import TiltCard from "@/components/effects/TiltCard";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import ParallaxSection from "@/components/effects/ParallaxSection";

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
    badge: "Currently Live",
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

const benefits = [
  { icon: Trophy, title: "Prize Pool", desc: "INR 40,00,000 for top teams across Student and Professional tracks.", value: 4000000, prefix: "₹", suffix: "+" },
  { icon: Award, title: "Certificate", desc: "Earn your AI for Bharat Certificate by completing workshop and blog." },
  { icon: BookCheck, title: "Expert Access", desc: "Hands-on workshops led by AWS experts." },
  { icon: Star, title: "National Recognition", desc: "Present solutions at the Grand Finale to industry leaders." },
  { icon: Network, title: "Networking", desc: "Connect with developers across India and collaborate." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        {/* Overview */}
        <ParallaxSection speed={0.2}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              OVERVIEW
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Tired of just reading about AI?{" "}
              <span className="text-gradient-green">It's time to start building.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              AI for Bharat is a two-phase program designed to help developers in India turn AI theory into practice. Learn key tools and gain hands-on experience through curated workshops and challenges. Join this nationwide movement bringing together the brightest developers to learn, innovate, and transform India's AI landscape.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Phases */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {phases.map((phase, i) => (
            <TiltCard key={phase.title}>
              <SpotlightCard
                className={`p-8 h-full ${
                  phase.color === "primary" ? "border-primary/20 hover:border-primary/40" : "border-secondary/20 hover:border-secondary/40"
                } transition-colors`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                    phase.color === "primary" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"
                  }`}>
                    <phase.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                    {phase.badge && (
                      <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary mt-1">
                        {phase.badge}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-start gap-3">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                        phase.color === "primary" ? "bg-primary" : "bg-secondary"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </TiltCard>
          ))}
        </div>

        {/* Benefits */}
        <ParallaxSection speed={0.15}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              BENEFITS & REWARDS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Why <span className="text-gradient-purple">participate?</span>
            </h2>
          </motion.div>
        </ParallaxSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SpotlightCard className="p-6 h-full hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <b.icon size={20} />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{b.title}</h4>
                {b.value && (
                  <div className="text-2xl font-bold font-mono text-primary mb-2">
                    <AnimatedCounter value={b.value} prefix={b.prefix} suffix={b.suffix} />
                  </div>
                )}
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Who can participate */}
        <ParallaxSection speed={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              ELIGIBILITY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Who can <span className="text-gradient-green">participate?</span>
            </h2>
          </motion.div>
        </ParallaxSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {participants.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <TiltCard>
                <SpotlightCard className="p-6 h-full hover:border-primary/40 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <p.icon size={22} />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
