import Image from "next/image";
import { AddToCalendar } from "@/components/AddToCalendar";
import { Countdown } from "@/components/Countdown";
import { GoldDust } from "@/components/GoldDust";
import { Intro } from "@/components/Intro";
import { Lanterns } from "@/components/Lanterns";
import { Nav } from "@/components/Nav";
import { Petals } from "@/components/Petals";
import { Programme } from "@/components/Programme";
import {
  ArchFrame,
  Branch,
  Divider,
  Heart,
  IconCalendar,
  IconClock,
  IconPin,
  Rule,
  Sparkle,
  Star8,
} from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import {
  asset,
  mapsEmbedUrl,
  mapsSearchUrl,
  wazeUrl,
  wedding,
} from "@/lib/wedding";

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10 text-center sm:mb-14">
      <p className="font-display text-[0.62rem] tracking-[0.35em] text-gold-dark uppercase sm:text-[0.7rem] sm:tracking-[0.45em]">
        {eyebrow}
      </p>
      <h2 className="mt-3 px-2 pb-2 font-script text-[2.9rem] leading-tight text-gold-foil sm:text-6xl">
        {title}
      </h2>
      <Rule className="mt-4" />
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />

      <main>
        {/* ───────────── Hero ───────────── */}
        <section
          id="top"
          className="light-sweep relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-cream bg-zellige px-4 pt-16 pb-28 sm:px-6 sm:py-24"
        >
          <div className="absolute inset-0 bg-paper" aria-hidden />
          <GoldDust />
          <Petals count={16} />

          <div
            className="parallax pointer-events-none absolute -top-4 -left-8 w-40 sm:w-80 lg:w-[26rem]"
            style={{ "--parallax": "80px" } as React.CSSProperties}
          >
            <Image
              src={asset("/images/floral-tl.png")}
              alt=""
              width={480}
              height={480}
              priority
              className="w-full animate-float mix-blend-multiply"
            />
          </div>
          <div
            className="parallax pointer-events-none absolute -right-4 -bottom-4 w-32 sm:w-64 lg:w-80"
            style={{ "--parallax": "-60px" } as React.CSSProperties}
          >
            <Image
              src={asset("/images/floral-br.png")}
              alt=""
              width={304}
              height={506}
              priority
              className="w-full animate-float mix-blend-multiply [animation-delay:-3s]"
            />
          </div>

          {/* Cadre doré fin */}
          <div
            className="pointer-events-none absolute inset-3 border border-gold/40 sm:inset-8"
            aria-hidden
          >
            <div className="absolute inset-1.5 border border-gold/20" />
          </div>

          {/* Arche mauresque qui se dessine à l'ouverture */}
          <div className="relative z-10 flex w-full max-w-[23rem] flex-col items-center px-5 pt-16 pb-10 text-center sm:max-w-2xl sm:px-16 sm:pt-24 sm:pb-14">
            <svg
              viewBox="0 0 400 700"
              preserveAspectRatio="none"
              className="mask-fade-b absolute inset-0 h-full w-full text-gold"
              aria-hidden
            >
              <path
                d="M8 700 V250 C8 140 90 60 170 30 C185 24 195 14 200 4 C205 14 215 24 230 30 C310 60 392 140 392 250 V700 Z"
                className="fill-ivory/55"
                stroke="none"
              />
              <path
                className="draw"
                pathLength={1}
                d="M8 700 V250 C8 140 90 60 170 30 C185 24 195 14 200 4 C205 14 215 24 230 30 C310 60 392 140 392 250 V700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                className="draw"
                pathLength={1}
                d="M22 700 V254 C22 150 100 74 176 44 C189 38 196 30 200 22 C204 30 211 38 224 44 C300 74 378 150 378 254 V700"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.55"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <Star8 className="seq absolute -top-5 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-cream p-1 text-gold sm:-top-6 sm:h-12 sm:w-12" />

            <p
              lang="ar"
              dir="rtl"
              className="seq relative font-arabic text-xl text-gold-dark sm:text-3xl"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              بسم الله الرحمن الرحيم
            </p>

            <div
              className="seq relative mt-5 flex flex-col items-center sm:mt-8"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              <span className="font-display text-4xl text-gold sm:text-6xl">
                {wedding.monogram}
              </span>
              <div
                className="-mt-1 flex items-center gap-1 text-gold"
                aria-hidden
              >
                <Branch className="h-6 w-20 -scale-x-100 sm:w-24" />
                <Heart className="mt-4 h-3 w-3" />
                <Branch className="h-6 w-20 sm:w-24" />
              </div>
            </div>

            <p
              className="seq relative mt-5 max-w-[19rem] font-serif text-[1.02rem] leading-relaxed text-cocoa-soft italic sm:mt-8 sm:max-w-xl sm:text-xl"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              {wedding.intro}
            </p>

            <h1 className="relative mt-3 flex flex-col items-center sm:mt-4">
              <Sparkle
                className="twinkle absolute top-2 -left-1 h-4 w-4 text-gold-light sm:h-5 sm:w-5"
                style={
                  { "--tw": "3.2s", "--twd": "2.4s" } as React.CSSProperties
                }
              />
              <Sparkle
                className="twinkle absolute top-[38%] -right-2 h-3 w-3 text-gold sm:h-4 sm:w-4"
                style={
                  { "--tw": "2.6s", "--twd": "3.1s" } as React.CSSProperties
                }
              />
              <Sparkle
                className="twinkle absolute bottom-6 left-4 h-3 w-3 text-gold-light"
                style={
                  { "--tw": "3.6s", "--twd": "3.8s" } as React.CSSProperties
                }
              />
              <Sparkle
                className="twinkle absolute -top-1 right-8 h-2.5 w-2.5 text-gold"
                style={
                  { "--tw": "2.9s", "--twd": "4.3s" } as React.CSSProperties
                }
              />

              <span
                className="ink block"
                style={{ "--ink-delay": "0.7s" } as React.CSSProperties}
              >
                <span className="block px-4 pb-2 font-script text-[clamp(4rem,20vw,8rem)] leading-[1.05] text-gold-foil">
                  {wedding.bride}
                </span>
              </span>
              <span
                className="seq flex w-full items-center justify-center gap-4"
                style={{ "--i": 7 } as React.CSSProperties}
                aria-label="et"
              >
                <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/70 sm:w-28" />
                <span className="font-script text-4xl text-gold sm:text-6xl">
                  &
                </span>
                <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/70 sm:w-28" />
              </span>
              <span
                className="ink block"
                style={{ "--ink-delay": "2s" } as React.CSSProperties}
              >
                <span className="block px-4 pb-4 font-script text-[clamp(4rem,20vw,8rem)] leading-[1.05] text-gold-foil">
                  {wedding.groom}
                </span>
              </span>
            </h1>

            <div
              className="seq relative mt-1 flex items-center gap-3 font-display text-sm tracking-[0.3em] text-cocoa sm:mt-4 sm:gap-4 sm:text-base sm:tracking-[0.35em]"
              style={{ "--i": 14 } as React.CSSProperties}
            >
              <span>{wedding.dayLabel}</span>
              <Star8 className="h-4 w-4 text-gold" />
              <span>10</span>
              <Star8 className="h-4 w-4 text-gold" />
              <span>{wedding.yearLabel}</span>
            </div>
          </div>

          <a
            href="#invitation"
            className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-display text-[0.6rem] tracking-[0.35em] text-gold-dark uppercase"
          >
            Découvrir
            <span className="relative h-10 w-px overflow-hidden bg-gold/25">
              <span className="absolute inset-x-0 top-0 h-4 animate-[scroll-hint_2.2s_ease-in-out_infinite] bg-gold" />
            </span>
          </a>
        </section>

        {/* ───────────── Invitation ───────────── */}
        <section
          id="invitation"
          className="relative scroll-mt-16 bg-ivory px-5 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Star8 className="mx-auto h-10 w-10 animate-spin-slow text-gold/70" />
              <p
                lang="ar"
                dir="rtl"
                className="mt-6 font-arabic text-[1.35rem] leading-[2.2] text-cocoa sm:mt-8 sm:text-3xl"
              >
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
                لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              </p>
              <p className="mt-5 font-serif text-base leading-relaxed text-cocoa-soft italic sm:text-lg">
                « Et parmi Ses signes, Il a créé de vous, pour vous, des épouses
                pour que vous viviez en tranquillité avec elles, et Il a mis
                entre vous de l’affection et de la bonté. »
              </p>
              <p className="mt-2 font-display text-[0.65rem] tracking-[0.3em] text-gold-dark uppercase">
                Sourate Ar-Rum · 21
              </p>
            </Reveal>

            <Divider className="my-14 sm:my-20" />

            <Reveal className="text-center">
              <p className="mx-auto max-w-2xl font-serif text-[1.45rem] leading-relaxed text-cocoa sm:text-3xl">
                {wedding.honour}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-6">
              {[
                {
                  icon: <IconCalendar className="h-7 w-7 sm:h-9 sm:w-9" />,
                  label: "Date",
                  value: `${wedding.dayLabel} ${wedding.monthLabel}`,
                  sub: wedding.yearLabel,
                },
                {
                  icon: <IconPin className="h-7 w-7 sm:h-9 sm:w-9" />,
                  label: "Lieu",
                  value: wedding.venue.name,
                  sub: wedding.venue.address || "Salle de réception",
                },
                {
                  icon: <IconClock className="h-7 w-7 sm:h-9 sm:w-9" />,
                  label: "Heure",
                  value: wedding.timeLabel,
                  sub: "Accueil des invités",
                },
              ].map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 150}
                  className="group relative flex items-center gap-4 rounded-2xl border border-gold/30 bg-cream/60 px-5 py-4 text-left transition duration-500 sm:flex-col sm:gap-0 sm:rounded-t-[10rem] sm:rounded-b-none sm:px-6 sm:pt-14 sm:pb-10 sm:text-center hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(138,100,39,0.7)]"
                >
                  <span
                    className="absolute inset-1.5 rounded-xl border border-gold/15 sm:inset-2 sm:rounded-t-[10rem] sm:rounded-b-none"
                    aria-hidden
                  />
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold transition group-hover:scale-110 sm:h-auto sm:w-auto sm:border-0 sm:bg-transparent">
                    {item.icon}
                  </span>
                  <span className="flex flex-col sm:items-center">
                    <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-dark uppercase sm:mt-5 sm:text-[0.65rem] sm:tracking-[0.35em]">
                      {item.label}
                    </span>
                    <span className="mt-0.5 font-display text-lg text-cocoa sm:mt-2 sm:text-xl">
                      {item.value}
                    </span>
                    <span className="font-serif text-cocoa-soft italic sm:mt-1">
                      {item.sub}
                    </span>
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12" delay={200}>
              <AddToCalendar />
            </Reveal>
          </div>
        </section>

        {/* ───────────── Compte à rebours ───────────── */}
        <section className="relative overflow-hidden bg-[#2d2014] px-4 pt-44 pb-20 text-center sm:px-6 sm:pt-48 sm:pb-28">
          <div className="absolute inset-0 bg-zellige opacity-60" aria-hidden />
          <div
            className="arch-edge absolute inset-x-0 top-0 z-10 h-5 rotate-180 bg-ivory"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,134,60,0.25),transparent_65%)]"
            aria-hidden
          />
          <GoldDust />
          <Lanterns />
          <Reveal className="relative">
            <p className="font-display text-[0.62rem] tracking-[0.35em] text-gold-light uppercase sm:text-[0.7rem] sm:tracking-[0.45em]">
              {wedding.dateLabel}
            </p>
            <h2 className="mt-3 px-2 pb-2 font-script text-[2.6rem] leading-tight text-gold-foil sm:text-6xl">
              Plus que quelques instants…
            </h2>
            <div className="mt-10 flex justify-center sm:mt-12">
              <Countdown />
            </div>
          </Reveal>
        </section>

        {/* ───────────── Programme ───────────── */}
        <section
          id="programme"
          className="relative scroll-mt-16 overflow-hidden bg-cream bg-zellige px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="absolute inset-0 bg-paper" aria-hidden />
          <div className="relative">
            <SectionTitle eyebrow="Le déroulé de la soirée" title="Programme" />
            <Programme />
          </div>
        </section>

        {/* ───────────── Lieu ───────────── */}
        <section
          id="lieu"
          className="relative scroll-mt-16 bg-ivory pt-20 sm:pt-28"
        >
          <div className="px-5 sm:px-6">
            <SectionTitle eyebrow="Là où tout se passera" title="Le Lieu" />
          </div>

          <Reveal className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <h3 className="font-display text-[1.7rem] tracking-[0.15em] text-cocoa uppercase sm:text-4xl sm:tracking-[0.2em]">
              {wedding.venue.name}
            </h3>
            {wedding.venue.address && (
              <p className="mt-3 font-serif text-xl text-cocoa-soft italic">
                {wedding.venue.address}
              </p>
            )}
            <p className="mx-auto mt-4 max-w-xl font-serif text-lg text-cocoa-soft">
              Sous les arches dorées et les lanternes du palais, une nuit à
              l’image de notre amour : chaleureuse, lumineuse et inoubliable.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl items-center gap-10 px-5 sm:mt-14 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
            <Reveal className="relative mx-auto aspect-[4/5] w-[82%] max-w-md sm:w-full">
              <ArchFrame className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] text-gold" />
              <div className="relative h-full w-full overflow-hidden rounded-t-full border border-gold/40 bg-sand shadow-[0_30px_60px_-30px_rgba(74,53,33,0.7)]">
                <iframe
                  title={`Carte — ${wedding.venue.name}`}
                  src={mapsEmbedUrl}
                  className="h-full w-full sepia-[.35] saturate-[.8] max-lg:pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-x-0 bottom-0 flex items-end justify-center bg-gradient-to-t from-cocoa/60 to-transparent pt-16 pb-5 font-display text-[0.62rem] tracking-[0.25em] text-ivory uppercase lg:hidden"
                >
                  Toucher pour ouvrir la carte
                </a>
              </div>
            </Reveal>

            <Reveal
              delay={150}
              className="mx-auto flex w-full max-w-md flex-col gap-5 sm:gap-8 lg:mx-0"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <IconPin className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-[0.65rem] tracking-[0.3em] text-gold-dark uppercase">
                    Réception
                  </p>
                  <p className="font-display text-lg text-cocoa sm:text-xl">
                    {wedding.venue.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <IconClock className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-[0.65rem] tracking-[0.3em] text-gold-dark uppercase">
                    À partir de
                  </p>
                  <p className="font-display text-lg text-cocoa sm:text-xl">
                    {wedding.timeLabel}
                  </p>
                  <p className="font-serif text-cocoa-soft italic">
                    {wedding.dateLabel}
                  </p>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-4 font-display text-[0.65rem] tracking-[0.2em] text-ivory uppercase shadow-[0_12px_30px_-12px_rgba(138,100,39,0.8)] transition hover:brightness-110"
                >
                  Google Maps
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center rounded-full border border-gold/60 px-4 font-display text-[0.65rem] tracking-[0.2em] text-gold-dark uppercase transition hover:bg-gold hover:text-ivory"
                >
                  Waze
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative mt-14 sm:mt-20">
            <Image
              src={asset("/images/palace.jpg")}
              alt={`Illustration du ${wedding.venue.name}`}
              width={616}
              height={234}
              className="mask-fade-x mx-auto w-full max-w-4xl mix-blend-multiply"
            />
          </div>
        </section>

        {/* ───────────── Faire-part ───────────── */}
        <section
          id="faire-part"
          className="relative scroll-mt-16 overflow-hidden bg-cream px-5 py-20 sm:px-6 sm:py-28"
        >
          <div className="absolute inset-0 bg-paper" aria-hidden />
          <div className="relative mx-auto max-w-5xl">
            <SectionTitle
              eyebrow="À garder précieusement"
              title="Le Faire-part"
            />
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
              <Reveal className="relative mx-auto w-[78%] max-w-sm sm:w-full">
                <div
                  className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-sm bg-sand"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 -translate-x-3 translate-y-2 -rotate-2 rounded-sm border border-gold/30 bg-ivory"
                  aria-hidden
                />
                <TiltCard>
                  <Image
                    src={asset("/images/faire-part-issam-yousra.jpg")}
                    alt={`Faire-part du mariage de ${wedding.bride} et ${wedding.groom}`}
                    width={1024}
                    height={1536}
                    className="relative rounded-sm shadow-[0_40px_80px_-40px_rgba(74,53,33,0.8)]"
                  />
                </TiltCard>
              </Reveal>
              <Reveal delay={150} className="text-center lg:text-left">
                <p className="font-serif text-[1.35rem] leading-relaxed text-cocoa sm:text-2xl">
                  Conservez notre faire-part sur votre téléphone ou partagez-le
                  avec vos proches invités.
                </p>
                <p className="mt-4 font-serif text-lg text-cocoa-soft italic">
                  Chaque détail a été pensé avec amour, des roses ivoire aux
                  lanternes du palais.
                </p>
                <a
                  href={asset("/images/faire-part-issam-yousra.jpg")}
                  download="faire-part-yousra-issam.jpg"
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/60 px-7 py-3.5 font-display text-[0.7rem] tracking-[0.25em] text-gold-dark uppercase transition hover:bg-gold hover:text-ivory"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden
                  >
                    <path
                      d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Télécharger
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── Pied de page ───────────── */}
      <footer className="relative overflow-hidden bg-[#2d2014] px-5 pt-24 pb-32 text-center sm:px-6 sm:pt-28 md:pb-12">
        <div className="absolute inset-0 bg-zellige opacity-50" aria-hidden />
        <div
          className="arch-edge absolute inset-x-0 top-0 z-10 h-5 rotate-180 bg-cream"
          aria-hidden
        />
        <Petals count={10} />
        <GoldDust />
        <Reveal className="relative">
          <p className="mx-auto max-w-xl px-2 pb-2 font-script text-[2.4rem] leading-snug text-gold-foil sm:text-5xl">
            {wedding.closing}
          </p>
          <p
            lang="ar"
            dir="rtl"
            className="mt-10 font-arabic text-xl leading-loose text-gold-light sm:text-2xl"
          >
            بارك الله لكما وبارك عليكما وجمع بينكما في خير
          </p>
          <p className="mt-2 font-serif text-sand/70 italic">
            Qu’Allah vous bénisse et vous unisse dans le bien.
          </p>
          <div
            className="mt-14 flex items-center justify-center gap-3 text-gold"
            aria-hidden
          >
            <Branch className="h-6 w-20 -scale-x-100" />
            <span className="font-display text-3xl">{wedding.monogram}</span>
            <Branch className="h-6 w-20" />
          </div>
          <p className="mt-6 font-display text-[0.62rem] tracking-[0.3em] text-sand/60 uppercase sm:text-[0.7rem] sm:tracking-[0.4em]">
            {wedding.dayLabel} · 10 · {wedding.yearLabel} — {wedding.hashtag}
          </p>
        </Reveal>
      </footer>
    </>
  );
}
