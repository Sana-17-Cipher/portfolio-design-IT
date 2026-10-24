# Sankari Pillai — interactive illustrated portfolio

Next.js App Router + React + CSS + inline SVG. No background image, canvas rendering, or bitmap objects. All objects are drawn in `components/Desk.js` with editable paths, rectangles, circles and text. Kalam handwriting fonts are bundled locally through @fontsource; no Google Fonts runtime request.

## Run
Node.js 20.9+ required.

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Production check: `npm run build`.

## Deploy
Push this folder's contents to GitHub and import the repository into Vercel. Framework: Next.js. Default install/build/output settings; no secrets required.

## Files
- `components/Desk.js`: independently drawn and interactive SVG objects; desktop/mobile viewBox.
- `app/globals.css`: hand-drawn styling, object animations, positioning and responsive layout.
- `app/page.js`: navigation, motion switch and accessible native dialog panels.
- `app/layout.js`: metadata and document layout.

## Interactions
- Stars / crayons / glue / brushes / clips: wiggle on hover, focus or tap.
- USB: bounce; pencil shaving: spin slightly; little stars: twinkle.
- Headphones: sway and show musical notes.
- Laptop: lift and brighten the code; click opens IT Projects.
- Design label and postcards: open Design.
- Name paper and portrait sticker: open About.
- Large paper: PORTFOLIO. Small paper: Sankari Pillai.
- Keyboard: Tab to objects, Enter/Space to activate, Escape to close panels.
- Pause Motion switch and operating-system reduced-motion support.

Project, Design and About panels are clearly labelled content placeholders. Add real work, descriptions and links before publishing as a complete portfolio. Artwork is a code-drawn interpretation of the reference, not a pixel-identical reproduction. Objects can be edited, repositioned, animated or removed independently.
