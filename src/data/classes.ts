export type ClassSlot = {
  id: string;
  start: string;
  end: string;
  label: string;
  period: "morning" | "evening";
};

export const CLASS_SLOTS: ClassSlot[] = [
  { id: "s09", start: "09:00", end: "10:00", label: "9 – 10 AM", period: "morning" },
  { id: "s17", start: "17:00", end: "18:00", label: "5 – 6 PM", period: "evening" },
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
