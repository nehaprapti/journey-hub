import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import CommitteeSection from "@/components/CommitteeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeartCursor from "@/components/effects/HeartCursor";

const Index = () => {
    return (
        <div className="min-h-screen text-foreground relative z-10">
            <HeartCursor />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <JourneySection />
            <ProblemStatementSection />
            <GuidelinesSection />
            <CommitteeSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Index;
