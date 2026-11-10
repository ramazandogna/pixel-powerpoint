# HENNGE 企業研究 — Pixel Presentation

A 7-minute Japanese company-research presentation about **HENNGE K.K.** (cloud security, Tokyo), built for a JLPT N4-level classroom.
It is a small Vue 3 + Vite site with three pages: a pixel-art slide deck for the projector, a mobile vocabulary list opened from a QR code, and a speaker script for the team.

| Page | What it is | Link |
|---|---|---|
| 🎤 Presentation | 16 full-screen slides for the board | https://ramazandogna.github.io/pixel-powerpoint/ |
| 📖 Vocabulary list | Opened from the on-slide QR code; search words by number | https://ramazandogna.github.io/pixel-powerpoint/words.html |
| 📝 Script & questions | Speaker script (N4 Japanese + English) and the five research questions | https://ramazandogna.github.io/pixel-powerpoint/hennge.html |
| 📥 PowerPoint | Class-format deck (10 slides, speaker notes) | [⬇️ Download .pptx](https://github.com/ramazandogna/pixel-powerpoint/raw/main/deliverables/%E4%BC%81%E6%A5%AD%E7%A0%94%E7%A9%B6_HENNGE_%E7%AC%AC1%E5%9B%9E-1.pptx) |

## Features

- **Readable for N4 learners**: every kanji has furigana, including special counter readings (5日 いつか, 1つ ひとつ).
- **Numbered vocabulary**: hard words are highlighted with a number badge. The same number finds the word (with English, Chinese, Nepali and Turkish meanings) on the phone page.
- **Step-by-step slides**: pressing → reveals the next step before turning the page. Squares in the top-right corner show how many steps are left.
- **Research questions**: each slide that answers one of the five questions shows who asked it (Q1 スシュマ, Q2 サンディープ, Q3–Q4 ラマザン, Q5 リュウ).
- **Pixel-art team**: characters, icons and the padlock are drawn from small bitmaps as crisp SVG, with idle animations that replay every few seconds.

### Presenter controls

| Key | Action |
|---|---|
| → / Space / Enter / PageDown | Next step, then next slide |
| ← / PageUp / Backspace | Previous slide |
| F | Fullscreen |
| Home / End | First / last slide |
| Swipe | Next / previous on touch screens |

A slide can be opened directly with its hash, e.g. `#s12`.

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite 6](https://vite.dev/) multi-page build
- ESLint (flat config with `eslint-plugin-vue`) and Prettier
- GitHub Actions to GitHub Pages

There are no runtime dependencies besides Vue. Fonts (DotGothic16, M PLUS Rounded 1c) load from Google Fonts.

## Getting started

Requires Node.js 20.11 or newer.

```bash
npm install
npm run dev       # http://localhost:5173/pixel-powerpoint/
npm run build     # production build in dist/
npm run preview   # serve the build locally
npm run lint
```

## Project structure

```
├── index.html               # deck page shell        → src/pages/deck
├── words.html               # vocabulary page shell  → src/pages/words   (URL is printed in the QR code; do not rename)
├── hennge.html              # script page shell      → src/pages/script
├── src/
│   ├── pages/               # one Vue app per page (main.js + root component)
│   ├── slides/              # one component per slide, in presentation order (index.js)
│   ├── components/
│   │   ├── deck/            # Slide, SlideFooter, StepDots, DeckControls, QrBox, QuestionTag, Vocab, CountUp
│   │   ├── pixel/           # PixelSprite, PixelIcon, PixelLock, Flag, HenngeLogo, QrCode
│   │   └── common/          # Jp (furigana markup), ScriptLine
│   ├── composables/         # useDeck (navigation state), useDeckInput, useSlideContext, useSlideSteps, useStageScale
│   ├── data/                # content: vocabulary, questions, script, sprites, icons, team, logo, QR
│   ├── styles/              # deck/ (ordered partials), words.css, script.css
│   └── utils/               # furigana parser, bitmap → pixels
├── deliverables/            # PowerPoint version for class
├── docs/                    # local-only notes (git-ignored)
└── .github/workflows/deploy.yml
```

## Editing content

**Furigana markup** (used in `src/data/*`):

```
会社[かいしゃ]        → 会社 with かいしゃ above it
5日[いつか]           → digits right before the bracket belong to the reading (counters)
1996｜年[ねん]        → "｜" sets where the ruby starts explicitly
```

**A vocabulary word on a slide**: `<Vocab word="安全" />`. The number and reading come from `src/data/vocabulary.js`, so the slides and the phone page always agree. To add a word, add an entry there with its translations.

**A step on a slide**: give the element `:class="frag(n)"`, where n is the step number starting at 1. The slide counts its steps automatically, and the corner squares follow.

```vue
<script setup>
import { useSlideSteps } from '@/composables/useSlideSteps.js'
const { frag } = useSlideSteps()
</script>

<div class="bubble" :class="frag(1)">…</div>
```

**A slide's frame**: `<Slide>` takes `variant` (e.g. `"cover"`), `qr` (QR cards in two corners) and `question` (1–5, shows the question tag). The footer and page number are added automatically.

**Speaker script**: `src/data/script.js` has one section per slide. `(▶)` marks a right-arrow press.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: install, lint, build, then publish `dist/` to GitHub Pages.

One-time setup: in the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

The Vite `base` is `/pixel-powerpoint/`. Set the `BASE_PATH` environment variable to build for another path.

## Data sources and notes

- Japan average income ¥4.6M and IT (information & communications) ¥6.49M: NTA 民間給与実態統計調査 (2023). The IT figure was taken from a secondary summary.
- HENNGE average ¥5.5M is the team's company-wide figure. Check the latest 有価証券報告書.
- Not yet verified: former name HDE, rename and listing in 2019, HQ in Shibuya, the name coming from 「変化」, the 2-day remote example week, and that 20% foreign staff is among the highest ratios in Japan.

---

powered by [Ramazan Dogna](http://ramazandogna.com/)

Nov 10 - 2026