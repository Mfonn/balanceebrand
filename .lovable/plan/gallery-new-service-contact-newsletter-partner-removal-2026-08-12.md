# Gallery, new service, contact + newsletter, partner removal

## 1. TenTS&Tonic gallery
Add a photo gallery section on the TenTS&Tonic page (`/event/tents-and-tonic`), placed after the third-space section and above the existing Instagram reels.

- 8 uploaded photos go to CDN assets: the poolside movement shot, the aerial mats-by-the-pool shot, the mindfulness talk, the flyer stack, the flyer on the windscreen, the camping/laptop moment, and the two Bioderma product shots.
- Layout: a masonry-style responsive grid with rounded corners, subtle gilt ring, hover zoom, and lightbox on click.
- Captions kept experiential (movement, mindfulness, bazaar, skincare partner) with no partner-organisation credit.
- The `.HEIC` upload can't be rendered in browsers — skipped unless you re-upload it as JPG/PNG.

## 2. New service — wellness activations for spaces
Add a third service card on `/services`, worded for business owners, PR and brand managers without being salesy, e.g.:

> **Wellness activations, hosted in your space** — A designed movement-and-mindfulness moment for your hotel, office, showroom, launch or retreat: programming, instructors, mats and flow, run end-to-end. For teams, guest experiences and brand moments that should feel considered rather than corporate.

CTA: "Enquire by email" (mailto) plus "Chat on WhatsApp".

## 3. Contact email everywhere
Add `balance.in.motion.lab@gmail.com` to the shared contact data and surface it as a mailto link in the footer, About, Services (all cards), the TenTS&Tonic questions block, and the JSON-LD contact info in `index.html`.

## 4. Remove African Dream Community
Strip every mention while keeping the event's energy intact:
- TenTS&Tonic hero eyebrow becomes a balance_ee-only line (e.g. "a balance_ee wellness camping retreat").
- Remove the collab credit from the event data and the og:description.
- Home page camping blurb rewritten without the partner name.

## 5. Newsletter
Add a newsletter link to `https://balanceinmotionlab.substack.com/` — a subscribe block in the footer ("Letters from the lab") and a small link in the nav-adjacent footer area, opening in a new tab.

## Technical notes
- Files touched: `src/data/events.ts` (SOCIAL adds `email`, `emailHref`, `newsletter`; remove `collab`), `src/pages/TentsAndTonic.tsx`, `src/pages/Services.tsx`, `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/components/Footer.tsx`, `index.html`.
- New `src/components/GalleryGrid.tsx` (grid + lightbox, no new dependency).
- Images uploaded via `lovable-assets` so binaries stay out of the repo.
