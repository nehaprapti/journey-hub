import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import SpotlightCard from "@/components/effects/SpotlightCard";

const committee = [
  {
    group: "Organization Committee",
    color: "primary",
    badge: "OC",
    items: [{ name: "Dr. J. Akilandeswari", role: "Convener" }],
  },
  {
    group: "Coordinators",
    color: "secondary",
    badge: "CO",
    items: [
      { name: "Dr. V. Mohanraj" },
      { name: "Dr. J. Senthilkumar" },
      { name: "Dr. Y. Suresh" },
      { name: "Dr. P. Shanmugaraja" },
      { name: "Dr. S. Vasanthi" },
    ],
  },
  {
    group: "Co-coordinators",
    color: "primary",
    badge: "CC",
    items: [
      { name: "Mr. R. Krishna Prakash", phone: "9043215401" },
      { name: "Mr. P. Dineshkumar", phone: "9944035505" },
      { name: "Mrs. M. Parameswari" },
    ],
  },
  {
    group: "Organizers",
    color: "secondary",
    badge: "OR",
    items: [{ name: "IT Department", role: "All Faculty Members" }],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.07, type: "spring" as const, stiffness: 180 },
  }),
};

// Flatten all members into individual cards, carrying group info
const allMembers = committee.flatMap((g) =>
  g.items.map((item: { name: string; role?: string; phone?: string }) => ({
    ...item,
    group: g.group,
    color: g.color,
    badge: g.badge,
  }))
);

const CommitteeSection = () => {
  return (
    <section id="committee" className="section-padding relative overflow-hidden pt-2 md:pt-4">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
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

        {/* Individual member cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allMembers.map((member, i) => (
            <motion.div
              key={`${member.group}-${member.name}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
            >
              <SpotlightCard className="relative p-4 h-full flex flex-col justify-center text-center gap-2 hover:border-border/80 transition-all group overflow-hidden">
                {/* Default content */}
                <div className={`flex flex-col items-center gap-2 ${member.phone ? "transition-all duration-300 group-hover:opacity-0 group-hover:scale-95" : ""}`}>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {member.name}
                    </p>
                    {member.role && (
                      <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border mx-auto ${member.color === "primary"
                        ? "border-primary/30 text-primary bg-primary/8"
                        : "border-secondary/30 text-secondary bg-secondary/8"
                      }`}
                  >
                    {member.group}
                  </span>
                </div>

                {/* Hover reveal — phone */}
                {member.phone ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 px-3">
                    <p className="text-xs font-semibold text-foreground leading-snug text-center">{member.name}</p>
                    <a
                      href={`tel:${member.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                        member.color === "primary"
                          ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
                          : "border-secondary/40 bg-secondary/10 text-secondary hover:bg-secondary/20"
                      }`}
                    >
                      <Phone size={11} />
                      {member.phone}
                    </a>
                  </div>
                ) : null}
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
