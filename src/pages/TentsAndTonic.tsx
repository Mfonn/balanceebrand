import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ExternalLink, MessageCircle, MapPin, Calendar, Droplets, Gauge, Leaf, Sparkles, Users, HeartPulse, Eye, Scissors, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { SponsorMarquee } from "@/components/SponsorMarquee";
import { SOCIAL, getEventBySlug } from "@/data/events";
import oviacareAsset from "@/assets/oviacare-logo.svg.asset.json";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import g1 from "@/assets/gallery/dsc9653-2.jpg.asset.json";
import g2 from "@/assets/gallery/dji-20260724112647-0024-d-2.jpg.asset.json";
import g3 from "@/assets/gallery/dsc9741.jpg.asset.json";
import g4 from "@/assets/gallery/dsc9694.jpg.asset.json";
import g5 from "@/assets/gallery/dsc9693.jpg.asset.json";
import g6 from "@/assets/gallery/1000172397.jpg.asset.json";
import g7 from "@/assets/gallery/1000172727.jpg.asset.json";
import g8 from "@/assets/gallery/1000172729.jpg.asset.json";

const GALLERY: GalleryItem[] = [
  { src: g1.url, alt: "A guest balancing in a yoga pose, blowing bubbles on an outdoor mat", caption: "movement, outdoors" },
  { src: g2.url, alt: "Aerial view of colourful yoga mats laid out beside a pool", caption: "mats by the water" },
  { src: g3.url, alt: "A speaker sitting cross-legged on a mat with a microphone", caption: "mindfulness session" },
  { src: g4.url, alt: "TenTS&Tonic flyers and a QR code on a wicker table above the mats", caption: "the weekend, printed" },
  { src: g5.url, alt: "A TenTS&Tonic flyer resting on a car dashboard", caption: "on the way" },
  { src: g6.url, alt: "A guest resting in a camping chair outside a tent", caption: "slow hours at camp" },
  { src: g7.url, alt: "Bioderma sample tubes on a skincare routine worksheet", caption: "skincare, with Bioderma" },
  { src: g8.url, alt: "Three Bioderma skincare tubes on a purple surface", caption: "take-home routine" },
];

const IG_REELS = [
  "https://www.instagram.com/reel/DZ5HCM5MO2Z/",
];

const PHONES = [
  { pretty: "+234 704 053 8528", tel: "tel:+2347040538528" },
  { pretty: "+234 911 298 4781", tel: "tel:+2349112984781" },
];

const TentsAndTonic: React.FC = () => {
  const event = getEventBySlug("tents-and-tonic")!;

  // Load Instagram embed script (and re-process when reels change)
  useEffect(() => {
    const id = "instagram-embed-js";
    const process = () => (window as any).instgrm?.Embeds?.process?.();
    if (document.getElementById(id)) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = process;
    document.body.appendChild(s);
  }, []);

  const waLink = `${SOCIAL.whatsappUrl}?text=${encodeURIComponent(
    "Hi balance_ee — I'd like to know more about TenTS&Tonic (31 Jul – 2 Aug)."
  )}`;

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>TenTS&Tonic — Wellness Camping Retreat, Abuja | balance_ee</title>
        <meta
          name="description"
          content="TenTS&Tonic — a wellness camping retreat in Abuja for health-conscious adults, 31 July – 2 August 2026. Movement, mindfulness, skincare with Dr. Selma (Bioderma), scalp health with OviaCare. Book on Rekap."
        />
        <link rel="canonical" href="/event/tents-and-tonic" />
        <meta property="og:title" content="TenTS&Tonic — The Art of Being a Neighbor" />
        <meta property="og:description" content="A wellness camping retreat in Abuja · 31 July – 2 August 2026 · balance_ee." />
        <meta property="og:image" content={event.image} />
      </Helmet>

      <Navbar />

      <SponsorMarquee label="In partnership with" topClearance />

      {/* HERO */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
              TenTS&amp;Tonic — a wellness camping retreat
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
              A healthy dose of stress is a good thing — the rain and the tents are the whole point.
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
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a
                href={SOCIAL.emailHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> {SOCIAL.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-3xl overflow-hidden shadow-glow aspect-[4/5] ring-1 ring-gilt/40">
              <img src={event.image} alt="Waterproof camping tent set up under trees for the TenTS&Tonic retreat" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gilt">wellness camping retreat</p>
                <p className="font-display text-3xl mt-1">TenTS&amp;Tonic</p>
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
            <h2 className="font-display text-4xl md:text-5xl text-center mt-3">The programme.</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {[
              { Icon: HeartPulse, tone: "bg-terracotta text-cream", t: "Friday evening movement", d: "An easy opener as the sun goes. Land, breathe, meet your neighbours before dark." },
              { Icon: Users, tone: "bg-peach text-ink", t: "Saturday movement + bazaar", d: "A longer flow, then a wander through the bazaar." },
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
        </div>
      </section>

      {/* SPECIAL GUESTS */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center">special guests</p>
            <h2 className="font-display text-4xl md:text-5xl text-center mt-3 mb-10">
              Voices with the retreat.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                Icon: Eye,
                tone: "bg-cream border-2 border-forest/15 text-ink",
                eyebrow: "pre-event session",
                title: "Dr. Eking",
                sub: "Ophthalmology & Movement",
                body: "A pre-event conversation on how visual health and movement quietly shape everyday posture and presence.",
              },
              {
                Icon: Sparkles,
                tone: "bg-cream border-2 border-gilt/40 text-ink ring-1 ring-gilt/20",
                eyebrow: "skincare talk",
                title: "Dr. Selma × Bioderma",
                sub: "Skincare that holds up",
                body: "A talk on building a basic skincare routine that actually holds up with an active life.",
              },
              {
                Icon: Scissors,
                tone: "bg-cream border-2 border-forest/15 text-ink",
                eyebrow: "hair & scalp",
                title: "OviaCare",
                sub: "Stress, Cortisol & Hair Health",
                body: "A short session on how chronic stress shows up in the scalp — plus an open Q&A with the clinic.",
              },
            ].map((g, i) => (
              <Reveal key={g.title} delay={i * 100}>
                <div className={`${g.tone} rounded-3xl p-7 h-full shadow-soft`}>
                  <g.Icon className="w-7 h-7 text-terracotta" />
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gilt mt-4">{g.eyebrow}</p>
                  <h3 className="font-display text-2xl mt-1">{g.title}</h3>
                  <p className="text-sm text-terracotta font-medium mt-0.5">{g.sub}</p>
                  <p className="mt-3 text-ink/80 leading-relaxed">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A WORD FROM OUR SPONSOR — Sheer Luxury */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <a
              href="https://www.sheerluxuryabuja.com/"
              target="_blank" rel="noreferrer noopener"
              className="group block rounded-[2rem] overflow-hidden bg-ink text-cream ring-1 ring-gilt/30 shadow-glow hover:ring-gilt/60 transition-all"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left — wordmark tile */}
                <div className="relative md:col-span-2 min-h-[280px] md:min-h-[420px] p-10 flex flex-col justify-between bg-gradient-to-br from-forest via-ink to-ink overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gilt/20 blur-3xl" aria-hidden />
                  <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-terracotta/20 blur-3xl" aria-hidden />
                  <p className="relative text-[10px] uppercase tracking-[0.4em] text-gilt/90">a word from our sponsor</p>
                  <div className="relative">
                    <p className="font-display text-4xl md:text-5xl leading-[1.02] text-cream">
                      Sheer <span className="italic text-gilt">Luxury</span>
                    </p>
                    <p className="font-display text-2xl md:text-3xl mt-1 text-cream/85">
                      Apartments &amp; Suites
                    </p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-gilt/80">Garki · Jabi · Abuja</p>
                  </div>
                </div>

                {/* Right — copy */}
                <div className="md:col-span-3 p-8 sm:p-10 md:p-12 bg-cream text-ink">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta">official host partner</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-2">
                    An accommodation experience with taste.
                  </h3>
                  <div className="mt-5 space-y-4 text-ink/80 leading-relaxed">
                    <p>
                      From two Abuja locations — Garki and Jabi — Sheer Luxury delivers a high-quality
                      accommodation experience in comfort and style, led by an experienced team focused on
                      personalized guest service.
                    </p>
                    <p>
                      Rooms, apartments and suites come with multi-satellite TV on LED screens, high-speed
                      internet, hair dryers, fully equipped kitchenettes, sterilizing units, microwaves and
                      refrigerators.
                    </p>
                    <p>
                      Guests also enjoy a gym, swimming pool, poolside bar, laundry, shuttle transfers and
                      conference facilities — an endless hospitality experience across every stay.
                    </p>
                  </div>

                  <div className="mt-7 grid sm:grid-cols-2 gap-3">
                    <blockquote className="rounded-2xl bg-forest/5 border-l-2 border-gilt pl-4 py-3 text-ink/85 italic">
                      "To be the ideal home lodging business within reach."
                    </blockquote>
                    <blockquote className="rounded-2xl bg-forest/5 border-l-2 border-gilt pl-4 py-3 text-ink/85 italic">
                      "Redefining the art of luxury, and making that luxury inevitable."
                    </blockquote>
                  </div>

                  <p className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-terracotta group-hover:gap-3 transition-all">
                    Visit sheerluxuryabuja.com <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* THIRD SPACE */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-sage/10">
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
              TenTS&amp;Tonic is a third-space experiment — scenic views and unhurried conversation.
              No doomscrolling. No stimulant-borrowed joy. Just the older, quieter kind that comes from
              being present with people who chose to show up too.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="px-4 md:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center">the gallery</p>
            <h2 className="font-display text-4xl md:text-5xl text-center mt-3 mb-10">
              How the weekend <span className="italic">actually felt.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <GalleryGrid items={GALLERY} />
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="px-4 md:px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center mb-8">a peek · previous gatherings</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {IG_REELS.map((url) => (
              <blockquote
                key={url}
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ background: "#FFF", border: 0, margin: "0 auto", maxWidth: 540, width: "100%" }}
              >
                <a href={url} target="_blank" rel="noreferrer noopener">View this reel on Instagram →</a>
              </blockquote>
            ))}
          </div>
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

          {/* Questions / contact numbers */}
          <div className="mt-10 rounded-3xl border-2 border-forest/10 bg-cream p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gilt text-center">questions?</p>
            <p className="font-display text-2xl text-center mt-2">Call, WhatsApp — we'll pick up.</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={p.tel}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" /> {p.pretty}
                </a>
              ))}
              <a
                href={waLink}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-5 py-2.5 hover:bg-ink transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a
                href={SOCIAL.emailHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink font-medium px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> {SOCIAL.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SponsorMarquee label="Thank you to our partners" reverse />

      <Footer />
    </div>
  );
};

export default TentsAndTonic;
