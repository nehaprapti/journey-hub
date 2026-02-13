import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Get in <span className="text-gradient-green">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-12"
          >
            Have questions about the hackathon? Reach out to us through any of the channels below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            <a
              href="mailto:support@hack2skill.com"
              className="glass-card p-6 flex flex-col items-center gap-3 hover:border-primary/40 transition-colors"
            >
              <Mail size={24} className="text-primary" />
              <span className="text-sm text-foreground font-medium">Email</span>
              <span className="text-xs text-muted-foreground">support@hack2skill.com</span>
            </a>
            <a
              href="https://discord.gg/hack2skill"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col items-center gap-3 hover:border-secondary/40 transition-colors"
            >
              <MessageSquare size={24} className="text-secondary" />
              <span className="text-sm text-foreground font-medium">Discord</span>
              <span className="text-xs text-muted-foreground">Join our community</span>
            </a>
            <a
              href="https://vision.hack2skill.com/event/ai-for-bharat"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col items-center gap-3 hover:border-primary/40 transition-colors"
            >
              <ExternalLink size={24} className="text-primary" />
              <span className="text-sm text-foreground font-medium">Portal</span>
              <span className="text-xs text-muted-foreground">Official hackathon page</span>
            </a>
          </motion.div>

          <Button variant="hero" size="lg" asChild>
            <a href="https://vision.hack2skill.com/event/ai-for-bharat" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
