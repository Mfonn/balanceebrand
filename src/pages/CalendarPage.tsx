import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JuneCalendar } from "@/components/balance/JuneCalendar";
import { EventModal } from "@/components/balance/EventModal";
import { Reveal } from "@/components/balance/Reveal";
import { BalanceEvent, FEATURED_EVENT } from "@/data/events";

const CalendarPage: React.FC = () => {
  const [selected, setSelected] = useState<BalanceEvent | null>(null);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>June Events — balance_ee</title>
        <meta name="description" content="What's on at balance_ee this June: the Fitness Soirée headline event on June 20. Tap a glowing date to book on Selar." />
        <link rel="canonical" href="/calendar" />
      </Helmet>
      <Navbar />

      <section className="relative pt-28 md:pt-36 pb-10 px-4 md:px-8 overflow-hidden">
        <div className="absolute -top-24 left-[10%] w-72 h-72 rounded-full bg-peach/30 blur-3xl pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">special events</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-3 leading-[1.0] text-balance">
              June, gently <span className="italic">glowing.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-ink/75 max-w-2xl text-lg">
              Classes happen every Saturday. Events are the special ones. Tap a glowing date to see what's on.
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
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-cream">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-cream/95 text-terracotta px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">
                  <Sparkles className="w-3 h-3" /> featured · {FEATURED_EVENT.date}
                </span>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">{FEATURED_EVENT.title}</h2>
                <p className="mt-2 text-cream/90 max-w-xl">{FEATURED_EVENT.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={FEATURED_EVENT.selarUrl}
                    target="_blank" rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors"
                  >
                    Book on Selar <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelected(FEATURED_EVENT)}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors"
                  >
                    Full details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <JuneCalendar onSelectEvent={setSelected} />
          </div>
        </Reveal>
      </section>

      <Footer />
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default CalendarPage;
