import { motion } from "framer-motion";

const investors = [
    { name: "Zoho Corporation", logo: "ZC", role: "Title Sponsor" },
    { name: "Freshworks", logo: "FW", role: "Gold Sponsor" },
    { name: "Razorpay", logo: "RZ", role: "Silver Sponsor" },
    { name: "NASSCOM Foundation", logo: "NF", role: "Community Partner" },
    { name: "Tata Consultancy Services", logo: "TC", role: "Platinum Sponsor" },
    { name: "Infosys BPM", logo: "IB", role: "Gold Sponsor" },
    { name: "Wipro", logo: "WP", role: "Silver Sponsor" },
    { name: "HCL Technologies", logo: "HC", role: "Bronze Sponsor" },
];

// Duplicate for seamless infinite loop
const track = [...investors, ...investors];

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
                        Investors &amp;{" "}
                        <span className="text-gradient-purple">Sponsors</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        The visionary organisations backing AI for Bharat — investing in
                        India's AI future and empowering the builders of tomorrow.
                    </p>
                </motion.div>
            </div>

            {/* Marquee strip — full-width, outside container so it bleeds edge-to-edge */}
            <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, var(--background) 0%, transparent 100%)" }}
                />
                {/* Right fade */}
                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 100%)" }}
                />

                {/* Scrolling track */}
                <div
                    className="flex gap-6 py-4"
                    style={{
                        animation: "marquee-scroll 28s linear infinite",
                        width: "max-content",
                    }}
                >
                    {track.map((inv, i) => (
                        <div
                            key={`${inv.name}-${i}`}
                            className="flex-shrink-0 flex items-center gap-4 px-6 py-4 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default min-w-[200px]"
                        >
                            {/* Logo circle */}
                            <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold font-mono flex-shrink-0 bg-primary/10 text-primary border border-primary/25 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                {inv.logo}
                            </div>

                            {/* Text */}
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-foreground leading-snug truncate">
                                    {inv.name}
                                </p>
                                <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                                    {inv.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Keyframe injected inline via style tag */}
            <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
};

export default InvestorsSection;
