import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ExternalLink, ArrowRight, Phone } from "lucide-react";




const contacts = [
  {
    title: "Raghul N",
    detail: "IT Chairman",
    href: "tel:8148961455",
    color: "primary" as const,
  },
  {
    title: "Viswath Kumar",
    detail: "AIDS Chairman",
    href: "tel:9361428711",
    color: "secondary" as const,
  },
  {
    title: "Deepak Kumar V",
    detail: "IT Secretary",
    href: "tel:8248159309",
    color: "primary" as const,
  },
  {
    title: "Thirumalai R",
    detail: "AIDS Secretary",
    href: "tel:9042170454",
    color: "secondary" as const,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto text-center">
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

          

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {contacts.map((c, i) => {
              const phoneRaw = c.href.replace(/^tel:/, "");
              const formatted = phoneRaw.replace(/^(\+\d{2})(\d{5})(\d{4})$/, "$1 $2 $3");
              const initial = c.title?.trim()?.charAt(0) ?? "?";

              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className={`glass-card p-8 h-full rounded-xl flex flex-col justify-between transition-all duration-300 group ${c.color === "primary"
                      ? "hover:border-primary/30 hover:shadow-[0_0_24px_hsl(142_60%_55%/0.08)]"
                      : "hover:border-secondary/30 hover:shadow-[0_0_24px_hsl(262_60%_65%/0.08)]"
                    }`}>
                    <div>
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold font-mono transition-transform duration-300 group-hover:scale-105 ${c.color === "primary"
                            ? "bg-primary/15 text-primary border border-primary/40 shadow-[0_0_18px_hsl(142_60%_55%/0.2)]"
                            : "bg-secondary/15 text-secondary border border-secondary/40 shadow-[0_0_18px_hsl(262_60%_65%/0.2)]"
                          }`}>{initial}</div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-foreground">{c.title}</div>
                          <div className={`text-sm mt-1 font-mono ${c.color === "primary" ? "text-primary" : "text-secondary"
                            }`}>{c.detail}</div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-t border-border/50 my-4" />

                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center ${c.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                        }`}>
                        <Phone size={18} />
                      </div>
                      <a href={c.href} className="text-sm text-foreground font-medium">{formatted}</a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA removed per request */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
