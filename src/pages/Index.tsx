import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import CommitteeSection from "@/components/CommitteeSection";
import InvestorsSection from "@/components/InvestorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


const Index = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Small delay to let the page render before scrolling
            const timer = setTimeout(() => {
                const el = document.querySelector(location.hash);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);
    return (
        <div className="min-h-screen text-foreground relative z-10">
            <ScrollToTop />

            <Navbar />
            <HeroSection />
            <AboutSection />
            <JourneySection />
            <ProblemStatementSection />
            <GuidelinesSection />
            <CommitteeSection />
            <InvestorsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Index;
