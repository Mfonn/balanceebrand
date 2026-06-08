import React, { useEffect } from "react";
import { X, MapPin, Clock, Sparkles, ExternalLink, Instagram } from "lucide-react";
import { BalanceEvent, SOCIAL } from "@/data/events";

type Props = {
  event: BalanceEvent | null;
  onClose: () => void;
};

export const EventModal: React.FC<Props> = ({ event, onClose }) => {
  useEffect(() => {
    if (!event) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-[3000] flex items-end sm:items-center justify-center bg-ink/60 backdrop-blur-sm animate-fade-in p-0 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-title"
    >
      <div
        className="relative w-full sm:max-w-3xl max-h-[92vh] bg-cream rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-glow flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover animate-[zoom-in_1.2s_ease-out_forwards]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center hover:bg-cream transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-ink" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-cream">
            <p className="text-[11px] uppercase tracking-[0.25em] opacity-90">{event.date} · {event.time}</p>
            <h2 id="event-title" className="font-display text-3xl sm:text-4xl leading-tight mt-1">{event.title}</h2>
            <p className="text-sm opacity-90 mt-1">{event.tagline}</p>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 flex-1">
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/15 text-forest px-3 py-1">
              <MapPin className="w-3.5 h-3.5" /> {event.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-peach/25 text-ink px-3 py-1">
              <Clock className="w-3.5 h-3.5" /> {event.time}
            </span>
            {event.collab && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta/15 text-terracotta px-3 py-1 font-medium">
                {event.collab}
              </span>
            )}
          </div>

          <div>
            <h3 className="font-display text-xl text-ink mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-terracotta" /> The vibe
            </h3>
            <p className="text-ink/80">{event.vibe}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-xl text-ink mb-3">What's included</h3>
              <ul className="space-y-2">
                {event.included.map((i) => (
                  <li key={i} className="flex gap-2 text-ink/85">
                    <span className="text-terracotta mt-1">·</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            {event.addOns && (
              <div>
                <h3 className="font-display text-xl text-ink mb-3">Add-ons</h3>
                <ul className="space-y-2">
                  {event.addOns.map((i) => (
                    <li key={i} className="flex gap-2 text-ink/85">
                      <span className="text-sage mt-1">+</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {event.bring && (
            <div className="rounded-2xl bg-peach/20 p-4 sm:p-5">
              <h3 className="font-display text-lg text-ink mb-2">What to bring</h3>
              <ul className="flex flex-wrap gap-2">
                {event.bring.map((b) => (
                  <li key={b} className="text-sm bg-cream rounded-full px-3 py-1">{b}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="font-display text-xl text-ink mb-3">Tickets</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {event.tickets.map((t) => (
                <div key={t.label} className="rounded-2xl border-2 border-forest/10 p-4 bg-card">
                  <p className="text-xs uppercase tracking-wider text-forest/70">{t.label}</p>
                  <p className="font-display text-3xl text-terracotta mt-1">{t.price}</p>
                  {t.note && <p className="text-xs text-ink/60 mt-1">{t.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="sticky bottom-0 bg-cream border-t border-border px-5 sm:px-8 py-4 flex flex-col sm:flex-row gap-3">
          <a
            href={event.selarUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta text-cream font-medium py-3.5 px-6 hover:bg-ink transition-colors text-base"
          >
            Book on Selar <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink text-ink font-medium py-3.5 px-6 hover:bg-ink hover:text-cream transition-colors"
          >
            <Instagram className="w-4 h-4" /> DM to reserve
          </a>
        </div>
      </div>
    </div>
  );
};
