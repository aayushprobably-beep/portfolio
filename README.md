# 🕷️ Spider-Man Developer Portfolio

A responsive, high-performance, single-page developer portfolio inspired by Marvel's Spider-Man. Built with modern semantic **HTML5**, vanilla **CSS3**, and lightweight **vanilla JavaScript**.

---

## ✨ Features & Visual Identity

- **Spider-Man Thematic Palette**:
  - Night-Sky Charcoal: `#0b0c10` & `#1a1a24`
  - Spidey Crimson / Red: `#e23636`
  - Electric / Web Blue: `#0066cc` & `#1e90ff`
  - Spider-Sense Yellow: `#fcd34d`
  - Web Silver: `#d1d5db`
- **Dynamic Aesthetic Elements**:
  - Subtle geometric web-pattern overlays and soft radial glow effects.
  - Comic-style typography pairing: **Bangers** (hero & section headlines), **Russo One** (sub-headings & accents), and **Poppins** (clean, readable UI body).
  - Glowing web-slinging hover animations on cards, buttons, and skill pills.
  - Interactive radar sweeps, speed lines, and 3D wireframe visuals for projects.
- **Single-Page Navigation**:
  - Sticky glassmorphic navbar with custom Spider emblem monogram.
  - Active section indicator via scrollspy.
  - Accessible mobile hamburger navigation drawer with smooth animations.
- **Sections**:
  1. **Hero (`#about`)**: Comic subtitle *"Your Friendly Neighborhood Developer"*, punchy bio, quick stat badges, Spidey suit mask illustration card, and dual CTAs.
  2. **Skills Matrix (`#skills`)**: Grouped into Core Languages, Frameworks & Runtime, and Cloud/Arsenal. Spider-sense glowing outline on hover.
  3. **Featured Projects (`#projects`)**: 4 mission cards with animated tech graphics, tag pills, descriptions, live demo links, and GitHub links.
  4. **Spider-Signal Connect (`#connect`)**: Direct coordinates, interactive contact form with instant validation & feedback, and stylized social channels (GitHub, LinkedIn, X, Email).
  5. **Footer**: Spider-Man credit note, quick navigation links, and a floating scroll-to-top button.

---

## 🚀 Quick Start

No build steps or dependencies required! Simply open `index.html` in your favorite web browser:

```bash
# Preview directly using any static server or open in browser
open index.html   # On macOS
# OR
python3 -m http.server 3000
```
Then visit `http://localhost:3000`.

---

## 🎨 Easy Customization

All core colors, fonts, and dimensions are configured at the top of `styles.css` under `:root`:

```css
:root {
  --bg-dark: #0b0c10;          /* Deep comic night-sky charcoal */
  --spidey-red: #e23636;       /* Primary Crimson Red */
  --web-blue: #0066cc;         /* Electric Web Blue */
  --spidey-yellow: #fcd34d;    /* Spider-Sense Yellow */
  --web-silver: #d1d5db;       /* Subtle text & borders */
}
```

To personalize:
1. **Name & Bio**: Replace `"Peter Parker"` in `index.html` with your name and update the bio text.
2. **Projects**: Edit the titles, descriptions, tags, and links in the `#projects` section.
3. **Skills**: Add or remove skills within the `.badge-cloud` containers in `#skills`.
4. **Social Links**: Update GitHub, LinkedIn, X, and email links in `#connect`.

---

## 📱 Browser Compatibility & Accessibility
- Pure semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Fully keyboard accessible (`Tab`, `Escape`, `Enter`).
- Tested and responsive across desktop, tablet, and mobile breakpoints.

