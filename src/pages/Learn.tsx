import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, BookOpen } from "lucide-react";

const FAQ = [
  { q: "What is Pilates, really?", a: "Pilates is low-impact, precision-based movement that builds deep core strength, mobility and body awareness. Think: long, strong, breath-led. Perfect for posture, recovery and everyday ease." },
  { q: "What is Yoga, and is it for me?", a: "Yoga is a movement-meditation practice that links breath to gentle (or strong) shapes. It calms the nervous system, opens the body and brings you home to yourself. Beginners absolutely belong." },
  { q: "What is 'the core' and why does it matter?", a: "Your core isn't just abs — it's a 360° corset of deep stabilising muscles (transverse abdominis, pelvic floor, diaphragm, multifidus). A strong core protects your back, powers your movement and improves posture." },
  { q: "Glute activation — what & why?", a: "Modern life sits our glutes to sleep. Activating them (bridges, clams, banded walks) wakes up your strongest muscle group — protecting your knees and back, fixing hip pain, and powering every step you take." },
  { q: "What role do feet play in posture & stabilization?", a: "Your feet are your foundation. 26 bones, 33 joints, 100+ muscles per foot. Weak feet = collapsing arches, knee pain, hip imbalance. Strong, mobile feet = better posture from the ground up. Walk barefoot when safe. Spread your toes." },
  { q: "How can I improve my posture through specific exercises?", a: "Chest openers, thoracic rotations, scapular retractions, glute bridges, dead bugs, wall angels. Pair daily — 10 minutes is enough. Your phone screen will fight you; consistency wins." },
  { q: "Mental clarity & movement — what's the link?", a: "Movement increases blood flow to the brain, releases BDNF (brain fertilizer), and processes stress hormones. Even a 20-minute walk is medicine for anxiety and brain fog." },
  { q: "Why should I journal?", a: "Journaling externalises the chaos. It helps you spot patterns, process feelings, and meet yourself with honesty. We recommend a daily 5-minute brain dump — try fuzzyjournals.org for one that feels good in the hand.", link: { label: "Get a journal at fuzzyjournals.org", href: "https://fuzzyjournals.org" } },
  { q: "Why walking?", a: "Walking is the most underrated practice. It regulates blood sugar, lifts mood, supports digestion and gives your nervous system a reset — without taxing recovery. Aim for 7-10k steps; pair with sunlight." },
  { q: "Why lift weights (strength training)?", a: "Strength training builds bone density, lean muscle, metabolic health, hormonal balance and resilience. Especially crucial for women — it prevents osteoporosis, sculpts your body, and makes you feel powerful. Start light, build slow." },
];

const Learn: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>Learn — Movement, Mind & Method · balance_ee</title>
      <meta name="description" content="A friendly library on yoga, pilates, core, glutes, posture, feet, walking, lifting, journaling and mental clarity — by balance_ee." />
      <link rel="canonical" href="/learn" />
    </Helmet>
    <Navbar />

    <section className="relative pt-28 md:pt-36 pb-12 px-4 md:px-8 overflow-hidden">
      <div className="absolute -top-24 right-[8%] w-72 h-72 rounded-full bg-peach/25 blur-3xl pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">learn</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-3 leading-[1.0] text-balance">
          Move smart. <span className="italic">Feel alive.</span>
        </h1>
        <p className="mt-5 text-ink/75 text-lg">
          Tiny lessons on the practices we love. Skim, save, share — and use what helps.
        </p>
      </div>
    </section>

    <section className="px-4 md:px-8 pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`rounded-2xl border-2 border-forest/10 px-5 sm:px-6 bg-card data-[state=open]:bg-peach/15 data-[state=open]:border-terracotta/40 transition-colors`}
            >
              <AccordionTrigger className="font-display text-xl md:text-2xl text-ink hover:no-underline py-5 text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/80 text-base leading-relaxed pb-6">
                <p>{item.a}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex items-center gap-2 text-terracotta font-medium hover:text-ink transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    {item.link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <Footer />
  </div>
);

export default Learn;
