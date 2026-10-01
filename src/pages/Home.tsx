import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { Button } from "@/components/ui/button";
import { JUST_MOVE_VIDEO_URL, SOCIAL, WA_PILATES } from "@/data/events";
import justMoveAsset from "@/assets/just-move-2026-webinar.png";
import towerAsset from "@/assets/studio/studio-tower-wide.jpg";
import reformerAsset from "@/assets/studio/studio-reformer-wide.jpg";

const Home: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>balance_ee — Movement Education, Pilates & Wellness in Abuja</title>
      <meta name="description" content="Watch the Just Move webinar series, schedule reformer and tower Pilates in Abuja, and explore thoughtful movement experiences by balance_ee." />
      <link rel="canonical" href="/" />
    </Helmet>
    <Navbar />

    <main>
      <section className="px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-7xl border-t border-ink/25 pt-5">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-terracotta">Movement · Education · Experiences</p>
                <h1 className="mt-7 max-w-5xl font-display text-6xl leading-[0.88] sm:text-8xl md:text-9xl lg:text-[8.5rem]">
                  Move with more<br /><span className="italic text-terracotta">understanding.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="max-w-md text-lg leading-relaxed text-ink/65">
                  balance_ee explores how real bodies move—through education, practice and experiences that stay with you.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild variant="editorial" size="lg"><Link to="/just-move">Enter Just Move <ArrowRight /></Link></Button>
                  <Button asChild variant="editorial-outline" size="lg"><Link to="/events">Past events</Link></Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-0 bg-ink text-cream lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <img src={justMoveAsset} alt="Just Move 2026 webinar artwork: hormones, habits and moving through life" className="aspect-[4/3] h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={100} className="flex flex-col justify-between gap-16 border-l border-cream/15 p-7 lg:col-span-5 md:p-10 lg:p-12">
            <div>
              <div className="flex items-center justify-between border-b border-cream/20 pb-4">
                <p className="text-xs uppercase tracking-[0.24em] text-peach">Just Move Series</p>
                <span className="text-xs text-cream/50">01 / 03</span>
              </div>
              <h2 className="mt-8 font-display text-5xl leading-[0.95] sm:text-6xl">A three-part conversation about movement in real life.</h2>
              <p className="mt-6 max-w-xl leading-relaxed text-cream/65">Part 01 is ready to watch. Parts 02 and 03 continue in October and November.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-cream text-ink hover:bg-terracotta hover:text-cream" size="lg"><a href={JUST_MOVE_VIDEO_URL} target="_blank" rel="noreferrer noopener"><Play /> Watch Part 01</a></Button>
              <Button asChild variant="outline" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink" size="lg"><Link to="/just-move">See the full series</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/20 bg-card px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.24em] text-terracotta">Movement practice</p>
            <h2 className="mt-3 font-display text-5xl leading-none">Pilates, by appointment.</h2>
          </Reveal>
          <Reveal delay={70} className="lg:col-span-5">
            <p className="leading-relaxed text-ink/65">Reformer and tower Pilates are available to schedule around your goals, experience and physical needs.</p>
            <Button asChild variant="editorial" className="mt-6" size="lg"><a href={WA_PILATES} target="_blank" rel="noreferrer noopener"><MessageCircle /> Schedule on WhatsApp</a></Button>
          </Reveal>
          <Reveal delay={130} className="grid grid-cols-2 gap-2 lg:col-span-4">
            <figure><img src={towerAsset} alt="Tower Pilates studio" className="aspect-square w-full object-cover" /><figcaption className="mt-2 text-[10px] uppercase tracking-[0.16em] text-ink/50">Tower</figcaption></figure>
            <figure><img src={reformerAsset} alt="Reformer Pilates studio" className="aspect-square w-full object-cover" /><figcaption className="mt-2 text-[10px] uppercase tracking-[0.16em] text-ink/50">Reformer</figcaption></figure>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12">
          <Reveal className="border border-ink/20 p-8 md:col-span-5 md:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-terracotta">The archive</p>
            <h2 className="mt-5 font-display text-5xl leading-none sm:text-6xl">Past events, still in motion.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink/65">Revisit the conversations, soirées and shared experiences that shaped the community.</p>
            <Button asChild variant="editorial-outline" className="mt-8" size="lg"><Link to="/events">Explore the archive <ArrowRight /></Link></Button>
          </Reveal>
          <Reveal delay={80} className="bg-terracotta p-8 text-cream md:col-span-7 md:p-12">
            <div className="flex h-full flex-col justify-between gap-20">
              <div><p className="text-xs uppercase tracking-[0.24em] text-peach">Taking shape</p><h2 className="mt-5 max-w-2xl font-display text-5xl leading-none sm:text-6xl">The next layer of movement is being built quietly.</h2></div>
              <p className="max-w-xl leading-relaxed text-cream/80">Better guidance. Better spaces. A more connected way to support the body. More when it is ready.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/20 px-4 py-16 md:px-8 md:py-20">
        <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div><p className="text-xs uppercase tracking-[0.24em] text-terracotta">Stay close</p><h2 className="mt-3 font-display text-5xl">Join the conversation between events.</h2></div>
          <div className="flex flex-wrap gap-3 lg:justify-end"><Button asChild variant="editorial"><a href={SOCIAL.communityGroup} target="_blank" rel="noreferrer noopener">Join the WhatsApp community</a></Button><Button asChild variant="editorial-outline"><a href={SOCIAL.newsletter} target="_blank" rel="noreferrer noopener">Subscribe to the newsletter</a></Button></div>
        </Reveal>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
