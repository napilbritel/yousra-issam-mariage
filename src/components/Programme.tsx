"use client";

import { useEffect, useRef, type SVGProps } from "react";
import { wedding, type ProgrammeStep } from "@/lib/wedding";

type P = SVGProps<SVGSVGElement>;

// Chaque tracé a pathLength={1} pour être « dessiné » à l'activation (voir globals.css)
const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const icons: Record<ProgrammeStep["icon"], (props: P) => React.ReactElement> = {
  // Théière marocaine
  welcome: (props) => (
    <svg {...base} aria-hidden {...props}>
      <path pathLength={1} d="M14 38h20" />
      <path pathLength={1} d="M16 36c-3-3-4-7-2-11h20c2 4 1 8-2 11z" />
      <path pathLength={1} d="M13 25h22" />
      <path pathLength={1} d="M18 25c0-4 3-6 6-6s6 2 6 6" />
      <path pathLength={1} d="M24 19v-3m-1.5 0h3" />
      <path pathLength={1} d="M34 28c4-1 6-4 7-8" />
      <path pathLength={1} d="M14 29c-3 0-5-1.5-5-4s2-3.5 4-3" />
      <path
        pathLength={1}
        d="M38 12c-1.5 1.5-1.5 3 0 4.5M42 10c-1.5 1.5-1.5 3 0 4.5"
      />
    </svg>
  ),
  // Amaria / couronne
  entrance: (props) => (
    <svg {...base} aria-hidden {...props}>
      <path pathLength={1} d="M10 33l-3-17 10 8 7-12 7 12 10-8-3 17z" />
      <path pathLength={1} d="M10 38h28" />
      <circle pathLength={1} cx="24" cy="9.5" r="1.6" fill="currentColor" />
      <circle pathLength={1} cx="7" cy="14.5" r="1.4" fill="currentColor" />
      <circle pathLength={1} cx="41" cy="14.5" r="1.4" fill="currentColor" />
      <path pathLength={1} d="M24 30l2-3-2-3-2 3z" fill="currentColor" />
    </svg>
  ),
  // Bendir et notes de musique
  celebration: (props) => (
    <svg {...base} aria-hidden {...props}>
      <circle pathLength={1} cx="21" cy="27" r="12" />
      <circle pathLength={1} cx="21" cy="27" r="8.5" />
      <path pathLength={1} d="M35 8v10.5a2.5 2.5 0 1 1-2-2.45" />
      <path pathLength={1} d="M35 8l6-2v9a2.5 2.5 0 1 1-2-2.45" />
      <path
        pathLength={1}
        d="M8 10l1 2.5L11.5 13.5 9 14.5 8 17l-1-2.5L4.5 13.5 7 12.5z"
        fill="currentColor"
      />
    </svg>
  ),
  // Cloche de service
  dinner: (props) => (
    <svg {...base} aria-hidden {...props}>
      <path pathLength={1} d="M8 33h32" />
      <path pathLength={1} d="M11 33a13 13 0 0 1 26 0" />
      <path pathLength={1} d="M24 17v3m-2-3h4" />
      <path pathLength={1} d="M6 38h36" />
      <path pathLength={1} d="M17 27c1.5-2.5 4-4 7-4.3" />
    </svg>
  ),
  // Pièce montée
  cake: (props) => (
    <svg {...base} aria-hidden {...props}>
      <rect pathLength={1} x="10" y="30" width="28" height="10" rx="1.5" />
      <rect pathLength={1} x="14" y="21" width="20" height="9" rx="1.5" />
      <rect pathLength={1} x="18" y="13" width="12" height="8" rx="1.5" />
      <path pathLength={1} d="M10 34c3 2 5 2 7 0s5-2 7 0 5 2 7 0 5-2 7 0" />
      <path pathLength={1} d="M24 13V9" />
      <path
        pathLength={1}
        d="M24 5.5c1.2 1.2 1.2 2.4 0 3.5-1.2-1.1-1.2-2.3 0-3.5z"
        fill="currentColor"
      />
    </svg>
  ),
};

/** Médaillon en étoile marocaine : ivoire au repos, or une fois atteint */
function Medallion({
  icon,
  number,
}: {
  icon: ProgrammeStep["icon"];
  number: string;
}) {
  const Icon = icons[icon];
  return (
    <div className="prog-medallion relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
      <span
        className="prog-ring absolute inset-1 rounded-full border border-gold"
        aria-hidden
      />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_8px_14px_rgba(138,100,39,0.22)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="prog-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e6c67f" />
            <stop offset="0.5" stopColor="#b3863c" />
            <stop offset="1" stopColor="#8a6427" />
          </linearGradient>
        </defs>
        <g
          fill="#fbf6ec"
          stroke="#b3863c"
          strokeOpacity="0.55"
          strokeWidth="1.4"
        >
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
        <g
          className="prog-star-gold"
          fill="url(#prog-gold)"
          stroke="#f1dca4"
          strokeWidth="1"
        >
          <rect x="17" y="17" width="66" height="66" rx="3" />
          <rect
            x="17"
            y="17"
            width="66"
            height="66"
            rx="3"
            transform="rotate(45 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="27"
            fill="none"
            stroke="#fff5dc"
            strokeOpacity="0.45"
            strokeWidth="0.8"
          />
        </g>
      </svg>
      <span className="prog-num absolute font-display text-sm tracking-widest text-gold-dark sm:text-base">
        {number}
      </span>
      <Icon className="prog-icon relative h-8 w-8 text-ivory sm:h-10 sm:w-10" />
    </div>
  );
}

export function Programme() {
  const steps = wedding.programme as readonly ProgrammeStep[];
  const list = useRef<HTMLOListElement>(null);
  const track = useRef<HTMLSpanElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const dot = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ol = list.current;
    if (!ol) return;
    const items = Array.from(ol.querySelectorAll<HTMLLIElement>(".prog-step"));
    const medallions = items.map((li) =>
      li.querySelector<HTMLElement>(".prog-medallion")!,
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((li) => li.classList.add("is-visible", "is-active"));
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const anchor = vh * 0.6;
      const olTop = ol.getBoundingClientRect().top;
      const centers = medallions.map((m) => {
        const r = m.getBoundingClientRect();
        return r.top + r.height / 2 - olTop;
      });
      const start = centers[0];
      const length = centers[centers.length - 1] - start;

      // Fil : du premier au dernier médaillon
      if (track.current) {
        track.current.style.top = `${start}px`;
        track.current.style.height = `${length}px`;
      }
      const progress = Math.min(
        1,
        Math.max(0, (anchor - (olTop + start)) / length),
      );
      if (fill.current) fill.current.style.transform = `scaleY(${progress})`;
      if (dot.current) {
        dot.current.style.transform = `translate(-50%, ${progress * length - 6}px)`;
        dot.current.style.opacity = progress > 0 && progress < 1 ? "1" : "0";
      }

      items.forEach((li, i) => {
        if (li.getBoundingClientRect().top < vh * 0.88)
          li.classList.add("is-visible");
        li.classList.toggle("is-active", olTop + centers[i] <= anchor + 1);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={list} className="relative mx-auto max-w-4xl">
      {/* Fil doré piloté par le défilement */}
      <span
        ref={track}
        className="absolute left-8 w-px -translate-x-1/2 bg-gold/20 sm:left-1/2"
        aria-hidden
      >
        <span
          ref={fill}
          className="absolute inset-0 w-[2px] -translate-x-[0.5px] origin-top bg-gradient-to-b from-gold-light via-gold to-gold-dark"
          style={{ transform: "scaleY(0)" }}
        />
        <span
          ref={dot}
          className="absolute top-0 left-1/2 h-3 w-3 rounded-full bg-gold-light opacity-0 shadow-[0_0_0_4px_rgba(220,189,120,0.25),0_0_18px_6px_rgba(220,189,120,0.6)] transition-opacity duration-300"
        />
      </span>

      {steps.map((step, i) => {
        const right = i % 2 === 1;
        const number = String(i + 1).padStart(2, "0");
        return (
          <li
            key={step.title}
            className="prog-step relative grid grid-cols-[4rem_1fr] items-start gap-4 pb-8 last:pb-0 sm:grid-cols-[1fr_5rem_1fr] sm:gap-8 sm:pb-14"
          >
            <div className="row-start-1 flex justify-center sm:col-start-2">
              <Medallion icon={step.icon} number={number} />
            </div>

            <div
              className={`prog-card row-start-1 [--from-x:28px] ${
                right
                  ? "sm:col-start-3 sm:[--from-x:48px]"
                  : "sm:col-start-1 sm:text-right sm:[--from-x:-48px]"
              }`}
            >
              <div className="prog-panel relative overflow-hidden rounded-2xl border border-gold/20 bg-ivory/90 p-5 shadow-[0_22px_45px_-34px_rgba(74,53,33,0.7)] backdrop-blur sm:p-7">
                {/* Liseré doré qui se déploie à l'activation */}
                <span
                  className={`prog-hair absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark ${
                    right ? "origin-left" : "origin-left sm:origin-right"
                  }`}
                  aria-hidden
                />
                <span
                  className={`pointer-events-none absolute -top-3 font-display text-[5.5rem] leading-none text-gold/[0.08] select-none ${
                    right ? "right-3" : "right-3 sm:right-auto sm:left-3"
                  }`}
                  aria-hidden
                >
                  {number}
                </span>

                <div
                  className={`stag relative flex flex-wrap items-center gap-3 [--d:0] ${
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
                <h3 className="stag relative mt-2 font-script text-[2.3rem] leading-tight text-gold-foil [--d:1] sm:text-[2.8rem]">
                  {step.title}
                </h3>
                <p className="stag relative mt-1 font-serif text-[1.05rem] leading-relaxed text-cocoa-soft [--d:2] sm:text-lg">
                  {step.text}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
