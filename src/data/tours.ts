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
      "https://dynamic-media.tacdn.com/media/photo-o/30/dd/45/b1/caption.jpg?w=700&h=500&s=1",
    imageAlt: "Temple of Poseidon at Cape Sounion overlooking the Aegean Sea",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Temple-of-Poseidon-and-Cape-Sounion-Half-Day-Tour-from-Athens/d496-5561568P6",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/38caf0b7-12dc-4023-82d3-5b6effe9f892/experience/1136955", // Replace with actual Bokun URL
    featured: true,
    badge: "Best Seller",
  },
  {
    id: "acropolis-half-day",
    slug: "athens-sightseeing-skip-the-line-acropolis-half-day-highlights",
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
      "https://dynamic-media.tacdn.com/media/photo-o/32/76/5c/b1/caption.jpg?w=700&h=500&s=1",
    imageAlt: "The Parthenon atop the Acropolis of Athens",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Athens-Sightseeing-and-Skip-the-Line-Acropolis-Half-Day-Highlights/d496-5561568P9",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/38caf0b7-12dc-4023-82d3-5b6effe9f892/experience/1162030",
    featured: true,
    badge: "New",
  },
  {
    id: "athens-by-night",
    slug: "athens-by-night-enchanting-walking-tour-and-dinner-delights",
    title: "Athens at Night Enchanting Walking Tour and Dinner Delights",
    shortTitle: "Athens at Night Enchanting Walking Tour",
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
      "https://dynamic-media.tacdn.com/media/photo-o/30/de/67/24/caption.jpg?w=700&h=500&s=1",
    imageAlt: "Athens illuminated at night with the Acropolis glowing",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Athens-by-Night-Enchanting-Walking-Tour-and-Dinner-Delights/d496-5561568P1",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/38caf0b7-12dc-4023-82d3-5b6effe9f892/experience/1136954", // Replace with actual Bokun URL
    featured: true,
    badge: "With Dinner",
  },
  {
    id: "athens-walking-tour",
    slug: "athens-walking-tour",
    // NOTE: Viator slug for d496-5561568P7 is "Bokun-Free-Product-January-2026" which is a
    // Bokun placeholder — actual title from H1 in titleWrapper is unknown (Viator blocks scraping).
    // Please update this title once you retrieve it from the Viator page directly.
    title: "Ancient Corinth and Acrocorinth Full-Day History Tour from Athens",
    shortTitle: "Ancient Corinth and Acrocorinth",
    tagline:
      "The perfect blend of history, mythology, and immersive experiences.",
    description:
      "What sets this tour apart is the perfect blend of history, mythology, and immersive experiences, all in one full day journey from Athens. You’ll explore Ancient Corinth, wander the impressive Acrocorinth fortress, marvel at the engineering wonder of the Corinth Canal, and visit the sacred Heraion of Perachora all while enjoying comfortable transport.",
    duration: "7-8 hours",
    category: "Full Day Trip",
    highlights: [
      "Ancient Corinth",
      "Acrocorinth",
      "Loutraki",
      "Heraion (Sanctuary of Hera) in Perachora",
    ],
    includes: [
      "Air-conditioned vehicle",
      "Entrance fee - Entrance fee",
      "Bottled of Water",
    ],
    image:
      "https://dynamic-media.tacdn.com/media/photo-o/32/44/56/c2/caption.jpg?w=700&h=500&s=1",
    imageAlt: "Acrocorinth",
    viatorUrl:
      "https://www.viator.com/tours/Athens/Bokun-Free-Product-January-2026/d496-5561568P7",
    bokunUrl:
      "https://widgets.bokun.io/online-sales/38caf0b7-12dc-4023-82d3-5b6effe9f892/experience/1147159", // Replace with actual Bokun URL
    featured: false,
    badge: "Full Day",
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
