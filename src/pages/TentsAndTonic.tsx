import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import leadImage from "@/assets/newsletter/lead.webp";
import wellnessHair from "@/assets/newsletter/wellness-hair.webp";
import wellnessDental from "@/assets/newsletter/wellness-dental.webp";
import wellnessSkin from "@/assets/newsletter/wellness-skin.webp";
import campWide from "@/assets/newsletter/camp-wide.webp";
import campPortraitOne from "@/assets/newsletter/camp-portrait-one.webp";
import campPortraitTwo from "@/assets/newsletter/camp-portrait-two.webp";
import movementWide from "@/assets/newsletter/movement-wide.webp";
import movementPortraitOne from "@/assets/newsletter/movement-portrait-one.webp";
import movementPortraitTwo from "@/assets/newsletter/movement-portrait-two.webp";
import premixerWide from "@/assets/newsletter/premixer-wide.webp";
import premixerPortraitOne from "@/assets/newsletter/premixer-portrait-one.webp";
import premixerPortraitTwo from "@/assets/newsletter/premixer-portrait-two.webp";

const ARTICLE_URL = "https://balanceee.com.ng/tents-and-tonic-recap";
const NEWSLETTER_URL = "https://balanceinmotionlab.substack.com/p/taking-care-of-yourself-is-an-act";

type ImageItem = {
  src: string;
  alt: string;
  className?: string;
};

const EditorialImageRow: React.FC<{ images: ImageItem[] }> = ({ images }) => (
  <div className="my-12 grid gap-3 md:grid-cols-3 md:gap-4">
    {images.map((image) => (
      <figure key={image.src} className="overflow-hidden bg-card">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={image.className ?? "aspect-[3/4] h-full w-full object-cover"}
        />
      </figure>
    ))}
  </div>
);

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

const TentsAndTonic: React.FC = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Taking care of yourself is an act of love for the people who love you",
    description: "When you care for yourself, you honour the people who love you.",
    image: `${window.location.origin}${leadImage}`,
    datePublished: "2026-08-13",
    author: { "@type": "Person", name: "Balance" },
    publisher: { "@type": "Organization", name: "balance_ee" },
    mainEntityOfPage: ARTICLE_URL,
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>Taking Care of Yourself Is an Act of Love | balance_ee</title>
        <meta
          name="description"
          content="When you care for yourself, you honour the people who love you. Reflections on movement, wellbeing and the TenTS&Tonic weekend in Abuja."
        />
        <link rel="canonical" href={ARTICLE_URL} />
        <meta property="og:title" content="Taking care of yourself is an act of love for the people who love you" />
        <meta property="og:description" content="When you care for yourself, you honour the people who love you." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={ARTICLE_URL} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <article>
          <header className="px-4 pb-12 pt-28 md:px-8 md:pb-16 md:pt-36">
            <div className="mx-auto max-w-5xl border-t border-ink/25 pt-5">
              <Reveal>
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-9">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-terracotta">Letters from the lab</p>
                    <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
                      Taking care of yourself is an act of love for the people who love you.
                    </h1>
                  </div>
                  <div className="lg:col-span-3 lg:border-l lg:border-ink/20 lg:pl-6">
                    <p className="font-display text-2xl">Balance</p>
                    <p className="mt-1 text-sm text-ink/55">13 August 2026</p>
                    <a
                      href={NEWSLETTER_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-5 inline-flex items-center gap-1 border-b border-terracotta text-sm font-medium"
                    >
                      Read on Substack <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <p className="mt-10 max-w-3xl font-display text-3xl italic leading-tight text-terracotta sm:text-4xl">
                  When you care for yourself, you honour the people who love you.
                </p>
              </Reveal>
            </div>
          </header>

          <Reveal className="px-4 md:px-8">
            <figure className="mx-auto max-w-7xl overflow-hidden bg-card">
              <img
                src={leadImage}
                alt="TenTS&Tonic campsite glowing beneath trees at night"
                className="aspect-[5/3] w-full object-cover"
              />
            </figure>
          </Reveal>

          <div className="px-4 py-14 md:px-8 md:py-20">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="space-y-7 text-lg leading-[1.85] text-ink/80">
                  <p>
                    Taking care of yourself is an act of love for the people who love you. You being healthy, happy and flourishing is a love letter to the people who care for you and whose lives you brighten by existing. You being sick, sad, constrained and unhealthy benefits no one—well, except your opps.
                  </p>
                  <p>
                    Taking care of yourself looks like eating well 80% of the time, moving your body in some form at least three times a week, stepping outside your comfort zone once a day, and letting yourself feel a little genuine <em>eustress</em>—the good kind of stress—across your physical, emotional and mental health. Enrol in an algebra course for the fun of it. Go hiking. Talk to someone who sparks something in you. Or, if you were with us last week, go camping and spend a weekend exploring the daily practices that actually make up beauty and wellbeing.
                  </p>
                  <p>
                    The spirit of TenTS&amp;Tonic was a weekend-long argument for taking care of yourself, told through systemic awareness and practices.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <EditorialImageRow
                  images={[
                    { src: wellnessHair, alt: "OviaCare team speaking with guests about hair and scalp health" },
                    { src: wellnessDental, alt: "A 2Tshie Dental representative speaking with a guest outdoors" },
                    { src: wellnessSkin, alt: "A Bioderma skincare conversation at TenTS&Tonic" },
                  ]}
                />
              </Reveal>

              <Reveal>
                <div className="border-y border-ink/20 py-10">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-terracotta">Beauty, as a system</p>
                  <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                    Every brand that joined us championed a system—a building block of beauty.
                  </h2>
                </div>
              </Reveal>

              <div className="divide-y divide-ink/20">
                <Reveal className="py-10">
                  <h3 className="font-display text-3xl">OviaCare</h3>
                  <p className="mt-4 text-lg leading-[1.85] text-ink/80">
                    Our hair plays a tremendous role in the level of confidence we use to navigate through life. The OviaCare team specifically shed light on alopecia, the role nutrition plays in what grows—or doesn’t—on your scalp, and the hair cycle itself: the phases and cycles your hair goes through. Their highlighted hair range addressed these points beautifully. Feel free to explore their Ayurvedic Hair Loss Therapy, Indiba Scalp Therapy Hair Loss Treatment, Distant Treatment Programme and more at <ExternalTextLink href="https://oviacare.org/service/">OviaCare</ExternalTextLink>.
                  </p>
                </Reveal>

                <Reveal className="py-10">
                  <h3 className="font-display text-3xl">2Tshie Dental</h3>
                  <p className="mt-4 text-lg leading-[1.85] text-ink/80">
                    Our dental health plays a major role in our communication and expression, which ties back to our confidence in taking up space and expressing ourselves. Oral health techniques go beyond brushing twice a day to <em>how</em> we brush, which interventions are recommended, and what actually causes halitosis—it is almost never <em>just</em> about the breath. Whether you are considering braces versus veneers, preventative dental care or facial cosmetic surgery, when it comes to your health, doing it the right way supersedes just doing it. Visit <ExternalTextLink href="https://www.2tshiedentalclinic.com/#/">2Tshie Dental Clinic</ExternalTextLink>.
                  </p>
                </Reveal>

                <Reveal className="py-10">
                  <h3 className="font-display text-3xl">Bioderma</h3>
                  <p className="mt-4 text-lg leading-[1.85] text-ink/80">
                    Our skin is our largest organ, and the least we can do is have a basic routine for checking in and nurturing it. It needn’t be a ten-step routine, a shelf of products or anything excessive. What a skincare routine needs at its foundation is a great first step. Explore the <ExternalTextLink href="https://primadermacenter.com/shop/">PrimaDermaCenter shop</ExternalTextLink>.
                  </p>
                </Reveal>
              </div>

              <Reveal>
                <EditorialImageRow
                  images={[
                    { src: campWide, alt: "Tents and movement mats lit beneath the trees at night", className: "aspect-[3/4] h-full w-full object-cover md:object-center" },
                    { src: campPortraitOne, alt: "A guest settling into a tent during the camping weekend" },
                    { src: campPortraitTwo, alt: "Camping essentials beside a tent in the evening" },
                  ]}
                />
              </Reveal>

              <Reveal>
                <div className="space-y-7 text-lg leading-[1.85] text-ink/80">
                  <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">Then there was the camping itself, which turned out to be its own kind of lesson.</h2>
                  <p>
                    There’s something about packing for a weekend outdoors that resets you before you’ve left the house: deciding what you actually need versus what you’re used to carrying. And then you wake up to air that doesn’t exist inside four walls. Fresh, a little cold, entirely unbothered by your schedule. Being even slightly in the wild does something to people. You could see it shift across faces by the second morning—fewer phones and more presence.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <EditorialImageRow
                  images={[
                    { src: movementWide, alt: "Geese crossing the grass at the outdoor retreat", className: "aspect-[3/4] h-full w-full object-cover" },
                    { src: movementPortraitOne, alt: "Sunset glowing through the trees at TenTS&Tonic" },
                    { src: movementPortraitTwo, alt: "Guests moving together beneath illuminated trees" },
                  ]}
                />
              </Reveal>

              <Reveal>
                <div className="border-l-2 border-terracotta py-2 pl-6 sm:pl-10">
                  <p className="font-display text-4xl leading-tight sm:text-5xl">Movement seems to give people their life back.</p>
                  <div className="mt-6 space-y-6 text-lg leading-[1.85] text-ink/80">
                    <p>Every time I experience someone moving through their first couple of sessions, I watch them start to reclaim something. Control over their body. Control over their path.</p>
                    <p>Watching that shift happen in the people I work with is, genuinely, my favourite part of this journey.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal className="my-14 bg-ink px-7 py-10 text-cream sm:px-10 sm:py-14">
                <p className="font-display text-4xl leading-tight sm:text-5xl">So here’s what I’ll leave you with, since you made it this far.</p>
                <div className="mt-7 space-y-6 text-lg leading-[1.85] text-cream/75">
                  <p>Whatever your version of TenTS&amp;Tonic is—the thing that gets you outside, moving, or just paying attention to yourself for a minute—go do it this week.</p>
                  <p>Not the ambitious version. The eighty-percent, three-times-a-week, one-small-step-outside-your-comfort-zone version. That’s the whole point. Nobody’s keeping score.</p>
                  <p className="font-display text-3xl italic text-peach">Talk soon.</p>
                </div>
              </Reveal>

              <Reveal>
                <aside className="border-y border-ink/20 py-10">
                  <p className="font-display text-3xl italic leading-snug">
                    P.S. — I’m building something new. If you’ve got two minutes and an opinion, <ExternalTextLink href="https://docs.google.com/forms/d/e/1FAIpQLSfYlkJvLvTncmpFuBVQcBy6a09hk1qSTq4AGvME0qP5-DbwNw/viewform?usp=publish-editor">I’d love to hear it</ExternalTextLink>.
                  </p>
                  <p className="mt-7 text-sm leading-relaxed text-ink/60">
                    Balance_ee — Abuja. <a href="https://balanceee.com.ng/" className="underline underline-offset-4">balanceee.com.ng</a> · <ExternalTextLink href="https://www.instagram.com/balance_ee/">@balance_ee</ExternalTextLink> · <ExternalTextLink href="https://www.youtube.com/shorts/muXiYgzoze0">YouTube @Balance_ee</ExternalTextLink>
                  </p>
                </aside>
              </Reveal>

              <Reveal>
                <EditorialImageRow
                  images={[
                    { src: premixerWide, alt: "A TenTS&Tonic programme resting on a car during the pre-mixer", className: "aspect-[3/4] h-full w-full object-cover" },
                    { src: premixerPortraitOne, alt: "Colourful movement mats arranged beside the pool at Sheer Luxury Apartments and Suites" },
                    { src: premixerPortraitTwo, alt: "TenTS&Tonic programmes beside movement mats at the pre-mixer" },
                  ]}
                />
                <p className="text-center text-sm text-ink/60">
                  Pre-mixer hosted at <ExternalTextLink href="https://sheerluxuryabuja.com/">Sheer Luxury Apartments &amp; Suites</ExternalTextLink>
                </p>
              </Reveal>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TentsAndTonic;