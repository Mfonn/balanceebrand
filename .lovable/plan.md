## 1. Sponsors

- Add **OviaCare** to `SPONSORS` in `src/data/events.ts`:
  - name: "OviaCare"
  - blurb: "Specialist hair & scalp clinic — expert diagnosis, treatment and personalized care for all hair conditions."
  - url: [https://oviacare.org/](https://oviacare.org/)
  - logo: import their SVG from `user-uploads://oviacare_logo.svg` into `src/assets/oviacare-logo.svg` via lovable-assets so the marquee can render the mark next to the name (extend `SponsorMarquee` to render an optional `logo` field).
- **Marquee position fix:** in `SponsorMarquee.tsx`, the top-of-page instance currently sits under the fixed navbar. Add top padding (e.g. `pt-24 md:pt-28`) *only* to the first (top) instance on the Tents & Tonic page, or render it after the navbar with a spacer, so the "In partnership with" label and cards clear the menu. Bottom instance stays as-is.

## 2. Real tent photos (replace AI hero)

- Save the uploaded `user-uploads://tents.png` as a Lovable asset (`src/assets/tent-real-1.png.asset.json`) and swap it in wherever `tents-and-tonic-hero.jpg` is used:
  - `src/data/events.ts` (event.image)
  - Any homepage/calendar tile referencing the old hero
- Use the real tent photo as the hero image on `/event/tents-and-tonic` and the event card.
- If the user sends more tent photos later, we can extend to a small gallery — for now, one real photo everywhere.

## 3. Brand name + CTA copy

- Rename all user-facing "Tents & Tonic" strings to **"TenTS&Tonic"** (keep URL slug `tents-and-tonic` unchanged) across `events.ts`, `TentsAndTonic.tsx`, `Home`, `Footer`, `SEOHead`/meta.
- Replace **"WhatsApp us"** button label on the TenTS&Tonic hero with **"Chat on WhatsApp"**. Audit other pages for the same phrase and normalize.

## 4. Classes page — reduce to two slots

In `src/data/classes.ts`, replace `CLASS_SLOTS` with just:

- `{ id: "s09", label: "9 – 10 AM", period: "morning" }`
- `{ id: "s17", label: "5 – 6 PM", period: "evening" }`

Update Classes page copy that says "Nine 50-minute sessions" → "Two 50-minute sessions each Saturday — morning and evening." (dont put this part)

For the **Personalized / Specialized Programs** cards on `/services`, replace the "Coming soon" CTA with a **"Chat on WhatsApp"** button that opens a pre-filled message about personalized programs.

## 5. Remove "Wander / getting lost" language

- `src/components/Footer.tsx`: rename column heading "Wander" → **"Explore"**.
- `src/pages/NotFound.tsx`: replace "This page wandered off on a long walk." → **"This page isn't here."**
- Grep once more for any stray "wander" copy and remove.

## 6. TenTS&Tonic page copy edits

In `src/pages/TentsAndTonic.tsx`:

- **Programme section:** remove the subheading "Three days, gently structured." — keep just "the programme" eyebrow + a neutral h2 like "The programme."
- **Saturday movement + bazaar card:** change description to "A longer flow, then a wander through the bazaar." (remove ", food, small brands, slow conversation").
- **Third-space section:** remove any "shared meals" phrase; rewrite that sentence to "scenic views and unhurried conversation."
- Remove "shared meals" anywhere else on the page.

## 7. Special guests — restructure

Replace the single Dr. Selma card with an ordered **Special Guests** block (three cards, in this order):

1. **Dr. Eking — Ophthalmology & Movement (Pre-Event Pilates Mixer)** (short placeholder blurb: "Opthamology and Movement." — flag this as placeholder text to confirm.)
2. **Dr. Selma × Bioderma — Skincare** — blurb: "A talk on building a basic skincare routine that actually holds up with an active life."
3. **OviaCare — Stress, Cortisol & Hair Health** — short blurb on "How chronic stress shows up in the scalp", plus Q&A.

## 8. "A word from our sponsor" — Sheer Luxury feature

New sleek section on the TenTS&Tonic page (after Special Guests, before Third Space or before Tickets):

- Two-column layout on desktop, stacked on mobile.
- Left: Sheer Luxury logo/wordmark tile (placeholder wordmark until a logo file is provided) with a soft gilt border.
- Right: eyebrow "a word from our sponsor", h3 "Sheer Luxury Apartments & Suites", then the provided blurb condensed to ~3 short paragraphs (accommodation in Garki & Jabi, in-room amenities, gym/pool/shuttle/conference), followed by the two vision lines styled as pull-quotes:
  - "To be the ideal home lodging business within reach."
  - "Redefining the art of luxury and making that luxury inevitable."
- Whole block links to [https://www.sheerluxuryabuja.com/](https://www.sheerluxuryabuja.com/) (open in new tab). Design: cream card, gilt hairline border, subtle inner shadow, generous whitespace — matching the existing editorial look.

## 9. Instagram gallery — add second reel

- Add the second reel `https://www.instagram.com/reel/DZ5HCM5MO2Z/` alongside the existing one under "a peek". Render as a small 2-column embed grid on desktop, stacked on mobile. Keeps the existing Instagram `embed.js` loader.

## 10. Contact numbers

- Update the "Questions?" line at the bottom of TenTS&Tonic tickets section to show **both** numbers with click-to-call:
  - +234 704 053 8528
  - +234 911 298 4781
- Keep WhatsApp CTA pointing to the existing `+2349112984781` number.

## 11. SEO audience tuning (light touch)

Update the TenTS&Tonic `<meta name="description">` and JSON-LD `audience` (if present) to reflect the intended demographic: health-conscious adults 25–55 in Abuja with leisure income. Copy stays classy — no age numbers in visible page text.

---

### Technical section

- **Assets:** create Lovable asset pointers via `lovable-assets create` for `oviacare_logo.svg` and `tents.png` under `src/assets/`. Import the `.asset.json` pointers.
- **Types:** extend `SPONSORS` item type with optional `logo?: string` and update `SponsorMarquee` to render an `<img>` when present (small, ~24px, inline before the name).
- **Files touched:** `src/data/events.ts`, `src/data/classes.ts`, `src/components/SponsorMarquee.tsx`, `src/components/Footer.tsx`, `src/pages/TentsAndTonic.tsx`, `src/pages/Classes.tsx`, `src/pages/Services.tsx`, `src/pages/NotFound.tsx`, `src/pages/Home.tsx` (if it references old hero/name), `index.html` (title if it says "Tents & Tonic").
- **Non-goals:** no backend, no payments, no route changes, no deploy config changes.

### One thing to confirm before I build

You mentioned Dr. Eking on "Ophthalmology and Movement" — is that the correct specialty (ophthalmology = eyes)? If it should be **orthopaedics**, **osteopathy**, or something else, tell me and I'll use the right word in the special-guest card. I'll use a neutral placeholder blurb either way and you can tweak later. (It is correct)