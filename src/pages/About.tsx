import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Instagram, Heart, Sparkles, Bot, Coffee, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mark } from "@/components/balance/Mark";
import { Reveal } from "@/components/balance/Reveal";
import { SOCIAL } from "@/data/events";
import heroImg from "@/assets/hero-balance.jpg";

const About: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>About — balance_ee</title>
      <meta name="description" content="balance_ee is a Lagos wellness community for movement, mind & joyful living. Weekly classes, monthly events, and an AI wellness companion." />
      <link rel="canonical" href="/about" />
    </Helmet>
    <Navbar />

    <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute -top-24 right-[8%] w-72 h-72 rounded-full bg-peach/30 blur-3xl pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <Mark className="w-16 h-16 animate-wiggle mb-4" />
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">our story</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-3 leading-[1.0] text-balance">
            We believe in <span className="italic text-terracotta">soft</span> strength.
          </h1>
          <p className="mt-5 text-ink/80 text-lg leading-relaxed">
            balance_ee is a wellness community for women who want to move, breathe, and live a little more on purpose.
            Weekly Saturday classes are our heartbeat. Monthly soirées and gatherings are our celebrations. The wellness bot
            is our quiet companion in between.
          </p>
          <p className="mt-4 text-ink/80 text-lg leading-relaxed">
            Movement is one pillar. Mind is another. Community is the soil. We're building all three — slowly, joyfully.
          </p>
          <a
            href={SOCIAL.instagram}
            target="_blank" rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 font-medium hover:bg-terracotta transition-colors"
          >
            <Instagram className="w-4 h-4" /> Follow {SOCIAL.handle}
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
            <img src={heroImg} alt="A balance_ee class moment" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>

    {/* Pillars */}
    <section className="px-4 md:px-8 py-16 md:py-24 bg-sage/15">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">What we hold</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { Icon: Heart, t: "Movement", d: "Pilates, yoga, walks, strength — practiced gently, often, joyfully." },
            { Icon: Sparkles, t: "Mind", d: "Journaling, stillness, conversations that go a little deeper." },
            { Icon: Users, t: "Community", d: "Tea, books, soirées, women who get it. Show up — that's the whole rule." },
          ].map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 100}>
              <div className={`rounded-3xl p-6 sm:p-8 shadow-soft h-full ${i === 0 ? "bg-terracotta text-cream" : i === 1 ? "bg-peach text-ink" : "bg-forest text-cream"}`}>
                <Icon className="w-8 h-8 mb-4" />
                <p className="font-display text-3xl">{t}</p>
                <p className="mt-2 opacity-90 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* What you'll find */}
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center">what you'll find here</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mt-3 mb-12">Three doors in</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { Icon: Coffee, t: "Saturday classes", d: "50-minute sessions from 6 AM to 7 PM, every Saturday. Tea included.", to: "/classes" },
            { Icon: Sparkles, t: "Monthly events", d: "Soirées, book clubs, gatherings. The ones to mark in your calendar.", to: "/calendar" },
            { Icon: Bot, t: "Wellness AI", d: "Chat with our bot for plans, practices and gentle nudges.", to: "/wellness-ai" },
          ].map(({ Icon, t, d, to }, i) => (
            <Reveal key={t} delay={i * 100}>
              <Link to={to} className="block rounded-3xl bg-cream border-2 border-forest/10 p-6 h-full hover:border-terracotta hover:-translate-y-0.5 transition-all">
                <Icon className="w-7 h-7 text-terracotta" />
                <p className="font-display text-2xl mt-3">{t}</p>
                <p className="text-ink/75 mt-2 leading-relaxed">{d}</p>
                <p className="mt-4 text-sm font-medium text-terracotta">Explore →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
