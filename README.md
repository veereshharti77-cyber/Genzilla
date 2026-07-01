# Genzilla — Vite + React

This is the React (Vite) conversion of the original static Genzilla HTML site.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — assembles all page sections
- `src/components/` — Nav, Hero, Work, Portfolio, Team, Contact, Footer, Ticker, Marquee, Cursor
- `src/hooks/useReveal.js` — scroll-reveal animation (IntersectionObserver), replicating the original `.reveal` behavior
- `src/index.css` — all original styling, unchanged

## Notes

- The custom mouse cursor, ticker tape, marquee dividers, and scroll-reveal animations from the original vanilla JS were re-implemented as React (hooks + small components) so they behave identically.
- The contact form is wired up with local React state; "Send Brief" toggles the button to a "sent" state, matching the original behavior. No backend is connected — wire up your own endpoint in `src/components/Contact.jsx`'s `handleSubmit`.
