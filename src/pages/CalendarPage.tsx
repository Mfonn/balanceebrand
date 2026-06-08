import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JuneCalendar } from "@/components/balance/JuneCalendar";
import { EventModal } from "@/components/balance/EventModal";
import { FloatingDecor } from "@/components/balance/FloatingDecor";
import { BalanceEvent } from "@/data/events";

const CalendarPage: React.FC = () => {
  const [selected, setSelected] = useState<BalanceEvent | null>(null);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>June Calendar — balance_ee</title>
        <meta name="description" content="See what's on at balance_ee this June: book club + tea, ladies' golf meet, and the fitness soirée. Tap a glowing date to book." />
        <link rel="canonical" href="/calendar" />
      </Helmet>
      <Navbar />
      <section className="relative pt-28 md:pt-36 pb-16 px-4 md:px-8 overflow-hidden">
        <FloatingDecor className="opacity-60" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">balance_ee</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink mt-3">June, gently glowing.</h1>
            <p className="mt-4 text-ink/70 max-w-xl mx-auto">Two dates are lit up. Tap to see what we're cooking, and book your spot on Selar.</p>
          </div>
          <JuneCalendar onSelectEvent={setSelected} />
        </div>
      </section>
      <Footer />
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default CalendarPage;
