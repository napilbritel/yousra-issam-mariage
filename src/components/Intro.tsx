"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { asset, wedding } from "@/lib/wedding";
import { GoldDust } from "./GoldDust";
import { Petals } from "./Petals";

type Phase = "closed" | "opening" | "doors" | "gone" | "done";

/** Décor complet de l'écran (arche, rosace, fleurs), partagé par les deux portes */
function GateArt() {
  return (
    <div className="absolute inset-0 bg-cream bg-zellige">
      <div className="absolute inset-0 bg-paper" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(138,100,39,0.18))]" />

      {/* Rosace géante qui tourne lentement */}
      <svg
        viewBox="0 0 200 200"
        className="absolute top-[54%] left-1/2 h-[min(150vw,760px)] w-[min(150vw,760px)] -translate-x-1/2 -translate-y-1/2 animate-spin-slow text-gold opacity-[0.22]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.35"
      >
        {[0, 22.5, 45, 67.5].map((r) => (
          <rect
            key={r}
            x="40"
            y="40"
            width="120"
            height="120"
            transform={`rotate(${r} 100 100)`}
          />
        ))}
        {[92, 70, 52, 30].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} />
        ))}
        {Array.from({ length: 16 }, (_, i) => (
          <path
            key={i}
            d="M100 8 Q108 30 100 48 Q92 30 100 8z"
            transform={`rotate(${i * 22.5} 100 100)`}
          />
        ))}
      </svg>

      {/* Grande arche mauresque (porte du palais) */}
      <svg
        viewBox="0 0 400 700"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-1/2 h-[90svh] w-[min(92vw,620px)] -translate-x-1/2 text-gold"
        fill="none"
      >
        <path
          d="M10 700 V250 C10 140 90 60 170 30 C185 24 195 14 200 4 C205 14 215 24 230 30 C310 60 390 140 390 250 V700 Z"
          className="fill-ivory/45"
        />
        <path
          d="M10 700 V250 C10 140 90 60 170 30 C185 24 195 14 200 4 C205 14 215 24 230 30 C310 60 390 140 390 250 V700"
          stroke="currentColor"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M26 700 V256 C26 152 100 78 176 46 C189 40 196 32 200 22 C204 32 211 40 224 46 C300 78 374 152 374 256 V700"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.55"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Image
        src={asset("/images/floral-tl.png")}
        alt=""
        width={480}
        height={480}
        priority
        className="absolute -top-4 -left-8 w-44 animate-float mix-blend-multiply sm:w-72"
      />
      <Image
        src={asset("/images/floral-br.png")}
        alt=""
        width={304}
        height={506}
        priority
        className="absolute -right-4 -bottom-4 w-36 animate-float mix-blend-multiply [animation-delay:-3s] sm:w-60"
      />
    </div>
  );
}

/** Une moitié de l'écran : elle montre sa moitié du décor puis glisse sur le côté */
function Door({ side, open }: { side: "left" | "right"; open: boolean }) {
  const left = side === "left";
  return (
    <div
      className={`absolute inset-y-0 w-1/2 overflow-hidden transition-transform duration-[1400ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        left ? "left-0" : "right-0"
      } ${open ? (left ? "-translate-x-full" : "translate-x-full") : ""}`}
    >
      <div
        className={`absolute inset-y-0 w-[200%] ${left ? "left-0" : "right-0"}`}
      >
        <GateArt />
      </div>
      {/* Chant doré de la porte */}
      <span
        className={`absolute inset-y-0 w-[3px] bg-gradient-to-b from-gold-light/0 via-gold to-gold-light/0 ${
          left ? "right-0" : "left-0"
        } ${open ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      />
    </div>
  );
}

/** Moitié gauche ou droite du sceau de cire (pour l'effet « cachet brisé ») */
function SealHalf({
  half,
  broken,
  children,
}: {
  half: "left" | "right";
  broken: boolean;
  children: ReactNode;
}) {
  const left = half === "left";
  return (
    <div
      className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        clipPath: left
          ? "polygon(0 0, 54% 0, 46% 30%, 56% 52%, 44% 74%, 52% 100%, 0 100%)"
          : "polygon(54% 0, 100% 0, 100% 100%, 52% 100%, 44% 74%, 56% 52%, 46% 30%)",
        transform: broken
          ? `translate(${left ? -26 : 26}px, 18px) rotate(${left ? -28 : 28}deg)`
          : "none",
        opacity: broken ? 0 : 1,
        transitionDelay: broken ? "60ms" : "0ms",
      }}
    >
      {children}
    </div>
  );
}

function SealFace() {
  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#e6c67f,#b3863c_55%,#7a5520)] shadow-[0_6px_16px_rgba(74,53,33,0.45),inset_0_-3px_6px_rgba(0,0,0,0.25)]">
      <span className="absolute inset-1.5 rounded-full border border-dashed border-[#f6e3b4]/60" />
      <span className="font-display text-lg font-semibold text-[#fff5dc] drop-shadow">
        {wedding.monogram}
      </span>
    </div>
  );
}

/** Écran d'accueil : la porte du palais, l'enveloppe et son sceau de cire */
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
    setTimeout(() => setPhase("doors"), 1800);
    // Lance la séquence d'apparition de la page (voir globals.css)
    setTimeout(
      () => document.documentElement.setAttribute("data-opened", ""),
      1900,
    );
    setTimeout(() => setPhase("gone"), 3300);
    setTimeout(() => setPhase("done"), 8500);
  };

  const opened = phase !== "closed";
  const doors = phase === "doors";

  const petals = (doors || phase === "gone") && (
    <div className="pointer-events-none fixed inset-0 z-[55]" aria-hidden>
      <Petals burst count={30} />
    </div>
  );

  if (phase === "gone") return petals;

  return (
    <>
      {petals}
      <div
        className={`fixed inset-0 z-50 ${doors ? "pointer-events-none" : ""}`}
        role="dialog"
        aria-label="Invitation au mariage"
      >
        <Door side="left" open={doors} />
        <Door side="right" open={doors} />

        {/* Filet de lumière au centre, juste avant l'ouverture des portes */}
        <div
          className={`seam-light pointer-events-none absolute inset-y-0 left-1/2 z-10 w-24 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,240,200,0.95),rgba(241,220,164,0.35)_40%,transparent_70%)] transition-all duration-700 ${
            phase === "opening" ? "is-glowing" : "opacity-0"
          } ${doors ? "scale-x-[6]" : ""}`}
          aria-hidden
        />

        {/* Contenu central */}
        <div
          className={`relative flex h-full flex-col items-center justify-center px-6 transition-all duration-500 ${
            doors ? "scale-105 opacity-0" : ""
          }`}
        >
          <GoldDust />

          <p
            lang="ar"
            dir="rtl"
            className={`relative font-arabic text-lg text-gold-dark transition-all duration-700 sm:text-xl ${
              opened ? "-translate-y-4 opacity-0" : ""
            }`}
          >
            بسم الله الرحمن الرحيم
          </p>
          <p
            className={`relative mt-4 text-center font-display text-[0.62rem] tracking-[0.3em] text-gold-dark uppercase transition-all duration-700 sm:text-xs sm:tracking-[0.45em] ${
              opened ? "-translate-y-4 opacity-0" : ""
            }`}
          >
            Vous êtes invités au mariage de
          </p>
          <h1
            className={`relative mt-2 mb-9 px-2 pb-1 text-center font-script text-[2.8rem] leading-tight text-gold-foil transition-all duration-700 sm:text-6xl ${
              opened ? "-translate-y-4 opacity-0" : ""
            }`}
          >
            {wedding.groom} & {wedding.bride}
          </h1>

          {/* Enveloppe */}
          <button
            type="button"
            onClick={open}
            className="group relative aspect-[3/2] w-[min(82vw,360px)] cursor-pointer [perspective:1200px]"
            aria-label="Ouvrir l'invitation"
          >
            {/* Doublure zellige visible à l'ouverture */}
            <div
              className="absolute inset-0 rounded-md bg-[linear-gradient(160deg,#b88d45,#e6cc95_45%,#c9a15a_70%,#9c7433)] bg-blend-soft-light"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)",
              }}
            />

            {/* Carte qui sort de l'enveloppe */}
            <div
              className={`absolute inset-x-4 top-3 bottom-3 flex flex-col items-center justify-center rounded-sm border border-gold/40 bg-ivory shadow-lg transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                opened ? "-translate-y-[78%] delay-[550ms]" : ""
              }`}
            >
              <span className="absolute inset-1.5 rounded-sm border border-gold/25" />
              <span className="px-2 pb-1 font-script text-[2rem] leading-tight text-gold-foil sm:text-4xl">
                {wedding.groom} & {wedding.bride}
              </span>
              <span className="font-display text-[0.6rem] tracking-[0.3em] text-cocoa-soft">
                {wedding.dayLabel} · 10 · {wedding.yearLabel}
              </span>
            </div>

            {/* Corps de l'enveloppe, liseré doré */}
            <div
              className="absolute inset-0 rounded-md bg-gradient-to-br from-[#f1e5cd] via-sand to-[#e2cfae] shadow-[0_30px_60px_-22px_rgba(74,53,33,0.5)]"
              style={{
                clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute inset-0 rounded-md bg-gradient-to-t from-[#e2cfae] to-[#ecdcbd]"
              style={{ clipPath: "polygon(0 100%, 50% 48%, 100% 100%)" }}
            />
            <div
              className={`pointer-events-none absolute inset-0 rounded-md border-2 border-transparent [background:linear-gradient(120deg,#8a6427,#f1dca4,#b3863c,#e2c486,#8a6427)_border-box] [mask:linear-gradient(#000_0_0)_padding-box_exclude,linear-gradient(#000_0_0)] transition-opacity ${
                doors ? "opacity-0" : ""
              }`}
            />

            {/* Rabat (extérieur sable, intérieur zellige doré) */}
            <div
              className={`absolute inset-x-0 top-0 h-[58%] origin-top transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                opened ? "[transform:rotateX(180deg)]" : ""
              }`}
              style={{
                zIndex: opened ? 0 : 10,
                transitionDelay: opened ? "150ms" : "0ms",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#f3e8d3] to-[#e4d2b1] [backface-visibility:hidden]"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(200deg,#b88d45,#ecd49e_50%,#a97f3a)] [backface-visibility:hidden] [transform:rotateX(180deg)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
            </div>

            {/* Ondes + texte circulaire autour du sceau */}
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

            {/* Sceau de cire, qui se brise en deux */}
            <div
              className={`${opened ? "" : "seal-breathe"} absolute top-[58%] left-1/2 z-20 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-105`}
            >
              <SealHalf half="left" broken={opened}>
                <SealFace />
              </SealHalf>
              <SealHalf half="right" broken={opened}>
                <SealFace />
              </SealHalf>
            </div>
          </button>

          <button
            type="button"
            onClick={open}
            tabIndex={-1}
            className={`group/hint relative mt-12 inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-gold/40 bg-ivory/70 py-2 pr-6 pl-2 shadow-[0_10px_30px_-15px_rgba(138,100,39,0.6)] backdrop-blur-md transition-all duration-500 ${
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
                <path
                  d="M6.5 4.5 5 3M14.5 4.5 16 3M10.5 1.5v-1"
                  opacity="0.7"
                />
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
      </div>
    </>
  );
}
