import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Waves, Instagram, Bot, Tent, ExternalLink, MessageCircle, CalendarDays } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventModal } from "@/components/balance/EventModal";
import { Reveal } from "@/components/balance/Reveal";
import { BalanceEvent, SOCIAL, FEATURED_EVENT, WA_CUSTOM_CLASS, WA_DAILY_CLASS } from "@/data/events";


const MARQUEE = [
  "move", "breathe", "gather", "camp", "soft strength", "deep breath",
  "tea", "books", "yoga", "pilates", "tents", "presence",
];

const useCountdown = (target: Date) => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 60);
    return () => clearInterval(id);
  }, []);
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  return { days, hours, past: ms === 0 };
};

const Home: React.FC = () => {
  const [selected, setSelected] = useState<BalanceEvent | null>(null);

  const featuredDate = useMemo(() => new Date("2026-07-31T16:00:00+01:00"), []);
  const { days, hours } = useCountdown(featuredDate);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>balance_ee — Abuja Yoga, Pilates & Wellness Retreats</title>
        <meta name="description" content="Daily yoga and pilates classes in Abuja, a specialized programme for injury and postpartum recovery, wellness retreats, and an experimental wellness AI." />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />


      {/* HERO — bento grid */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-peach/30 blur-3xl pointer-events-none animate-float-y" aria-hidden />
        <div className="absolute top-40 -right-24 w-[26rem] h-[26rem] rounded-full bg-sage/25 blur-3xl pointer-events-none animate-float-y" style={{ animationDelay: "1.6s" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
            {/* Big intro tile — full width */}
            <Reveal as="div" className="col-span-12 rounded-3xl gradient-warm p-8 sm:p-12 md:p-16 text-cream relative overflow-hidden min-h-[420px] md:min-h-[480px] flex flex-col justify-end shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.35em] opacity-90 mb-4">a wellness community · abuja</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-4xl">
                Move like you <span className="italic text-cream/95">mean it.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-cream/95 leading-relaxed">
                Daily classes, a specialized programme, and events worth clearing the weekend for.
                Chat on WhatsApp to schedule a custom class or join our daily classes.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_DAILY_CLASS}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-terracotta font-medium px-6 py-3.5 hover:bg-ink hover:text-cream transition-colors"
                >
                  Join daily classes <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={WA_CUSTOM_CLASS}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3.5 hover:bg-cream hover:text-terracotta transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Custom-schedule a class
                </a>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-ink/20 backdrop-blur border-2 border-cream/40 text-cream font-medium px-6 py-3.5 hover:bg-ink/40 transition-colors">
                  Services
                </Link>
              </div>

            </Reveal>

            {/* CLASSES tile */}
            <Reveal as="div" delay={80} className="col-span-12 sm:col-span-6 lg:col-span-5 rounded-3xl bg-ink text-cream p-6 sm:p-8 min-h-[220px] shadow-soft relative overflow-hidden group">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-terracotta/40 blur-3xl group-hover:bg-terracotta/60 transition-colors" />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-peach">always on</p>
                  <p className="font-display text-4xl mt-2">Daily Classes</p>
                </div>
                <CalendarDays className="w-7 h-7 text-peach" />
              </div>
              <p className="relative mt-3 text-cream/85 text-sm">
                Yoga, pilates and mobility, daily. Join the group, or custom-schedule around your date,
                location, goals, limitations and difficulty level.
              </p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                <a
                  href={WA_DAILY_CLASS}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-5 py-2.5 hover:bg-terracotta hover:text-cream transition-colors"
                >
                  Join <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={WA_CUSTOM_CLASS}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream font-medium px-5 py-2.5 hover:bg-cream/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Custom schedule
                </a>
              </div>
            </Reveal>


            {/* WELLNESS AI tile */}
            <Reveal as="div" delay={140} className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-3xl bg-sage text-cream p-6 sm:p-8 min-h-[220px] shadow-soft relative overflow-hidden group">
              <Bot className="w-8 h-8" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream/80 mt-2">experimental · ai chatbot</p>
              <p className="font-display text-4xl mt-1">Wellness AI</p>
              <p className="mt-2 text-cream/90 text-sm">An experimental bot that drafts workout plans &amp; wellness practices. For the tinkerers.</p>

              <Link to="/wellness-ai" className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream text-forest font-medium px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors">
                Try it <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            {/* FEATURED EVENT — TenTS&Tonic countdown */}
            <Reveal as="div" delay={120} className="col-span-12 lg:col-span-3 rounded-3xl gradient-sunrise text-cream p-6 sm:p-7 min-h-[220px] shadow-glow relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <p className="text-[10px] uppercase tracking-[0.25em]">featured · 31 jul</p>
                <Tent className="w-5 h-5" />
              </div>
              <p className="font-display text-3xl mt-1 leading-tight">TenTS&amp;Tonic</p>
              <p className="text-xs text-cream/90 mt-1">The Art of Being a Neighbor</p>
              <div className="mt-4 flex items-end gap-3">
                <div>
                  <p className="font-display text-5xl leading-none">{days}</p>
                  <p className="text-[10px] uppercase tracking-wider">days</p>
                </div>
                <div>
                  <p className="font-display text-3xl leading-none">{hours}</p>
                  <p className="text-[10px] uppercase tracking-wider">hrs</p>
                </div>
              </div>
              <Link to="/event/tents-and-tonic" className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline">
                See details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Reveal>

            {/* Mini pillar tiles */}
            <Reveal as="div" delay={160} className="col-span-6 lg:col-span-3 rounded-3xl bg-peach text-ink p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft">
              <Waves className="w-7 h-7" />
              <div>
                <p className="font-display text-2xl">Movement</p>
                <p className="text-sm text-ink/75">yoga · pilates · mobility</p>
              </div>
            </Reveal>
            <Reveal as="div" delay={180} className="col-span-6 lg:col-span-3 rounded-3xl bg-cream border-2 border-forest/15 text-ink p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft">
              <Sparkles className="w-7 h-7 text-terracotta" />
              <div>
                <p className="font-display text-2xl">Mind</p>
                <p className="text-sm text-ink/70">journaling · stillness</p>
              </div>
            </Reveal>
            <Reveal as="div" delay={200} className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl bg-forest text-cream p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft">
              <Users className="w-7 h-7" />
              <div>
                <p className="font-display text-2xl">Community</p>
                <p className="text-sm text-cream/85">real rooms, real conversation</p>
              </div>
            </Reveal>

            <Reveal as="a" delay={220}
              {...({
                href: SOCIAL.instagram,
                target: "_blank",
                rel: "noreferrer noopener",
              } as any)}
              className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl bg-terracotta text-cream p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft group hover:bg-ink transition-colors"
            >
              <Instagram className="w-7 h-7" />
              <div>
                <p className="font-display text-2xl">@balance_ee</p>
                <p className="text-sm text-cream/85">follow along · DM to join</p>
              </div>
            </Reveal>
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

      {/* Featured TenTS&Tonic band */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] shadow-soft group">
              <img src={FEATURED_EVENT.image} alt={FEATURED_EVENT.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 text-terracotta px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold">
                <Sparkles className="w-3 h-3" /> featured · next up
              </span>
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <p className="text-xs uppercase tracking-[0.25em] text-gilt">{FEATURED_EVENT.date}</p>
                <p className="font-display text-3xl sm:text-4xl mt-1">{FEATURED_EVENT.title}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">31 jul → 2 aug · headline event</p>
            <h2 className="font-display text-5xl md:text-6xl text-ink mt-3 leading-[1.0] text-balance">
              The Art of <span className="italic">Being a Neighbor.</span>
            </h2>
            <p className="mt-5 text-ink/80 text-lg leading-relaxed">
              A wellness camping retreat. Movement, mindfulness, a skincare
              talk by Dr. Selma of Bioderma, and real conversation under Abuja's rainy-season sky.
              Waterproof tents provided.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {FEATURED_EVENT.included.slice(0, 4).map((i) => (
                <span key={i} className="text-xs rounded-full bg-peach/30 text-ink px-3 py-1.5">{i}</span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/event/tents-and-tonic"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-6 py-3 hover:bg-ink transition-colors"
              >
                Full event page <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={FEATURED_EVENT.selarUrl}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-6 py-3 hover:bg-ink hover:text-cream transition-colors"
              >
                Book on Rekap <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Events strip */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-sage/15">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">classes daily · events monthly</p>
            <h2 className="font-display text-5xl sm:text-6xl text-ink mt-3">Classes are the everyday. Events are the special ones.</h2>
            <p className="mt-4 text-ink/70 max-w-xl mx-auto">
              Come move with us during the week, then join us for the gatherings worth planning around.
            </p>
            <Link
              to="/events"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink text-cream font-medium px-6 py-3.5 hover:bg-terracotta transition-colors"
            >
              See all events <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>


      {/* Why move */}
      <section className="relative px-4 md:px-8 py-16 md:py-24 overflow-hidden">
        <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-forest">why move?</p>
            <h2 className="font-display text-5xl md:text-6xl text-ink mt-3 leading-[1.05] text-balance">
              Movement is a love letter to your body.
            </h2>
            <p className="mt-5 text-ink/80 text-lg leading-relaxed">
              Pilates strengthens your core. Yoga softens your nervous system. Walking clears your head. Lifting reshapes your story.
              You don't need to do all of it — just start, gently, today.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={WA_DAILY_CLASS} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 font-medium hover:bg-terracotta transition-colors">
                Join a class <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/learn" className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink px-5 py-3 font-medium hover:bg-ink hover:text-cream transition-colors">
                Read Learn
              </Link>
            </div>

          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { t: "Core", d: "central strength" },
                { t: "Glutes", d: "fire the engine" },
                { t: "Feet", d: "your foundation" },
                { t: "Posture", d: "stand tall" },
                { t: "Walking", d: "the daily reset" },
                { t: "Lifting", d: "strong bones" },
              ].map((c, i) => (
                <div key={c.t} className={`rounded-2xl p-5 ${i % 3 === 0 ? "bg-terracotta text-cream" : i % 3 === 1 ? "bg-peach text-ink" : "bg-forest text-cream"} shadow-soft hover:-translate-y-0.5 transition-transform`}>
                  <p className="font-display text-2xl">{c.t}</p>
                  <p className="text-sm opacity-90 mt-1">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-3xl gradient-sunrise p-8 sm:p-14 text-center text-cream relative overflow-hidden shadow-glow">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-cream blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-forest blur-3xl" />
            </div>
            <p className="relative text-xs uppercase tracking-[0.3em] mb-3">ready when you are</p>
            <h2 className="relative font-display text-4xl sm:text-6xl">Come find your balance.</h2>
            <p className="relative mt-4 max-w-xl mx-auto opacity-95">A class, a camp weekend, a chat with the bot — pick your entry point.</p>
            <div className="relative flex flex-wrap justify-center gap-3 mt-7">
              <a href={WA_DAILY_CLASS} target="_blank" rel="noreferrer noopener" className="rounded-full bg-cream text-terracotta font-medium px-6 py-3 hover:bg-ink hover:text-cream transition-colors">
                Join daily classes
              </a>
              <Link to="/events" className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors">
                <Sparkles className="w-4 h-4" /> See events
              </Link>
              <a href={WA_CUSTOM_CLASS} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
      <EventModal event={selected} onClose={() => setSelected(null)} />

    </div>
  );
};

export default Home;
