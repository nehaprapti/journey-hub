"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function AnimatedThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-9 h-9" />;

    const isDark = resolvedTheme === "dark";

    const handleToggle = () => {
        const btn = btnRef.current;
        const nextTheme = isDark ? "light" : "dark";

        // Fallback for browsers without View Transition API
        if (!document.startViewTransition || !btn) {
            setTheme(nextTheme);
            return;
        }

        // Get button centre relative to viewport
        const rect = btn.getBoundingClientRect();
        const x = Math.round(rect.left + rect.width / 2);
        const y = Math.round(rect.top + rect.height / 2);

        // Max radius needed to cover the whole screen from that point
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            setTheme(nextTheme);
        });

        transition.ready.then(() => {
            // Animate the new view expanding as a circle from the button
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            document.documentElement.animate(
                { clipPath },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    return (
        <button
            ref={btnRef}
            onClick={handleToggle}
            aria-label="Toggle theme"
            className="relative w-9 h-9 rounded-full border border-border/50 bg-muted/30 hover:bg-muted/60 transition-all duration-300 flex items-center justify-center overflow-hidden group"
        >
            {/* Sun */}
            <span
                className="absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                    opacity: isDark ? 0 : 1,
                    transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
                }}
            >
                <Sun size={16} className="text-amber-400" />
            </span>

            {/* Moon */}
            <span
                className="absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                    opacity: isDark ? 1 : 0,
                    transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
                }}
            >
                <Moon size={16} className="text-primary" />
            </span>

            {/* Ripple ring on hover */}
            <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 ring-primary/20 transition-all duration-300" />
        </button>
    );
}
