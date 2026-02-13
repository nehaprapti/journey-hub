import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import GuidelinesSection from "@/components/GuidelinesSection";
import CommitteeSection from "@/components/CommitteeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/effects/ParticleField";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <GuidelinesSection />
        <CommitteeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
