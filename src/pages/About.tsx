import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Instagram, Heart, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mark } from "@/components/balance/Mark";
import { FloatingDecor } from "@/components/balance/FloatingDecor";
import { SOCIAL, SCRIPTURE } from "@/data/events";
import heroImg from "@/assets/hero-balance.jpg";

const About: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>About — balance_ee</title>
      <meta name="description" content="balance_ee is a wellness community for movement, mind & joyful living — built around soft strength and loud joy." />
      <link rel="canonical" href="/about" />
    </Helmet>
    <Navbar />

    <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
      <FloatingDecor className="opacity-60" />
      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Mark className="w-16 h-16 animate-wiggle mb-4" />
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">our story</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-3 leading-[1.0] text-balance">
            We believe in <span className="italic text-terracotta">soft</span> strength.
          </h1>
          <p className="mt-5 text-ink/80 text-lg leading-relaxed">
            balance_ee is a wellness community for women who want to move, breathe, and live a little more on purpose. We host gatherings — soirées, book clubs, yoga, golf days — and we teach the practices that hold us together in between.
          </p>
          <p className="mt-4 text-ink/80 text-lg leading-relaxed">
            Movement is one of our pillars. Mind is another. Community is the soil. We're building all three, slowly, joyfully — and you're invited.
          </p>
          <a
            href={SOCIAL.instagram}
            target="_blank" rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 font-medium hover:bg-terracotta transition-colors"
          >
            <Instagram className="w-4 h-4" /> Follow {SOCIAL.handle}
          </a>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
          <img src={heroImg} alt="A woman in joyful movement" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>

    {/* Pillars */}
    <section className="px-4 md:px-8 py-16 md:py-24 bg-sage/15">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">What we hold</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { Icon: Heart, t: "Movement", d: "Pilates, yoga, walks, strength — practiced gently, often, joyfully." },
            { Icon: Sparkles, t: "Mind", d: "Journaling, stillness, conversations that go a little deeper." },
            { Icon: Instagram, t: "Community", d: "Tea, books, soirées, women who get it. Show up — that's the whole rule." },
          ].map(({ Icon, t, d }, i) => (
            <div key={t} className={`rounded-3xl p-6 sm:p-8 shadow-soft ${i === 0 ? "bg-terracotta text-cream" : i === 1 ? "bg-peach text-ink" : "bg-forest text-cream"}`}>
              <Icon className="w-8 h-8 mb-4" />
              <p className="font-display text-3xl">{t}</p>
              <p className="mt-2 opacity-90 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Collaborators */}
    <section className="px-4 md:px-8 py-16 md:py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">collaborators</p>
      <h2 className="font-display text-4xl md:text-5xl mt-3">Better together</h2>
      <p className="mt-4 text-ink/70 max-w-xl mx-auto">We co-create with humans we love. June's friends include:</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["@balance_ee", "@essence_rebirth", "@707_treat", "@topgolfcourse"].map((h) => (
          <span key={h} className="rounded-full bg-peach/30 text-ink px-5 py-2 font-medium">{h}</span>
        ))}
      </div>
    </section>

    {/* Scripture */}
    <section className="px-4 md:px-8 pb-20 text-center">
      <p className="font-display text-3xl md:text-5xl text-ink max-w-3xl mx-auto italic leading-tight">
        "{SCRIPTURE.text}"
      </p>
      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-forest/70">{SCRIPTURE.ref}</p>
      <Link to="/calendar" className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-6 py-3 hover:bg-ink transition-colors">
        See what's on this month
      </Link>
    </section>

    <Footer />
  </div>
);

export default About;
