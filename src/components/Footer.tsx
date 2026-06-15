import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Heart } from "lucide-react";
import { Mark } from "./balance/Mark";
import { SOCIAL } from "@/data/events";

export const Footer: React.FC = () => (
  <footer className="relative bg-forest text-cream mt-20 overflow-hidden">
    <div className="absolute inset-0 opacity-10" aria-hidden>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-peach blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-terracotta blur-3xl" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-16 grid gap-12 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Mark className="w-12 h-12" />
          <span className="font-display text-3xl">balance<span className="text-peach">_ee</span></span>
        </div>
        <p className="text-cream/80 max-w-xs leading-relaxed">
          A community for movement, mind & joyful living. Weekly classes, monthly gatherings, and a wellness bot in your pocket.
        </p>
      </div>

      <div>
        <h4 className="font-display text-2xl mb-4">Wander</h4>
        <ul className="space-y-2 text-cream/85">
          <li><Link to="/" className="hover:text-peach transition-colors">Home</Link></li>
          <li><Link to="/classes" className="hover:text-peach transition-colors">Saturday Classes</Link></li>
          <li><Link to="/calendar" className="hover:text-peach transition-colors">Events</Link></li>
          <li><Link to="/wellness-ai" className="hover:text-peach transition-colors">Wellness AI</Link></li>
          <li><Link to="/learn" className="hover:text-peach transition-colors">Learn</Link></li>
          <li><Link to="/about" className="hover:text-peach transition-colors">About</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-2xl mb-4">Stay close</h4>
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full bg-cream text-forest px-5 py-2.5 font-medium hover:bg-peach hover:text-ink transition-colors"
        >
          <Instagram className="w-4 h-4" /> {SOCIAL.handle}
        </a>
        <p className="mt-6 text-sm text-cream/70">
          DM us to reserve a class, ask a question, or just say hi.
        </p>
        <p className="mt-8 text-xs text-cream/50 flex items-center gap-1">
          Made with <Heart className="w-3 h-3 fill-peach text-peach" /> · © {new Date().getFullYear()} balance_ee
        </p>
      </div>
    </div>
  </footer>
);
