import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { Button } from "@/components/ui/button";
import { SOCIAL } from "@/data/events";
import eveningGroup from "@/assets/soiree/soiree-evening-group.webp";
import eveningMovement from "@/assets/soiree/soiree-evening-movement.webp";
import pilatesDay from "@/assets/soiree/soiree-pilates-day.webp";

const ExternalTextLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-1 border-b border-terracotta font-medium text-ink transition-colors hover:text-terracotta"
  >
    {children} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
  </a>
);

const FitnessSoireeRecap: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>Fitness Soirée Recap — balance_ee Abuja</title>
      <meta name="description" content="An evening of movement, lymphatic drainage, immune health and real food at TopGolf and Kaspaland, National Stadium, Abuja — catered by Suefarms. Relive the Fitness Soirée." />
      <link rel="canonical" href="/fitness-soiree-recap" />
    </Helmet>
    <Navbar />
    <main>
      <article className="mx-auto max-w-4xl px-4 pb-24 pt-28 md:px-8 md:pt-36">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-terracotta">Recap · Abuja</p>
          <h1 className="mt-5 font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl">The Fitness <span className="italic text-terracotta">Soirée.</span></h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">Saturday, June 20, 2026 · TopGolf &amp; Kaspaland, National Stadium</p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">One evening, one waterfront lit up in green, and a room full of women who showed up for themselves.</p>
        </Reveal>

        <Reveal className="mt-12">
          <figure className="overflow-hidden bg-card">
            <img src={eveningGroup} alt="The Fitness Soirée group of ladies posing on their mats beneath the lights at TopGolf and Kaspaland" className="w-full object-cover" />
          </figure>
        </Reveal>

        <Reveal className="mt-14">
          <div className="border-l-2 border-terracotta py-2 pl-6 sm:pl-10">
            <p className="font-display text-4xl leading-tight sm:text-5xl">We moved.</p>
            <div className="mt-6 space-y-6 text-lg leading-[1.85] text-ink/80">
              <p>Ladies came together and put their bodies to work. Mats hit the ground as the lights came on over the water, and every session asked the body to pay attention — visualizing the muscle in use, finding the mind-muscle connection, treating awareness as the missing link.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <figure className="overflow-hidden bg-card">
            <img src={eveningMovement} alt="Ladies moving through evening Pilates and yoga sessions at the Fitness Soirée" className="w-full object-cover" loading="lazy" />
          </figure>
        </Reveal>

        <Reveal className="mt-14">
          <div className="border-l-2 border-terracotta py-2 pl-6 sm:pl-10">
            <p className="font-display text-4xl leading-tight sm:text-5xl">We learned.</p>
            <div className="mt-6 space-y-6 text-lg leading-[1.85] text-ink/80">
              <p>Between sessions, we got specific. How lymphatic drainage helps the body clear what it doesn't need. How immune health is built day to day, not borrowed from a bottle. And the role food plays in all of it — energy, inflammation, recovery.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <figure className="overflow-hidden bg-card">
            <img src={pilatesDay} alt="Daytime Pilates Day session with Essence and Rebirth, stretching and strengthening in the garden" className="w-full object-cover" loading="lazy" />
          </figure>
          <p className="mt-3 text-center text-sm text-ink/60">Pilates Day with <ExternalTextLink href="https://www.instagram.com/essence_rebirth/">@essence_rebirth</ExternalTextLink></p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="border-l-2 border-terracotta py-2 pl-6 sm:pl-10">
            <p className="font-display text-4xl leading-tight sm:text-5xl">We ate well.</p>
            <div className="mt-6 space-y-6 text-lg leading-[1.85] text-ink/80">
              <p>Suefarms — Dr. Sue's organic farm-to-table brand — catered the evening. Real food, grown with intention and served fresh: the same thing we'd just talked through, on a plate.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="my-14 bg-ink px-7 py-10 text-cream sm:px-10 sm:py-14">
          <p className="font-display text-4xl leading-tight sm:text-5xl">Missed this one? Don't miss the next.</p>
          <div className="mt-7 space-y-6 text-lg leading-[1.85] text-cream/75">
            <p>The next gathering is already taking shape. Join the community group so you hear it first — and get the daily tips in the meantime.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="editorial-outline" size="lg" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink"><a href={SOCIAL.communityGroup} target="_blank" rel="noreferrer noopener">Join the community</a></Button>
            <Button asChild variant="editorial-outline" size="lg" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-ink"><a href={SOCIAL.newsletter} target="_blank" rel="noreferrer noopener">Subscribe to the newsletter</a></Button>
          </div>
        </Reveal>

        <Reveal>
          <aside className="border-y border-ink/20 py-10">
            <p className="mt-7 text-sm leading-relaxed text-ink/60">
              Balance_ee — Abuja. <a href="https://balanceee.com.ng/" className="underline underline-offset-4">balanceee.com.ng</a> · <ExternalTextLink href="https://www.instagram.com/balance_ee/">@balance_ee</ExternalTextLink>
            </p>
          </aside>
        </Reveal>
      </article>
    </main>
    <Footer />
  </div>
);

export default FitnessSoireeRecap;
