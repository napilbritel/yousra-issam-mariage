import type { CSSProperties } from "react";

// Pétales de rose qui tombent — valeurs déterministes (pas de décalage d'hydratation)
function seeded(i: number) {
  const x = Math.sin(i * 91.7 + 47.3) * 24634.6345;
  return x - Math.floor(x);
}

type Props = {
  count?: number;
  /** Une seule chute (rafale à l'ouverture) plutôt qu'une pluie continue */
  burst?: boolean;
  className?: string;
};

export function Petals({ count = 14, burst = false, className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {Array.from({ length: count }, (_, i) => {
        const r = (n: number) => seeded(i * 7 + n);
        const style = {
          left: `${(r(1) * 100).toFixed(2)}%`,
          "--size": `${(10 + r(2) * 10).toFixed(1)}px`,
          "--dur": burst
            ? `${(3.6 + r(3) * 2.4).toFixed(2)}s`
            : `${(11 + r(3) * 9).toFixed(2)}s`,
          "--delay": burst
            ? `${(r(4) * 1.2).toFixed(2)}s`
            : `${(-r(4) * 20).toFixed(2)}s`,
          "--drift": `${((r(5) - 0.5) * 160).toFixed(0)}px`,
          "--sway": `${(2.6 + r(6) * 2.4).toFixed(2)}s`,
          opacity: 0.9,
        } as CSSProperties;
        return (
          <span
            key={i}
            className={`petal ${burst ? "once" : ""} ${!burst && i % 2 ? "max-sm:hidden" : ""}`}
            style={style}
          >
            <span />
          </span>
        );
      })}
    </div>
  );
}
