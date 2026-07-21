# Refresh plan (v2)

## 1. Landing / hero copy
- Hero tagline: replace "Move, Gather, Rest" → **"Soirées, Book Clubs, Camping"**.
- Remove floral/flowery decorative icons across the site.
- Delete the "Together, Outside, Soft" section (and its image) from Home.
- Preserve **"Move like you mean it"** and reposition it as the hero eyebrow / secondary line.

## 2. Nav + Services
- Rename top-nav **Classes → Services** (route `/services`; keep `/classes` as alias).
- Services page has three blocks:
  1. **Classes** — existing Saturday schedule + booking flow.
  2. **Events** — links to `/calendar`.
  3. **Personalized & Specialized Programs** — two cards, each opens a **"Coming soon"** state:
     - **8-Week Program**
     - **3-Month Program**
     - Shared description: *"For people recovering from injury or pregnancy, breaking out of long sedentary years, or ready to level up their fitness journey."*

## 3. WhatsApp booking
- Add WhatsApp (`+234 911 298 4781` → `wa.me/2349112984781`) as primary booking/chat channel across `ClassBookingDialog`, `Booking`, `Footer`, `About`, event pages, and Home hero CTA.
- Copy: *"Chat & schedule classes on WhatsApp."*
- Number already lives in `src/data/events.ts` `SOCIAL.whatsapp` — reuse.

## 4. Events data (`src/data/events.ts`)
- Mark **Fitness Soirée** as `status: "past"` (remove `featured`).
- Add new featured event **Tents & Tonic** (July 31 – Aug 2, 2026):
  - id: `tents-and-tonic`
  - Subtitle: *"The Art of Being a Neighbor"*
  - Collab: `@balance_ee × African Dream Community`
  - Location: Abuja
  - Difficulty: Medium · Element: Water
  - Tickets: **Day Pass ₦40,000**, **Full Weekend ₦85,000**
  - Ticket link: `https://www.rekap.africa/e/tentstonic-l8d55`
  - Instagram reference reel: `https://www.instagram.com/reel/Da70aySoQFx/`
  - `featured: true`, `status: "upcoming"`

## 5. Calendar
- Swap `JuneCalendar` → **July 2026** calendar highlighting **July 31** (badge "→ Aug 2").
- Update CalendarPage title/meta from June → July. Featured hero band shows Tents & Tonic.

## 6. Tents & Tonic subpage — `/event/tents-and-tonic`
New route + `src/pages/TentsAndTonic.tsx`:
- **Hero** — poster-style title "The Art of Being a Neighbor", dates, location, Medium/Water chips, Rekap CTA. Aesthetic echoes the uploaded poster (warm sunset tones, cream, deep terracotta serif display, gilt eyebrow). Uploaded image is reference only — will generate a similar warm-tone bell-tent hero via `imagegen`.
- **About** — rainy-season Abuja context, waterproof tents + sleeping pads provided, healthy-stress framing.
- **Programme**:
  - Friday evening movement session
  - Saturday movement session + bazaar
  - Mindfulness: *"building a linear path to your heart's desire from your highest self"*
  - First-timer note for yoga/pilates newcomers
  - **Dr. Selma (Bioderma)** talk on basic skincare + free on-site dermatology assessments
- **Third-space philosophy** — scenic views, real-life interactions over doomscrolling; authentic vs artificial dopamine.
- **Tickets** — two cards: Day Pass ₦40,000 · Full Weekend ₦85,000 → Rekap; WhatsApp secondary.
- **Instagram reel embed** — the reel URL above rendered via Instagram `blockquote` embed + `//www.instagram.com/embed.js`.
- **Sponsors marquee** (top + bottom of page):
  - **Bioderma** — "Biology at the service of dermatology; dermatology-recommended skincare brand." → https://www.instagram.com/biodermaafrica/
  - **Sheer Luxury Apartments & Suites** — "Redefining the art of luxury and making that luxury inevitable; ideal home lodging business within reach." → https://www.sheerluxuryabuja.com/
  - Continuous CSS scroll; each card links out (new tab).

## 7. Reusable component
- `src/components/SponsorMarquee.tsx` — array of `{ name, blurb, url }`, top+bottom variants.

## 8. Fix blank page on balanceee.com.ng
Likely causes + fixes in code:
- Verify `vite.config.ts` `base` — must be `/` (not `/repo-name/`) for a CNAME apex. Fix if wrong.
- Add `public/.nojekyll` so GitHub Pages serves Vite's `_`-prefixed assets.
- Confirm workflow copies `dist/index.html` → `dist/404.html` (already present).
- Confirm `public/CNAME` = `balanceee.com.ng` (already present).

Instructions for the user (in the closing message, not code):
- In the GitHub repo → **Settings → Pages** set **Source: GitHub Actions** (not "Deploy from a branch").
- DNS on `balanceee.com.ng`: four apex A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` CNAME → `<username>.github.io`.
- Wait for "DNS check successful" then tick **Enforce HTTPS**.

## 9. SEO
- Refresh `index.html` title/description/OG to mention Tents & Tonic + Abuja camping wellness retreat.
- Per-route `SEOHead` on Tents & Tonic page.

## Files touched
- Edit: `src/pages/Home.tsx`, `src/components/Navbar.tsx`, `src/data/events.ts`, `src/App.tsx`, `src/pages/CalendarPage.tsx`, `src/components/balance/JuneCalendar.tsx` (→ July), `src/components/balance/ClassBookingDialog.tsx`, `src/pages/Booking.tsx`, `src/components/Footer.tsx`, `src/pages/About.tsx`, `vite.config.ts`, `index.html`.
- Create: `src/pages/Services.tsx`, `src/pages/TentsAndTonic.tsx`, `src/components/SponsorMarquee.tsx`, `public/.nojekyll`.
- Generate: hero image for Tents & Tonic (warm-toned bell-tent at sunset, no people) via `imagegen`.

## Open items (non-blocking; placeholders will ship)
1. Sponsor logos — none provided; I'll render name+blurb typographic cards. Drop PNGs anytime and I'll swap them in.
2. Additional Instagram reels beyond the one you sent — send more URLs and I'll add them to the embed row.
