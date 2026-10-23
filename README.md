# Blog Website — The Notebook

A long-form blog page featuring ten original articles on web design and development. Full-screen hero, scroll-reveal animations, and smooth expand/collapse for article content. Built with vanilla HTML, CSS and JavaScript.

## Features

- Full-viewport hero section with background image overlay and staggered fade-in
- Ten articles in a two-column layout (image + text), single column on mobile
- "Show more / Show less" toggle using CSS Grid height transition (`0fr` → `1fr`)
- Scroll-aware fixed header (transparent over hero, solid on scroll)
- `IntersectionObserver`-based reveal animation on each article
- Gentle bobbing scroll-cue at the bottom of the hero
- Warm, reader-friendly colour palette for long reading sessions
- `prefers-reduced-motion` support

## Tech Stack

- HTML5 (semantic elements, ARIA attributes)
- CSS3 (Grid, Flexbox, `clamp()`, custom properties, keyframe animations)
- JavaScript (IntersectionObserver, classList toggling, scroll detection)
- Google Fonts: Fraunces, Inter
- Images: Picsum Photos (placeholder)

## Files

| File | Purpose |
| :--- | :--- |
| `index.html` | Page content — hero, 10 articles, footer |
| `style.css` | Layout, typography, reveal transitions, responsive breakpoints |
| `script.js` | Header scroll class, show-more toggle, scroll reveal observer |

## Run Locally

Open `index.html` in any browser.
