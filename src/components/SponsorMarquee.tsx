import React from "react";
import { SPONSORS } from "@/data/events";

type Props = {
  label?: string;
  reverse?: boolean;
};

/**
 * Continuous horizontal marquee of sponsor cards.
 * Each card links out to the sponsor's website in a new tab.
 */
export const SponsorMarquee: React.FC<Props> = ({ label = "Sponsors", reverse = false }) => {
  const items = [...SPONSORS, ...SPONSORS, ...SPONSORS];
  return (
    <div className="relative w-full overflow-hidden bg-ink text-cream border-y border-gilt/25 py-4">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gilt/80 bg-ink pr-3">
          {label}
        </span>
      </div>
      <div
        className={`flex gap-3 sm:gap-4 whitespace-nowrap will-change-transform ${
          reverse ? "animate-scroll-right" : "animate-scroll-left"
        }`}
      >
        {items.map((s, i) => (
          <a
            key={`${s.name}-${i}`}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 hover:bg-cream/10 px-5 py-2.5 transition-colors"
          >
            <span className="font-display text-lg text-cream group-hover:text-gilt transition-colors">
              {s.name}
            </span>
            <span className="text-gilt/60">·</span>
            <span className="text-xs text-cream/70 normal-case tracking-normal max-w-[420px] truncate">
              {s.blurb}
            </span>
            <span className="text-gilt/80 text-xs">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
};
