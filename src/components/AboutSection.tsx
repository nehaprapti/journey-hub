import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Network } from "lucide-react";
import SpotlightCard from "@/components/effects/SpotlightCard";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import ParallaxSection from "@/components/effects/ParallaxSection";
import { GlobeDemo } from "@/components/ui/globe-demo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";



// participants section removed per request

const benefits = [
  { icon: Trophy, title: "Prize Pool", desc: "INR 50,000 for top teams across Student tracks.", value: 30000, prefix: "₹", suffix: "+" },
  { icon: Award, title: "Certificate", desc: "Merit certificates will be awarded to all winning teams and All cipants will receive a Participation Certificate." },
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
  const [brochureOpen, setBrochureOpen] = useState(false);

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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {/* Badge + Heading — order-1 on mobile (above globe), left col row-1 on md+ */}
            <div className="order-1 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                OVERVIEW
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Tired of just reading about AI? <span className="text-gradient-green">It's time to start building.</span>
              </h2>
            </div>

            {/* Globe — order-2 on mobile (between heading and paragraph), right col spanning both rows on md+ */}
            <div className="w-full h-[18rem] md:h-[40rem] relative order-2 md:order-2 md:row-span-2">
              <GlobeDemo />
            </div>

            {/* Paragraph — order-3 on mobile (below globe), left col row-2 on md+ */}
            <div className="order-3 md:order-3">
              <p className="text-muted-foreground leading-relaxed text-lg">
                <span className="text-gradient-purple font-semibold">TECH ZEAL 2026</span> (PHYSICAL MODE) is a <span className="text-gradient-purple font-semibold">10 Hours State Level Hackathon</span> contest organized by the <span className="text-gradient-green font-semibold">Department of Information Technology, Sona College of Technology</span>, Salem, Tamilnadu in collaboration with industry partners{" "}
                <span className="text-gradient-green font-semibold">MongoDB</span>,{" "}
                <span className="text-gradient-green font-semibold">ICT Academy</span>, and{" "}
                <span className="text-gradient-green font-semibold">Maadhyamik Technologies</span>.{" "}
                <br></br>
                <span className="text-gradient-purple font-semibold">TECH ZEAL 2026</span> provides a platform for engineering college students to come with an effective solution for problems that we face in our day to day life. 
                <span className="text-gradient-green font-semibold">technically enriched students to come up with innovative solutions</span>. {" "}
                                <br></br>

                <button 
                  onClick={() => setBrochureOpen(true)}
                  className="text-gradient-purple font-semibold hover:text-primary transition-colors underline decoration-purple-400/50 hover:decoration-purple-400 cursor-pointer bg-transparent border-0 p-0"
                >
                  View our brochure
                </button>.
              </p>
            </div>
          </motion.div>
        </ParallaxSection>

        {/* Phases removed */}

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

        {/* Eligibility / participant cards removed */}
      </div>

      {/* Brochure Dialog */}
      <Dialog open={brochureOpen} onOpenChange={setBrochureOpen}>
        <DialogContent className="max-w-6xl p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient-green">Tech Zeal '26 Brochure</DialogTitle>
          </DialogHeader>
          <div className="mt-4 flex justify-center items-center">
            <img 
              src="/tzb.jpeg" 
              alt="Tech Zeal 2026 Brochure" 
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
