# Fix Just Move links, Fitness Soirée recap, events order, GitHub deploy check

## 1. Just Move Series page — both parts, working links
- Replace the Part 01 video URL with the one provided: `https://youtu.be/-q5X2UNPJW0?si=GsVYNaeaYkp71S4S` (update the YouTube link and the embed URL in `src/data/events.ts`).
- On `/just-move`, keep the Part 02 featured recording and add a full Part 01 video embed in the same card style directly below it, each with its own title and "Watch on YouTube" button. Both recordings stay on the page permanently (Part 02 first, Part 01 second).

## 2. Fitness Soirée recap page (new)
- New page `/fitness-soiree-recap` in the same editorial style as the Tents&Tonic recap: hero, story sections, images, closing links (WhatsApp community, newsletter, Instagram).
- Copy (active tone, brief, from the user's own words): an evening where ladies came together and moved their bodies; they learned about lymphatic drainage, immune health, and the role diet and food play in health; Suefarms — Dr. Sue's organic farm-to-table brand — catered; hosted at TopGolf and Kaspaland at the National Stadium, Abuja. Event date: Saturday, June 20, 2026.
- Photos: copy the three uploaded images into `src/assets/soiree/` as optimized files (site must use real files for GitHub Pages) — the evening group photo, the evening movement collage, and the daytime Pilates Day collage.
- Add Article metadata (title, description, canonical) for search.

## 3. Tents&Tonic recap page
- Delete the closing "P.S. — I'm building something new…" paragraph.
- At the bottom, add a "Check our Fitness Soirée recap" link to `/fitness-soiree-recap`.

## 4. Events page order
- Reorder the past-events list to: TenTS&Tonic first (View recap → `/tents-and-tonic-recap`), Fitness Soirée second (View recap → `/fitness-soiree-recap`), Book Club last. Keep the Just Move feature block on top.

## 5. Small cleanup
- Rename the brochure file `technogym-reform-brochure.pdf` → `technogym-reformer-brochure.pdf` and update the link on the consultation page.

## 6. Deploy to GitHub Pages and verify
- The site already deploys via Git sync + the existing GitHub Actions workflow (`deploy.yml` builds and publishes to balanceee.com.ng, which is currently live with the latest build).
- After the changes build cleanly, confirm the deployment picked them up by checking balanceee.com.ng serves the new recap page and the updated Just Move page; if the live site hasn't refreshed, report exactly that instead of claiming success.

## Verification
- Browser check on the preview: both YouTube embeds load and play on `/just-move`; the Fitness Soirée recap page renders with all three photos; events list order reads Tents&Tonic → Fitness Soirée → Book Club; no P.S. text remains on the Tents&Tonic page.
- Then check the live site for the deployed changes.
