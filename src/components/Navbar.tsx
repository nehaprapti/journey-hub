import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Alternating green / purple per link
const navItems = [
  { label: "Home", href: "#", color: "green" },
  { label: "About", href: "#about", color: "purple" },
  { label: "Problems", href: "#problems", color: "green" },
  { label: "Journey", href: "#journey", color: "purple" },
  { label: "Guidelines", href: "#guidelines", color: "green" },
  { label: "Committee", href: "#committee", color: "purple" },
  { label: "Brochure", href: "#brochure", color: "green" },
  { label: "Contact", href: "#contact", color: "purple" },
];

const underlineGradient: Record<string, string> = {
  green: "linear-gradient(90deg, #22c55e, #4ade80)",
  purple: "linear-gradient(90deg, #a855f7, #c084fc)",
};

const hoverText: Record<string, string> = {
  green: "hover:text-green-400",
  purple: "hover:text-purple-400",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#brochure") {
      e.preventDefault();
      setBrochureOpen(true);
      setMobileOpen(false);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      if (isHome) {
        const target = document.querySelector(href === "#" ? "body" : href);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate("/" + href);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        <Link to="/" className="flex items-center gap-2">
          <img src="/sona.png" alt="Sona College of Technology" className="h-8 w-auto" />
          <span className="text-xl font-bold text-gradient-green font-mono">TechZeal '26</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
              className={`relative text-sm text-muted-foreground transition-colors duration-200 pb-0.5 ${hoverText[item.color]}`}
            >
              {item.label}

              {/* Slide-in gradient underline */}
              <motion.span
                className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full block"
                style={{ background: underlineGradient[item.color] }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: hovered === item.label ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </a>
          ))}

          <AnimatedThemeToggler />

          <Button variant="hero" size="sm" asChild>
            <Link to="/register">
              Register Now
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block py-3 text-sm text-muted-foreground transition-all duration-200 border-l-2 border-transparent pl-3 mb-1 ${item.color === "green"
                ? "hover:text-green-400 hover:border-green-400"
                : "hover:text-purple-400 hover:border-purple-400"
                }`}
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2" asChild>
            <Link to="/register">
              Register Now
            </Link>
          </Button>
        </motion.div>
      )}

      {/* Brochure Dialog */}
      <Dialog open={brochureOpen} onOpenChange={setBrochureOpen}>
        <DialogContent className="max-w-6xl p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient-green">Tech Zeal '26 Brochure</DialogTitle>
          </DialogHeader>
          <div className="mt-4 flex justify-center items-center">
            <img 
              src="/tzb.jpeg" 
              alt="Tech Zeal 2026 Brochure" 
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </motion.nav>
  );
};

export default Navbar;
