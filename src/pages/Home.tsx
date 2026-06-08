import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Users, Flower2, ExternalLink, Instagram } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mark } from "@/components/balance/Mark";
import { FloatingDecor } from "@/components/balance/FloatingDecor";
import { JuneCalendar } from "@/components/balance/JuneCalendar";
import { EventModal } from "@/components/balance/EventModal";
import { JUNE_EVENTS, BalanceEvent, SOCIAL, SCRIPTURE } from "@/data/events";
import heroImg from "@/assets/hero-balance.jpg";

const MARQUEE = [
  "movement", "mind", "community", "joy", "soft strength", "deep breath",
  "tea", "books", "yoga", "pilates", "walking", "presence",
];

const Home: React.FC = () => {
  const [selected, setSelected] = useState<BalanceEvent | null>(null);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>balance_ee — movement, mind & community</title>
        <meta name="description" content="A joyful wellness community for movement, mind and gentle living. Yoga, pilates, book club, fitness soirées — find your balance." />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />

      {/* HERO — bento grid */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
        <FloatingDecor />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
            {/* Big intro tile */}
            <div className="col-span-12 lg:col-span-8 rounded-3xl gradient-warm p-6 sm:p-10 md:p-14 text-cream relative overflow-hidden min-h-[360px] md:min-h-[480px] flex flex-col justify-end shadow-soft">
              <Mark className="absolute top-6 right-6 w-20 h-20 md:w-28 md:h-28 animate-wiggle" />
              <p className="text-xs uppercase tracking-[0.3em] opacity-90 mb-3">welcome to balance_ee</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
                Soft strength. <br />
                <span className="italic text-cream/95">Loud joy.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base md:text-lg text-cream/95 leading-relaxed">
                A community for movement, mind & gentle living. Step in — flowers, mats, and tea included.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <Link to="/calendar" className="inline-flex items-center gap-2 rounded-full bg-cream text-terracotta font-medium px-5 py-3 hover:bg-ink hover:text-cream transition-colors">
                  See June events <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/booking" className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-5 py-3 hover:bg-cream hover:text-terracotta transition-colors">
                  How to book a class
                </Link>
              </div>
            </div>

            {/* Hero image tile */}
            <div className="col-span-12 sm:col-span-7 lg:col-span-4 rounded-3xl overflow-hidden relative min-h-[280px] md:min-h-[480px] shadow-soft group">
              <img src={heroImg} alt="A joyful woman moving in a sunlit plant-filled studio" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" fetchPriority="high" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-cream/90 backdrop-blur px-4 py-3">
                <p className="text-[10px] uppercase tracking-wider text-forest/60">in motion</p>
                <p className="font-display text-xl text-ink">Move like you mean it.</p>
              </div>
            </div>

            {/* Mini tiles row */}
            <div className="col-span-6 sm:col-span-5 lg:col-span-3 rounded-3xl bg-sage text-cream p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft">
              <Flower2 className="w-8 h-8" />
              <div>
                <p className="font-display text-3xl">Movement</p>
                <p className="text-sm text-cream/85">yoga · pilates · strength · walks</p>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-3 rounded-3xl bg-peach text-ink p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft">
              <Sparkles className="w-8 h-8" />
              <div>
                <p className="font-display text-3xl">Mind</p>
                <p className="text-sm text-ink/75">journaling · stillness · clarity</p>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl bg-forest text-cream p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft">
              <Users className="w-8 h-8" />
              <div>
                <p className="font-display text-3xl">Community</p>
                <p className="text-sm text-cream/85">tea, books & soft conversations</p>
              </div>
            </div>

            <a
              href={SOCIAL.instagram}
              target="_blank" rel="noreferrer noopener"
              className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl bg-ink text-cream p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft group hover:bg-terracotta transition-colors"
            >
              <Instagram className="w-8 h-8" />
              <div>
                <p className="font-display text-3xl">@balance_ee</p>
                <p className="text-sm text-cream/85 group-hover:text-cream">follow along · DM to join</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-ink text-cream py-5 overflow-hidden border-y border-forest/30">
        <div className="flex gap-12 animate-scroll-left whitespace-nowrap font-display text-3xl md:text-5xl">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              {w}
              <span className="text-terracotta">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Calendar */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">this month</p>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink mt-3">A shimmering June ✦</h2>
            <p className="mt-4 text-ink/70 max-w-xl mx-auto">Three gatherings, two glowing dates. Tap a date or an event to dive in.</p>
          </div>
          <JuneCalendar onSelectEvent={setSelected} />
        </div>
      </section>

      {/* Why move */}
      <section className="relative px-4 md:px-8 py-16 md:py-24 bg-sage/15 overflow-hidden">
        <FloatingDecor className="opacity-50" />
        <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-forest">why move?</p>
            <h2 className="font-display text-5xl md:text-6xl text-ink mt-3 leading-[1.05] text-balance">
              Movement is a love letter to your body.
            </h2>
            <p className="mt-5 text-ink/80 text-lg leading-relaxed">
              Pilates strengthens your core. Yoga softens your nervous system. Walking clears your head. Lifting reshapes your story.
              You don't need to do all of it — you just need to start, gently, today.
            </p>
            <Link to="/learn" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 font-medium hover:bg-terracotta transition-colors">
              Read the Learn library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { t: "Core", d: "your central strength" },
              { t: "Glutes", d: "fire up the engine" },
              { t: "Feet", d: "the unsung foundation" },
              { t: "Posture", d: "stand like you mean it" },
              { t: "Walking", d: "the daily reset" },
              { t: "Lifting", d: "soft body, strong bones" },
            ].map((c, i) => (
              <div key={c.t} className={`rounded-2xl p-5 ${i % 3 === 0 ? "bg-terracotta text-cream" : i % 3 === 1 ? "bg-peach text-ink" : "bg-forest text-cream"} shadow-soft`}>
                <p className="font-display text-2xl">{c.t}</p>
                <p className="text-sm opacity-90 mt-1">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture moment */}
      <section className="px-4 md:px-8 py-16 md:py-24 text-center">
        <Heart className="w-8 h-8 text-terracotta mx-auto mb-4" />
        <p className="font-display text-3xl md:text-5xl text-ink max-w-3xl mx-auto italic leading-tight">
          "{SCRIPTURE.text}"
        </p>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-forest/70">{SCRIPTURE.ref}</p>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl gradient-sunrise p-8 sm:p-14 text-center text-cream relative overflow-hidden shadow-glow">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-cream blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-forest blur-3xl" />
          </div>
          <p className="relative text-xs uppercase tracking-[0.3em] mb-3">ready when you are</p>
          <h2 className="relative font-display text-4xl sm:text-6xl">Come find your balance.</h2>
          <p className="relative mt-4 max-w-xl mx-auto opacity-95">DM us, book a session, show up — that's it.</p>
          <div className="relative flex flex-wrap justify-center gap-3 mt-7">
            <Link to="/calendar" className="rounded-full bg-cream text-terracotta font-medium px-6 py-3 hover:bg-ink hover:text-cream transition-colors">
              June events
            </Link>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors">
              <Instagram className="w-4 h-4" /> DM @balance_ee
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Home;
