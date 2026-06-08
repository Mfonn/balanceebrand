import React from "react";

/** Decorative floating SVG blobs/flowers for joyful pages. */
export const FloatingDecor: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
    <svg className="absolute top-10 left-[8%] w-16 h-16 text-peach/70 animate-float-y" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c1 3 3 4 6 4-3 1-4 3-4 6-1-3-3-4-6-4 3-1 4-3 4-6z"/>
    </svg>
    <svg className="absolute top-32 right-[12%] w-12 h-12 text-sage/80 animate-float-y" style={{ animationDelay: "1.2s" }} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
    <svg className="absolute bottom-24 left-[18%] w-10 h-10 text-terracotta/70 animate-float-y" style={{ animationDelay: "2.4s" }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c2 3 5 5 8 5-3 2-5 5-5 8-2-3-5-5-8-5 3-2 5-5 5-8z"/>
    </svg>
    <svg className="absolute bottom-10 right-[8%] w-14 h-14 text-forest/40 animate-float-y" style={{ animationDelay: "0.6s" }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0z"/>
      <circle cx="12" cy="12" r="2" fill="hsl(var(--cream))"/>
    </svg>
  </div>
);
