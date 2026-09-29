import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { Button } from "@/components/ui/button";
import { PAST_EVENTS, JUST_MOVE_VIDEO_URL } from "@/data/events";

const EventsPage: React.FC = () => {
  const visibleEvents = PAST_EVENTS.filter((event) => event.id !== "just-move");
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet><title>Events Archive — balance_ee Abuja</title><meta name="description" content="Explore past balance_ee movement and wellness gatherings in Abuja, plus the completed Just Move webinar." /><link rel="canonical" href="/events" /></Helmet>
      <Navbar />
      <main>
        <section className="border-b border-ink/20 px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-7xl"><Reveal><p className="text-xs uppercase tracking-[0.24em] text-terracotta">Archive · Abuja</p><div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-end"><h1 className="font-display text-6xl leading-[0.9] sm:text-8xl lg:col-span-8 lg:text-9xl">We showed up.</h1><p className="max-w-md leading-relaxed text-ink/65 lg:col-span-4">A record of conversations, movement sessions and gatherings made for people who wanted to be fully present.</p></div></Reveal></div>
        </section>

        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal><div className="grid overflow-hidden bg-ink text-cream lg:grid-cols-2"><div className="p-8 md:p-12"><p className="text-xs uppercase tracking-[0.24em] text-peach">Most recent · September 2026</p><h2 className="mt-4 font-display text-5xl">Just Move, Part 01</h2><p className="mt-5 max-w-xl leading-relaxed text-cream/65">The opening conversation in a three-part series on seeing fitness as a connected system.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="bg-cream text-ink hover:bg-terracotta hover:text-cream"><a href={JUST_MOVE_VIDEO_URL} target="_blank" rel="noreferrer noopener"><Play /> Watch recording</a></Button><Button asChild variant="outline" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink"><Link to="/just-move">Series page <ArrowRight /></Link></Button></div></div><div className="flex min-h-[320px] items-center justify-center bg-terracotta p-8"><span className="font-display text-[10rem] leading-none text-cream/85">01</span></div></div></Reveal>

            <div className="mt-16 border-t border-ink/25">
              {visibleEvents.map((event, index) => {
                const recapLink = event.id === "tents-and-tonic" ? "/tents-and-tonic-recap" : undefined;
                return <Reveal key={event.id} delay={index * 70}><article className="grid gap-6 border-b border-ink/20 py-8 md:grid-cols-[180px_1fr_auto] md:items-center"><img src={event.image} alt="" className="aspect-[4/3] w-full object-cover grayscale transition duration-500 hover:grayscale-0" /><div><p className="text-[10px] uppercase tracking-[0.2em] text-terracotta">{event.date}</p><h2 className="mt-2 font-display text-4xl">{event.title}</h2><p className="mt-2 text-sm text-ink/60">{event.tagline}</p></div>{recapLink ? <Link to={recapLink} className="inline-flex items-center gap-2 text-sm font-medium">View recap <ArrowUpRight className="h-4 w-4" /></Link> : <span className="text-xs uppercase tracking-[0.18em] text-ink/40">Past event</span>}</article></Reveal>;
              })}
              <Reveal delay={150}><article className="grid gap-6 border-b border-ink/20 py-8 md:grid-cols-[180px_1fr_auto] md:items-center"><div className="flex aspect-[4/3] items-center justify-center bg-terracotta font-display text-5xl text-cream">T&amp;T</div><div><p className="text-[10px] uppercase tracking-[0.2em] text-terracotta">31 July – 2 August 2026</p><h2 className="mt-2 font-display text-4xl">TenTS&amp;Tonic</h2><p className="mt-2 text-sm text-ink/60">A wellness camping weekend in Abuja.</p></div><Link to="/tents-and-tonic-recap" className="inline-flex items-center gap-2 text-sm font-medium">View recap <ArrowUpRight className="h-4 w-4" /></Link></article></Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
