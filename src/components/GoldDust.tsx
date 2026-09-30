// Particules dorées flottantes — positions déterministes (pas de décalage d'hydratation)
function seeded(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 28 }, (_, i) => ({
  left: `${(seeded(i) * 100).toFixed(2)}%`,
  size: `${(2 + seeded(i + 50) * 4).toFixed(2)}px`,
  delay: `${(seeded(i + 100) * -14).toFixed(2)}s`,
  duration: `${(10 + seeded(i + 150) * 12).toFixed(2)}s`,
}));

export function GoldDust({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute ${i % 2 ? "max-sm:hidden" : ""} -bottom-4 animate-dust rounded-full bg-gold-light shadow-[0_0_8px_2px_rgba(220,189,120,0.55)]`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
