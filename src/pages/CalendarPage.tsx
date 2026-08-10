import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventModal } from "@/components/balance/EventModal";
import { Reveal } from "@/components/balance/Reveal";
import { BalanceEvent, FEATURED_EVENT, UPCOMING_EVENTS, PAST_EVENTS } from "@/data/events";

const EventsPage: React.FC = () => {
  const [selected, setSelected] = useState<BalanceEvent | null>(null);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>Events — TenTS&amp;Tonic | balance_ee Abuja</title>
        <meta
          name="description"
          content="What's on at balance_ee: TenTS&Tonic, a wellness camping retreat in Abuja on 31 July – 2 August 2026, plus past gatherings."
        />
        <link rel="canonical" href="/events" />
      </Helmet>
      <Navbar />

      <section className="relative pt-28 md:pt-36 pb-10 px-4 md:px-8 overflow-hidden">
        <div className="absolute -top-24 left-[10%] w-72 h-72 rounded-full bg-peach/20 blur-3xl pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">special events</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-3 leading-[1.0] text-balance">
              The ones worth <span className="italic">showing up</span> for.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-ink/75 max-w-2xl text-lg">
              Classes are the everyday. Events are the special ones — retreats, soirées, gatherings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured event hero band */}
      <section className="px-4 md:px-8 pb-12">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden relative shadow-glow">
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <img src={FEATURED_EVENT.image} alt={FEATURED_EVENT.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-cream">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-cream/95 text-terracotta px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">
                  <Sparkles className="w-3 h-3" /> next up · {FEATURED_EVENT.date}
                </span>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">{FEATURED_EVENT.title}</h2>
                <p className="mt-2 text-cream/90 max-w-xl">{FEATURED_EVENT.subtitle ?? FEATURED_EVENT.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/event/tents-and-tonic"
                    className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors"
                  >
                    Full event page <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={FEATURED_EVENT.selarUrl}
                    target="_blank" rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors"
                  >
                    Book on Rekap <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Upcoming list */}
      <section className="px-4 md:px-8 pb-14">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl mb-5">Upcoming</h2>
          </Reveal>
          <div className="space-y-3">
            {UPCOMING_EVENTS.map((e, i) => (
              <Reveal key={e.id} delay={i * 70}>
                <button
                  onClick={() => setSelected(e)}
                  className="w-full text-left group flex items-center gap-4 rounded-3xl bg-card border-2 border-forest/15 p-4 hover:border-terracotta hover:shadow-soft transition-all"
                >
                  <img src={e.image} alt="" className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-terracotta">{e.date}</p>
                    <p className="font-display text-2xl truncate">{e.title}</p>
                    <p className="text-sm text-ink/70 truncate">{e.tagline}</p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-terracotta font-medium group-hover:translate-x-1 transition-transform">
                    Details <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past list */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl mb-5 text-ink/70">Already happened</h2>
          </Reveal>
          <div className="space-y-3">
            {PAST_EVENTS.map((e, i) => (
              <Reveal key={e.id} delay={i * 70}>
                <button
                  onClick={() => setSelected(e)}
                  className="w-full text-left flex items-center gap-4 rounded-3xl bg-muted/60 border border-border p-4 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img src={e.image} alt="" className="w-16 h-16 rounded-2xl object-cover grayscale" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-ink/50">past · {e.date}</p>
                    <p className="font-display text-xl truncate">{e.title}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default EventsPage;
