# Slim down TenTS&Tonic, show the email address

## 1. Email written out
Everywhere the email appears, show the full address as visible text instead of a label:
- Footer: "Email us" becomes `balance.in.motion.lab@gmail.com` (still clickable).
- About, Services (all three offerings), and the recap page questions block: address shown in full.
- The wellness-activation enquiry button keeps its wording but the address is printed beside it.

## 2. TenTS&Tonic becomes a recap only
The retreat has happened, so the event page turns into a pure recap:
- Keep: the recap headline and short story of the weekend, the photo gallery, the Instagram reel, and a thank-you to the sponsors (Sheer Luxury, Bioderma, OviaCare) with their links.
- Remove: ticket tiers and all "Book on Rekap" links, the programme cards, the special-guest line-up, the difficulty/element badges, the countdown, and the "questions, call us" block's event framing (contact details stay, worded generally).
- Page title and description change to a recap wording, e.g. "TenTS&Tonic Recap — a wellness camping weekend in Abuja".

## 3. One button on the homepage
- Remove the large TenTS&Tonic feature section (photo, headline, blurb, ticket links) and the countdown tile from the homepage.
- In their place, a single clear button: **TenTS&Tonic Recap**, which opens the recap gallery page.

## 4. Remove the retreat from everywhere else
- Footer: drop the TenTS&Tonic link.
- Events page: drop the TenTS&Tonic cards and the retreat wording in the page description; the page keeps the past gatherings (Fitness Soirée, Book Club) and points to the daily classes and specialized programme.
- Site title and description: back to "Abuja Yoga, Pilates & Wellness — balance_ee" with no retreat mention; the retreat keyword comes out of the keyword list and the event listing data used by search engines.

## 5. Confirming the earlier round
Already in place from the last update and staying: the photo gallery of the weekend, the wellness-activation service for spaces and brands, the newsletter subscribe block, and the complete removal of African Dream Community (including the reel that credited them). The gallery moves with the recap page.

## Technical notes
- Files touched: `src/pages/TentsAndTonic.tsx` (reduced to recap + gallery + sponsor thanks), `src/pages/Home.tsx`, `src/pages/CalendarPage.tsx`, `src/components/Footer.tsx`, `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/data/events.ts` (event marked past, ticket/booking fields unused), `index.html` (title, description, keywords, JSON-LD Event block removed).
- Route: `/event/tents-and-tonic` stays working and a `/tents-and-tonic-recap` alias points at the same page so the button URL reads clearly.
- `EventCountdown` usage on the homepage is removed; the component itself stays for future events.
