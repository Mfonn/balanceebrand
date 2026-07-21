import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ExternalLink, MessageCircle, MapPin, Calendar, Droplets, Gauge, Leaf, Sparkles, Users, HeartPulse } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { SponsorMarquee } from "@/components/SponsorMarquee";
import { SOCIAL, getEventBySlug } from "@/data/events";

const IG_REEL_URL = "https://www.instagram.com/reel/Da70aySoQFx/";

const TentsAndTonic: React.FC = () => {
  const event = getEventBySlug("tents-and-tonic")!;

  // Load Instagram embed script
  useEffect(() => {
    const id = "instagram-embed-js";
    if (document.getElementById(id)) {
      (window as any).instgrm?.Embeds?.process?.();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }, []);

  const waLink = `${SOCIAL.whatsappUrl}?text=${encodeURIComponent(
    "Hi balance_ee — I'd like to know more about Tents & Tonic (31 Jul – 2 Aug)."
  )}`;

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>Tents & Tonic — Wellness Camping Retreat, Abuja | balance_ee</title>
        <meta
          name="description"
          content="Tents & Tonic — a wellness camping retreat in Abuja, 31 July – 2 August 2026. Movement, mindfulness, a skincare talk by Dr. Selma of Bioderma, and real third-space community. Book on Rekap."
        />
        <link rel="canonical" href="/event/tents-and-tonic" />
        <meta property="og:title" content="Tents & Tonic — The Art of Being a Neighbor" />
        <meta property="og:description" content="A wellness camping retreat in Abuja · 31 July – 2 August 2026 · balance_ee × African Dream Community." />
        <meta property="og:image" content={event.image} />
      </Helmet>

      <Navbar />

      <SponsorMarquee label="In partnership with" />

      {/* HERO */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gilt/90 mb-3">
              African Dream Community <span className="text-gilt">✕</span> balance_ee
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
              Tents &amp; Tonic — a wellness camping retreat
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-4 leading-[0.95] text-balance">
              The Art of <span className="italic text-terracotta">Being a Neighbor.</span>
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink/75">
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-terracotta" /> 31 July – 2 August 2026</span>
              <span className="text-ink/30">·</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-terracotta" /> Abuja</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink text-cream px-3 py-1.5 text-xs">
                <Gauge className="w-3.5 h-3.5" /> Difficulty · Medium
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sage text-cream px-3 py-1.5 text-xs">
                <Droplets className="w-3.5 h-3.5" /> Element · Water
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-peach text-ink px-3 py-1.5 text-xs">
                <Leaf className="w-3.5 h-3.5" /> Rainy season · waterproof tents provided
              </span>
            </div>

            <p className="mt-6 text-ink/80 text-lg leading-relaxed max-w-xl">
              A weekend of movement, mindfulness and real neighbourly conversation, out under Abuja's open sky.
              A healthy dose of stress is a good thing — the rain, the tents, the shared meals are the whole point.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={event.selarUrl}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-6 py-3.5 hover:bg-ink transition-colors"
              >
                Book on Rekap <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={waLink}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-6 py-3.5 hover:bg-ink hover:text-cream transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp us
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-3xl overflow-hidden shadow-glow aspect-[4/5] ring-1 ring-gilt/40">
              <img src={event.image} alt="Bell tent at golden hour on the Abuja savannah" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gilt">wellness camping retreat</p>
                <p className="font-display text-3xl mt-1">Tents &amp; Tonic</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMME */}
      <section className="px-4 md:px-8 py-16 md:py-20 bg-sage/10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center">the programme</p>
            <h2 className="font-display text-4xl md:text-5xl text-center mt-3">Three days, gently structured.</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {[
              { Icon: HeartPulse, tone: "bg-terracotta text-cream", t: "Friday evening movement", d: "An easy opener as the sun goes. Land, breathe, meet your neighbours before dark." },
              { Icon: Users, tone: "bg-peach text-ink", t: "Saturday movement + bazaar", d: "A longer flow, then a wander through the bazaar — food, small brands, slow conversation." },
              { Icon: Sparkles, tone: "bg-forest text-cream", t: "Mindfulness session", d: "Building a linear path to your heart's desire, from your highest self. Bring a pen." },
              { Icon: Leaf, tone: "bg-sage text-cream", t: "New to yoga or pilates?", d: "This is the softest possible entry point. Curious counts. No experience needed." },
            ].map(({ Icon, tone, t, d }, i) => (
              <Reveal key={t} delay={i * 80}>
                <div className={`${tone} rounded-3xl p-7 h-full shadow-soft`}>
                  <Icon className="w-7 h-7" />
                  <p className="font-display text-2xl mt-4">{t}</p>
                  <p className="mt-2 opacity-90 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Dr. Selma highlight */}
          <Reveal>
            <div className="mt-6 rounded-3xl bg-cream border-2 border-gilt/40 p-7 sm:p-10 shadow-soft ring-1 ring-gilt/20">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gilt">special guest</p>
              <h3 className="font-display text-3xl md:text-4xl mt-2 text-ink">
                Dr. Selma <span className="text-terracotta">×</span> Bioderma
              </h3>
              <p className="mt-3 text-ink/80 max-w-2xl leading-relaxed">
                A talk on building a basic skincare routine that actually holds up in Abuja weather —
                plus free on-site dermatology assessments and short consultations for anyone who wants one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THIRD SPACE */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">why we're doing this</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05] text-balance">
              Real dopamine. From real people. In a <span className="italic">real place.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-ink/80 text-lg leading-relaxed">
              Tents &amp; Tonic is a third-space experiment — scenic views, shared meals, unhurried
              conversation. No doomscrolling. No stimulant-borrowed joy. Just the older, quieter kind
              that comes from being present with people who chose to show up too.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM EMBED */}
      <section className="px-4 md:px-8 pb-16">
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center mb-5">a peek</p>
          </Reveal>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={IG_REEL_URL}
            data-instgrm-version="14"
            style={{ background: "#FFF", border: 0, margin: "0 auto", maxWidth: 540, width: "100%" }}
          >
            <a href={IG_REEL_URL} target="_blank" rel="noreferrer noopener">View this reel on Instagram →</a>
          </blockquote>
        </div>
      </section>

      {/* TICKETS */}
      <section id="tickets" className="px-4 md:px-8 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center">tickets</p>
            <h2 className="font-display text-4xl md:text-5xl text-center mt-3 mb-10">Pick your weekend.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {event.tickets.map((t, i) => (
              <Reveal key={t.label} delay={i * 80}>
                <a
                  href={event.selarUrl}
                  target="_blank" rel="noreferrer noopener"
                  className="group block rounded-3xl bg-cream border-2 border-forest/15 p-7 hover:border-terracotta hover:-translate-y-0.5 transition-all shadow-soft h-full"
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-forest/70">{t.label}</p>
                  <p className="font-display text-5xl text-terracotta mt-2">{t.price}</p>
                  {t.note && <p className="text-sm text-ink/70 mt-2">{t.note}</p>}
                  <p className="mt-6 text-sm font-medium text-ink inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Book on Rekap <ExternalLink className="w-4 h-4" />
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={waLink}
              target="_blank" rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-ink/70 hover:text-terracotta"
            >
              <MessageCircle className="w-4 h-4" /> Questions? WhatsApp {SOCIAL.phone}
            </a>
          </div>
        </div>
      </section>

      <SponsorMarquee label="Thank you to our partners" reverse />

      <Footer />
    </div>
  );
};

export default TentsAndTonic;
