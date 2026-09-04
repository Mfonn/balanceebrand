import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventModal } from "@/components/balance/EventModal";
import { Reveal } from "@/components/balance/Reveal";
import { BalanceEvent, UPCOMING_EVENTS, PAST_EVENTS } from "@/data/events";

const EventsPage: React.FC = () => {
  const [selected, setSelected] = useState<BalanceEvent | null>(null);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>Events — Retreats, Soirées & Gatherings | balance_ee Abuja</title>
        <meta
          name="description"
          content="Special events at balance_ee Abuja — retreats, soirées and gatherings, plus a look back at the ones already held."
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
