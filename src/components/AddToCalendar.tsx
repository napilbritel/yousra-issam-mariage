"use client";

import { wedding } from "@/lib/wedding";

const start = new Date(wedding.dateISO);
const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
const fmt = (d: Date) =>
  d
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

const title = `Mariage de ${wedding.bride} & ${wedding.groom}`;
const location = [wedding.venue.name, wedding.venue.address]
  .filter(Boolean)
  .join(", ");

const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  title,
)}&dates=${fmt(start)}/${fmt(end)}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(
  wedding.honour,
)}`;

function downloadIcs() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//YousraIssam//Mariage//FR",
    "BEGIN:VEVENT",
    `UID:mariage-${fmt(start)}@yousra-issam`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${title}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${wedding.honour}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(
    new Blob([ics], { type: "text/calendar;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = "mariage-yousra-issam.ics";
  a.click();
  URL.revokeObjectURL(url);
}

const btn =
  "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-gold/60 px-5 sm:flex-none font-display text-[0.7rem] tracking-[0.2em] text-gold-dark uppercase transition hover:bg-gold hover:text-ivory";

export function AddToCalendar() {
  return (
    <div className="mx-auto flex max-w-sm flex-wrap justify-center gap-3 sm:max-w-none">
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
      >
        Google Agenda
      </a>
      <button type="button" onClick={downloadIcs} className={btn}>
        Apple / Outlook
      </button>
    </div>
  );
}
