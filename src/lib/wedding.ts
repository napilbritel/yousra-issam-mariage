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
    // Ajoutez la ville / l'adresse exacte pour une carte plus précise
    address: "",
    mapsQuery: "Palais Alyakout",
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

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [wedding.venue.mapsQuery, wedding.venue.address].filter(Boolean).join(" "),
)}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  [wedding.venue.mapsQuery, wedding.venue.address].filter(Boolean).join(" "),
)}&z=15&output=embed`;

export const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
  [wedding.venue.mapsQuery, wedding.venue.address].filter(Boolean).join(" "),
)}&navigate=yes`;

/** Chemin d'un fichier de /public, préfixé du basePath (GitHub Pages) */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
