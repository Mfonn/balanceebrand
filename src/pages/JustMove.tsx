import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { Button } from "@/components/ui/button";
import { JUST_MOVE_EMBED_URL, JUST_MOVE_PARTS, JUST_MOVE_VIDEO_URL, SOCIAL } from "@/data/events";
import justMoveAsset from "@/assets/just-move-2026-webinar.png";

const JustMove: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet><title>Just Move Series — Movement Education by balance_ee</title><meta name="description" content="Watch Part 01 of the Just Move webinar series and follow the three-part movement education series through November 2026." /><link rel="canonical" href="/just-move" /></Helmet>
    <Navbar />
    <main>
      <section className="px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5"><p className="text-xs font-medium uppercase tracking-[0.24em] text-terracotta">A three-part webinar series</p><h1 className="mt-5 font-display text-7xl leading-[0.88] sm:text-8xl lg:text-9xl">Just<br /><span className="italic text-terracotta">Move.</span></h1><p className="mt-7 max-w-md text-lg leading-relaxed text-ink/65">Fitness is rhythm, mobility, strength and functional capacity working as one connected system.</p></Reveal>
          <Reveal delay={100} className="lg:col-span-7"><img src={justMoveAsset} alt="Just Move 2026 webinar artwork: hormones, habits and moving through life" className="w-full border border-ink/20 object-cover shadow-soft" /></Reveal>
        </div>
      </section>

      <section id="recording" className="border-y border-ink/20 bg-card px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8"><div className="overflow-hidden bg-ink"><div className="aspect-video"><iframe className="h-full w-full" src={JUST_MOVE_EMBED_URL} title="Just Move Part 01 webinar recording" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="flex flex-col gap-5 border-t border-cream/15 p-6 text-cream sm:flex-row sm:items-end sm:justify-between md:p-8"><div><p className="text-[11px] uppercase tracking-[0.24em] text-peach">Part 01 · September 2026</p><h2 className="mt-2 font-display text-4xl">Hormones, habits and moving through life</h2></div><Button asChild variant="outline" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink"><a href={JUST_MOVE_VIDEO_URL} target="_blank" rel="noreferrer noopener">Watch on YouTube <ArrowUpRight /></a></Button></div></div></Reveal>
          <Reveal delay={90} className="lg:col-span-4"><div className="h-full border-t-2 border-terracotta bg-cream p-7 md:p-9"><p className="text-xs uppercase tracking-[0.22em] text-terracotta">Part 01</p><h2 className="mt-5 font-display text-4xl leading-none">Real bodies need a wider view.</h2><p className="mt-5 leading-relaxed text-ink/65">The opening session looks beyond isolated workouts to the cardiovascular, lymphatic, neurological, muscular, skeletal and endocrine systems that shape how we move.</p></div></Reveal>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-cream md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="text-xs uppercase tracking-[0.24em] text-peach">Series index</p><h2 className="mt-3 max-w-3xl font-display text-5xl leading-none sm:text-6xl">Three conversations. One connected body.</h2></Reveal>
          <div className="mt-10 divide-y divide-cream/20 border-y border-cream/20">
            {JUST_MOVE_PARTS.map((part, index) => <Reveal key={part.number} delay={index * 70}><div className="grid gap-4 py-7 sm:grid-cols-[80px_1fr_auto] sm:items-center"><span className="font-display text-4xl text-terracotta">{part.number}</span><div><h3 className="font-display text-3xl">Part {part.number}</h3><p className="mt-1 text-sm text-cream/60">{part.month}</p></div>{part.completed ? <a href="#recording" className="inline-flex items-center gap-2 text-sm font-medium text-peach">Watch recording <Play className="h-4 w-4" /></a> : <span className="text-sm uppercase tracking-[0.18em] text-cream/45">{part.status}</span>}</div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24"><Reveal className="mx-auto max-w-7xl border-l-2 border-terracotta pl-6 md:pl-10"><p className="text-xs uppercase tracking-[0.24em] text-terracotta">Stay in the room</p><h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Get the next chapter when it is ready.</h2><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="editorial" size="lg"><a href={SOCIAL.communityGroup} target="_blank" rel="noreferrer noopener">Join the community</a></Button><Button asChild variant="editorial-outline" size="lg"><a href={SOCIAL.newsletter} target="_blank" rel="noreferrer noopener">Subscribe to the newsletter</a></Button></div></Reveal></section>
    </main>
    <Footer />
  </div>
);

export default JustMove;
