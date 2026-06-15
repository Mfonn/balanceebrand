export type ClassSlot = {
  id: string;
  start: string;   // "06:00"
  end: string;     // "07:00"
  label: string;   // "6 – 7 AM"
  period: "morning" | "midday" | "evening";
};

export const CLASS_SLOTS: ClassSlot[] = [
  { id: "s06", start: "06:00", end: "07:00", label: "6 – 7 AM", period: "morning" },
  { id: "s07", start: "07:00", end: "08:00", label: "7 – 8 AM", period: "morning" },
  { id: "s08", start: "08:00", end: "09:00", label: "8 – 9 AM", period: "morning" },
  { id: "s09", start: "09:00", end: "10:00", label: "9 – 10 AM", period: "morning" },
  { id: "s10", start: "10:00", end: "11:00", label: "10 – 11 AM", period: "midday" },
  { id: "s11", start: "11:00", end: "12:00", label: "11 – 12 PM", period: "midday" },
  { id: "s16", start: "16:00", end: "17:00", label: "4 – 5 PM", period: "evening" },
  { id: "s17", start: "17:00", end: "18:00", label: "5 – 6 PM", period: "evening" },
  { id: "s18", start: "18:00", end: "19:00", label: "6 – 7 PM", period: "evening" },
];

export const CLASS_RULES = {
  duration: "50 minutes",
  day: "Saturdays only",
  cutoffHours: 24,
  perk: "Complimentary cup of healthy herbal tea",
};

/** Next N Saturdays (yyyy-mm-dd) at least `minHoursAhead` away. */
export function nextSaturdays(count = 6, minHoursAhead = 24): { iso: string; pretty: string }[] {
  const out: { iso: string; pretty: string }[] = [];
  const now = new Date();
  const cutoff = new Date(now.getTime() + minHoursAhead * 3600 * 1000);
  // start scanning from today
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  while (out.length < count) {
    if (cursor.getDay() === 6 && cursor >= cutoff) {
      const iso = cursor.toISOString().slice(0, 10);
      const pretty = cursor.toLocaleDateString(undefined, {
        weekday: "long", month: "long", day: "numeric",
      });
      out.push({ iso, pretty });
    }
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getTime() - now.getTime() > 1000 * 60 * 60 * 24 * 200) break;
  }
  return out;
}
