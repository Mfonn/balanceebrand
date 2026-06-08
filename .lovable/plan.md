## Goal

Transform the remixed event template into the official **balance_ee** website — a joyful, alive wellness brand site where events are one section among several. High-converting, mobile-first, Selar-powered bookings, with June's shimmering calendar as the centerpiece moment.

## Design Direction

- **Palette:** Terracotta `#c4654a`, Peach `#e8a87c`, Sage `#87a878`, Forest `#4a6741` — earthy, warm, grounded
- **Type:** Abril Fatface (display) + Cabin (body) — expressive, joyful, editorial
- **Layout:** Bento-grid homepage — playful mixed-size tiles
- **Feel:** Alive, joyful, refreshing — like stepping into a different universe. Soft floating-flower/leaf animations, shimmer effects, scroll-reveal motion, generous whitespace, organic shapes

## Site Structure (single domain: balanceee.com.ng)

1. **Home** — bento-grid hero with brand intro, animated marquee, featured June calendar tile, "what we do" tiles (Movement · Mind · Community · Events), upcoming events preview, testimonial/scripture moment, CTA to book.
2. **June '26 Calendar** (anchor on home + standalone page `/calendar`)
   - Shimmering calendar grid for the month
   - June 13 (Book Club + Tea Brewing) and June 20 (Golf AM · Fitness Soirée PM) are highlighted with subtle pulse/glow
   - Clicking a highlighted date opens a rich event modal: image, full details (date, vibe, what's included, add-ons, ticket tiers, what to bring) and a **"Book on Selar"** button linking out:
     - Fitness Soirée → `https://selar.com/g335o95n61`
     - Book Club → `https://selar.com/9647447724`
     - Golf (placeholder Selar link — you'll provide)
3. **Why Movement** — editorial section explaining the role of movement in lifestyle (walking, strength, posture, mental clarity)
4. **Learn / FAQ** — accordion content covering:
   - What is Pilates?
   - What is Yoga?
   - What is "the core" and why it matters
   - Glute activation — what & why
   - Feet, posture & stabilization
   - Improving posture through specific exercises
   - Mental clarity & movement
   - Journaling for clarity → outbound link to `fuzzyjournals.org`
   - Why walking matters
   - Why strength training (lifting weights) matters
5. **How to Book a Class** — clear step-by-step (1. Pick a session → 2. DM/Selar → 3. Confirm → 4. Show up). Includes a primary CTA: "DM @balance_ee on Instagram" + Selar link block.
6. **About / Brand** — short brand story, Psalm 46:5 moment, Instagram handle, collaborators (@essence_rebirth, @707_treat).
7. **Footer** — Instagram, contact, scripture, sitemap.

## Booking Flow (no payments wired in app)

- Every event card and calendar modal has a primary **"Book on Selar"** button → opens the corresponding Selar URL in a new tab.
- Secondary CTA: "DM to reserve" → `instagram.com/balance_ee`.
- No card-payment edge function needed. Selar handles checkout end-to-end.

## Calendar Component (the centerpiece)

- Custom-built (replacing the template's event-card list) for **June 2026** — month/year hard-coded for now, easy to swap monthly.
- Days render as grid cells; event days have a **shimmer + soft glow** effect (CSS gradient sweep + animated ring).
- Hover → tile lifts and reveals event chip(s). Click → animated modal with event imagery and Selar CTA.
- Mobile: vertical-friendly grid, large tap targets, sticky "Book now" bar inside open modals.

## What changes from the template

- Replace `/` (Discover) with new branded **Home** bento layout.
- Repurpose Events data: hard-code the three June events with imagery from the PDF (uploaded as Lovable assets). Keep the existing events DB so future months can be added through the existing admin/create flow, but the public site reads from a curated highlight.
- Remove visible "Create Event / My Events / Admin" nav for public visitors. Keep these routes alive but only show them to signed-in admins (using the existing `user_roles` pattern; you'll be set as admin manually).
- Rip out Google-Maps location dependency from public pages (events show location text only).
- Rewrite Navbar with new brand: small flower/smile mark, links → Home · Calendar · Learn · Booking · About.
- Replace all `#FA76FF` / black-white tokens with the new terracotta+sage design system in `index.css` and `tailwind.config.ts`.
- Add motion: framer-motion for scroll reveals, marquees, modal transitions, floating decorative SVGs (flowers, leaves, sparkles).

## Content Assets

- Extract the 3 event poster images from your PDF and upload via lovable-assets for the calendar/modals.
- Generate a few decorative SVG botanicals (flowers, sprigs, sun) for the bento tiles and section borders.

## Publishing & Domain

- After build, you'll click **Publish** in the editor (top right) — that creates the `.lovable.app` URL.
- Then in **Project Settings → Domains → Connect Domain**, point `balanceee.com.ng` to the published site. DNS instructions are shown there.
- For GitHub: open the GitHub menu (top right) → **Connect to GitHub** → Lovable will sync the repo automatically on every change. No manual push needed from me.

## Technical Notes

- Stack stays: React + Vite + Tailwind + shadcn + Lovable Cloud.
- Design tokens (HSL) added to `index.css`: `--terracotta`, `--peach`, `--sage`, `--forest`, plus gradients and shadows.
- Fonts loaded via Google Fonts link (Abril Fatface + Cabin).
- Calendar is a standalone component (`src/components/JuneCalendar.tsx`) — month config in one place for easy updates next month.
- Selar links in a constants file (`src/data/events.ts`) so you can edit URLs without hunting through components.
- Admin routes (`/admin`, `/create-event`, `/my-events`, `/event/:id/edit`) kept but de-emphasized in nav; require auth+admin role.
- SEO: page-specific titles/meta, OG image from hero, JSON-LD Event schema for the three June events.
- Mobile-first: everything tested at 375px first, scaled up.

## Out of scope (this round)

- Wiring native card payments (Selar handles it).
- Multi-month dynamic calendar driven by DB (June is hard-coded; easy follow-up).
- E-commerce / merch shop.
- Newsletter signup (can add quickly later if you want).

## After you approve

Switch me to build mode and I'll execute in this order: design tokens → fonts → home (bento) → calendar + modals → learn/FAQ → how-to-book → about → footer → mobile polish → SEO.
