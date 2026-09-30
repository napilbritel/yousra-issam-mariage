import type { Metadata, Viewport } from "next";
import {
  Amiri,
  Cinzel,
  Cormorant_Garamond,
  Great_Vibes,
} from "next/font/google";
import { wedding } from "@/lib/wedding";
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

const title = `${wedding.bride} & ${wedding.groom} — ${wedding.dayLabel} ${wedding.monthLabel} ${wedding.yearLabel}`;
const description = `${wedding.intro} ${wedding.venue.name}, ${wedding.timeLabel}.`;

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
    images: [{ url: "/images/invitation.jpg", width: 1024, height: 1536 }],
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
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
