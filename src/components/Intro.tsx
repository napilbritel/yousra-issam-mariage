"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";
import { GoldDust } from "./GoldDust";
import { Petals } from "./Petals";

type Phase = "closed" | "opening" | "leaving" | "gone" | "done";

/** Écran d'accueil : une enveloppe scellée à la cire qu'on ouvre pour entrer */
export function Intro() {
  const [phase, setPhase] = useState<Phase>("closed");

  useEffect(() => {
    document.documentElement.style.overflow =
      phase === "gone" || phase === "done" ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  const open = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    // Lance la séquence d'apparition de la page (voir globals.css)
    setTimeout(
      () => document.documentElement.setAttribute("data-opened", ""),
      1400,
    );
    setTimeout(() => setPhase("leaving"), 1700);
    setTimeout(() => setPhase("gone"), 2700);
    setTimeout(() => setPhase("done"), 7500);
  };

  const opened = phase !== "closed";

  const petals = opened && (
    <div className="pointer-events-none fixed inset-0 z-[55]" aria-hidden>
      <Petals burst count={30} />
    </div>
  );

  if (phase === "gone") return petals;

  return (
    <>
      {petals}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-cream bg-zellige px-6 transition-opacity duration-1000 ${
          phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        role="dialog"
        aria-label="Invitation au mariage"
      >
        <div className="absolute inset-0 bg-paper" aria-hidden />
        <GoldDust />

        <p
          className={`relative text-center font-display text-[0.62rem] tracking-[0.3em] text-gold-dark uppercase transition-all duration-700 sm:text-xs sm:tracking-[0.45em] ${
            opened ? "-translate-y-4 opacity-0" : ""
          }`}
        >
          Vous êtes invités au mariage de
        </p>
        <h1
          className={`relative mt-3 mb-10 px-2 pb-1 text-center font-script text-[2.8rem] leading-tight text-gold-foil transition-all duration-700 sm:text-6xl ${
            opened ? "-translate-y-4 opacity-0" : ""
          }`}
        >
          {wedding.bride} & {wedding.groom}
        </h1>

        {/* Enveloppe */}
        <button
          type="button"
          onClick={open}
          className="group relative aspect-[3/2] w-[min(82vw,360px)] cursor-pointer [perspective:1200px]"
          aria-label="Ouvrir l'invitation"
        >
          {/* Carte qui sort de l'enveloppe */}
          <div
            className={`absolute inset-x-5 top-4 bottom-4 flex flex-col items-center justify-center rounded-sm border border-gold/40 bg-ivory shadow-md transition-transform duration-1000 ease-out ${
              opened ? "-translate-y-[70%] delay-500" : ""
            }`}
          >
            <span className="font-display text-2xl text-gold">
              {wedding.monogram}
            </span>
            <span className="mt-1 font-display text-[0.6rem] tracking-[0.3em] text-cocoa-soft">
              {wedding.dayLabel} · 10 · {wedding.yearLabel}
            </span>
          </div>

          {/* Corps */}
          <div
            className="absolute inset-0 rounded-md bg-sand shadow-[0_25px_60px_-20px_rgba(74,53,33,0.45)]"
            style={{
              clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          <div
            className="absolute inset-0 rounded-md bg-gradient-to-t from-[#e2cfae] to-sand"
            style={{ clipPath: "polygon(0 100%, 50% 48%, 100% 100%)" }}
          />
          <div
            className={`pointer-events-none absolute inset-2 rounded border border-gold/30 transition-opacity ${opened ? "opacity-0" : ""}`}
          />

          {/* Rabat */}
          <div
            className={`absolute inset-x-0 top-0 h-[58%] origin-top transition-transform duration-700 ease-in-out [backface-visibility:hidden] ${
              opened ? "[transform:rotateX(180deg)]" : ""
            }`}
            style={{ zIndex: opened ? 0 : 10 }}
          >
            <div
              className="h-full w-full bg-gradient-to-b from-[#efe2c9] to-[#e4d2b1] drop-shadow-md"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            />
          </div>

          {/* Ondes dorées + texte circulaire autour du sceau */}
          <div
            className={`pointer-events-none absolute top-[58%] left-1/2 z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
              opened ? "opacity-0" : ""
            }`}
            aria-hidden
          >
            <span className="seal-ripple absolute inset-0 rounded-full border border-gold/70" />
            <span className="seal-ripple absolute inset-0 rounded-full border border-gold/70 [animation-delay:1.1s]" />
            <svg
              viewBox="0 0 140 140"
              className="seal-orbit absolute top-1/2 left-1/2 h-[9.5rem] w-[9.5rem] -translate-x-1/2 -translate-y-1/2 overflow-visible"
            >
              <defs>
                <path
                  id="seal-circle"
                  d="M70 70 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0"
                />
              </defs>
              <circle
                cx="70"
                cy="70"
                r="47"
                fill="none"
                stroke="#b3863c"
                strokeOpacity="0.35"
                strokeWidth="0.6"
                strokeDasharray="1 3"
              />
              <text
                fill="#8a6427"
                fontSize="12"
                letterSpacing="4.85"
                className="font-display uppercase"
              >
                <textPath href="#seal-circle">
                  Touchez le sceau✦Pour ouvrir✦
                </textPath>
              </text>
            </svg>
          </div>

          {/* Sceau de cire */}
          <div
            className={`${opened ? "" : "seal-breathe"} absolute top-[58%] left-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#e6c67f,#b3863c_55%,#7a5520)] shadow-[0_6px_16px_rgba(74,53,33,0.45),inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-105 ${
              opened ? "scale-50 opacity-0" : ""
            }`}
          >
            <span className="absolute inset-1.5 rounded-full border border-dashed border-[#f6e3b4]/60" />
            <span className="font-display text-lg font-semibold text-[#fff5dc] drop-shadow">
              {wedding.monogram}
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={open}
          tabIndex={-1}
          className={`group/hint relative mt-12 inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-gold/40 bg-ivory/60 py-2 pr-6 pl-2 shadow-[0_10px_30px_-15px_rgba(138,100,39,0.6)] backdrop-blur-md transition-all duration-500 ${
            opened ? "translate-y-4 opacity-0" : ""
          }`}
        >
          <span className="hint-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark text-ivory shadow-inner">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hint-tap h-[18px] w-[18px]"
              aria-hidden
            >
              <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0-.5a1.5 1.5 0 0 1 3 0V11m0-.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.2a5 5 0 0 1-4-2L4.3 16a1.5 1.5 0 0 1 2.3-1.9L9 16.5" />
              <path d="M6.5 4.5 5 3M14.5 4.5 16 3M10.5 1.5v-1" opacity="0.7" />
            </svg>
          </span>
          <span className="relative flex flex-col items-start leading-none">
            <span className="font-serif text-[1.05rem] text-cocoa italic">
              Touchez le sceau
            </span>
            <span className="mt-1 font-display text-[0.55rem] tracking-[0.35em] text-gold-dark uppercase">
              pour ouvrir l’invitation
            </span>
          </span>
        </button>
      </div>
    </>
  );
}
