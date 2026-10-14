# Technogym equipment and space consultation page

## Goal
Add a dedicated, mobile-first equipment and fitness-space consultation page using the uploaded Technogym notes, brochure, and photographs. Keep the existing Home, Events, and Just Move journeys intact; the new page is reachable from both the main menu and footer.

## Experience
- Build the requested whiteboard-inspired page with a restrained dot-grid, pinned-note feel, hand-drawn accents, playful but polished typography, and reduced-motion support.
- Present the health-oriented case for strength training, the three Technogym selection principles, and the “Start with your why” interactive flow.
- Add five selectable equipment groups (strength, endurance, functional training, joints, restore/alignment) with the supplied copy, goal prompts, group-specific consultation entry, previous/next controls, keyboard escape, focus handling, and URL hashes.
- Add a consultation form with the requested contact, venue type, goal, space, budget, optional message, and group-interest fields. Validate on the page; provide a WhatsApp message prefilled with answers, an email alternative, and a clear completion state.
- Include the requested affiliate commission disclosure and the supplied positioning about health, strength, bone density, muscle and longevity. Avoid inventing product performance claims, prices, or awards.
- Add a link to the uploaded Technogym Reform brochure; identify it as the Reform brochure rather than suggesting it is a complete catalogue. Other catalogue products can be added when supplied.

## Uploaded media
- Use only the user-provided product and space images and the supplied Reform brochure; no generated or stock imagery and no recreated Technogym logo.
- Prepare the provided phone-screen captures for web display by cropping interface chrome where feasible and compressing them for mobile loading; retain the original product imagery and accessible alt text.
- Keep app media as real project files under `src/assets` for compatibility with GitHub Pages.

## Technical notes
- Add a dedicated page and route, and add its link to the shared desktop/mobile navigation and footer.
- Keep consultation state and the five group definitions local to the new page or a focused page-specific module; no backend is needed.
- Use existing design-system tokens and button components; use Zod validation and make interactions keyboard accessible.
- Record the new page/navigation architecture in the root `AGENTS.md` before implementation is complete.
- Validate the new page on mobile and desktop, check all uploaded image and brochure paths, run the project checks, and confirm no regressions on the existing primary pages.
