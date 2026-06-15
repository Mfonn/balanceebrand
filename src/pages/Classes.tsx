import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Coffee, Clock, Calendar, Sparkles, Leaf, Sunrise, Sun, Moon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/balance/Reveal";
import { ClassBookingDialog } from "@/components/balance/ClassBookingDialog";
import { CLASS_SLOTS, CLASS_RULES } from "@/data/classes";

const PERIOD_META = {
  morning: { Icon: Sunrise, tone: "bg-peach text-ink", label: "Morning" },
  midday:  { Icon: Sun,     tone: "bg-sage text-cream", label: "Midday" },
  evening: { Icon: Moon,    tone: "bg-forest text-cream", label: "Evening" },
} as const;

const Classes: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [slotId, setSlotId] = useState<string | undefined>();

  const book = (id?: string) => { setSlotId(id); setOpen(true); };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>Saturday Classes — balance_ee</title>
        <meta name="description" content="50-minute Saturday movement classes with a complimentary cup of healthy tea. Nine slots from 6 AM to 7 PM. Book 24 hours ahead." />
        <link rel="canonical" href="/classes" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 px-4 md:px-8 overflow-hidden">
        <div className="absolute -top-20 right-[10%] w-72 h-72 rounded-full bg-peach/40 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute -bottom-32 left-[5%] w-80 h-80 rounded-full bg-sage/30 blur-3xl pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">always on · saturdays</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-3 leading-[1.0] text-balance">
              Move with us — <span className="italic">every Saturday.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-ink/75 text-lg max-w-2xl">
              Nine 50-minute sessions across the day. Each one ends with a complimentary cup of healthy tea and a quiet minute to land.
              Pick a time, book at least 24 hours ahead, show up open.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap gap-2 text-xs">
              <Chip Icon={Clock}>{CLASS_RULES.duration}</Chip>
              <Chip Icon={Calendar}>{CLASS_RULES.day}</Chip>
              <Chip Icon={Coffee}>Tea included</Chip>
              <Chip Icon={Sparkles}>Book {CLASS_RULES.cutoffHours}h ahead</Chip>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Slot grid */}
      <section className="px-4 md:px-8 pb-16">
        <div className="mx-auto max-w-5xl">
          {(["morning", "midday", "evening"] as const).map((period, pIdx) => {
            const meta = PERIOD_META[period];
            const slots = CLASS_SLOTS.filter((s) => s.period === period);
            return (
              <Reveal key={period} delay={pIdx * 100}>
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${meta.tone}`}>
                      <meta.Icon className="w-5 h-5" />
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl text-ink">{meta.label}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {slots.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => book(s.id)}
                        className="group text-left rounded-2xl bg-card border-2 border-border p-5 hover:border-terracotta hover:-translate-y-0.5 hover:shadow-soft transition-all relative overflow-hidden"
                        style={{ animationDelay: `${i * 40}ms` }}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-peach/15 to-transparent pointer-events-none" />
                        <p className="text-[11px] uppercase tracking-wider text-forest/60">Slot</p>
                        <p className="font-display text-3xl text-ink mt-1">{s.label}</p>
                        <p className="text-sm text-ink/70 mt-1">50 min · tea after</p>
                        <p className="mt-4 text-sm font-medium text-terracotta inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Book this slot →
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Format details */}
      <section className="px-4 md:px-8 pb-20">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-4">
          {[
            { Icon: Leaf,     t: "What we do",     d: "A blend of pilates, yoga, mobility and breath. Beginner-friendly, never boring." },
            { Icon: Coffee,   t: "What's included", d: "A 50-minute class, a clean mat space, and a warm cup of healthy herbal tea after." },
            { Icon: Calendar, t: "How to book",     d: "Pick a Saturday and a time, fill the short form, confirm over WhatsApp. 24h lead time keeps it smooth." },
          ].map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="rounded-3xl bg-cream border-2 border-forest/10 p-6 h-full">
                <Icon className="w-7 h-7 text-terracotta" />
                <p className="font-display text-2xl mt-3">{t}</p>
                <p className="text-ink/75 mt-2 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto max-w-5xl mt-8 text-center">
          <button
            onClick={() => book()}
            className="inline-flex items-center gap-2 rounded-full bg-terracotta text-cream font-medium px-7 py-3.5 hover:bg-ink transition-colors"
          >
            Book a class
          </button>
        </div>
      </section>

      <Footer />
      <ClassBookingDialog open={open} onClose={() => setOpen(false)} defaultSlotId={slotId} />
    </div>
  );
};

const Chip: React.FC<{ Icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }> = ({ Icon, children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 text-ink px-3 py-1.5 uppercase tracking-wider">
    <Icon className="w-3.5 h-3.5 text-terracotta" /> {children}
  </span>
);

export default Classes;
