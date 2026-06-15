import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles, Brain, HeartPulse, MessageSquare, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";

const PARTYROCK_URL = "https://partyrock.aws/u/Balancee";

const WellnessAI: React.FC = () => (
  <div className="min-h-screen bg-cream text-ink">
    <Helmet>
      <title>Wellness AI — balance_ee</title>
      <meta name="description" content="A personal wellness chatbot from balance_ee. Tell it your day, your energy and your goals — it builds a workout plan and gentle practices made for you." />
      <link rel="canonical" href="/wellness-ai" />
    </Helmet>
    <Navbar />

    <section className="relative pt-28 md:pt-36 pb-12 px-4 md:px-8 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-peach/30 via-terracotta/20 to-sage/20 blur-3xl pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink text-cream px-3 py-1 text-[11px] uppercase tracking-[0.25em]">
            <Sparkles className="w-3 h-3 text-peach" /> new · powered by AWS PartyRock
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-5 leading-[1.0] text-balance">
            Your pocket <span className="italic text-terracotta">wellness</span> companion.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 text-ink/75 text-lg max-w-2xl mx-auto">
            Tell it your schedule, your energy, your goals, what's sore — it builds a workout plan and daily practices shaped to your real life.
            Built by balance_ee, free to try.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href={PARTYROCK_URL}
            target="_blank" rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-7 py-3.5 hover:bg-ink transition-colors"
          >
            Open the Wellness Bot <ExternalLink className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>

    {/* Features */}
    <section className="px-4 md:px-8 pb-16">
      <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { Icon: HeartPulse,   t: "Personalised plans", d: "Workouts shaped to your time, level and what's sore." },
          { Icon: Brain,        t: "Mind practices",     d: "Mindfulness, breathwork and journaling prompts that fit your day." },
          { Icon: Sparkles,     t: "Recovery suggestions", d: "Mobility, rest and tea rituals to round it out." },
          { Icon: MessageSquare, t: "Always-on",          d: "Ask anything, anytime. Beginner-friendly answers, real coaching tone." },
        ].map(({ Icon, t, d }, i) => {
          const tones = ["bg-terracotta text-cream", "bg-peach text-ink", "bg-sage text-cream", "bg-forest text-cream"];
          return (
            <Reveal key={t} delay={i * 80}>
              <div className={`${tones[i]} rounded-3xl p-6 h-full shadow-soft`}>
                <Icon className="w-7 h-7" />
                <p className="font-display text-2xl mt-4">{t}</p>
                <p className="opacity-90 mt-2 leading-relaxed text-sm">{d}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>

    {/* How to use */}
    <section className="px-4 md:px-8 pb-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-ink text-cream p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-terracotta/40 blur-3xl pointer-events-none" aria-hidden />
        <p className="text-[11px] uppercase tracking-[0.3em] text-peach">in 30 seconds</p>
        <h2 className="font-display text-4xl md:text-5xl mt-2">How to use it</h2>
        <ol className="mt-6 grid sm:grid-cols-3 gap-5 text-cream/90">
          {[
            "Open the bot and say hi — tell it what kind of week you're having.",
            "Share your goal (energy, strength, sleep, calm) and any limits.",
            "Get a plan you can start today. Adjust it anytime, ask for more.",
          ].map((s, i) => (
            <li key={i} className="rounded-2xl bg-cream/5 border border-cream/10 p-5">
              <p className="font-display text-3xl text-peach">0{i + 1}</p>
              <p className="mt-2 leading-relaxed text-sm">{s}</p>
            </li>
          ))}
        </ol>
        <a
          href={PARTYROCK_URL}
          target="_blank" rel="noreferrer noopener"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream text-ink font-medium px-6 py-3 hover:bg-terracotta hover:text-cream transition-colors"
        >
          Launch the bot <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default WellnessAI;
