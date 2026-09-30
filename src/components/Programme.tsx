import type { SVGProps } from "react";
import { wedding, type ProgrammeStep } from "@/lib/wedding";
import { Reveal } from "./Reveal";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const icons: Record<ProgrammeStep["icon"], (props: P) => React.ReactElement> = {
  // Théière marocaine
  welcome: (props) => (
    <svg {...base} aria-hidden {...props}>
      <path d="M14 38h20" />
      <path d="M16 36c-3-3-4-7-2-11h20c2 4 1 8-2 11z" />
      <path d="M13 25h22" />
      <path d="M18 25c0-4 3-6 6-6s6 2 6 6" />
      <path d="M24 19v-3m-1.5 0h3" />
      <path d="M34 28c4-1 6-4 7-8" />
      <path d="M14 29c-3 0-5-1.5-5-4s2-3.5 4-3" />
      <path
        d="M38 12c-1.5 1.5-1.5 3 0 4.5M42 10c-1.5 1.5-1.5 3 0 4.5"
        opacity="0.6"
      />
    </svg>
  ),
  // Amaria / couronne
  entrance: (props) => (
    <svg {...base} aria-hidden {...props}>
      <path d="M10 33l-3-17 10 8 7-12 7 12 10-8-3 17z" />
      <path d="M10 38h28" />
      <circle cx="24" cy="9.5" r="1.6" fill="currentColor" />
      <circle cx="7" cy="14.5" r="1.4" fill="currentColor" />
      <circle cx="41" cy="14.5" r="1.4" fill="currentColor" />
      <path d="M24 30l2-3-2-3-2 3z" fill="currentColor" />
    </svg>
  ),
  // Bendir et notes de musique
  celebration: (props) => (
    <svg {...base} aria-hidden {...props}>
      <circle cx="21" cy="27" r="12" />
      <circle cx="21" cy="27" r="8.5" opacity="0.5" />
      <path d="M13 22l16 10M13 32l16-10" opacity="0.35" />
      <path d="M35 8v10.5a2.5 2.5 0 1 1-2-2.45" />
      <path d="M35 8l6-2v9a2.5 2.5 0 1 1-2-2.45" />
      <path
        d="M8 10l1 2.5L11.5 13.5 9 14.5 8 17l-1-2.5L4.5 13.5 7 12.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  // Cloche de service
  dinner: (props) => (
    <svg {...base} aria-hidden {...props}>
      <path d="M8 33h32" />
      <path d="M11 33a13 13 0 0 1 26 0" />
      <path d="M24 17v3m-2-3h4" />
      <path d="M6 38h36" />
      <path d="M17 27c1.5-2.5 4-4 7-4.3" opacity="0.6" />
    </svg>
  ),
  // Pièce montée
  cake: (props) => (
    <svg {...base} aria-hidden {...props}>
      <rect x="10" y="30" width="28" height="10" rx="1.5" />
      <rect x="14" y="21" width="20" height="9" rx="1.5" />
      <rect x="18" y="13" width="12" height="8" rx="1.5" />
      <path d="M10 34c3 2 5 2 7 0s5-2 7 0 5 2 7 0 5-2 7 0" opacity="0.7" />
      <path d="M24 13V9" />
      <path
        d="M24 5.5c1.2 1.2 1.2 2.4 0 3.5-1.2-1.1-1.2-2.3 0-3.5z"
        fill="currentColor"
      />
    </svg>
  ),
};

/** Médaillon en étoile marocaine à 8 branches */
function Medallion({ icon }: { icon: ProgrammeStep["icon"] }) {
  const Icon = icons[icon];
  return (
    <div className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full drop-shadow-[0_8px_14px_rgba(138,100,39,0.25)]"
        aria-hidden
      >
        <g fill="#fbf6ec" stroke="#b3863c" strokeWidth="1.6">
          <rect x="17" y="17" width="66" height="66" rx="3" />
          <rect
            x="17"
            y="17"
            width="66"
            height="66"
            rx="3"
            transform="rotate(45 50 50)"
          />
        </g>
        <circle
          cx="50"
          cy="50"
          r="27"
          fill="none"
          stroke="#b3863c"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />
      </svg>
      <Icon className="relative h-8 w-8 text-gold-dark sm:h-10 sm:w-10" />
    </div>
  );
}

export function Programme() {
  const steps = wedding.programme as readonly ProgrammeStep[];

  return (
    <ol className="relative mx-auto max-w-4xl">
      {/* Fil doré qui se remplit au défilement */}
      <span
        className="absolute top-8 bottom-8 left-8 w-px -translate-x-1/2 bg-gold/25 sm:left-1/2"
        aria-hidden
      />
      <span
        className="timeline-fill absolute top-8 bottom-8 left-8 w-[2px] origin-top -translate-x-1/2 bg-gradient-to-b from-gold-light via-gold to-gold-dark sm:left-1/2"
        aria-hidden
      />

      {steps.map((step, i) => {
        const right = i % 2 === 1;
        const number = String(i + 1).padStart(2, "0");
        return (
          <li
            key={step.title}
            className="relative grid grid-cols-[4rem_1fr] items-start gap-4 pb-8 last:pb-0 sm:grid-cols-[1fr_5rem_1fr] sm:gap-8 sm:pb-12"
          >
            <Reveal
              className="row-start-1 flex justify-center sm:col-start-2"
              delay={50}
            >
              <Medallion icon={step.icon} />
            </Reveal>

            <Reveal
              delay={150}
              className={`row-start-1 ${
                right ? "sm:col-start-3" : "sm:col-start-1 sm:text-right"
              }`}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-ivory/85 p-5 shadow-[0_22px_45px_-32px_rgba(74,53,33,0.7)] backdrop-blur transition duration-500 hover:-translate-y-0.5 hover:border-gold/50 sm:p-7">
                {/* Grand numéro en filigrane */}
                <span
                  className={`pointer-events-none absolute -top-3 font-display text-[5.5rem] leading-none text-gold/[0.09] select-none ${
                    right ? "right-3" : "right-3 sm:right-auto sm:left-3"
                  }`}
                  aria-hidden
                >
                  {number}
                </span>

                <div
                  className={`relative flex flex-wrap items-center gap-3 ${
                    right ? "" : "sm:justify-end"
                  }`}
                >
                  <span className="font-display text-[0.65rem] tracking-[0.35em] text-gold-dark">
                    ÉTAPE {number}
                  </span>
                  {step.time && (
                    <span className="rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-3 py-1 font-display text-[0.6rem] tracking-[0.2em] text-ivory uppercase">
                      {step.time}
                    </span>
                  )}
                </div>
                <h3 className="relative mt-2 font-script text-[2.3rem] leading-tight text-gold-foil sm:text-[2.8rem]">
                  {step.title}
                </h3>
                <p className="relative mt-1 font-serif text-[1.05rem] leading-relaxed text-cocoa-soft sm:text-lg">
                  {step.text}
                </p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
