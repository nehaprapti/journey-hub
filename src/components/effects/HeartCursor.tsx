import { useEffect, useRef, useState } from "react";

/**
 * Renders a red heart that smoothly follows the cursor whenever the mouse
 * is over any element that has the attribute  data-heart-cursor="true".
 * Mount this once at the app/page root.
 */
export default function HeartCursor() {
    const heartRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const pos = useRef({ x: -100, y: -100 });
    const raf = useRef<number>(0);

    useEffect(() => {
        const heart = heartRef.current;
        if (!heart) return;

        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const onEnter = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            if (el.closest("[data-heart-cursor]")) setVisible(true);
        };

        const onLeave = (e: MouseEvent) => {
            const el = e.relatedTarget as HTMLElement | null;
            if (!el || !el.closest("[data-heart-cursor]")) setVisible(false);
        };

        // Smooth follow via rAF
        const loop = () => {
            heart.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
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
            ref={heartRef}
            aria-hidden
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 99999,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.25s ease",
                willChange: "transform",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 32 32"
                style={{ display: "block", filter: "drop-shadow(0 0 6px rgba(239,68,68,0.7))" }}
            >
                <path
                    d="M16 28S2 19.5 2 11a8 8 0 0 1 14-5.29A8 8 0 0 1 30 11c0 8.5-14 17-14 17z"
                    fill="#ef4444"
                    stroke="#b91c1c"
                    strokeWidth="1.5"
                />
            </svg>
        </div>
    );
}
