## Goal
Strip the AI-generated copy and stock imagery, make balance_ee feel authentic, add real Saturday class booking, refresh June events around the Fitness Soirée, surface the new AI wellness chatbot, and elevate the UI to feel alive — futuristic-minimal-luxury with a happy, fun pulse.

## 1. Content & copy cleanup (authenticity pass)
- Sweep every page (`Home`, `About`, `Learn`, `Booking`, `CalendarPage`, `Footer`, hero/marquee) and remove generic AI phrasing, em-dash stacks, and filler adjectives. Rewrite in balance_ee's voice: warm, grounded, Lagos-real, second-person, short sentences.
- Remove the "God is within her, she will not fail" scripture block entirely (delete `SCRIPTURE` from `src/data/events.ts` and any usage).
- Replace AI-illustrated decor / fake event imagery with neutral, brand-aligned visuals: soft gradient/texture backgrounds, photographic placeholders the user can swap, and CSS/SVG art instead of obviously-generated pictures. No invented testimonials, no fake names, no fabricated stats.
- Add a single line near event imagery: "Real event photos coming soon — swap in `src/assets/`".

## 2. Classes (always-on offering)
New first-class concept separate from Events.
- New file `src/data/classes.ts`: 50-minute Saturday sessions at 6–7, 7–8, 8–9, 9–10, 10–11, 11–12, 4–5, 5–6, 6–7. Each slot includes: complimentary healthy herbal tea, 50-minute movement session, 24-hour advance booking rule.
- New page `/classes` (`src/pages/Classes.tsx`):
  - Hero strip explaining the class format (50 min, tea included, Saturdays only, 24h notice).
  - Animated time-slot grid; each card shows time, "X spots away" countdown if <24h, and a Book button.
  - "What to expect", "What to bring", "What's included" tiles.
- New component `src/components/balance/ClassBookingDialog.tsx`:
  - Zod-validated form: name, email, phone, chosen slot (prefilled), Saturday date picker (only Saturdays, only ≥24h out), notes.
  - On submit: build a pre-filled WhatsApp link (`https://wa.me/<number>?text=...`) and an Instagram DM fallback. Validation errors surface as toasts (per project memory).
  - No backend write — confirmation happens over DM, as chosen.
- Add Classes to `Navbar` (between Home and Calendar) and to the Home bento grid as a prominent tile ("Saturdays · 9 sessions · book 24h ahead").
- Need from user: WhatsApp number to wire into the DM link (placeholder used until provided).

## 3. June 2026 events refresh
Update `src/data/events.ts`:
- Remove `golf-meet` entirely (postponed to July).
- Mark `book-club` (June 13) as `status: "past"` with a "Recap coming soon" note; keep on calendar but render dimmed, no booking CTA.
- Promote `fitness-soiree` (June 20) to the headline event everywhere:
  - Larger bento tile on Home with countdown ("X days to Soirée").
  - Sticky "Featured" ribbon on calendar tile + event modal.
  - Dedicated hero band on `/calendar` above the grid.
- `EVENT_DAYS` and `JuneCalendar` updated to reflect the new set (13 dimmed, 20 glowing).

## 4. AI wellness chatbot feature
- New page `/wellness-ai` (`src/pages/WellnessAI.tsx`):
  - Brand-voiced description (written from the brief, since the PartyRock page is gated): "Your pocket wellness companion. Tell it your schedule, energy, goals or what's sore — it builds a workout plan and daily practices shaped to your real life. Built by balance_ee on AWS PartyRock."
  - Feature bullets: personalized plans, mindfulness prompts, recovery suggestions, beginner-friendly.
  - Big "Open the Wellness Bot" button → opens `https://partyrock.aws/u/Balancee` in a new tab.
  - Short "How to use it in 30 seconds" steps.
- Add a Home bento tile + Navbar entry ("Wellness AI" with a small "New" pill).

## 5. Visual upgrade — futuristic minimal luxury, still happy
Direction: more whitespace, fewer decorative blobs, sharper grid, with one or two showpiece motion moments. Keep Terracotta × Sage palette but introduce:
- A near-black ink (`--ink: 20 14% 8%`) and a warm bone (`--bone: 36 30% 96%`) for high-contrast type.
- A single luxury accent: brushed-gold gradient token `--gilt` for subtle dividers, button rings, and the soirée badge.
- Tighter type scale, increased tracking on small caps, Abril Fatface reserved for one statement word per section.

Motion & interaction (using `framer-motion`, already in stack):
- Reveal-on-scroll for every section (staggered fade + 8px rise).
- Magnetic hover on primary buttons.
- A horizontal **drag/auto-scroll slider** for classes on Home and another for "Why balance_ee" pillars.
- Hero: animated text mask + slow parallax on background gradient.
- Calendar event tiles: gilt shimmer sweep + soft pulse on the featured day.
- Cursor-follow soft glow on desktop (disabled on touch).
- Marquee retained but slowed and made monochrome for a luxury feel.
- All animations respect `prefers-reduced-motion`.

## 6. SEO & metadata
- Update `<title>`, meta description, OG/Twitter tags in `index.html` to reflect balance_ee (movement, community, wellness AI), not the template defaults.
- Add JSON-LD `Organization` + `Event` (Fitness Soirée) schema.

## 7. GitHub sync + hosting note
- The user chose "Sync to GitHub only, I'll host elsewhere". I'll prep the codebase for that, but the actual GitHub connection is a one-click step the user does in Lovable (Plus menu → GitHub → Connect project) — I can't do it from the agent side.
- Heads-up surfaced in the closing message: balanceee.com.ng on **GitHub Pages** will work for the static UI, but Lovable Cloud features (any future auth/DB/edge functions) won't run there. Today's build is fully static (DM-based bookings, external links), so GH Pages is fine. I'll add a `public/CNAME` file with `balanceee.com.ng` and a Vite `base: '/'` confirmation so the build is GH-Pages-ready.

## Files touched
- Edit: `src/data/events.ts`, `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/pages/Learn.tsx`, `src/pages/Booking.tsx`, `src/pages/CalendarPage.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/balance/JuneCalendar.tsx`, `src/components/balance/EventModal.tsx`, `src/components/balance/FloatingDecor.tsx`, `src/index.css`, `tailwind.config.ts`, `index.html`, `src/App.tsx`.
- Create: `src/data/classes.ts`, `src/pages/Classes.tsx`, `src/pages/WellnessAI.tsx`, `src/components/balance/ClassBookingDialog.tsx`, `src/components/balance/RevealOnScroll.tsx`, `src/components/balance/DragSlider.tsx`, `public/CNAME`.
- Delete (or replace with neutral assets): the obviously AI-generated images in `src/assets/` (`event-golf.jpg`, decorative ones not reused). Event poster slots become photo placeholders.

## Open items I'll need from you (won't block the build — placeholders used)
- WhatsApp number for class bookings.
- Real Fitness Soirée venue + final pricing confirmation.
- Any real photos you want to drop into `src/assets/` later.
