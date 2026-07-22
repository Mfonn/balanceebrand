import bookClubImg from "@/assets/event-book-club.jpg";
import soireeImg from "@/assets/event-fitness-soiree.jpg";
import tentsAsset from "@/assets/tents-real.png.asset.json";
import oviacareAsset from "@/assets/oviacare-logo.svg.asset.json";
const tentsImg = tentsAsset.url;

export type BalanceEvent = {
  id: string;
  slug?: string;            // optional deep-link route under /event/:slug
  month: number;            // 1-12
  day: number;              // day of the month (start day for multi-day)
  endDay?: number;          // optional end-day for multi-day events
  endMonth?: number;        // optional end-month
  slot: "AM" | "PM" | "ALLDAY";
  title: string;
  subtitle?: string;
  tagline: string;
  date: string;
  time: string;
  location: string;
  image: string;
  vibe: string;
  included: string[];
  addOns?: string[];
  tickets: { label: string; price: string; note?: string }[];
  bring?: string[];
  selarUrl: string;         // primary ticket URL (Selar, Rekap, etc.)
  collab?: string;
  accent: "terracotta" | "sage" | "peach";
  featured?: boolean;
  status?: "upcoming" | "past";
  recapNote?: string;
};

export const EVENTS: BalanceEvent[] = [
  {
    id: "book-club",
    month: 6,
    day: 13,
    slot: "PM",
    title: "Book Club + Tea Brewing",
    tagline: "Good books · Good company · Gentle yoga",
    date: "Saturday, June 13, 2026",
    time: "Evening · 4:00 PM",
    location: "Abuja",
    image: bookClubImg,
    vibe: "Cozy, conversational, restorative",
    included: [
      "Book swap & open discussion",
      "Healthy herbal tea",
      "Gentle restorative yoga",
      "Light bites",
    ],
    tickets: [{ label: "Access fee", price: "₦14,000" }],
    bring: ["Your favourite book", "An open heart", "Loose comfy outfit"],
    selarUrl: "https://selar.com/9647447724",
    collab: "@balance_ee × @707_treat",
    accent: "peach",
    status: "past",
    recapNote: "This gathering happened on June 13. Recap coming soon — DM us for the next one.",
  },
  {
    id: "fitness-soiree",
    month: 6,
    day: 20,
    slot: "PM",
    title: "Fitness Soirée",
    tagline: "An evening of movement & community",
    date: "Saturday, June 20, 2026",
    time: "Doors at 4:00 PM",
    location: "Abuja · waterfront venue",
    image: soireeImg,
    vibe: "Shop + chill · wellness-first hospitality",
    included: [
      "Yoga + Pilates sessions",
      "Mimosas · Grill · Juice stand",
      "Talk: Stress & Inflammation",
      "Souvenirs · Mysterious raffle box",
    ],
    addOns: ["Kayaking", "Fishing", "Painting"],
    tickets: [
      { label: "Early Bird", price: "₦15,000", note: "until June 13" },
      { label: "Late", price: "₦25,000", note: "June 13 – 20" },
    ],
    bring: ["Easy-to-move outfit", "Your own mat", "A friend"],
    selarUrl: "https://selar.com/g335o95n61",
    collab: "@balance_ee × @essence_rebirth",
    accent: "terracotta",
    status: "past",
    recapNote: "The Soirée has wrapped. Recap reels coming to Instagram — DM us for the next one.",
  },
  {
    id: "tents-and-tonic",
    slug: "tents-and-tonic",
    month: 7,
    day: 31,
    endMonth: 8,
    endDay: 2,
    slot: "ALLDAY",
    title: "TenTS&Tonic",
    subtitle: "The Art of Being a Neighbor",
    tagline: "A wellness camping retreat · 31 July → 2 August 2026",
    date: "31 July – 2 August 2026",
    time: "Fri evening → Sun afternoon",
    location: "Abuja",
    image: tentsImg,
    vibe: "Rainy-season Abuja · medium difficulty · element: water",
    included: [
      "Waterproof bell tents & sleeping pads",
      "Friday evening movement session",
      "Saturday movement + bazaar",
      "Mindfulness: building a linear path to your heart's desire, from your highest self",
      "Skincare talk with Dr. Selma (Bioderma)",
      "Free on-site dermatology assessments",
      "Scenic views & third-space community",
    ],
    tickets: [
      { label: "Day Pass", price: "₦40,000", note: "Saturday only" },
      { label: "Full Weekend", price: "₦85,000", note: "Fri → Sun · tent & meals" },
    ],
    bring: ["Easy-to-move outfit", "Rain layer", "Reusable bottle", "An open mind"],
    selarUrl: "https://www.rekap.africa/e/tentstonic-l8d55",
    collab: "@balance_ee × African Dream Community",
    accent: "terracotta",
    featured: true,
    status: "upcoming",
  },
];

// Back-compat named exports
export const JUNE_EVENTS = EVENTS;
export const getEventsForDay = (day: number, month = 7) =>
  EVENTS.filter((e) => e.month === month && e.day === day);
export const EVENT_DAYS = Array.from(new Set(EVENTS.map((e) => e.day)));
export const FEATURED_EVENT = EVENTS.find((e) => e.featured)!;
export const UPCOMING_EVENTS = EVENTS.filter((e) => e.status !== "past");
export const PAST_EVENTS = EVENTS.filter((e) => e.status === "past");
export const getEventBySlug = (slug: string) =>
  EVENTS.find((e) => e.slug === slug || e.id === slug);

export const SOCIAL = {
  instagram: "https://www.instagram.com/balance_ee",
  handle: "@balance_ee",
  whatsapp: "2349112984781",
  whatsappUrl: "https://wa.me/2349112984781",
  phone: "+234 911 298 4781",
  phoneTel: "tel:+2349112984781",
};

export type Sponsor = { name: string; blurb: string; url: string; logo?: string };

export const SPONSORS: Sponsor[] = [
  {
    name: "Bioderma",
    blurb: "Biology at the service of dermatology — a dermatology-recommended skincare brand.",
    url: "https://www.instagram.com/biodermaafrica/",
  },
  {
    name: "Sheer Luxury Apartments & Suites",
    blurb: "Redefining the art of luxury — an ideal home-lodging business within reach.",
    url: "https://www.sheerluxuryabuja.com/",
  },
  {
    name: "OviaCare",
    blurb: "Specialist hair & scalp clinic — expert diagnosis, treatment and personalized care for all hair conditions.",
    url: "https://oviacare.org/",
    logo: oviacareAsset.url,
  },
];
