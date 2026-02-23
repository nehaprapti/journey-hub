import { motion } from "framer-motion";

interface Investor {
    name: string;
    logo?: string;
    logoImg?: string;
    role: string;
}

const investors: Investor[] = [
    { name: "MongoDB", logoImg: "/mongo.png", role: "Partner" },
    { name: "ICT Academy", logoImg: "/ict.png", role: "Partner" },
];

const InvestorsSection = () => {
    return (
        <section
            id="investors"
            className="section-padding relative overflow-hidden pt-2 md:pt-4"
        >
            {/* Background glows */}
            <div className="absolute top-0 left-0 w-[320px] h-[320px] rounded-full bg-primary/3 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[260px] h-[260px] rounded-full bg-yellow-400/4 blur-[110px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground mx-auto">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        OUR PARTNERS
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient-purple">Our Collaborators</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        The visionary organisations backing AI for Bharat — investing in
                        India's AI future and empowering the builders of tomorrow.
                    </p>
                </motion.div>
                
                {/* Static sponsor cards */}
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    {investors.map((inv, i) => (
                        <motion.div
                            key={inv.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-6 px-12 py-10 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default"
                        >
                            {/* Logo image */}
                            <div className="w-40 h-28 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                                <img 
                                    src={inv.logoImg} 
                                    alt={`${inv.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <p className="text-xl font-semibold text-foreground leading-snug">
                                    {inv.name}
                                </p>
                                <p className="text-sm text-muted-foreground font-mono mt-1">
                                    {inv.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestorsSection;
