// Toutes les informations du mariage sont centralisées ici.
// Modifiez ce fichier pour mettre à jour le site.

export const wedding = {
  bride: "Yousra",
  groom: "Issam",
  monogram: "Y&I",
  hashtag: "#IssamEtYousra",

  // Heure du Maroc (UTC+1)
  dateISO: "2026-10-11T20:00:00+01:00",
  dateLabel: "Dimanche 11 Octobre 2026",
  dayLabel: "11",
  monthLabel: "Octobre",
  yearLabel: "2026",
  timeLabel: "20h00",

  venue: {
    name: "Palais Alyakout",
    address: "Oulad Hammou, 30070 — Maroc",
    // Position exacte de la salle (épingle Apple Plans fournie par les mariés)
    lat: 33.944801,
    lng: -4.990668,
    appleMapsUrl:
      "https://maps.apple.com/place?address=30070%20Oulad%20Hammou,%20Morocco&auid=6279272854765515406&coordinate=33.944801,-4.990668&lsp=6489&name=30070%20Oulad%20Hammou&map=explore",
  },

  intro:
    "C’est avec une immense joie et beaucoup d’émotion que nous vous invitons à célébrer notre mariage.",
  honour:
    "Votre présence sera un honneur et une grande source de bonheur pour nous.",
  closing: "Nous avons hâte de partager avec vous ce merveilleux moment.",

  // Déroulé de la soirée — « time » est facultatif
  programme: [
    {
      title: "Accueil des invités",
      time: "Dès 20h00",
      text: "Nous vous accueillons avec joie au Palais Alyakout pour ouvrir cette nuit de fête.",
      icon: "welcome",
    },
    {
      title: "Entrée des mariés",
      text: "L’arrivée tant attendue d’Issam & Yousra, portés par la joie et les youyous.",
      icon: "entrance",
    },
    {
      title: "Célébration",
      text: "Musique, danses et traditions pour célébrer ensemble notre union.",
      icon: "celebration",
    },
    {
      title: "Dîner",
      text: "Un dîner de fête partagé avec ceux que nous aimons.",
      icon: "dinner",
    },
    {
      title: "Gâteau & clôture",
      text: "Le gâteau des mariés et les derniers instants d’une nuit inoubliable.",
      icon: "cake",
    },
  ],
} as const;

export type ProgrammeStep = {
  title: string;
  time?: string;
  text: string;
  icon: "welcome" | "entrance" | "celebration" | "dinner" | "cake";
};

const coords = `${wedding.venue.lat},${wedding.venue.lng}`;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${coords}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${coords}&z=16&output=embed`;

export const wazeUrl = `https://waze.com/ul?ll=${coords}&navigate=yes`;

export const appleMapsUrl = wedding.venue.appleMapsUrl;

/** Chemin d'un fichier de /public, préfixé du basePath (GitHub Pages) */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
