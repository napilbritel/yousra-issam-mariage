import type { CSSProperties } from "react";

/** Lanterne marocaine en laiton, lumière intérieure vacillante */
function Lantern({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 60 130" className="w-full overflow-visible" aria-hidden>
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="55%" r="60%">
          <stop offset="0" stopColor="#fff4cf" />
          <stop offset="0.45" stopColor="#f4c96b" />
          <stop offset="1" stopColor="#b3762a" />
        </radialGradient>
        <linearGradient id={`brass-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#8a6427" />
          <stop offset="0.5" stopColor="#e2c486" />
          <stop offset="1" stopColor="#8a6427" />
        </linearGradient>
      </defs>
      <circle
        cx="30"
        cy="5"
        r="4"
        fill="none"
        stroke={`url(#brass-${id})`}
        strokeWidth="1.6"
      />
      <rect
        x="27"
        y="9"
        width="6"
        height="5"
        rx="1"
        fill={`url(#brass-${id})`}
      />
      <path d="M16 30 Q18 16 30 13 Q42 16 44 30 Z" fill={`url(#brass-${id})`} />
      <rect
        x="13"
        y="29"
        width="34"
        height="5"
        rx="1"
        fill={`url(#brass-${id})`}
      />
      {/* Corps lumineux */}
      <path
        className="flicker"
        d="M14 34 H46 L51 68 L42 96 H18 L9 68 Z"
        fill={`url(#glow-${id})`}
      />
      {/* Treillis */}
      <g fill="none" stroke="#6b4a1c" strokeWidth="1.3" opacity="0.85">
        <path
          d="M14 34 H46 L51 68 L42 96 H18 L9 68 Z"
          stroke={`url(#brass-${id})`}
          strokeWidth="2"
        />
        <path d="M23 92 V62 Q23 50 30 45 Q37 50 37 62 V92" />
        <path d="M13 66 Q16 54 19 50 M47 66 Q44 54 41 50" />
        <path d="M9 68 H51" opacity="0.6" />
        <circle cx="30" cy="40" r="2" fill="#6b4a1c" />
        <path
          d="M26 70 l4 -5 4 5 -4 5z"
          fill="#6b4a1c"
          stroke="none"
          opacity="0.6"
        />
      </g>
      <path d="M18 96 H42 L35 106 H25 Z" fill={`url(#brass-${id})`} />
      <circle cx="30" cy="111" r="3.2" fill={`url(#brass-${id})`} />
      <path d="M30 114 V126" stroke="#b3863c" strokeWidth="1.2" />
      <path
        d="M27 126 Q30 130 33 126"
        stroke="#b3863c"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

const lanterns = [
  {
    left: "6%",
    chain: 70,
    width: 44,
    swing: "5.2s",
    amp: "3deg",
    hideMobile: false,
  },
  {
    left: "20%",
    chain: 130,
    width: 56,
    swing: "6.4s",
    amp: "2.2deg",
    hideMobile: true,
  },
  {
    left: "78%",
    chain: 110,
    width: 52,
    swing: "5.8s",
    amp: "2.6deg",
    hideMobile: true,
  },
  {
    left: "88%",
    chain: 50,
    width: 40,
    swing: "4.8s",
    amp: "3.4deg",
    hideMobile: false,
  },
];

export function Lanterns() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-full"
      aria-hidden
    >
      {lanterns.map((l, i) => (
        <div
          key={i}
          className={`swing absolute top-0 flex flex-col items-center ${l.hideMobile ? "max-md:hidden" : ""}`}
          style={
            {
              left: l.left,
              "--swing": l.swing,
              "--amp": l.amp,
              animationDelay: `${-i * 1.3}s`,
            } as CSSProperties
          }
        >
          <span
            className="w-px bg-gradient-to-b from-gold/20 to-gold-light/70"
            style={{ height: l.chain }}
          />
          <div className="relative -mt-0.5" style={{ width: l.width }}>
            <span className="flicker absolute top-[38%] left-1/2 h-[180%] w-[260%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(244,201,107,0.42),rgba(244,201,107,0.12)_55%,transparent)]" />
            <Lantern id={String(i)} />
          </div>
        </div>
      ))}
    </div>
  );
}
