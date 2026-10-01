import type { Metadata, Viewport } from "next";
import {
  Amiri,
  Cinzel,
  Cormorant_Garamond,
  Great_Vibes,
} from "next/font/google";
import { asset, wedding } from "@/lib/wedding";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

const title = `${wedding.groom} & ${wedding.bride} — ${wedding.dayLabel} ${wedding.monthLabel} ${wedding.yearLabel}`;
const description = `${wedding.intro} ${wedding.venue.name}, ${wedding.timeLabel}.`;

// Le navigateur peut garder une ancienne copie de la page (cache GitHub
// Pages de 10 min, navigateurs intégrés). Ce script compare la version
// affichée à celle en ligne et recharge si elle a changé.
const refreshIfOutdated = `(function () {
  var current = document.querySelector('meta[name="build-id"]');
  if (!current || !window.fetch) return;
  fetch(location.href.split("#")[0], { cache: "reload" })
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var m = html.match(/name="build-id" content="(\\d+)"/);
      if (!m || m[1] === current.content) return;
      var key = "reloaded-" + m[1];
      try { if (sessionStorage.getItem(key)) return; sessionStorage.setItem(key, "1"); } catch (e) {}
      location.reload();
    })
    .catch(function () {});
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: asset("/images/faire-part-issam-yousra.jpg"),
        width: 1024,
        height: 1536,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ec",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${greatVibes.variable} ${cormorant.variable} ${cinzel.variable} ${amiri.variable} antialiased`}
    >
      <head>
        <meta name="build-id" content={process.env.NEXT_PUBLIC_BUILD_ID} />
        {/* Si une version plus récente est en ligne, on recharge une fois */}
        <script dangerouslySetInnerHTML={{ __html: refreshIfOutdated }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
