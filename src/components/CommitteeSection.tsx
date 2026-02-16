import { motion } from "framer-motion";
import { User } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";
import SpotlightCard from "@/components/effects/SpotlightCard";

const committee = [
  {
    group: "Organization Committee",
    items: [
      { name: "Dr.J.Akilandeswari", role: "Convener" },
    ],
  },
  {
    group: "Coordinators",
    items: [
      { name: "Dr.V.Mohanraj" },
      { name: "Dr.J.Senthilkumar" },
      { name: "Dr.Y.Suresh" },
      { name: "Dr.P.Shanmugaraja" },
      { name: "Dr. S. Vasanthi" },
    ],
  },
  {
    group: "Co-coordinators",
    items: [
      { name: "Mr. R. Krishna Prakash" },
      { name: "Mr. P. Dineshkumar" },
      { name: "Mrs. M. Parameswari" },
    ],
  },
  {
    group: "Organizers",
    items: [
      { name: "IT Department - All Faculty Members", role: "" },
    ],
  },
];

const CommitteeSection = () => {
  return (
    <section id="committee" className="section-padding relative overflow-hidden pt-2 md:pt-4">
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {committee.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, type: "spring" }}
            >
              <TiltCard>
                <SpotlightCard className="p-6 h-full group text-left">
                  <h4 className="font-semibold text-foreground mb-3">{group.group}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {group.items.map((it, i) => (
                      <li key={i} className="">
                        <span className="font-medium text-foreground">{it.name}</span>
                        {it.role && <span className="text-xs text-muted-foreground block">{it.role}</span>}
                      </li>
                    ))}
                  </ul>
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
