// Toutes les informations du mariage sont centralisées ici.
// Modifiez ce fichier pour mettre à jour le site.

export const wedding = {
  bride: "Yousra",
  groom: "Issam",
  monogram: "Y&I",
  hashtag: "#YousraEtIssam",

  // Heure du Maroc (UTC+1)
  dateISO: "2026-10-11T21:00:00+01:00",
  dateLabel: "Dimanche 11 Octobre 2026",
  dayLabel: "11",
  monthLabel: "Octobre",
  yearLabel: "2026",
  timeLabel: "21h00",

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
} as const;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [wedding.venue.mapsQuery, wedding.venue.address].filter(Boolean).join(" "),
)}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  [wedding.venue.mapsQuery, wedding.venue.address].filter(Boolean).join(" "),
)}&z=15&output=embed`;

export const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
  [wedding.venue.mapsQuery, wedding.venue.address].filter(Boolean).join(" "),
)}&navigate=yes`;
