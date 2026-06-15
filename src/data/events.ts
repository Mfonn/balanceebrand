import bookClubImg from "@/assets/event-book-club.jpg";
import soireeImg from "@/assets/event-fitness-soiree.jpg";

export type BalanceEvent = {
  id: string;
  day: number;            // day of June 2026
  slot: "AM" | "PM" | "ALLDAY";
  title: string;
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
  selarUrl: string;
  collab?: string;
  accent: "terracotta" | "sage" | "peach";
  featured?: boolean;
  status?: "upcoming" | "past";
  recapNote?: string;
};

export const JUNE_EVENTS: BalanceEvent[] = [
  {
    id: "book-club",
    day: 13,
    slot: "PM",
    title: "Book Club + Tea Brewing",
    tagline: "Good books · Good company · Gentle yoga",
    date: "Saturday, June 13, 2026",
    time: "Evening · 4:00 PM",
    location: "Lagos",
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
    day: 20,
    slot: "PM",
    title: "Fitness Soirée",
    tagline: "An evening of movement & community",
    date: "Saturday, June 20, 2026",
    time: "Doors at 4:00 PM",
    location: "Lagos · waterfront venue",
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
    featured: true,
    status: "upcoming",
  },
];

export const getEventsForDay = (day: number) => JUNE_EVENTS.filter((e) => e.day === day);
export const EVENT_DAYS = Array.from(new Set(JUNE_EVENTS.map((e) => e.day)));
export const FEATURED_EVENT = JUNE_EVENTS.find((e) => e.featured)!;
export const UPCOMING_EVENTS = JUNE_EVENTS.filter((e) => e.status !== "past");

export const SOCIAL = {
  instagram: "https://www.instagram.com/balance_ee",
  handle: "@balance_ee",
  // Replace with your real WhatsApp number (international format, no +)
  whatsapp: "2348000000000",
};
