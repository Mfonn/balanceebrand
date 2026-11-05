# Project Architecture

- Keep public brand content organized around Home, Events, and Just Move Series because these are the current primary audience journeys.
- Store editorial series metadata alongside public event data so completed recordings and upcoming chapters remain consistent across pages.
- Store site images as real files in src/assets (not Lovable Assets pointers) because the site is hosted on GitHub Pages, where pointer URLs do not resolve.
- Generate static entry pages for client-side routes in GitHub Pages builds so shared deep links resolve directly.
- Keep the equipment and fitness-space consultation experience on a dedicated page linked from shared navigation and footer, with its content and interactions scoped to that page so the main brand journeys remain distinct.