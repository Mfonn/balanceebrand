# Darker, simpler balance_ee

## Look and feel
Shift the whole site from cream to a moody mid-tone: deeper warm clay/taupe backgrounds, darker ink text, richer section bands. Terracotta, peach and gilt accents stay so the brand still glows. Cards and sections get slightly deeper surfaces so contrast still reads well on mobile.

Concretely: rework the tokens in `src/index.css` (background, card, muted, border, foreground) toward a warm dark-taupe base, and keep every component on semantic tokens. Replace direct `bg-cream` / `text-ink` usages that would break contrast with token classes as I go.

## Removals
- **Flower mark** — delete the floral `Mark` icon from the navbar, footer and About page; use the `balance_ee` wordmark alone.
- **"Soirées, book clubs, camping"** — remove that phrase from the homepage hero, the calendar/events band and the meta description.
- **Saturday classes** — remove every mention sitewide: the `/classes` page, the Saturday-only slot data and 24h-Saturday rule, the Saturday booking dialog, and Saturday copy in Home, About, Booking, Footer, Services and SEO text.
- **Calendars** — remove the July calendar component and all calendar UI, plus calendar wording in copy and nav.

## Events
`/calendar` becomes a simple events list page (no grid, no date picker): a stacked list of event cards, TenTS&Tonic first, past events dimmed below. Nav label stays "Events". The TenTS&Tonic page stays as-is for now — the gallery page waits until you send photos and videos.

## Services — two offerings
1. **Specialized Programme — currently intaking.** Copy explains who it's for (injury or pregnancy recovery, breaking out of long sedentary years, levelling up) and that filling the form puts you on the waitlist. Primary button opens your Google Form in a new tab.
2. **Daily Classes.** Two paths: (a) custom-schedule a class — a WhatsApp flow that collects date, location, goals, health conditions or physical limitations, and difficulty level; (b) join the daily classes. Both send a pre-filled WhatsApp message to +234 911 298 4781.

Every "chat on WhatsApp" entry point across the site (home, footer, booking, about) is re-pointed to those two intents — custom class or daily classes — instead of Saturday booking.

## Wellness AI
Reframe the page and homepage tile as an experiment: an in-progress wellness bot, fun to poke at if you enjoy tinkering with new tools, not a medical service. Link to the PartyRock app stays.

## Technical notes
- Token-level color work in `src/index.css` and `tailwind.config.ts`; no hardcoded hex in components.
- Delete `src/components/balance/JuneCalendar.tsx`, `src/components/balance/Mark.tsx`, `src/components/balance/ClassBookingDialog.tsx`, `src/pages/Classes.tsx`; drop the `/classes` route and slot data in `src/data/classes.ts`.
- `src/pages/CalendarPage.tsx` becomes a list-based events page (route path unchanged).
- Google Form opens in a new tab with `rel="noreferrer noopener"`.
- Update `index.html` and `SEOHead` copy so no removed offering is still advertised.
