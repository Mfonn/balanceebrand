import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Sparkles, ArrowRight, HeartPulse, MessageCircle, ExternalLink,
  CalendarClock, MapPin, Target, ShieldPlus, Gauge, Baby, Building2, Mail,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { UPCOMING_EVENTS, SOCIAL, PROGRAMME_FORM_URL, WA_CUSTOM_CLASS, WA_DAILY_CLASS } from "@/data/events";

const CUSTOM_FIELDS = [
  { Icon: CalendarClock, t: "Date & time", d: "When you actually want to move." },
  { Icon: MapPin, t: "Location", d: "Your space, ours, or outdoors." },
  { Icon: Target, t: "Goals", d: "Strength, mobility, calm, weight, posture." },
  { Icon: ShieldPlus, t: "Health conditions", d: "Injuries and physical limitations we should work around." },
  { Icon: Gauge, t: "Difficulty level", d: "Easy, medium or hard — you choose." },
];

const Services: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>Services — Specialized Programme & Daily Classes | balance_ee Abuja</title>
      <meta
        name="description"
        content="Ways in at balance_ee Abuja: a specialized programme (currently intaking — fill the form to join the waitlist) and daily yoga & pilates classes you can also custom-schedule on WhatsApp."
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
            A specialized programme built around your body, daily classes you can join or schedule to fit
            your life, and wellness activations designed for your space.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 1. SPECIALIZED PROGRAMME */}
    <section className="px-4 md:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl bg-ink text-cream p-8 sm:p-12 relative overflow-hidden shadow-soft">
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-terracotta/40 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gilt/20 border border-gilt/40 text-gilt px-3 py-1 text-[11px] uppercase tracking-[0.25em] font-semibold">
                  <Sparkles className="w-3 h-3" /> currently intaking
                </span>
                <HeartPulse className="w-8 h-8 text-peach mt-5" />
                <h2 className="font-display text-4xl sm:text-5xl mt-3">Specialized Programme</h2>
                <p className="mt-4 text-cream/85 leading-relaxed">
                  A personalized, progressive plan for people recovering from injury or pregnancy, breaking out
                  of long sedentary years, or ready to level up their fitness journey properly.
                </p>
                <p className="mt-4 text-cream/85 leading-relaxed">
                  Fill the intake form and you'll join the waitlist — we review every submission and reach out
                  with the next available slot and what your plan would look like.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={PROGRAMME_FORM_URL}
                    target="_blank" rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-6 py-3.5 hover:bg-terracotta hover:text-cream transition-colors"
                  >
                    Fill the form & join the waitlist <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={`${SOCIAL.whatsappUrl}?text=${encodeURIComponent("Hi balance_ee — I have a question about the specialized programme.")}`}
                    target="_blank" rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cream/60 text-cream font-medium px-6 py-3.5 hover:bg-cream hover:text-ink transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Ask first
                  </a>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { t: "Injury recovery", d: "Rebuild safely, at the pace your body allows." },
                  { t: "Postpartum", d: "Core, pelvic floor and confidence, gently." },
                  { t: "Sedentary reset", d: "Years at a desk? Start from where you are." },
                  { t: "Level up", d: "You already move — now train with intent." },
                ].map((c, i) => (
                  <div
                    key={c.t}
                    className={`rounded-2xl p-5 ${i % 2 === 0 ? "bg-cream/10 border border-cream/15" : "bg-terracotta/25 border border-terracotta/30"}`}
                  >
                    <p className="font-display text-2xl">{c.t}</p>
                    <p className="text-sm text-cream/80 mt-1 leading-relaxed">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 2. DAILY CLASSES */}
    <section className="px-4 md:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl bg-card border-2 border-forest/15 p-8 sm:p-12 shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.25em] text-forest/80">always on</p>
            <h2 className="font-display text-4xl sm:text-5xl mt-2">Daily Classes</h2>
            <p className="mt-4 text-ink/80 leading-relaxed max-w-2xl">
              Yoga, pilates and mobility, running daily. Join the group classes, or custom-schedule a
              session shaped entirely around you — just send us the details on WhatsApp.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {CUSTOM_FIELDS.map(({ Icon, t, d }, i) => (
                <Reveal key={t} delay={i * 60}>
                  <div className="rounded-2xl bg-muted/70 border border-border p-5 h-full">
                    <Icon className="w-6 h-6 text-terracotta" />
                    <p className="font-display text-xl mt-3">{t}</p>
                    <p className="text-sm text-ink/70 mt-1 leading-relaxed">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_CUSTOM_CLASS}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-6 py-3.5 hover:bg-ink transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Custom-schedule a class
              </a>
              <a
                href={WA_DAILY_CLASS}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-6 py-3.5 hover:bg-ink hover:text-cream transition-colors"
              >
                Join the daily classes <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 3. WELLNESS ACTIVATIONS */}
    <section className="px-4 md:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl bg-forest text-cream p-8 sm:p-12 relative overflow-hidden shadow-soft ring-1 ring-gilt/30">
            <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-gilt/20 blur-3xl" aria-hidden />
            <div className="relative grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gilt/20 border border-gilt/40 text-gilt px-3 py-1 text-[11px] uppercase tracking-[0.25em] font-semibold">
                  <Building2 className="w-3 h-3" /> for spaces &amp; brands
                </span>
                <h2 className="font-display text-4xl sm:text-5xl mt-5">Wellness activations, hosted in your space.</h2>
                <p className="mt-4 text-cream/85 leading-relaxed">
                  A designed movement-and-mindfulness moment for your hotel, office, showroom, launch or
                  retreat — programming, instruction, mats and flow, run end to end by us.
                </p>
                <p className="mt-4 text-cream/85 leading-relaxed">
                  Built for teams that need a real reset, guest experiences worth photographing, and brand
                  moments that should feel considered rather than corporate. Tell us the space, the audience
                  and the date; we'll shape the rest.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`${SOCIAL.emailHref}?subject=${encodeURIComponent("Wellness activation enquiry")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gilt text-ink font-medium px-6 py-3.5 hover:bg-peach transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Enquire by email
                  </a>
                  <a
                    href={`${SOCIAL.whatsappUrl}?text=${encodeURIComponent("Hi balance_ee — I'd like to plan a wellness activation in our space.")}`}
                    target="_blank" rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cream/60 text-cream font-medium px-6 py-3.5 hover:bg-cream hover:text-forest transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { t: "Corporate & team days", d: "A grounded hour that people actually talk about afterwards." },
                  { t: "Hotels & residences", d: "Guest programming — poolside, rooftop, lawn or studio." },
                  { t: "Launches & press moments", d: "Movement as the centrepiece, styled for the camera." },
                  { t: "Offsites & retreats", d: "A full arc of sessions across the weekend." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl bg-cream/10 border border-cream/20 p-5">
                    <p className="font-display text-xl">{x.t}</p>
                    <p className="text-sm text-cream/75 mt-1 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* EVENTS strip */}
    <section className="px-4 md:px-8 py-14 bg-sage/15">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">and then</p>
              <h2 className="font-display text-4xl md:text-5xl mt-2">Special events</h2>
              <p className="text-ink/70 mt-2 max-w-lg">Retreats, soirées, gatherings. The ones worth clearing the weekend for.</p>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream font-medium px-5 py-3 hover:bg-terracotta transition-colors"
            >
              All events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {UPCOMING_EVENTS.map((e, i) => (
            <Reveal key={e.id} delay={i * 80}>
              <Link
                to={e.slug ? `/event/${e.slug}` : "/events"}
                className="group block rounded-3xl overflow-hidden bg-card border-2 border-forest/15 hover:border-terracotta hover:-translate-y-0.5 transition-all shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
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

    {/* Doula tile */}
    <section className="px-4 md:px-8 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl bg-card border-2 border-gilt/40 p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 ring-1 ring-gilt/20">
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
  </div>
);

export default Services;
