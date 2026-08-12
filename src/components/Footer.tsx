import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Heart, Phone, MessageCircle, Mail } from "lucide-react";
import { SOCIAL, WA_DAILY_CLASS } from "@/data/events";

export const Footer: React.FC = () => (
  <footer className="relative bg-forest text-cream mt-20 overflow-hidden">
    <div className="absolute inset-0 opacity-10" aria-hidden>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-peach blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-terracotta blur-3xl" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-16 grid gap-12 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-display text-3xl">balance<span className="text-peach">_ee</span></span>
        </div>
        <p className="text-cream/80 max-w-xs leading-relaxed">
          A wellness community in Abuja. Daily classes, a specialized programme, special events, and an
          experimental wellness bot in your pocket.
        </p>
      </div>

      <div>
        <h4 className="font-display text-2xl mb-4">Explore</h4>
        <ul className="space-y-2 text-cream/85">
          <li><Link to="/" className="hover:text-peach transition-colors">Home</Link></li>
          <li><Link to="/services" className="hover:text-peach transition-colors">Services</Link></li>
          <li><Link to="/events" className="hover:text-peach transition-colors">Events</Link></li>
          <li><Link to="/event/tents-and-tonic" className="hover:text-peach transition-colors">TenTS&amp;Tonic</Link></li>
          <li><Link to="/wellness-ai" className="hover:text-peach transition-colors">Wellness AI</Link></li>
          <li><Link to="/about" className="hover:text-peach transition-colors">About</Link></li>
          <li><a href={SOCIAL.newsletter} target="_blank" rel="noreferrer noopener" className="hover:text-peach transition-colors">Newsletter</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-2xl mb-4">Stay close</h4>
        <div className="flex flex-wrap gap-2">
          <a
            href={WA_DAILY_CLASS}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-cream text-forest px-5 py-2.5 font-medium hover:bg-peach hover:text-ink transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-5 py-2.5 font-medium hover:bg-cream hover:text-forest transition-colors"
          >
            <Instagram className="w-4 h-4" /> {SOCIAL.handle}
          </a>
          <a
            href={SOCIAL.phoneTel}
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-5 py-2.5 font-medium hover:bg-cream hover:text-forest transition-colors"
          >
            <Phone className="w-4 h-4" /> {SOCIAL.phone}
          </a>
          <a
            href={SOCIAL.emailHref}
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-5 py-2.5 font-medium hover:bg-cream hover:text-forest transition-colors"
          >
            <Mail className="w-4 h-4" /> Email us
          </a>
        </div>
        <p className="mt-6 text-sm text-cream/70">
          Chat on WhatsApp to schedule a custom class or join our daily classes.
        </p>

        <div className="mt-6 rounded-2xl border border-gilt/40 bg-cream/5 p-5">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gilt">letters from the lab</p>
          <p className="mt-2 text-sm text-cream/80 leading-relaxed">
            Notes on movement, mindfulness and what we're building next — straight to your inbox.
          </p>
          <a
            href={SOCIAL.newsletter}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gilt text-ink px-5 py-2.5 font-medium hover:bg-peach transition-colors"
          >
            <Mail className="w-4 h-4" /> Subscribe to the newsletter
          </a>
        </div>
        <p className="mt-8 text-xs text-cream/50 flex items-center gap-1">
          Made with <Heart className="w-3 h-3 fill-peach text-peach" /> · © {new Date().getFullYear()} balance_ee
        </p>
      </div>
    </div>
  </footer>
);
