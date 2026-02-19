import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="scroll-to-top"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.85 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.93 }}
                    aria-label="Scroll to top"
                    style={{
                        position: "fixed",
                        bottom: "2rem",
                        right: "2rem",
                        zIndex: 9999,
                    }}
                    className="
            w-11 h-11 rounded-full
            flex items-center justify-center
            border border-primary/50
            bg-background/80 backdrop-blur-md
            text-primary
            shadow-[0_0_18px_2px_rgba(74,222,128,0.25)]
            hover:bg-primary/10
            hover:shadow-[0_0_28px_6px_rgba(74,222,128,0.40)]
            hover:border-primary/80
            transition-colors duration-200
          "
                >
                    <ChevronUp size={20} strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
