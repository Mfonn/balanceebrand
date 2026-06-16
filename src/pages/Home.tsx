import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Flower2, Instagram, Coffee, Bot, Calendar, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mark } from "@/components/balance/Mark";
import { JuneCalendar } from "@/components/balance/JuneCalendar";
import { EventModal } from "@/components/balance/EventModal";
import { ClassBookingDialog } from "@/components/balance/ClassBookingDialog";
import { Reveal } from "@/components/balance/Reveal";
import { JUNE_EVENTS, BalanceEvent, SOCIAL, FEATURED_EVENT } from "@/data/events";
import { CLASS_SLOTS } from "@/data/classes";
import heroImg from "@/assets/hero-balance.jpg";

const MARQUEE = [
  "move", "breathe", "gather", "rest", "soft strength", "deep breath",
  "tea", "books", "yoga", "pilates", "walking", "presence",
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
  const [bookOpen, setBookOpen] = useState(false);

  const soireeDate = useMemo(() => new Date("2026-06-20T16:00:00+01:00"), []);
  const { days, hours } = useCountdown(soireeDate);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>balance_ee — Saturday classes, soirées & a wellness AI</title>
        <meta name="description" content="balance_ee is a wellness community in Lagos. Weekly Saturday movement classes, monthly soirées, and a personal wellness AI you can talk to." />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />

      {/* HERO — bento grid */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-peach/30 blur-3xl pointer-events-none animate-float-y" aria-hidden />
        <div className="absolute top-40 -right-24 w-[26rem] h-[26rem] rounded-full bg-sage/25 blur-3xl pointer-events-none animate-float-y" style={{ animationDelay: "1.6s" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
            {/* Big intro tile */}
            <Reveal as="div" className="col-span-12 lg:col-span-5 rounded-3xl gradient-warm p-6 sm:p-10 md:p-12 text-cream relative overflow-hidden min-h-[360px] md:min-h-[520px] flex flex-col justify-end shadow-soft">
              <Mark className="absolute top-6 right-6 w-16 h-16 md:w-20 md:h-20 animate-wiggle" />
              <p className="text-xs uppercase tracking-[0.3em] opacity-90 mb-3">a wellness community</p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.98] text-balance">
                A Balance approach <br />
                <span className="italic text-cream/95">to a Healthy Lifestyle.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base md:text-lg text-cream/95 leading-relaxed">
                Soirées, book clubs, Saturday classes — something for you every month. Move, gather, rest.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <Link to="/classes" className="inline-flex items-center gap-2 rounded-full bg-cream text-terracotta font-medium px-5 py-3 hover:bg-ink hover:text-cream transition-colors">
                  Book a class <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/calendar" className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-5 py-3 hover:bg-cream hover:text-terracotta transition-colors">
                  See what's on
                </Link>
              </div>
            </Reveal>

            {/* Hero illustration tile — park scene */}
            <Reveal as="div" delay={120} className="col-span-12 lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[280px] md:min-h-[520px] shadow-soft group bg-cream">
              <img src={heroImg} alt="Black women practicing yoga, pilates and running together in a soft watercolor park scene" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cream/30 via-transparent to-transparent" />
              <div className="absolute left-4 bottom-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto sm:max-w-xs rounded-2xl bg-cream/85 backdrop-blur-md px-4 py-3 ring-1 ring-gilt/40 shadow-soft">
                <p className="text-[10px] uppercase tracking-[0.2em] text-forest/60">together · outside · soft</p>
                <p className="font-display text-xl text-ink mt-0.5">Move like you mean it.</p>
              </div>
            </Reveal>

            {/* CLASSES tile (prominent) */}
            <Reveal as="div" delay={80} className="col-span-12 sm:col-span-6 lg:col-span-5 rounded-3xl bg-ink text-cream p-6 sm:p-8 min-h-[200px] shadow-soft relative overflow-hidden group">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-terracotta/40 blur-3xl group-hover:bg-terracotta/60 transition-colors" />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-peach">always on · saturdays</p>
                  <p className="font-display text-4xl mt-2">Classes</p>
                </div>
                <Coffee className="w-7 h-7 text-peach" />
              </div>
              <p className="relative mt-3 text-cream/85 text-sm">
                9 sessions · 50 minutes · complimentary tea after every class. Book 24h ahead.
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {CLASS_SLOTS.slice(0, 6).map((s) => (
                  <span key={s.id} className="text-[11px] font-mono bg-cream/10 border border-cream/15 rounded-full px-2 py-0.5">{s.label}</span>
                ))}
                <span className="text-[11px] font-mono bg-cream/10 border border-cream/15 rounded-full px-2 py-0.5">+3 more</span>
              </div>
              <button
                onClick={() => setBookOpen(true)}
                className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-5 py-2.5 hover:bg-terracotta hover:text-cream transition-colors"
              >
                Book a class <ArrowRight className="w-4 h-4" />
              </button>
            </Reveal>

            {/* WELLNESS AI tile */}
            <Reveal as="div" delay={140} className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-3xl bg-sage text-cream p-6 sm:p-8 min-h-[200px] shadow-soft relative overflow-hidden group">
              <Bot className="w-8 h-8" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream/80 mt-2">new · ai chatbot</p>
              <p className="font-display text-4xl mt-1">Wellness AI</p>
              <p className="mt-2 text-cream/90 text-sm">A bot that builds workout plans & wellness practices for your scenario.</p>
              <Link to="/wellness-ai" className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream text-forest font-medium px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors">
                Try it <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            {/* FEATURED EVENT — Soirée countdown */}
            <Reveal as="div" delay={120} className="col-span-12 lg:col-span-3 rounded-3xl gradient-sunrise text-cream p-6 sm:p-7 min-h-[200px] shadow-glow relative overflow-hidden group">
              <p className="text-[10px] uppercase tracking-[0.25em]">featured · june 20</p>
              <p className="font-display text-3xl mt-1 leading-tight">Fitness Soirée</p>
              <p className="text-xs text-cream/90 mt-1">{FEATURED_EVENT.tagline}</p>
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
              <button onClick={() => setSelected(FEATURED_EVENT)} className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline">
                See details <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Reveal>

            {/* Mini pillar tiles */}
            <Reveal as="div" delay={160} className="col-span-6 lg:col-span-3 rounded-3xl bg-peach text-ink p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-soft">
              <Flower2 className="w-7 h-7" />
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
                <p className="text-sm text-cream/85">tea, books & soirées</p>
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

      {/* Featured Soirée band */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] shadow-soft group">
              <img src={FEATURED_EVENT.image} alt={FEATURED_EVENT.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 text-terracotta px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold">
                <Sparkles className="w-3 h-3" /> featured · this month
              </span>
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <p className="text-xs uppercase tracking-[0.25em]">{FEATURED_EVENT.date}</p>
                <p className="font-display text-3xl sm:text-4xl mt-1">{FEATURED_EVENT.title}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">june 20 · headline event</p>
            <h2 className="font-display text-5xl md:text-6xl text-ink mt-3 leading-[1.0] text-balance">
              Fitness <span className="italic">Soirée</span>.
            </h2>
            <p className="mt-5 text-ink/80 text-lg leading-relaxed">
              An evening of movement, mimosas and meaningful conversation. Yoga + Pilates on the mat, a talk on stress &
              inflammation, a grill, juice stand, raffles, and a few quiet kayaks on the water for the ones who want to drift.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {FEATURED_EVENT.included.slice(0, 4).map((i) => (
                <span key={i} className="text-xs rounded-full bg-peach/30 text-ink px-3 py-1.5">{i}</span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={FEATURED_EVENT.selarUrl}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-6 py-3 hover:bg-ink transition-colors"
              >
                Book on Selar <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelected(FEATURED_EVENT)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-6 py-3 hover:bg-ink hover:text-cream transition-colors"
              >
                Full details
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Calendar */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-sage/10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">monthly</p>
              <h2 className="font-display text-5xl sm:text-6xl text-ink mt-3">Soirées, book clubs.</h2>
              <p className="mt-4 text-ink/70 max-w-xl mx-auto">Something for you every month. Classes run every Saturday — events are the special ones.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <JuneCalendar onSelectEvent={setSelected} />
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
              You don't need to do all of it — just start, gently, this Saturday.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/classes" className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 font-medium hover:bg-terracotta transition-colors">
                Book a Saturday class <ArrowRight className="w-4 h-4" />
              </Link>
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
            <p className="relative mt-4 max-w-xl mx-auto opacity-95">A class, a soirée, a chat with the bot — pick your entry point.</p>
            <div className="relative flex flex-wrap justify-center gap-3 mt-7">
              <button onClick={() => setBookOpen(true)} className="rounded-full bg-cream text-terracotta font-medium px-6 py-3 hover:bg-ink hover:text-cream transition-colors">
                Book a class
              </button>
              <Link to="/calendar" className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors">
                <Calendar className="w-4 h-4" /> See events
              </Link>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-terracotta transition-colors">
                <Instagram className="w-4 h-4" /> DM us
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
      <EventModal event={selected} onClose={() => setSelected(null)} />
      <ClassBookingDialog open={bookOpen} onClose={() => setBookOpen(false)} />
    </div>
  );
};

export default Home;
