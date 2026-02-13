import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ExternalLink, ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/effects/SpotlightCard";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    detail: "support@hack2skill.com",
    href: "mailto:support@hack2skill.com",
    color: "primary" as const,
  },
  {
    icon: MessageSquare,
    title: "Discord",
    detail: "Join our community",
    href: "https://discord.gg/hack2skill",
    color: "secondary" as const,
  },
  {
    icon: ExternalLink,
    title: "Portal",
    detail: "Official hackathon page",
    href: "https://vision.hack2skill.com/event/ai-for-bharat",
    color: "primary" as const,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              CONTACT
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient-green">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-14 text-lg">
              Have questions about the hackathon? Reach out to us through any of the channels below.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {contacts.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <SpotlightCard className={`p-8 flex flex-col items-center gap-4 h-full hover:border-${c.color}/40 transition-all`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    c.color === "primary"
                      ? "bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
                      : "bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
                  }`}>
                    <c.icon size={24} />
                  </div>
                  <span className="text-sm text-foreground font-semibold">{c.title}</span>
                  <span className="text-xs text-muted-foreground">{c.detail}</span>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </SpotlightCard>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to build the future of AI?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join thousands of developers across India in the largest AI hackathon.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://vision.hack2skill.com/event/ai-for-bharat" target="_blank" rel="noopener noreferrer">
                Register Now <ArrowRight size={16} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
