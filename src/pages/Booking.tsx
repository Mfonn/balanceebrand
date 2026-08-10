import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, CheckCheck, ArrowRight, ExternalLink, Sparkles, CalendarDays, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { UPCOMING_EVENTS, SOCIAL, WA_CUSTOM_CLASS, WA_DAILY_CLASS, PROGRAMME_FORM_URL } from "@/data/events";

const STEPS = [
  { icon: CalendarDays, title: "Pick what fits", body: "Daily class, specialized programme, or a special event." },
  { icon: MessageCircle, title: "Send one message", body: "Classes confirm on WhatsApp. The programme starts with the intake form." },
  { icon: CheckCheck, title: "Get your details", body: "You'll get venue, what to bring and any last-minute notes." },
  { icon: Sparkles, title: "Show up", body: "Easy clothes, open mind. We'll take it from there." },
];

const Booking: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>How to Book — balance_ee Abuja</title>
      <meta name="description" content="Book a class on WhatsApp, join the specialized programme waitlist, or grab a spot for a balance_ee event in Abuja." />
      <link rel="canonical" href="/booking" />
    </Helmet>
    <Navbar />

    <section className="relative pt-28 md:pt-36 pb-16 px-4 md:px-8 overflow-hidden">
      <div className="absolute -top-20 right-[10%] w-72 h-72 rounded-full bg-peach/20 blur-3xl pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">how to book</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-3 leading-[1.0] text-balance">
            Booking is a soft <span className="italic">yes.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 text-ink/75 text-lg max-w-2xl mx-auto">
            Three paths — classes, the specialized programme, and events. All take about a minute.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Paths */}
    <section className="px-4 md:px-8 pb-10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-4">
        <Reveal>
          <div className="rounded-3xl bg-ink text-cream p-7 sm:p-9 relative overflow-hidden h-full">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-terracotta/40 blur-3xl" />
            <CalendarDays className="relative w-8 h-8 text-peach" />
            <p className="relative text-[11px] uppercase tracking-[0.25em] text-peach mt-3">always on</p>
            <p className="relative font-display text-4xl mt-1">Daily classes</p>
            <p className="relative mt-3 text-cream/85">Join the group classes, or custom-schedule a session around your date, location, goals, limitations and difficulty level.</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              <a href={WA_DAILY_CLASS} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-5 py-2.5 hover:bg-terracotta hover:text-cream transition-colors">
                Join <ArrowRight className="w-4 h-4" />
              </a>
              <a href={WA_CUSTOM_CLASS} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream font-medium px-5 py-2.5 hover:bg-cream/10 transition-colors">
                <MessageCircle className="w-4 h-4" /> Custom
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-3xl gradient-sage text-cream p-7 sm:p-9 relative overflow-hidden h-full">
            <Sparkles className="w-8 h-8" />
            <p className="text-[11px] uppercase tracking-[0.25em] mt-3 opacity-90">currently intaking</p>
            <p className="font-display text-4xl mt-1">Specialized programme</p>
            <p className="mt-3 text-cream/90">Fill the intake form to join the waitlist — we'll reach out with your plan and the next slot.</p>
            <a href={PROGRAMME_FORM_URL} target="_blank" rel="noreferrer noopener" className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream text-forest font-medium px-5 py-3 hover:bg-ink hover:text-cream transition-colors">
              Fill the form <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="rounded-3xl gradient-warm text-cream p-7 sm:p-9 relative overflow-hidden h-full">
            <Sparkles className="w-8 h-8" />
            <p className="text-[11px] uppercase tracking-[0.25em] mt-3 opacity-90">the special ones</p>
            <p className="font-display text-4xl mt-1">Events</p>
            <p className="mt-3 text-cream/90">Retreats and gatherings. Secure your spot online in one tap.</p>
            <Link to="/events" className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream text-terracotta font-medium px-5 py-3 hover:bg-ink hover:text-cream transition-colors">
              See events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Steps */}
    <section className="px-4 md:px-8 pb-12">
      <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const tones = ["bg-terracotta text-cream", "bg-sage text-cream", "bg-peach text-ink", "bg-forest text-cream"];
          return (
            <Reveal key={i} delay={i * 80}>
              <div className={`${tones[i]} rounded-3xl p-6 shadow-soft relative overflow-hidden h-full`}>
                <div className="text-6xl font-display opacity-25 absolute top-3 right-5">{i + 1}</div>
                <Icon className="w-7 h-7" />
                <p className="font-display text-2xl mt-6">{s.title}</p>
                <p className="text-sm opacity-90 mt-2 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>

    {/* Event quick-links */}
    <section className="px-4 md:px-8 pb-16 md:pb-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">Upcoming events</h2>
        </Reveal>
        <div className="space-y-3">
          {UPCOMING_EVENTS.map((e, i) => (
            <Reveal key={e.id} delay={i * 60}>
              <a
                href={e.selarUrl}
                target="_blank" rel="noreferrer noopener"
                className="group flex items-center gap-4 rounded-2xl bg-card border-2 border-forest/15 p-4 hover:border-terracotta hover:shadow-soft transition-all"
              >
                <img src={e.image} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-terracotta">{e.date}</p>
                  <p className="font-display text-xl text-ink truncate">{e.title}</p>
                  <p className="text-sm text-ink/70 truncate">
                    {e.tickets[0].price}{e.tickets.length > 1 ? ` – ${e.tickets[e.tickets.length - 1].price}` : ""}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-terracotta font-medium group-hover:translate-x-1 transition-transform">
                  Get tickets <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-3xl bg-ink text-cream p-8 sm:p-10 text-center ring-1 ring-gilt/30">
            <p className="font-display text-2xl sm:text-3xl">Questions first?</p>
            <p className="mt-2 text-cream/80">Chat on WhatsApp to schedule a custom class or join our daily classes.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={WA_CUSTOM_CLASS}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-6 py-3 hover:bg-terracotta hover:text-cream transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a
                href={SOCIAL.phoneAltTel}
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-ink transition-colors"
              >
                <Phone className="w-4 h-4" /> {SOCIAL.phoneAlt}
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream text-cream font-medium px-6 py-3 hover:bg-cream hover:text-ink transition-colors"
              >
                <Instagram className="w-4 h-4" /> DM {SOCIAL.handle}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default Booking;
