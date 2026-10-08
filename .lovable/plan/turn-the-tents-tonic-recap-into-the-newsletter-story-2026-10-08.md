# Turn the TenTS&Tonic recap into the newsletter story

## What will change

- Replace the current `/tents-and-tonic-recap` content with the full article **“Taking care of yourself is an act of love for the people who love you.”**
- Preserve the article’s voice and meaning while correcting obvious spelling, grammar, and punctuation slips.
- Recreate the article’s visual sequence with all 13 published images, including the grouped image rows, directly inside the site’s existing high-end editorial style.
- Keep every meaningful link from the newsletter:
  - OviaCare services
  - 2Tshie Dental
  - PrimaDermaCenter/Bioderma shop
  - the feedback form
  - balance_ee Instagram, YouTube, and website
  - Sheer Luxury Apartments & Suites
- Keep the existing navigation, footer, home page, Events page, Just Move page, colours, typography, and other site content unchanged.

## Page structure

1. Article title, subtitle, author, and original publication date.
2. Opening reflection and lead photograph.
3. TenTS&Tonic wellness-system story with its three-image sequence.
4. Partner sections and their original destination links.
5. Camping reflection with the next three-image sequence.
6. Movement reflection with its three-image sequence.
7. Closing note, feedback-form link, social links, final images, and Sheer Luxury credit.
8. Existing site footer and contact options.

## Technical details

- Download and optimize the newsletter images into `src/assets` so they remain reliable on GitHub Pages instead of depending on temporary or transformed Substack image URLs.
- Reuse the existing recap route and its legacy event URL, so current links continue working.
- Update the recap page’s title, description, canonical URL, and article metadata to match the newsletter story.
- Use semantic article markup, descriptive alternative text, responsive image layouts, lazy loading below the lead image, and accessible external links.
- Remove the recap-only gallery, Instagram embed, partner cards, and sponsor marquee from this page because the newsletter content replaces them.

## Verification

- Check the full article on desktop and mobile widths.
- Confirm all 13 images load, all external links point to the newsletter’s destinations, and no text overlaps or breaks.
- Confirm the existing Home, Events, Just Move, and navigation still behave as before.
- Check the preview build and browser console before completion.