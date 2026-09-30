"use client";

import { useSyncExternalStore } from "react";
import { wedding } from "@/lib/wedding";

const target = new Date(wedding.dateISO).getTime();

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}
const getNow = () => Math.floor(Date.now() / 1000);
const getServerNow = () => null;

const units = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
] as const;

export function Countdown() {
  const now = useSyncExternalStore(subscribe, getNow, getServerNow);

  const diff =
    now === null ? null : Math.max(0, Math.floor(target / 1000) - now);
  const values =
    diff === null
      ? null
      : {
          days: Math.floor(diff / 86400),
          hours: Math.floor((diff % 86400) / 3600),
          minutes: Math.floor((diff % 3600) / 60),
          seconds: diff % 60,
        };

  if (diff === 0) {
    return (
      <p className="font-script text-4xl text-gold-foil sm:text-5xl">
        Le grand jour est arrivé !
      </p>
    );
  }

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-6"
      role="timer"
      aria-live="off"
    >
      {units.map(({ key, label }) => (
        <div
          key={key}
          className="relative flex aspect-[4/5] w-[4.6rem] flex-col items-center justify-center rounded-t-full border border-gold/50 bg-gradient-to-b from-gold/20 to-white/[0.03] shadow-[0_20px_40px_-20px_rgba(220,189,120,0.45)] backdrop-blur sm:w-28"
        >
          <span
            className="absolute inset-1 rounded-t-full border border-gold/20"
            aria-hidden
          />
          <span
            key={values ? values[key] : "empty"}
            className="tick font-display text-2xl text-gold-light tabular-nums sm:text-4xl"
          >
            {values ? String(values[key]).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 font-display text-[0.55rem] tracking-[0.2em] text-sand/70 uppercase sm:text-[0.65rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
