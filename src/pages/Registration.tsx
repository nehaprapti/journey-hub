import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Calendar, MapPin, Users, Trophy } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    {
      icon: Calendar,
      title: "Event Date",
      description: "Grand Finale - 10 Hour Offline Hackathon",
    },
    {
      icon: MapPin,
      title: "Venue",
      description: "Sona College of Technology, Salem",
    },
    {
      icon: Users,
      title: "Team Size",
      description: "1-4 Members per team",
    },
    {
      icon: Trophy,
      title: "Prize Pool",
      description: "INR 50,000 Worth Prizes",
    },
  ];

  const steps = [
    "Complete the registration form with your team details",
    "Choose your preferred problem statement",
    "Submit your proposed solution (PPT format, max 10 slides)",
    "Wait for shortlist announcement",
    "Shortlisted teams pay ₹250 per member",
    "Prepare for the Grand Finale!",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6 text-xs font-mono text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              REGISTRATION OPEN
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Register for <span className="text-gradient-green">TechZeal '26</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join us for an exciting 10-hour hackathon and showcase your innovative solutions to real-world problems.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                asChild
              >
                <a 
                  href="https://forms.gle/xZ2RnPT3cnZ28QfX7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Complete Registration
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-4">
              Registration Deadline: March 20, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Registration <span className="text-gradient-green">Process</span>
            </h2>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <p className="text-foreground">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient-green">Join Us?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't miss this opportunity to showcase your skills, learn from experts, and compete for amazing prizes!
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              asChild
            >
              <a 
                href="https://forms.gle/xZ2RnPT3cnZ28QfX7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;
