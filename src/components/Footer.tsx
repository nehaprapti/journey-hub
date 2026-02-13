import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient-green font-mono mb-3">AI for Bharat</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A nationwide program bringing together India's brightest developers to learn, innovate, and transform India's AI landscape.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Journey", "Guidelines", "Committee", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <nav className="flex flex-col gap-2">
              <a href="https://vision.hack2skill.com/event/ai-for-bharat" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Register Now
              </a>
              <a href="https://hack2skill.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Hack2Skill
              </a>
              <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                AWS
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            AI for Bharat is a third-party program organized by Hack2skill with sponsorship support from AWS.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary flex items-center justify-center transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
