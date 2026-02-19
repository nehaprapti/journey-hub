import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    alpha: number;
    alphaSpeed: number;
    speed: number;
}

const STAR_COUNT = 220;
const CURSOR_RADIUS = 120;
const REPEL_STRENGTH = 0.06;
const RETURN_SPEED = 0.04;

export default function StarBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            starsRef.current = Array.from({ length: STAR_COUNT }, () => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                return {
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 1.6 + 0.3,
                    alpha: Math.random() * 0.6 + 0.2,
                    alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
                    speed: Math.random() * 0.3 + 0.05,
                };
            });
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            for (const star of starsRef.current) {
                // Twinkle
                star.alpha += star.alphaSpeed;
                if (star.alpha > 0.85 || star.alpha < 0.1) star.alphaSpeed *= -1;

                // Cursor repulsion
                const dx = star.x - mx;
                const dy = star.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CURSOR_RADIUS && dist > 0) {
                    const force = (CURSOR_RADIUS - dist) / CURSOR_RADIUS;
                    star.x += (dx / dist) * force * 6;
                    star.y += (dy / dist) * force * 6;
                }

                // Drift back to base position
                star.x += (star.baseX - star.x) * RETURN_SPEED;
                star.y += (star.baseY - star.y) * RETURN_SPEED;

                // Draw star as a small cross/sparkle for some, dot for most
                const isSpark = star.size > 1.5;

                ctx.save();
                ctx.globalAlpha = star.alpha;

                if (isSpark) {
                    // 4-point sparkle
                    ctx.strokeStyle = "#4ade80";
                    ctx.lineWidth = star.size * 0.5;
                    ctx.beginPath();
                    const half = star.size * 2.5;
                    ctx.moveTo(star.x - half, star.y);
                    ctx.lineTo(star.x + half, star.y);
                    ctx.moveTo(star.x, star.y - half);
                    ctx.lineTo(star.x, star.y + half);
                    ctx.stroke();

                    // Centre glow dot
                    ctx.fillStyle = "#86efac";
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 0.6, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Plain soft dot
                    const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2);
                    gradient.addColorStop(0, "#86efac");
                    gradient.addColorStop(1, "transparent");
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseleave", onMouseLeave);
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
        />
    );
}
