import { useEffect, useRef, useState } from "react";

/**
 * Shows Victor Von Doom's armoured gauntlet hand cursor
 * whenever the mouse hovers any element with data-doom-cursor="true".
 */
export default function DoomCursor() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const pos = useRef({ x: -200, y: -200 });
    const raf = useRef<number>(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };
        const onEnter = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest("[data-doom-cursor]")) setVisible(true);
        };
        const onLeave = (e: MouseEvent) => {
            const t = e.relatedTarget as HTMLElement | null;
            if (!t || !t.closest("[data-doom-cursor]")) setVisible(false);
        };

        const loop = () => {
            el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
            raf.current = requestAnimationFrame(loop);
        };
        raf.current = requestAnimationFrame(loop);

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onEnter);
        document.addEventListener("mouseout", onLeave);

        return () => {
            cancelAnimationFrame(raf.current);
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onEnter);
            document.removeEventListener("mouseout", onLeave);
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 99999,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.2s ease",
                willChange: "transform",
            }}
        >
            {/* Victor Von Doom — armoured gauntlet hand SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 100 100"
                style={{ display: "block", filter: "drop-shadow(0 0 8px rgba(34,197,94,0.85))" }}
            >
                {/* ── Wrist / cuff plate ── */}
                <rect x="30" y="72" width="40" height="18" rx="5" fill="#2a2a2a" stroke="#555" strokeWidth="1.5" />
                <rect x="33" y="74" width="34" height="4" rx="2" fill="#3d3d3d" />

                {/* ── Palm plate ── */}
                <ellipse cx="50" cy="60" rx="22" ry="18" fill="#232323" stroke="#505050" strokeWidth="1.5" />

                {/* ── Knuckle ridges ── */}
                <rect x="28" y="52" width="44" height="8" rx="4" fill="#2d2d2d" stroke="#484848" strokeWidth="1" />

                {/* ── Fingers (4 fingers + thumb) ── */}
                {/* Index */}
                <rect x="31" y="22" width="10" height="32" rx="5" fill="#2a2a2a" stroke="#505050" strokeWidth="1.2" />
                <rect x="33" y="24" width="6" height="8" rx="3" fill="#333" />
                <rect x="33" y="34" width="6" height="8" rx="3" fill="#333" />
                <rect x="33" y="44" width="6" height="6" rx="2" fill="#3a3a3a" />
                {/* Middle */}
                <rect x="43" y="18" width="10" height="36" rx="5" fill="#2a2a2a" stroke="#505050" strokeWidth="1.2" />
                <rect x="45" y="20" width="6" height="8" rx="3" fill="#333" />
                <rect x="45" y="30" width="6" height="8" rx="3" fill="#333" />
                <rect x="45" y="42" width="6" height="7" rx="2" fill="#3a3a3a" />
                {/* Ring */}
                <rect x="55" y="20" width="10" height="34" rx="5" fill="#2a2a2a" stroke="#505050" strokeWidth="1.2" />
                <rect x="57" y="22" width="6" height="8" rx="3" fill="#333" />
                <rect x="57" y="32" width="6" height="8" rx="3" fill="#333" />
                <rect x="57" y="42" width="6" height="7" rx="2" fill="#3a3a3a" />
                {/* Pinky */}
                <rect x="67" y="26" width="8" height="28" rx="4" fill="#2a2a2a" stroke="#505050" strokeWidth="1.2" />
                <rect x="69" y="28" width="4" height="7" rx="2" fill="#333" />
                <rect x="69" y="37" width="4" height="7" rx="2" fill="#333" />
                {/* Thumb */}
                <rect x="17" y="36" width="16" height="9" rx="4.5"
                    transform="rotate(-30 17 36)" fill="#2a2a2a" stroke="#505050" strokeWidth="1.2" />
                <rect x="19" y="37" width="10" height="4" rx="2"
                    transform="rotate(-30 19 37)" fill="#333" />

                {/* ── Green energy orb in palm ── */}
                <radialGradient id="doomGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="1" />
                    <stop offset="55%" stopColor="#16a34a" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#052e16" stopOpacity="0" />
                </radialGradient>
                <circle cx="50" cy="60" r="10" fill="url(#doomGlow)" />
                {/* Bright centre */}
                <circle cx="50" cy="60" r="4" fill="#bbf7d0" opacity="0.95" />
                {/* Outer halo ring */}
                <circle cx="50" cy="60" r="13" fill="none" stroke="#4ade80" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />

                {/* ── Metal sheen lines on palm ── */}
                <line x1="36" y1="56" x2="36" y2="68" stroke="#444" strokeWidth="1" opacity="0.6" />
                <line x1="43" y1="53" x2="43" y2="70" stroke="#444" strokeWidth="1" opacity="0.6" />
                <line x1="57" y1="53" x2="57" y2="70" stroke="#444" strokeWidth="1" opacity="0.6" />
                <line x1="64" y1="56" x2="64" y2="68" stroke="#444" strokeWidth="1" opacity="0.6" />

                {/* ── Green circuit trace accents ── */}
                <polyline points="33,78 38,74 44,76 50,73 56,76 62,74 67,78"
                    fill="none" stroke="#22c55e" strokeWidth="0.8" opacity="0.5" />
            </svg>
        </div>
    );
}
