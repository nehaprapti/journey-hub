import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Globe, Leaf, HeartPulse, GraduationCap } from "lucide-react";
import ParallaxSection from "@/components/effects/ParallaxSection";
import { gsap } from "gsap";

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

/* ── Individual expandable card ── */
function ProblemCard({ p, i }: { p: (typeof problems)[0]; i: number }) {
    const [expanded, setExpanded] = useState(false);
    const isPrimary = p.color === "primary";
    const Icon = p.icon;

    /* pixel overlay refs */
    const pixelGridRef = useRef<HTMLDivElement>(null);
    const delayedCallRef = useRef<gsap.core.Tween | null>(null);

    const GRID = 12;
    const STEP = 0.28;

    /* build pixel grid once on mount */
    const initPixels = (el: HTMLDivElement | null) => {
        if (!el || el.childElementCount > 0) return;
        for (let r = 0; r < GRID; r++) {
            for (let c = 0; c < GRID; c++) {
                const px = document.createElement("div");
                px.style.cssText = `
                    position:absolute;
                    display:none;
                    width:${100 / GRID}%;
                    height:${100 / GRID}%;
                    left:${(c * 100) / GRID}%;
                    top:${(r * 100) / GRID}%;
                    background:${isPrimary ? "hsl(142,60%,55%)" : "hsl(262,60%,65%)"};
                `;
                el.appendChild(px);
            }
        }
    };

    const runPixels = () => {
        const el = pixelGridRef.current;
        if (!el) return;
        const pixels = el.querySelectorAll<HTMLDivElement>("div");
        if (!pixels.length) return;

        gsap.killTweensOf(pixels);
        delayedCallRef.current?.kill();
        gsap.set(pixels, { display: "none" });

        const stagger = STEP / pixels.length;
        gsap.to(pixels, { display: "block", duration: 0, stagger: { each: stagger, from: "random" } });
        delayedCallRef.current = gsap.delayedCall(STEP, () => { });
        gsap.to(pixels, { display: "none", duration: 0, delay: STEP, stagger: { each: stagger, from: "random" } });
    };

    const toggle = (next: boolean) => {
        if (next === expanded) return;
        runPixels();
        setExpanded(next);
    };

    const accentGlow = isPrimary
        ? "shadow-[0_0_24px_hsl(142_60%_55%/0.25)]"
        : "shadow-[0_0_24px_hsl(262_60%_65%/0.25)]";
    const accentBg = isPrimary ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary";
    const badgeCls = isPrimary
        ? "border-primary/40 bg-primary/10 text-primary"
        : "border-secondary/40 bg-secondary/10 text-secondary";
    const dividerCls = isPrimary
        ? "bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"
        : "bg-gradient-to-r from-secondary/50 via-secondary/20 to-transparent";
    const cardBg = isPrimary
        ? "linear-gradient(135deg, hsl(220 20% 10%), hsl(220 20% 8%))"
        : "linear-gradient(135deg, hsl(220 20% 10%), hsl(220 20% 8%))";
    const expandedBg = isPrimary
        ? "linear-gradient(135deg, hsl(142 40% 8%), hsl(220 20% 7%))"
        : "linear-gradient(135deg, hsl(262 40% 10%), hsl(220 20% 7%))";

    return (
        <motion.div
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
        >
            <motion.div
                className={`relative w-full overflow-hidden rounded-xl border transition-colors cursor-pointer select-none ${expanded ? "border-primary/30" : "border-border/50"
                    }`}
                style={{ background: expanded ? expandedBg : cardBg }}
                onClick={() => toggle(!expanded)}
                layout
                transition={{ layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
            >
                {/* ── Collapsed / front row ── */}
                <div className="flex flex-col px-8 py-6 gap-3">
                    {/* Badge row */}
                    <span className={`self-start text-xs font-mono font-bold px-3 py-0.5 rounded-full border whitespace-nowrap ${badgeCls}`}>
                        {p.id} · {p.domain}
                    </span>

                    {/* Icon + Title + hint on same line */}
                    <div className="flex flex-row items-center gap-4">
                        <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${accentBg} ${accentGlow}`}>
                            <Icon size={22} />
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-white leading-snug flex-1 min-w-0">{p.title}</h3>
                        <motion.span
                            className="text-xs text-white/30 font-mono shrink-0 hidden sm:block"
                            animate={{ opacity: expanded ? 0 : 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            click to reveal →
                        </motion.span>
                    </div>
                </div>

                {/* ── Expanded / back content ── */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="px-8 pt-2 pb-8">
                                {/* Divider */}
                                <div className={`h-px mb-4 ${dividerCls}`} />

                                {/* Description */}
                                <p className="text-base text-white/75 leading-relaxed mb-4">
                                    {p.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 text-white/55 bg-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pixel overlay */}
                <div
                    ref={(el) => { pixelGridRef.current = el; initPixels(el); }}
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                />
            </motion.div>
        </motion.div>
    );
}

/* ── Section ── */
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
                            <span className="text-primary font-medium">Click</span> a card to reveal the full statement.
                        </p>
                    </motion.div>
                </ParallaxSection>

                {/* Cards */}
                <div className="flex flex-col gap-4 w-full">
                    {problems.map((p, i) => (
                        <ProblemCard key={p.id} p={p} i={i} />
                    ))}
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
