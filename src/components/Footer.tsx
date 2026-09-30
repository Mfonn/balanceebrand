import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Phone, MessageCircle, Mail } from "lucide-react";
import { SOCIAL, WA_PILATES } from "@/data/events";

export const Footer: React.FC = () => (
  <footer className="mt-20 overflow-hidden border-t border-cream/15 bg-ink text-cream">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-12 md:px-8 md:py-20">
      <div className="md:col-span-5">
        <div className="flex items-center gap-3 mb-4">
           <span className="font-display text-4xl">balance<span className="text-terracotta">_ee</span></span>
        </div>
        <p className="text-cream/80 max-w-xs leading-relaxed">
          Movement education, Pilates and thoughtful gatherings for real bodies in Abuja.
        </p>
      </div>

      <div className="md:col-span-3">
        <h4 className="font-display text-2xl mb-4">Explore</h4>
        <ul className="space-y-2 text-cream/85">
          <li><Link to="/" className="hover:text-peach transition-colors">Home</Link></li>
          <li><Link to="/events" className="hover:text-peach transition-colors">Events</Link></li>
          <li><Link to="/just-move" className="hover:text-peach transition-colors">Just Move Series</Link></li>
          <li><a href={SOCIAL.newsletter} target="_blank" rel="noreferrer noopener" className="hover:text-peach transition-colors">Newsletter</a></li>
        </ul>
      </div>

      <div className="md:col-span-4">
        <h4 className="font-display text-2xl mb-4">Stay close</h4>
        <div className="flex flex-wrap gap-2">
          <a
            href={WA_PILATES}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-cream px-5 py-2.5 font-medium text-ink transition-colors hover:bg-terracotta hover:text-cream"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 border border-cream/40 px-5 py-2.5 font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            <Instagram className="w-4 h-4" /> {SOCIAL.handle}
          </a>
          <a
            href={SOCIAL.phoneTel}
            className="inline-flex items-center gap-2 border border-cream/40 px-5 py-2.5 font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            <Phone className="w-4 h-4" /> {SOCIAL.phone}
          </a>
          <a
            href={SOCIAL.emailHref}
            className="inline-flex max-w-full items-center gap-2 border border-cream/40 px-5 py-2.5 font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            <Mail className="w-4 h-4" /> {SOCIAL.email}
          </a>
        </div>
        <p className="mt-6 text-sm text-cream/70">
          Chat on WhatsApp to enquire about reformer or tower Pilates.
        </p>

        <div className="mt-6 border-t border-cream/20 pt-5">
          <p className="text-[11px] uppercase tracking-[0.3em] text-peach">the group chat</p>
          <p className="mt-2 text-sm text-cream/80 leading-relaxed">
            Community, daily tips, and the first word on new classes, webinars and events.
          </p>
          <a
            href={SOCIAL.communityGroup}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 border-b border-peach pb-1 font-medium text-peach"
          >
            <MessageCircle className="w-4 h-4" /> Join the community
          </a>
        </div>

        <div className="mt-6 border-t border-cream/20 pt-5">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gilt">letters from the lab</p>
          <p className="mt-2 text-sm text-cream/80 leading-relaxed">
            Notes on movement, mindfulness and what we're building next — straight to your inbox.
          </p>
          <a
            href={SOCIAL.newsletter}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 border-b border-peach pb-1 font-medium text-peach"
          >
            <Mail className="w-4 h-4" /> Subscribe to the newsletter
          </a>
        </div>
        <p className="mt-8 text-xs text-cream/50">
          © {new Date().getFullYear()} balance_ee
        </p>
      </div>
    </div>
  </footer>
);
