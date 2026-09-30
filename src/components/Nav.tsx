"use client";

import { useEffect, useState, type ReactNode } from "react";
import { wedding } from "@/lib/wedding";

type Section = { id: string; label: string; icon: ReactNode };

const icon = "h-[22px] w-[22px]";

const sections: Section[] = [
  {
    id: "invitation",
    label: "Invitation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={icon}
        aria-hidden
      >
        <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
        <path d="M3.5 6.5l8.5 6.5 8.5-6.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "programme",
    label: "Programme",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={icon}
        aria-hidden
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "lieu",
    label: "Lieu",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={icon}
        aria-hidden
      >
        <path d="M12 21s-6.5-6.2-6.5-11.3a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.7" r="2.3" />
      </svg>
    ),
  },
  {
    id: "faire-part",
    label: "Faire-part",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={icon}
        aria-hidden
      >
        <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
        <path d="M9 7.5h6M8.5 11h7M10 14.5h4" strokeLinecap="round" />
        <path
          d="M12 19s-1.6-1-2-1.9c-.3-.7.2-1.4.9-1.4.5 0 .9.3 1.1.6.2-.3.6-.6 1.1-.6.7 0 1.2.7.9 1.4-.4.9-2 1.9-2 1.9z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
];

const desktopLinks = [
  { href: "#invitation", label: "Invitation" },
  { href: "#programme", label: "Programme" },
  { href: "#lieu", label: "Lieu" },
  { href: "#faire-part", label: "Faire-part" },
];

async function share() {
  const data = {
    title: `Mariage de ${wedding.bride} & ${wedding.groom}`,
    text: `${wedding.dateLabel} · ${wedding.venue.name}`,
    url: window.location.href.split("#")[0],
  };
  try {
    if (navigator.share) await navigator.share(data);
    else await navigator.clipboard.writeText(data.url);
  } catch {
    // partage annulé
  }
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > window.innerHeight * 0.5);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section active dans la barre du bas
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", "invitation", "programme", "lieu", "faire-part"]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Barre de progression */}
      <div
        className="fixed inset-x-0 top-0 z-[45] h-[2px] bg-transparent"
        aria-hidden
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-gold-dark via-gold-light to-gold"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* En-tête (tablette & ordinateur) */}
      <header
        className={`fixed inset-x-0 top-0 z-40 hidden transition-all duration-500 md:block ${
          scrolled
            ? "translate-y-0 border-b border-gold/20 bg-ivory/85 opacity-100 backdrop-blur-md"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-display text-xl text-gold"
            aria-label="Retour en haut"
          >
            {wedding.monogram}
          </a>
          <ul className="flex items-center gap-8">
            {desktopLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-[0.7rem] tracking-[0.25em] text-cocoa-soft uppercase transition hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={share}
            className="cursor-pointer rounded-full border border-gold px-5 py-2 font-display text-[0.65rem] tracking-[0.25em] text-gold-dark uppercase transition hover:bg-gold hover:text-ivory"
          >
            Partager
          </button>
        </nav>
      </header>

      {/* Barre d'onglets (téléphone) */}
      <nav
        aria-label="Navigation"
        className={`fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 transition-all duration-500 md:hidden ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[150%] opacity-0"
        }`}
      >
        <ul className="mx-auto grid max-w-md grid-cols-5 rounded-2xl border border-gold/30 bg-ivory/90 px-1 py-1.5 shadow-[0_18px_40px_-12px_rgba(74,53,33,0.45)] backdrop-blur-xl">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl transition-colors ${
                    isActive
                      ? "bg-gold/12 text-gold-dark"
                      : "text-cocoa-soft/80 active:bg-gold/10"
                  }`}
                >
                  {s.icon}
                  <span className="text-[0.62rem] font-medium tracking-wide">
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={share}
              className="flex min-h-12 w-full flex-col items-center justify-center gap-0.5 rounded-xl text-cocoa-soft/80 active:bg-gold/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={icon}
                aria-hidden
              >
                <path
                  d="M12 3v12M7.5 7.5 12 3l4.5 4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 11H5a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 5 21h14a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 19 11h-1"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[0.62rem] font-medium tracking-wide">
                Partager
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
