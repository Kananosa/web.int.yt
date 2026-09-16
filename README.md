# Intent Web — landing page

A React + Vite rewrite of the Intent Web static hosting landing page.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Notes

- **Logo**: nav and footer use `<img src="https://dns.int.yt/favicon.png">`
  directly, and `index.html`'s favicon link points at the same URL. If you'd
  rather self-host it, download the PNG into `public/favicon.png` and swap
  both references to `/favicon.png`.
- **No pricing section**: removed — there's no published pricing for Intent
  Web, so I wasn't going to invent numbers.
- **Docs page**: left out of this pass — nav/footer show a "coming soon" label
  instead of a broken route.
- **Palette**: blue (`#2563eb` / `#5b9bf6`) + near-black (`#080b14`), no
  purple/pink/cyan gradients from the original, and less heavy than the
  Intent-DNS reference page's dark theme.
- **Fonts**: Space Grotesk (display) + Inter (body) + JetBrains Mono
  (terminal/code), loaded from Google Fonts in `index.html`.
- **Icons**: plain inline SVG components in `src/components/icons/Icon.jsx` —
  no external icon package, so there's nothing to fail to install.
- **Motion**: one deliberate animated sequence — the hero terminal types out a
  deploy log on load. Everything else is static or hover-only, and
  `prefers-reduced-motion` is respected globally in `src/styles/index.css`.
- **Important**: I do not have working network access in this environment, so
  I have not been able to run `npm install` or `npm run dev` myself on this
  project, even once. Please run it locally and tell me the exact error if
  the screen is still blank — I'll fix it from the real stack trace instead
  of guessing.
