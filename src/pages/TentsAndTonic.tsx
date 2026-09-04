import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ExternalLink, MessageCircle, MapPin, Calendar, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { SponsorMarquee } from "@/components/SponsorMarquee";
import { SOCIAL, SPONSORS, getEventBySlug } from "@/data/events";
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
  { src: g4.url, alt: "Retreat flyers and a QR code on a wicker table above the mats", caption: "the weekend, printed" },
  { src: g5.url, alt: "A retreat flyer resting on a car dashboard", caption: "on the way" },
  { src: g6.url, alt: "A guest resting in a camping chair outside a tent", caption: "slow hours at camp" },
  { src: g7.url, alt: "Bioderma sample tubes on a skincare routine worksheet", caption: "skincare, with Bioderma" },
  { src: g8.url, alt: "Three Bioderma skincare tubes on a purple surface", caption: "take-home routine" },
];

const IG_REELS = ["https://www.instagram.com/reel/DZ5HCM5MO2Z/"];

const PHONES = [
  { pretty: "+234 704 053 8528", tel: "tel:+2347040538528" },
  { pretty: "+234 911 298 4781", tel: "tel:+2349112984781" },
];

const TentsAndTonic: React.FC = () => {
  const event = getEventBySlug("tents-and-tonic")!;

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
    "Hi balance_ee — I'd like to hear about the next gathering."
  )}`;

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>TenTS&Tonic Recap — A Wellness Camping Weekend in Abuja | balance_ee</title>
        <meta
          name="description"
          content="A look back at TenTS&Tonic — a wellness camping weekend in Abuja. Photos from the movement sessions, the mindfulness circle and the skincare corner, with thanks to our partners."
        />
        <link rel="canonical" href="/event/tents-and-tonic" />
        <meta property="og:title" content="TenTS&Tonic Recap — The Art of Being a Neighbor" />
        <meta property="og:description" content="Photos and moments from a wellness camping weekend in Abuja." />
        <meta property="og:image" content={event.image} />
      </Helmet>

      <Navbar />

      {/* RECAP HERO */}
      <section className="relative pt-28 md:pt-36 pb-10 md:pb-14 px-4 md:px-8 overflow-hidden">
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">the recap</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-4 leading-[0.95] text-balance">
              TenTS&amp;Tonic — <span className="italic text-terracotta">The Art of Being a Neighbor.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-ink/75">
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-terracotta" /> 31 July – 2 August 2026</span>
              <span className="text-ink/30">·</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-terracotta" /> Abuja</span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 text-ink/80 text-lg leading-relaxed">
              A weekend outdoors: movement as the sun went down, a mindfulness circle on the mats, a skincare
              corner, and long unhurried conversation between strangers who left as neighbours. Real dopamine,
              from real people, in a real place — no doomscrolling required.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 md:px-8 pb-16 md:pb-20">
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

      {/* REEL */}
      <section className="px-4 md:px-8 pb-16 bg-sage/10 py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center mb-8">on video</p>
          </Reveal>
          <div className="grid gap-6">
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

      {/* THANK YOU, PARTNERS */}
      <section className="px-4 md:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta text-center">with thanks</p>
            <h2 className="font-display text-4xl md:text-5xl text-center mt-3 mb-10">
              The partners who made it <span className="italic">warm.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {SPONSORS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <a
                  href={s.url}
                  target="_blank" rel="noreferrer noopener"
                  className="group flex flex-col h-full rounded-3xl bg-card border-2 border-gilt/30 p-7 hover:border-gilt hover:-translate-y-0.5 transition-all shadow-soft"
                >
                  {s.logo ? (
                    <img src={s.logo} alt={`${s.name} logo`} className="h-10 w-auto object-contain self-start" loading="lazy" />
                  ) : (
                    <p className="font-display text-2xl text-ink">{s.name}</p>
                  )}
                  {s.logo && <p className="font-display text-2xl text-ink mt-4">{s.name}</p>}
                  <p className="mt-3 text-ink/75 leading-relaxed flex-1">{s.blurb}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-terracotta group-hover:gap-3 transition-all">
                    Visit their site <ExternalLink className="w-4 h-4" />
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAY IN TOUCH */}
      <section className="px-4 md:px-8 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-forest/10 bg-card p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gilt text-center">questions?</p>
          <p className="font-display text-2xl text-center mt-2">Call, WhatsApp or email — we'll pick up.</p>
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
      </section>

      <SponsorMarquee label="Thank you to our partners" reverse />

      <Footer />
    </div>
  );
};

export default TentsAndTonic;
