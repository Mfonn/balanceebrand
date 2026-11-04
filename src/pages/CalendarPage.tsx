import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { Button } from "@/components/ui/button";
import { JUST_MOVE_VIDEO_URL, getEventBySlug } from "@/data/events";

const RECAP_LINKS: Record<string, string> = {
  "tents-and-tonic": "/tents-and-tonic-recap",
  "fitness-soiree": "/fitness-soiree-recap",
};

const ORDER = ["tents-and-tonic", "fitness-soiree", "book-club"];

const EventsPage: React.FC = () => {
  const visibleEvents = ORDER.map((id) => getEventBySlug(id)).filter(Boolean);
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet><title>Events Archive — balance_ee Abuja</title><meta name="description" content="Explore past balance_ee movement and wellness gatherings in Abuja, plus the completed Just Move webinar." /><link rel="canonical" href="/events" /></Helmet>
      <Navbar />
      <main>
        <section className="border-b border-ink/20 px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-7xl"><Reveal><p className="text-xs uppercase tracking-[0.24em] text-terracotta">Archive · Abuja</p><p className="mt-4 max-w-md leading-relaxed text-ink/65">A record of conversations, movement sessions and gatherings made for people who wanted to be fully present.</p></Reveal></div>
        </section>

        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal><div className="grid overflow-hidden bg-ink text-cream lg:grid-cols-2"><div className="p-8 md:p-12"><p className="text-xs uppercase tracking-[0.24em] text-peach">Most recent · October 2026</p><h2 className="mt-4 font-display text-5xl">Just Move, Part 02</h2><p className="mt-5 max-w-xl leading-relaxed text-cream/65">A conversation on bone density, the gym and your relationship with weights.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="bg-cream text-ink hover:bg-terracotta hover:text-cream"><a href={JUST_MOVE_VIDEO_URL} target="_blank" rel="noreferrer noopener"><Play /> Watch recording</a></Button><Button asChild variant="outline" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink"><Link to="/just-move">Series page <ArrowRight /></Link></Button></div></div><div className="flex min-h-[320px] items-center justify-center bg-terracotta p-8"><span className="font-display text-[10rem] leading-none text-cream/85">02</span></div></div></Reveal>

            <div className="mt-16 border-t border-ink/25">
              {visibleEvents.map((event, index) => {
                const recapLink = RECAP_LINKS[event.id];
                return <Reveal key={event.id} delay={index * 70}><article className="grid gap-6 border-b border-ink/20 py-8 md:grid-cols-[180px_1fr_auto] md:items-center"><img src={event.image} alt={event.title} className="aspect-[4/3] w-full object-cover grayscale transition duration-500 hover:grayscale-0" /><div><p className="text-[10px] uppercase tracking-[0.2em] text-terracotta">{event.date}</p><h2 className="mt-2 font-display text-4xl">{event.title}</h2><p className="mt-2 text-sm text-ink/60">{event.tagline}</p></div>{recapLink ? <Link to={recapLink} className="inline-flex items-center gap-2 text-sm font-medium">View recap <ArrowUpRight className="h-4 w-4" /></Link> : <span className="text-xs uppercase tracking-[0.18em] text-ink/40">Past event</span>}</article></Reveal>;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
