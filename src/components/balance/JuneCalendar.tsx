import React, { useMemo } from "react";
import { JUNE_EVENTS, getEventsForDay, BalanceEvent } from "@/data/events";

type Props = {
  onSelectEvent: (event: BalanceEvent) => void;
};

// June 2026: June 1 2026 is a Monday
const MONTH = "June";
const YEAR = 2026;
const FIRST_DAY_WEEKDAY = 1;
const DAYS_IN_MONTH = 30;
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

export const JuneCalendar: React.FC<Props> = ({ onSelectEvent }) => {
  const cells = useMemo(() => {
    const arr: (number | null)[] = Array(FIRST_DAY_WEEKDAY).fill(null);
    for (let d = 1; d <= DAYS_IN_MONTH; d++) arr.push(d);
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, []);

  const handleDayClick = (day: number) => {
    const events = getEventsForDay(day);
    if (events.length >= 1) onSelectEvent(events[0]);
  };

  return (
    <div className="relative rounded-3xl bg-cream border-2 border-forest/15 shadow-soft p-5 sm:p-8 overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-peach/30 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-sage/30 blur-2xl pointer-events-none" />

      <div className="relative flex items-end justify-between mb-6 sm:mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-forest/70">special events · {MONTH}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink mt-1">{MONTH} <span className="text-terracotta">{YEAR}</span></h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-forest/70">
          <span className="inline-block w-3 h-3 rounded-full bg-terracotta shadow-[0_0_12px_hsl(var(--peach))]" />
          shimmering = event
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
        {WEEKDAYS.map((w, i) => (
          <div key={i} className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-forest/60 py-1">{w}</div>
        ))}
      </div>

      <div className="relative grid grid-cols-7 gap-1 sm:gap-2">
        {cells.map((day, i) => {
          if (day === null) return <div key={i} aria-hidden />;
          const events = getEventsForDay(day);
          const hasEvent = events.length > 0;
          const isPast = hasEvent && events.every((e) => e.status === "past");
          const accent =
            events[0]?.accent === "terracotta" ? "from-terracotta to-peach" :
            events[0]?.accent === "sage" ? "from-sage to-forest" :
            "from-peach to-terracotta";

          return (
            <button
              key={i}
              onClick={() => hasEvent && handleDayClick(day)}
              disabled={!hasEvent}
              className={`
                relative aspect-square rounded-xl sm:rounded-2xl flex flex-col items-center justify-center
                transition-all duration-300
                ${hasEvent && !isPast
                  ? `shimmer-day bg-gradient-to-br ${accent} text-cream font-semibold cursor-pointer hover:scale-[1.06] hover:-translate-y-0.5 hover:z-10`
                  : isPast
                    ? "bg-muted text-ink/50 cursor-pointer hover:bg-muted/80 border border-dashed border-forest/20"
                    : "bg-cream text-ink/70 hover:bg-muted"}
              `}
              aria-label={hasEvent ? `${day} June — ${events.map(e => e.title).join(", ")}` : `${day} June`}
            >
              <span className={`relative z-10 text-base sm:text-xl ${hasEvent ? "font-display" : ""}`}>{day}</span>
              {hasEvent && (
                <span className={`relative z-10 mt-0.5 text-[8px] sm:text-[10px] uppercase tracking-wider ${isPast ? "" : "opacity-90"}`}>
                  {isPast ? "past" : events[0].slot}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative mt-8 pt-6 border-t border-forest/10 space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-forest/70 mb-3">Browse the month</p>
        {JUNE_EVENTS.map((e) => {
          const past = e.status === "past";
          return (
            <button
              key={e.id}
              onClick={() => onSelectEvent(e)}
              className={`group w-full flex items-center gap-4 text-left rounded-2xl p-3 sm:p-4 transition-colors ${past ? "bg-muted/60 hover:bg-muted" : "bg-card hover:bg-peach/15"}`}
            >
              <div className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shadow-soft ${past ? "grayscale opacity-70" : ""}`}>
                <img src={e.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs text-forest/70">
                  <span className="font-mono font-semibold text-terracotta">{String(e.day).padStart(2,"0")} JUN</span>
                  <span>·</span>
                  <span>{e.slot === "AM" ? "Morning" : e.slot === "PM" ? "Evening" : "All day"}</span>
                  {past && <span className="ml-1 rounded-full bg-ink/10 text-ink/70 px-2 py-0.5 text-[10px] uppercase tracking-wider">past</span>}
                  {e.featured && <span className="ml-1 rounded-full bg-terracotta text-cream px-2 py-0.5 text-[10px] uppercase tracking-wider">featured</span>}
                </div>
                <h3 className="font-display text-lg sm:text-xl text-ink truncate">{e.title}</h3>
                <p className="text-xs sm:text-sm text-forest/70 truncate">{e.tagline}</p>
              </div>
              <span className="hidden sm:inline-flex shrink-0 items-center text-terracotta font-medium text-sm group-hover:translate-x-1 transition-transform">
                Details →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
