import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Coffee, Sparkles, ArrowRight, HeartPulse, Baby, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { ClassBookingDialog } from "@/components/balance/ClassBookingDialog";
import { CLASS_SLOTS, CLASS_RULES } from "@/data/classes";
import { UPCOMING_EVENTS, SOCIAL } from "@/data/events";
import { toast } from "@/hooks/use-toast";

const Services: React.FC = () => {
  const [book, setBook] = useState(false);

  const waProgram = (name: string) =>
    `${SOCIAL.whatsappUrl}?text=${encodeURIComponent(
      `Hi balance_ee — I'd like info on the ${name}.`
    )}`;

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>Services — Classes, Events & Programs | balance_ee Abuja</title>
        <meta
          name="description"
          content="What we offer at balance_ee Abuja: Saturday yoga & pilates classes, monthly wellness events, and personalized 8-week and 3-month programs for recovery, pregnancy and levelling up."
        />
        <link rel="canonical" href="/services" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-10 px-4 md:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">what we offer</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-3 leading-[0.98] text-balance">
              Move like you <span className="italic text-terracotta">mean it.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-ink/75 text-lg max-w-2xl mx-auto">
              Three ways in: weekly Saturday classes, monthly events, and one-to-one programs built around
              where your body actually is right now.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 1. CLASSES */}
      <section className="px-4 md:px-8 py-14">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 rounded-3xl bg-ink text-cream p-8 relative overflow-hidden shadow-soft">
                <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-terracotta/40 blur-3xl" />
                <Coffee className="relative w-8 h-8 text-peach" />
                <p className="relative text-[11px] uppercase tracking-[0.25em] text-peach mt-3">always on</p>
                <p className="relative font-display text-4xl mt-1">Saturday Classes</p>
                <p className="relative mt-3 text-cream/85 text-sm leading-relaxed">
                  Two 50-minute Saturday sessions — morning and evening. Complimentary healthy tea after every class.
                  Book at least {CLASS_RULES.cutoffHours} hours ahead.
                </p>
                <button
                  onClick={() => setBook(true)}
                  className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-5 py-3 hover:bg-terracotta hover:text-cream transition-colors"
                >
                  Book a class <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg:col-span-2 rounded-3xl bg-cream border-2 border-forest/10 p-8 shadow-soft">
                <p className="text-[11px] uppercase tracking-[0.25em] text-forest/70">Saturday schedule</p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CLASS_SLOTS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setBook(true)}
                      className="rounded-2xl border-2 border-border bg-card px-3 py-3 text-left hover:border-terracotta hover:-translate-y-0.5 transition-all"
                    >
                      <p className="font-display text-lg text-ink">{s.label}</p>
                      <p className="text-[11px] text-ink/60">50 min · tea after</p>
                    </button>
                  ))}
                </div>
                <Link to="/classes" className="mt-6 inline-block text-sm text-terracotta font-medium hover:underline">
                  See full class page →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. EVENTS */}
      <section className="px-4 md:px-8 py-14 bg-sage/10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-terracotta">monthly</p>
                <h2 className="font-display text-4xl md:text-5xl mt-2">Special events</h2>
                <p className="text-ink/70 mt-2 max-w-lg">Soirées, book clubs, camping retreats. The ones worth clearing the weekend for.</p>
              </div>
              <Link
                to="/calendar"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-cream font-medium px-5 py-3 hover:bg-terracotta transition-colors"
              >
                Full calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {UPCOMING_EVENTS.map((e, i) => (
              <Reveal key={e.id} delay={i * 80}>
                <Link
                  to={e.slug ? `/event/${e.slug}` : "/calendar"}
                  className="group block rounded-3xl overflow-hidden bg-cream border-2 border-forest/10 hover:border-terracotta hover:-translate-y-0.5 transition-all shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    {e.featured && (
                      <span className="absolute top-3 left-3 rounded-full bg-terracotta text-cream px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] uppercase tracking-wider text-terracotta">{e.date}</p>
                    <p className="font-display text-2xl text-ink mt-1">{e.title}</p>
                    <p className="text-sm text-ink/70 mt-1">{e.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS */}
      <section className="px-4 md:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-gilt">personalized · specialized</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3">Programs built around you.</h2>
              <p className="text-ink/75 mt-4 max-w-2xl mx-auto leading-relaxed">
                For people recovering from injury or pregnancy, breaking out of long sedentary years,
                or ready to level up their fitness journey.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "8-Week Program", tone: "bg-terracotta text-cream", note: "Foundational reset · twice-weekly touchpoints" },
              { name: "3-Month Program", tone: "bg-forest text-cream", note: "Deeper transformation · full progression plan" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <a
                  href={waProgram(p.name)}
                  target="_blank" rel="noreferrer noopener"
                  className={`${p.tone} block w-full text-left rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-soft hover:-translate-y-0.5 transition-transform`}
                >
                  <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.25em] rounded-full bg-cream/20 border border-cream/30 px-2.5 py-1 font-semibold">
                    by application
                  </span>
                  <HeartPulse className="w-8 h-8" />
                  <p className="font-display text-4xl mt-4">{p.name}</p>
                  <p className="mt-2 opacity-90">{p.note}</p>
                  <p className="mt-6 text-sm inline-flex items-center gap-2 opacity-90">
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Doula tile */}
          <Reveal delay={200}>
            <div className="mt-4 rounded-3xl bg-cream border-2 border-gilt/40 p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 ring-1 ring-gilt/20">
              <div className="w-14 h-14 rounded-2xl bg-peach flex items-center justify-center">
                <Baby className="w-7 h-7 text-ink" />
              </div>
              <div className="flex-1">
                <p className="font-display text-2xl text-ink">Birth Doula support</p>
                <p className="text-sm text-ink/75 mt-1 leading-relaxed">
                  Continuous, calming presence before, during and after birth — shown to ease labour,
                  lower intervention rates and grow confidence for the new parent. Coming soon.
                </p>
              </div>
              <a
                href={`${SOCIAL.whatsappUrl}?text=${encodeURIComponent("Hi balance_ee — I'd like info on the doula program.")}`}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <ClassBookingDialog open={book} onClose={() => setBook(false)} />
    </div>
  );
};

export default Services;
