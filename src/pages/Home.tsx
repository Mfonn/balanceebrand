import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Waves, Instagram, Bot, Tent, MessageCircle, CalendarDays, Video, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventModal } from "@/components/balance/EventModal";
import { Reveal } from "@/components/balance/Reveal";
import { BalanceEvent, SOCIAL, FEATURED_EVENT, COMMUNITY_BENEFITS, WA_JUST_MOVE, WA_CUSTOM_CLASS, WA_DAILY_CLASS } from "@/data/events";


const MARQUEE = [
  "move", "breathe", "gather", "camp", "soft strength", "deep breath",
  "tea", "books", "yoga", "pilates", "presence",
];

const Home: React.FC = () => {
  const [selected, setSelected] = useState<BalanceEvent | null>(null);

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

            {/* RECAP LINK TILE */}
            <Reveal as="div" delay={120} className="col-span-12 lg:col-span-3 rounded-3xl gradient-sunrise text-cream p-6 sm:p-7 min-h-[220px] shadow-glow relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <p className="text-[10px] uppercase tracking-[0.25em]">a look back</p>
                <Tent className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-3xl leading-tight">A camping weekend, remembered.</p>
                <Link
                  to="/tents-and-tonic-recap"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors text-sm"
                >
                  TenTS&amp;Tonic Recap <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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



      {/* Next up — Just Move webinar */}
      {FEATURED_EVENT && (
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-ink text-cream shadow-glow">
                <div className="relative min-h-[260px] lg:min-h-full">
                  <img
                    src={FEATURED_EVENT.image}
                    alt="Just Move webinar artwork"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={1280}
                    height={960}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-8 sm:p-12">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gilt/20 border border-gilt/40 text-gilt px-3 py-1 text-[11px] uppercase tracking-[0.25em] font-semibold">
                    <Video className="w-3 h-3" /> next up · virtual · free
                  </span>
                  <h2 className="font-display text-5xl sm:text-6xl mt-5 leading-[1]">{FEATURED_EVENT.title}</h2>
                  <p className="mt-3 text-cream/85">{FEATURED_EVENT.date} · online</p>
                  <p className="mt-5 text-cream/85 leading-relaxed">
                    One hour to stop thinking in "workouts". We'll look at fitness as a system — rhythm and
                    mobility, strength, functional capacity — bust the myths that keep people stuck, and walk
                    through what your body is actually doing when you move.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-cream/85">
                    {["Rest is not doing nothing", "Pain does not mean stop forever", "Cardio is not the whole heart story"].map((m) => (
                      <li key={m} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-peach mt-0.5 shrink-0" /> {m}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={WA_JUST_MOVE}
                      target="_blank" rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-6 py-3.5 hover:bg-terracotta hover:text-cream transition-colors"
                    >
                      Save my seat <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setSelected(FEATURED_EVENT)}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-cream/60 text-cream font-medium px-6 py-3.5 hover:bg-cream hover:text-ink transition-colors"
                    >
                      What we'll cover
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Community group */}
      <section className="px-4 md:px-8 pb-4">
        <Reveal>
          <div className="mx-auto max-w-6xl rounded-3xl bg-sage/20 border-2 border-forest/15 p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-forest">the group chat</p>
              <h2 className="font-display text-4xl sm:text-5xl text-ink mt-3 leading-[1.05]">
                Join the community on WhatsApp.
              </h2>
              <p className="mt-4 text-ink/75 leading-relaxed">
                It's where the everyday happens — tips, check-ins, and the first word on everything we open up.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={SOCIAL.communityGroup}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-cream font-medium px-6 py-3.5 hover:bg-terracotta transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Join the group chat
                </a>
                <a
                  href={SOCIAL.newsletter}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-6 py-3.5 hover:bg-ink hover:text-cream transition-colors"
                >
                  Subscribe to the newsletter
                </a>
              </div>
            </div>
            <ul className="space-y-3">
              {COMMUNITY_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-2xl bg-cream border border-forest/10 p-4 text-ink">
                  <Check className="w-5 h-5 text-terracotta mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
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
