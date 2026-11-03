# Just Move II recording + copy fixes

## 1. Just Move Part 02 — the latest webinar, in all relevant places
Part 02 (October 2026) is done and on YouTube: https://youtu.be/-1qighMNXUY. The attached artwork reads "Just Move II — Bone Density, the Gym and Your Relationship with Weights".

- **Asset:** copy the attached image into `src/assets/just-move-2026-webinar-2.png` (real file, per the GitHub Pages rule) and optimize it.
- **Data (`src/data/events.ts`):** add Part 02 video + embed URLs; mark Part 02 completed in `JUST_MOVE_PARTS` with its title "Bone Density, the Gym and Your Relationship with Weights"; keep Part 01 URLs intact; Part 03 stays "Coming soon · November 2026" (no invented details).
- **Just Move page (`/just-move`):** featured recording becomes Part 02 (new embed, label "Part 02 · October 2026", title from the artwork, side note themed on bone density and your relationship with weights). Hero artwork swaps to the new image. Part 01 stays watchable: each completed part in the series index links to its own YouTube recording (Part 01 keeps its link, Part 02 gets the new one). Meta description updated.
- **Home page Just Move feature:** new artwork, counter "02 / 03", copy "Parts 01 and 02 are ready to watch. Part 03 arrives in November.", button becomes "Watch Part 02" pointing at the new link.
- **Events page featured card:** "Most recent · October 2026 — Just Move, Part 02" with the new recording link, numeral "02", and the Series page button unchanged.

## 2. Homepage paragraph
Under the first header ("Move with more understanding."), replace the paragraph with exactly: **"Exploring Movement, Education and Experiences"**. Everything else on the homepage stays.

## 3. Events page
Remove the "We showed up." heading entirely. The eyebrow label, the supporting line, event list, featured card and recap links stay as they are.

## 4. Equipment & spaces page
"Reform" → "Reformer": "View the Technogym Reformer brochure" and "A Reformer product brochure…". No other copy changes.

## 5. Verify
- Build check clean.
- Playwright pass over `/`, `/events`, `/just-move`, `/technogym-consultation`: new artwork loads, Part 02 embed/link present, Part 01 link still works, no "We showed up." on /events, no "Reform" (without "er") on the consultation page, and the homepage paragraph reads exactly as requested.
