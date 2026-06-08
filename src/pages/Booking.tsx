import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Instagram, Calendar, MessageCircle, CheckCheck, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor } from "@/components/balance/FloatingDecor";
import { JUNE_EVENTS, SOCIAL } from "@/data/events";

const STEPS = [
  { icon: Calendar, title: "Pick your session", body: "Browse the June calendar or scroll the event list below. See what calls to you." },
  { icon: MessageCircle, title: "Book on Selar or DM us", body: "Tap the Selar button on the event to pay & secure your spot. Prefer a chat? DM @balance_ee on Instagram." },
  { icon: CheckCheck, title: "Get your confirmation", body: "We'll send venue details, what to bring, and any last-minute notes once you're in." },
  { icon: Instagram, title: "Show up & glow up", body: "Wear easy-to-move clothes. Bring your mat (or borrow ours). Come open-hearted." },
];

const Booking: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>Book a Class — balance_ee</title>
      <meta name="description" content="How to book a class with balance_ee: pick your session, book on Selar or DM us, and show up. Simple as that." />
      <link rel="canonical" href="/booking" />
    </Helmet>
    <Navbar />

    <section className="relative pt-28 md:pt-36 pb-16 px-4 md:px-8 overflow-hidden">
      <FloatingDecor className="opacity-50" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">how to book</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-3 leading-[1.0] text-balance">
          Booking is a soft <span className="italic">yes.</span>
        </h1>
        <p className="mt-5 text-ink/75 text-lg max-w-2xl mx-auto">
          Four steps. No friction. We've made it as easy as breathing in.
        </p>
      </div>
    </section>

    {/* Steps */}
    <section className="px-4 md:px-8 pb-12">
      <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const tones = ["bg-terracotta text-cream", "bg-sage text-cream", "bg-peach text-ink", "bg-forest text-cream"];
          return (
            <div key={i} className={`${tones[i]} rounded-3xl p-6 shadow-soft relative overflow-hidden`}>
              <div className="text-6xl font-display opacity-25 absolute top-3 right-5">{i + 1}</div>
              <Icon className="w-8 h-8" />
              <p className="font-display text-2xl mt-6">{s.title}</p>
              <p className="text-sm opacity-90 mt-2 leading-relaxed">{s.body}</p>
            </div>
          );
        })}
      </div>
    </section>

    {/* Live event quick-links */}
    <section className="px-4 md:px-8 pb-16 md:pb-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">Book a June session now</h2>
        <div className="space-y-3">
          {JUNE_EVENTS.map((e) => (
            <a
              key={e.id}
              href={e.selarUrl}
              target="_blank" rel="noreferrer noopener"
              className="group flex items-center gap-4 rounded-2xl bg-card border-2 border-forest/10 p-4 hover:border-terracotta hover:shadow-soft transition-all"
            >
              <img src={e.image} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover" loading="lazy" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-terracotta">{String(e.day).padStart(2,"0")} JUN · {e.slot}</p>
                <p className="font-display text-xl text-ink truncate">{e.title}</p>
                <p className="text-sm text-ink/70 truncate">{e.tickets[0].price}{e.tickets.length > 1 ? ` – ${e.tickets[e.tickets.length-1].price}` : ""}</p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-terracotta font-medium group-hover:translate-x-1 transition-transform">
                Book on Selar <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-ink text-cream p-8 sm:p-10 text-center">
          <p className="font-display text-2xl sm:text-3xl">Got a question first?</p>
          <p className="mt-2 text-cream/80">DM us on Instagram — we reply quickly.</p>
          <a
            href={SOCIAL.instagram}
            target="_blank" rel="noreferrer noopener"
            className="inline-flex items-center gap-2 mt-5 rounded-full bg-cream text-ink font-medium px-6 py-3 hover:bg-terracotta hover:text-cream transition-colors"
          >
            <Instagram className="w-4 h-4" /> Message {SOCIAL.handle}
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Booking;
