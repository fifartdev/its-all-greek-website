export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  duration: string;
  category: string;
  highlights: string[];
  includes: string[];
  image: string;
  imageAlt: string;
  viatorUrl: string;
  // Replace with actual Bokun booking URLs
  bokunUrl: string;
  featured: boolean;
  badge?: string;
}

export const tours: Tour[] = [
  {
    id: "acropolis-half-day",
    slug: "athens-sightseeing-skip-the-line-acropolis-half-day-highlights",
    // Title taken from Viator URL slug — verify H1 in titleWrapper on: d496-5561568P9
    title: "Athens Sightseeing and Skip-the-Line Acropolis Half-Day Highlights",
    shortTitle: "Acropolis Half-Day",
    tagline: "Skip the queues. Embrace the myths.",
    description:
      "Ascend to the crown of Athens and witness the iconic Parthenon without the wait. Your expert guide brings 2,500 years of history to life as you explore the world's most celebrated ancient citadel, the Theatre of Dionysus, and the breathtaking Acropolis Museum.",
    duration: "4 hours",
    category: "Half-Day Tour",
    highlights: [
      "Skip-the-line access to the Acropolis",
      "Parthenon, Erechtheion & Propylaea",
      "Panoramic views over Athens",
      "Acropolis Museum visit",
      "Theatre of Dionysus",
      "Expert licensed guide",
    ],
    includes: [
      "Skip-the-line Acropolis tickets",
      "Professional licensed guide",
      "Acropolis Museum entry",
      "Small group (max 15 people)",
    ],
    image:
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "The Parthenon atop the Acropolis of Athens",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Athens-Sightseeing-and-Skip-the-Line-Acropolis-Half-Day-Highlights/d496-5561568P9",
    bokunUrl: "#book", // Replace with actual Bokun URL
    featured: true,
    badge: "Best Seller",
  },
  {
    id: "athens-walking-tour",
    slug: "athens-walking-tour",
    // NOTE: Viator slug for d496-5561568P7 is "Bokun-Free-Product-January-2026" which is a
    // Bokun placeholder — actual title from H1 in titleWrapper is unknown (Viator blocks scraping).
    // Please update this title once you retrieve it from the Viator page directly.
    title: "Athens Walking Tour",
    shortTitle: "Athens Walking Tour",
    tagline: "The perfect Athens introduction.",
    description:
      "Begin your Athens adventure with our walking tour through the city's most iconic neighborhoods. From the bustling Monastiraki Square to the charming alleys of Plaka, your passionate local guide reveals hidden stories and insider secrets you won't find in any guidebook.",
    duration: "2.5 hours",
    category: "Walking Tour",
    highlights: [
      "Monastiraki Square & Flea Market",
      "Ancient Agora views",
      "Plaka — the oldest neighborhood",
      "Syntagma Square & Parliament",
      "Changing of the Guard ceremony",
      "Expert local guide",
    ],
    includes: [
      "Professional local guide",
      "Insider tips & recommendations",
      "Small group experience",
    ],
    image:
      "https://images.unsplash.com/photo-1561489401-fc2876ced162?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Colorful streets of Plaka neighborhood in Athens",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Bokun-Free-Product-January-2026/d496-5561568P7",
    bokunUrl: "#book", // Replace with actual Bokun URL
    featured: false,
    // No badge
  },
  {
    id: "athens-by-night",
    slug: "athens-by-night-enchanting-walking-tour-and-dinner-delights",
    // Title taken from Viator URL slug — verify H1 in titleWrapper on: d496-5561568P1
    title: "Athens by Night: Enchanting Walking Tour and Dinner Delights",
    shortTitle: "Athens by Night",
    tagline: "When the sun sets, Athens glows.",
    description:
      "Athens transforms after dark into a city of golden light and irresistible aromas. Join our enchanting evening walk through illuminated ancient sites, vibrant taverna-lined streets, and then sit down to a curated dinner of authentic Greek cuisine, paired with local wine.",
    duration: "4.5 hours",
    category: "Evening Tour",
    highlights: [
      "Illuminated Acropolis views at dusk",
      "Monastiraki & Thissio promenade",
      "Anafiotika — Athens' secret village",
      "Traditional Greek dinner included",
      "Local wine & ouzo tasting",
      "Sunset from Areopagus Hill",
    ],
    includes: [
      "Evening walking tour with guide",
      "Traditional 3-course Greek dinner",
      "Welcome drink (wine/ouzo/soft drink)",
      "Restaurant reservation",
    ],
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Athens illuminated at night with the Acropolis glowing",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Athens-by-Night-Enchanting-Walking-Tour-and-Dinner-Delights/d496-5561568P1",
    bokunUrl: "#book", // Replace with actual Bokun URL
    featured: true,
    badge: "With Dinner",
  },
  {
    id: "cape-sounion",
    slug: "temple-of-poseidon-and-cape-sounion-half-day-tour-from-athens",
    // Title taken from Viator URL slug — verify H1 in titleWrapper on: d496-5561568P6
    title: "Temple of Poseidon and Cape Sounion Half-Day Tour from Athens",
    shortTitle: "Cape Sounion",
    tagline: "Where the gods kissed the sea.",
    description:
      "Escape Athens along the breathtaking Athenian Riviera to the wind-swept cape where the ancient Temple of Poseidon stands sentinel over the Aegean. Dramatic coastal cliffs, turquoise waters, and 2,400-year-old columns frame one of Greece's most spectacular sunsets.",
    duration: "5 hours",
    category: "Half-Day Excursion",
    highlights: [
      "Temple of Poseidon (440 BC)",
      "Scenic coastal road along the Riviera",
      "Lord Byron's graffiti on the temple",
      "Swimming stop at a coastal bay",
      "Panoramic Aegean Sea views",
      "Expert guide narration en route",
    ],
    includes: [
      "Comfortable air-conditioned transport",
      "Temple of Poseidon entry tickets",
      "Expert licensed guide",
      "Hotel pick-up & drop-off",
    ],
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Temple of Poseidon at Cape Sounion overlooking the Aegean Sea",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Temple-of-Poseidon-and-Cape-Sounion-Half-Day-Tour-from-Athens/d496-5561568P6",
    bokunUrl: "#book", // Replace with actual Bokun URL
    featured: true,
  },
];

export const transferLocations = [
  "Athens International Airport",
  "Port of Piraeus",
  "Cruiseship Departures (Piraeus)",
  "Alimos Marina",
  "Hotel — City Centre",
  "Hotel — Athenian Riviera",
  "Hotel — Piraeus",
  "Hotel — Suburbs",
];
