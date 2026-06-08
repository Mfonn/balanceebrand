import bookClubImg from "@/assets/event-book-club.jpg";
import soireeImg from "@/assets/event-fitness-soiree.jpg";
import golfImg from "@/assets/event-golf.jpg";

export type BalanceEvent = {
  id: string;
  day: number;            // day of June 2026
  slot: "AM" | "PM" | "ALLDAY";
  title: string;
  tagline: string;
  date: string;           // human readable
  time: string;
  location: string;
  image: string;
  vibe: string;
  included: string[];
  addOns?: string[];
  tickets: { label: string; price: string; note?: string }[];
  bring?: string[];
  selarUrl: string;       // booking link
  collab?: string;
  accent: "terracotta" | "sage" | "peach";
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
    location: "Lagos · venue revealed on booking",
    image: bookClubImg,
    vibe: "Cozy, conversational, restorative",
    included: [
      "Book swap & open discussion",
      "Healthy herbal tea (natural herbs)",
      "Gentle restorative yoga session",
      "Light bites",
    ],
    tickets: [{ label: "Access fee", price: "₦14,000" }],
    bring: ["Your favorite book", "An open heart", "Loose comfy outfit"],
    selarUrl: "https://selar.com/9647447724",
    collab: "@balance_ee × @707_treat",
    accent: "peach",
  },
  {
    id: "golf-meet",
    day: 20,
    slot: "AM",
    title: "Empowering Women on the Green",
    tagline: "Play · Network · Connect · Grow",
    date: "Saturday, June 20, 2026",
    time: "8:00 AM",
    location: "Top Golf Course · Lagos",
    image: golfImg,
    vibe: "Exclusive ladies meet & greet · all skill levels",
    included: [
      "Ladies meet & greet on the green",
      "Networking with fellow enthusiasts",
      "Coaching for all skill levels",
      "Limited to just 50 women",
    ],
    tickets: [{ label: "Registration", price: "₦50,000", note: "Exclusive" }],
    bring: ["Comfortable athletic wear", "Sun protection"],
    selarUrl: "https://selar.com/9647447724",
    collab: "@balance_ee × @topgolfcourse",
    accent: "sage",
  },
  {
    id: "fitness-soiree",
    day: 20,
    slot: "PM",
    title: "Fitness Soirée",
    tagline: "An evening of movement & community",
    date: "Saturday, June 20, 2026",
    time: "Evening · Doors at 4:00 PM",
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
      { label: "Early Bird", price: "₦15,000", note: "23rd – 13th" },
      { label: "Late", price: "₦25,000", note: "13th – 20th" },
    ],
    bring: ["Easy-to-move outfits", "Your own mat", "A friend"],
    selarUrl: "https://selar.com/g335o95n61",
    collab: "@balance_ee × @essence_rebirth",
    accent: "terracotta",
  },
];

export const getEventsForDay = (day: number) => JUNE_EVENTS.filter((e) => e.day === day);
export const EVENT_DAYS = Array.from(new Set(JUNE_EVENTS.map((e) => e.day)));

export const SCRIPTURE = {
  ref: "Psalm 46:5",
  text: "God is within her, she will not fail.",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/balance_ee",
  handle: "@balance_ee",
};
