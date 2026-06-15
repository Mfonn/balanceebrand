import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { AuthSheet } from "./AuthSheet";
import { Mark } from "./balance/Mark";
import { SOCIAL } from "@/data/events";

const NAV_LINKS: { to: string; label: string; badge?: string }[] = [
  { to: "/", label: "Home" },
  { to: "/classes", label: "Classes" },
  { to: "/calendar", label: "Events" },
  { to: "/wellness-ai", label: "Wellness AI", badge: "new" },
  { to: "/learn", label: "Learn" },
  { to: "/about", label: "About" },
];

export const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

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
          scrolled ? "bg-cream/90 backdrop-blur-md shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group" aria-label="balance_ee home">
            <Mark className="w-9 h-9 md:w-11 md:h-11 transition-transform group-hover:rotate-12" />
            <span className="font-display text-xl md:text-2xl text-ink lowercase tracking-tight">
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
                {l.badge && (
                  <span className="text-[9px] uppercase tracking-wider bg-terracotta text-cream rounded-full px-1.5 py-0.5">{l.badge}</span>
                )}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-terracotta scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Link>
            ))}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-2 text-sm font-medium hover:bg-terracotta transition-colors"
              aria-label="balance_ee on Instagram"
            >
              <Instagram className="w-4 h-4" /> DM us
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-ink text-cream"
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
                  {l.badge && (
                    <span className="text-[10px] uppercase tracking-wider bg-terracotta text-cream rounded-full px-2 py-0.5 font-sans">{l.badge}</span>
                  )}
                </Link>
              ))}
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-cream py-4 font-medium"
              >
                <Instagram className="w-5 h-5" /> DM @balance_ee
              </a>
              {user && (
                <button
                  onClick={async () => { await supabase.auth.signOut(); setOpen(false); navigate("/"); }}
                  className="mt-4 text-sm text-ink/60 underline"
                >
                  Sign out
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthSheet isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};
