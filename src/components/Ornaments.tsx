import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function Heart(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

/** Branche de laurier dorée, orientée vers la droite */
export function Branch(props: P) {
  return (
    <svg viewBox="0 0 140 40" fill="none" aria-hidden {...props}>
      <path
        d="M2 30 C40 30 80 24 138 10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {[18, 38, 58, 78, 98, 118].map((x, i) => {
        const y = 30 - (x / 138) * 18;
        return (
          <g key={x} fill="currentColor">
            <path
              d={`M${x} ${y} q6 -12 16 -12 q-4 10 -16 12z`}
              opacity={0.9 - i * 0.05}
            />
            <path
              d={`M${x} ${y} q8 8 18 6 q-8 -8 -18 -6z`}
              opacity={0.75 - i * 0.05}
            />
          </g>
        );
      })}
    </svg>
  );
}

/** Séparateur : branche — cœur — branche */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden
    >
      <Branch className="h-6 w-28 -scale-x-100 sm:w-36" />
      <Heart className="h-3.5 w-3.5" />
      <Branch className="h-6 w-28 sm:w-36" />
    </div>
  );
}

/** Fine ligne dorée avec losange */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden
    >
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold/70" />
      <svg viewBox="0 0 10 10" className="h-2 w-2 fill-current">
        <path d="M5 0l5 5-5 5-5-5z" />
      </svg>
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

/** Étoile marocaine à 8 branches */
export function Star8(props: P) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      aria-hidden
      {...props}
    >
      <rect x="20" y="20" width="60" height="60" strokeWidth="1" />
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        strokeWidth="1"
        transform="rotate(45 50 50)"
      />
      <circle cx="50" cy="50" r="18" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

/** Contour d'arche mauresque */
export function ArchFrame(props: P) {
  return (
    <svg
      viewBox="0 0 400 560"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      {...props}
    >
      <path
        d="M10 556 V200 C10 110 80 40 150 22 C175 15 190 8 200 2 C210 8 225 15 250 22 C320 40 390 110 390 200 V556"
        stroke="currentColor"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M24 556 V204 C24 122 88 58 154 38 C178 30 191 24 200 18 C209 24 222 30 246 38 C312 58 376 122 376 204 V556"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function IconCalendar(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
      {...props}
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
      <path
        d="M12 18s-3-1.8-3.8-3.7c-.6-1.4.3-2.9 1.8-2.9.9 0 1.6.5 2 1 .4-.5 1.1-1 2-1 1.5 0 2.4 1.5 1.8 2.9C15 16.2 12 18 12 18z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function IconPin(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z" />
    </svg>
  );
}

export function IconClock(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" />
    </svg>
  );
}

/** Petit éclat doré à 4 branches */
export function Sparkle(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z" />
    </svg>
  );
}
