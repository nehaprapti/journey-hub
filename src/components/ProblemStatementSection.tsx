import { motion } from "framer-motion";
import { Cpu, Globe, Leaf, HeartPulse, GraduationCap } from "lucide-react";
import ParallaxSection from "@/components/effects/ParallaxSection";
import PixelTransition from "@/components/effects/PixelTransition";

const problems = [
    {
        id: "PS01",
        icon: Cpu,
        domain: "Artificial Intelligence",
        color: "primary",
        title: "AI-Powered Smart Traffic Management System",
        description:
            "Urban traffic congestion leads to massive productivity loss, fuel wastage, and increased pollution. Design an AI-driven solution that uses real-time data from cameras and sensors to dynamically optimize traffic signal timings, detect incidents, and suggest alternate routes — reducing average commute time by at least 30%.",
        tags: ["Computer Vision", "IoT", "Real-time Analytics"],
    },
    {
        id: "PS02",
        icon: HeartPulse,
        domain: "Healthcare",
        color: "secondary",
        title: "Predictive Rural Healthcare Diagnostic Tool",
        description:
            "Rural communities in India lack access to timely medical diagnosis. Build a lightweight, offline-capable mobile application that leverages machine learning to assist community health workers in early detection of common diseases (diabetes, TB, anaemia) using basic vitals and symptom inputs, with multilingual support.",
        tags: ["ML", "Mobile App", "Healthcare"],
    },
    {
        id: "PS03",
        icon: Leaf,
        domain: "Sustainability",
        color: "primary",
        title: "Precision Agriculture & Crop Yield Prediction",
        description:
            "Farmers struggle with unpredictable yields due to climate change and lack of data-driven insights. Create a platform that integrates satellite imagery, soil sensor data, and weather forecasts to provide hyper-local crop recommendations, pest alerts, and yield predictions — empowering farmers with actionable intelligence.",
        tags: ["Satellite Data", "Predictive Modeling", "AgriTech"],
    },
    {
        id: "PS04",
        icon: Globe,
        domain: "Cybersecurity",
        color: "secondary",
        title: "Real-Time Phishing & Fraud Detection Engine",
        description:
            "Digital financial fraud and phishing attacks are rising exponentially, targeting individuals and enterprises alike. Develop a browser extension or API service that uses NLP and behavioral analysis to detect phishing URLs, fraudulent emails, and suspicious transactions in real time, with an explainable AI dashboard.",
        tags: ["NLP", "Browser Extension", "FinTech Security"],
    },
    {
        id: "PS05",
        icon: GraduationCap,
        domain: "EdTech",
        color: "primary",
        title: "Adaptive Personalized Learning Platform",
        description:
            "One-size-fits-all education fails to address diverse learning paces and styles. Build an adaptive learning system that continuously assesses student performance, identifies knowledge gaps, and dynamically curates personalized content paths — integrating gamification elements to boost engagement and retention.",
        tags: ["Adaptive Learning", "Gamification", "Data Analytics"],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
    }),
};

const ProblemStatementSection = () => {
    return (
        <section id="problems" className="section-padding relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/4 blur-[150px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <ParallaxSection speed={0.15}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            PROBLEM STATEMENTS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Choose Your <span className="text-gradient-green">Challenge</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            Five real-world problem domains. One hackathon. Infinite possibilities.{" "}
                            <span className="text-primary font-medium">Hover</span> a card to reveal the full statement.
                        </p>
                    </motion.div>
                </ParallaxSection>

                {/* Pixel Transition Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {problems.map((p, i) => {
                        const Icon = p.icon;
                        const isPrimary = p.color === "primary";

                        /* ── FRONT FACE ── */
                        const frontFace = (
                            <div
                                className="w-full h-full flex flex-col items-center justify-center gap-5 p-8 text-center"
                                style={{
                                    background: isPrimary
                                        ? "linear-gradient(135deg, hsl(220 20% 10%), hsl(220 20% 8%))"
                                        : "linear-gradient(135deg, hsl(220 20% 10%), hsl(220 20% 8%))",
                                }}
                            >
                                {/* Domain icon */}
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isPrimary
                                            ? "bg-primary/15 text-primary shadow-[0_0_24px_hsl(142_60%_55%/0.25)]"
                                            : "bg-secondary/15 text-secondary shadow-[0_0_24px_hsl(262_60%_65%/0.25)]"
                                        }`}
                                >
                                    <Icon size={32} />
                                </div>

                                {/* PS badge */}
                                <span
                                    className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${isPrimary
                                            ? "border-primary/40 bg-primary/10 text-primary"
                                            : "border-secondary/40 bg-secondary/10 text-secondary"
                                        }`}
                                >
                                    {p.id} · {p.domain}
                                </span>

                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                                    {p.title}
                                </h3>

                                {/* Hover hint */}
                                <p className="text-xs text-white/30 font-mono mt-1">hover to reveal →</p>
                            </div>
                        );

                        /* ── BACK FACE (revealed on hover) ── */
                        const backFace = (
                            <div
                                className="w-full h-full flex flex-col justify-between p-7"
                                style={{
                                    background: isPrimary
                                        ? "linear-gradient(135deg, hsl(142 40% 8%), hsl(220 20% 7%))"
                                        : "linear-gradient(135deg, hsl(262 40% 10%), hsl(220 20% 7%))",
                                }}
                            >
                                {/* Top: id + domain */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span
                                        className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${isPrimary
                                                ? "border-primary/50 bg-primary/15 text-primary"
                                                : "border-secondary/50 bg-secondary/15 text-secondary"
                                            }`}
                                    >
                                        {p.id}
                                    </span>
                                    <span className="text-xs text-white/50 font-mono">{p.domain}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-bold text-white leading-snug mb-3">
                                    {p.title}
                                </h3>

                                {/* Divider */}
                                <div
                                    className={`h-px mb-3 ${isPrimary
                                            ? "bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"
                                            : "bg-gradient-to-r from-secondary/50 via-secondary/20 to-transparent"
                                        }`}
                                />

                                {/* Description */}
                                <p className="text-xs text-white/70 leading-relaxed flex-1 overflow-auto">
                                    {p.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/15 text-white/50 bg-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );

                        return (
                            <motion.div
                                key={p.id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                variants={fadeUp}
                                className="flex justify-center"
                            >
                                <PixelTransition
                                    firstContent={frontFace}
                                    secondContent={backFace}
                                    gridSize={10}
                                    pixelColor={isPrimary ? "hsl(142, 60%, 55%)" : "hsl(262, 60%, 65%)"}
                                    animationStepDuration={0.35}
                                    once={false}
                                    aspectRatio="100%"
                                    className="w-full !rounded-xl !border !border-border/50 !bg-transparent hover:!border-primary/30 transition-colors"
                                    style={{ width: "100%", maxWidth: "100%" }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-xs text-muted-foreground mt-12 font-mono"
                >
                    * Detailed problem statement briefs will be shared with registered teams before the event.
                </motion.p>
            </div>
        </section>
    );
};

export default ProblemStatementSection;
