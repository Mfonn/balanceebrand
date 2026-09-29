import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MessageCircle, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { Button } from "@/components/ui/button";
import { JUST_MOVE_VIDEO_URL, SOCIAL, WA_PILATES } from "@/data/events";
import towerDarkAsset from "@/assets/studio/studio-tower-dark.jpg.asset.json";
import towerWideAsset from "@/assets/studio/studio-tower-wide.jpg.asset.json";
import reformerEntryAsset from "@/assets/studio/studio-reformer-entry.jpg.asset.json";
import reformerWideAsset from "@/assets/studio/studio-reformer-wide.jpg.asset.json";

const Home: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>balance_ee — Pilates, Movement Education & Wellness in Abuja</title>
      <meta name="description" content="Schedule reformer and tower Pilates in Abuja, watch the Just Move webinar series, and explore thoughtful movement experiences by balance_ee." />
      <link rel="canonical" href="/" />
    </Helmet>
    <Navbar />

    <main>
      <section className="px-4 pb-14 pt-24 md:px-8 md:pb-24 md:pt-28">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-3 md:gap-5">
          <Reveal className="col-span-12 border-t border-ink/30 pt-5 lg:col-span-5 lg:flex lg:min-h-[680px] lg:flex-col lg:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-terracotta">Movement · Education · Abuja</p>
              <h1 className="mt-7 max-w-xl font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-8xl">
                Movement,<br /><span className="italic">considered.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
                Reformer and tower Pilates, movement education, and experiences built for the way real bodies live.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="editorial" size="lg"><a href={WA_PILATES} target="_blank" rel="noreferrer noopener">Schedule Pilates <ArrowRight /></a></Button>
              <Button asChild variant="editorial-outline" size="lg"><Link to="/just-move">Explore Just Move</Link></Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="col-span-12 lg:col-span-7">
            <div className="group relative min-h-[520px] overflow-hidden rounded-t-[11rem] border border-ink/15 md:min-h-[680px]">
              <img src={towerDarkAsset.url} alt="Tower Pilates studio with illuminated stone arches in Abuja" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-6 text-cream md:p-9">
                <div><p className="text-[10px] uppercase tracking-[0.24em] text-peach">Private sessions available</p><p className="mt-2 font-display text-3xl md:text-4xl">Refine your form. Find your centre.</p></div>
                <span className="hidden h-12 w-12 items-center justify-center border border-cream/40 sm:flex"><ArrowUpRight /></span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="col-span-12 bg-ink p-7 text-cream md:col-span-7 md:p-10">
            <div className="flex h-full flex-col justify-between gap-12">
              <div className="flex items-center justify-between border-b border-cream/20 pb-4">
                <p className="text-xs uppercase tracking-[0.24em] text-peach">Just Move · Three-part series</p>
                <span className="text-xs text-cream/50">Sep—Nov 2026</span>
              </div>
              <div>
                <p className="max-w-2xl font-display text-4xl leading-tight sm:text-6xl">Fitness is a system, not a stack of workouts.</p>
                <p className="mt-5 max-w-2xl leading-relaxed text-cream/65">Part 01 is now available. Parts 02 and 03 continue the conversation in October and November.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="bg-cream text-ink hover:bg-terracotta hover:text-cream" size="lg"><a href={JUST_MOVE_VIDEO_URL} target="_blank" rel="noreferrer noopener"><Play /> Watch Part 01</a></Button>
                  <Button asChild variant="outline" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink" size="lg"><Link to="/just-move">View the series</Link></Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="col-span-12 border border-ink/20 bg-card p-7 md:col-span-5 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-terracotta">Series index</p>
            <div className="mt-8 divide-y divide-ink/20 border-y border-ink/20">
              {[['01','September','Watch now'],['02','October','Coming soon'],['03','November','Coming soon']].map(([number, month, status]) => (
                <div key={number} className="grid grid-cols-[48px_1fr_auto] items-center py-5">
                  <span className="font-display text-3xl text-terracotta">{number}</span><span className="text-sm">{month} 2026</span><span className="text-[10px] uppercase tracking-[0.16em] text-ink/50">{status}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/20 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal><div className="grid gap-6 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="text-xs uppercase tracking-[0.24em] text-terracotta">Reformer + Tower Pilates</p><h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-7xl">Precision, strength and control.</h2></div><p className="max-w-md text-ink/65 lg:col-span-5">Schedule around your goals, experience and physical needs. Tell us which format you are interested in and we will guide the next step.</p></div></Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal><div className="group relative aspect-[4/3] overflow-hidden"><img src={towerWideAsset.url} alt="Tower Pilates equipment in a softly lit Abuja studio" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /><p className="absolute bottom-5 left-5 font-display text-4xl text-cream">Tower Pilates</p></div></Reveal>
            <Reveal delay={90}><div className="group relative aspect-[4/3] overflow-hidden"><img src={reformerWideAsset.url} alt="Wood reformer Pilates equipment in a modern Abuja studio" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /><p className="absolute bottom-5 left-5 font-display text-4xl text-cream">Reformer Pilates</p></div></Reveal>
          </div>
          <Reveal className="mt-7 flex flex-col justify-between gap-5 border-t border-ink/25 pt-6 sm:flex-row sm:items-center"><p className="max-w-xl text-sm leading-relaxed text-ink/65">Your enquiry can include your preferred date, location, goals, physical limitations and experience level.</p><Button asChild variant="editorial" size="lg"><a href={WA_PILATES} target="_blank" rel="noreferrer noopener"><MessageCircle /> Schedule on WhatsApp</a></Button></Reveal>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-5"><img src={reformerEntryAsset.url} alt="Warm wood reformer Pilates studio interior" className="h-full min-h-[440px] w-full object-cover" /></Reveal>
          <Reveal delay={80} className="bg-terracotta p-8 text-cream md:col-span-7 md:p-12 lg:p-16">
            <div className="flex h-full flex-col justify-between gap-20">
              <div><p className="text-xs uppercase tracking-[0.24em] text-peach">In development</p><h2 className="mt-4 max-w-2xl font-display text-5xl leading-none sm:text-6xl">Movement support is becoming more intelligent—and more considered.</h2></div>
              <p className="max-w-xl leading-relaxed text-cream/80">We are exploring how better guidance and better-designed training environments can help people move with more confidence. More when it is ready.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-card px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Reveal><p className="text-xs uppercase tracking-[0.24em] text-terracotta">The archive</p><h2 className="mt-3 font-display text-5xl">Past events, held properly.</h2><Button asChild variant="editorial-outline" className="mt-7" size="lg"><Link to="/events">Explore the archive <ArrowRight /></Link></Button></Reveal>
          <Reveal delay={80} className="border-l border-ink/20 pl-6 lg:col-span-2"><p className="max-w-2xl text-xl leading-relaxed text-ink/65">From intimate conversations to full weekends away, the archive holds the gatherings that shaped this community.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="editorial"><a href={SOCIAL.communityGroup} target="_blank" rel="noreferrer noopener">Join the community</a></Button><Button asChild variant="editorial-outline"><a href={SOCIAL.newsletter} target="_blank" rel="noreferrer noopener">Read the newsletter</a></Button></div></Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
