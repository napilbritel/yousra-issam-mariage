"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/** Carte qui s'incline en 3D sous le doigt / la souris, avec un reflet doré */
export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const card = useRef<HTMLDivElement>(null);
  const glare = useRef<HTMLDivElement>(null);

  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = card.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateY(${(x - 0.5) * 16}deg) rotateX(${(0.5 - y) * 16}deg) scale(1.02)`;
    if (glare.current) {
      glare.current.style.opacity = "1";
      glare.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,246,220,0.55), transparent 55%)`;
    }
  };

  const reset = () => {
    if (card.current) card.current.style.transform = "";
    if (glare.current) glare.current.style.opacity = "0";
  };

  return (
    <div className={`[perspective:1000px] ${className}`}>
      <div
        ref={card}
        onPointerMove={move}
        onPointerLeave={reset}
        onPointerUp={reset}
        onPointerCancel={reset}
        className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
      >
        {children}
        <div
          ref={glare}
          className="pointer-events-none absolute inset-0 rounded-sm opacity-0 mix-blend-soft-light transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
