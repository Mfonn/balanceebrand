import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { SOCIAL } from "@/data/events";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/just-move", label: "Just Move Series" },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[2000] transition-all duration-300 ${
          scrolled ? "border-b border-ink/15 bg-cream/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group" aria-label="balance_ee home">
            <span className="font-display text-2xl md:text-3xl text-ink lowercase">
              balance<span className="text-terracotta">_ee</span>
            </span>

          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3 py-2 text-sm font-medium text-ink/80 hover:text-terracotta transition-colors group inline-flex items-center gap-1.5"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-terracotta scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Link>
            ))}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer noopener"
               className="ml-4 inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-terracotta"
              aria-label="balance_ee on Instagram"
            >
              <Instagram className="w-4 h-4" /> DM us
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((o) => !o)}
             className="md:hidden inline-flex h-11 w-11 items-center justify-center border border-ink bg-ink text-cream"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden fixed inset-0 top-16 bg-cream z-[1999] animate-fade-in-down">
            <div className="flex flex-col h-full px-6 pt-6 pb-12 gap-2">
              {NAV_LINKS.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink py-3 border-b border-border opacity-0 animate-fade-in inline-flex items-center gap-2"
                  style={{ animationDelay: `${i * 60}ms`, animationFillMode: "forwards" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer noopener"
                 className="mt-6 inline-flex items-center justify-center gap-2 bg-ink py-4 font-medium text-cream"
              >
                <Instagram className="w-5 h-5" /> DM @balance_ee
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
