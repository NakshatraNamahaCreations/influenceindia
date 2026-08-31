# Influence India Services — website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

All copy comes from the handwritten brief (`Influence_India_Services_Original_Handwritten_Notes_Combined.pdf`),
cleaned up into publishable English. The layout and visual system follow the
reference site [unitedcarriers.com](https://unitedcarriers.com/).

## Run it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Pages

| Route | Brief section | Contents |
|---|---|---|
| `/` | I — Home | Hero, promise + stats, 6 services, reliability, 4 pillars, cost/disruption, why us, testimonials, client marquee, FAQ, CTA |
| `/about` | II — About us | Mission, aim stats, 12 commitments, "Inspired by Infinity", HQ + expansion cities |
| `/what-we-do` | III — What we do | Video hero + ticker, technology statement, platform cards, capability strip, **pinned service index** (12 services in 2 groups), enquiry form |
| `/gtp` | IV — Grow Together Policy | Responsibility statement, 21 footprints, safe environment, smart staffing |
| `/systems` | V — Job eco-system | Benefits, 4-step application process, client marquee, FAQ |
| `/careers` | VI — Careers | Culture, GTC, team testimonials, 7 open positions, resume CTA |
| `/resources` | VII — Resources | Blog hub (3 topics) |
| `/contact` | Enquiry | Contact details, locations, enquiry form, FAQ |

## Where to edit content

Everything is data-driven — no copy is hard-coded inside components.

```
src/content/
  site.ts        nav, contact details, footer columns, ticker strip
  home.ts        home page sections
  about.ts       mission, values, infinity, footprint, aim stats
  services.ts    the 6 services, pillars, assurance stack, platform
  gtp.ts         Grow Together Policy + 21 footprints
  systems.ts     job eco-system benefits + application steps
  careers.ts     culture, open positions
  resources.ts   articles
  partners.ts    client company names + FAQ
```

## Design system

Defined once in `src/app/globals.css`:

Colour tokens are listed under [Brand](#brand) below — all derived from the logo.

Helper classes: `.display` + `.d1`–`.d6` (uppercase display headings),
`.label` (mono UI label), `.lede`, `.shell` / `.shell-inner` / `.section-y`
(layout), `.invert-section` (black section), `.reveal` (scroll animation).

**Fonts.** The reference uses *BT Steinhart*, a commercial licensed typeface.
This build uses **Archivo** (headings) and **DM Mono** (UI labels) from Google
Fonts as the closest free equivalents, with Helvetica Neue/Arial for body copy —
matching the reference's body stack exactly. If you license BT Steinhart, swap
`--font-display` in `globals.css` and the `next/font` import in
`src/app/layout.tsx`.

## Brand

The palette is sampled directly from the supplied logo — no invented colours:

| Token | Value | Role |
|---|---|---|
| `--color-ink` | `#2F2B2C` | the logo's charcoal — body text and dark sections |
| `--color-brand` | `#5C7A1C` | darkened logo green; text accents on light (4.9:1 on white) |
| `--color-brand-mid` | `#95B537` | the logo's core green |
| `--color-accent` | `#C0D64E` | the logo's highlight lime — dark grounds only (9.4:1 on ink) |
| `--color-surface` | `#F4F5EF` | off-white warmed toward the green |
| `--color-danger` | `#B3261E` | form validation only |

The split matters: the bright lime fails contrast on white, so anything
text-bearing on a light ground uses the deep green, and the lime is reserved
for dark grounds and fills. The CTA disc is lime with charcoal text (8.7:1)
rather than white text (2.0:1).

### Logo assets (`public/brand/`)

Used exactly as supplied — mark, wordmark and tagline together, nothing re-set
in web type.

- `logo-full.png` — trimmed, transparent, for light grounds
- `logo-full-light.png` — charcoal lifted to white, greens preserved, for the footer
- `logo-mark.png` / `logo-mark-light.png` — the IIS symbol alone
- `logo-original.png` — the untouched master
- `src/app/icon.png` — favicon, generated from the mark

## Scroll behaviour

Modelled on the reference, which runs Lenis + GSAP ScrollTrigger over a Webflow
build. Four pieces, all in `globals.css` plus two components:

1. **Momentum smooth scroll** — [Lenis](https://github.com/darkroomengineering/lenis)
   (`src/components/layout/smooth-scroll.tsx`), configured with the same values
   the reference uses: `lerp 0.1`, smooth wheel, native touch. In-page anchor
   links are routed through Lenis so they share the easing. Skipped entirely
   when the visitor prefers reduced motion, falling back to native scrolling.
2. **Pinned hero** — the hero is `position: sticky; top: 0` (`.hero-pin`) and
   everything after it sits in `.scroll-stack`, an opaque layer that scrolls
   over the top of it.
3. **Pinned column module** — `src/components/sections/promise-module.tsx`. The
   left column (image card + oversized two-tone heading) pins while the right
   column — copy, CTA, then the stats stacked one per row — scrolls past it. The
   negative sticky offset (`lg:top-[-5.5rem]`) lets the image card scroll out of
   frame before the heading locks, as it does on the reference. Section headings
   elsewhere use the same idea via the `.sticky-head` class.
4. **Line-masked heading reveals** — every `<HeadingLines>` renders each line
   inside an `overflow: hidden` mask; the lines rise into place with a stagger
   when the heading enters the viewport (`.line-mask`, driven by
   `Reveal mode="trigger"`). Body copy and cards use the simpler fade-and-rise
   `Reveal`. Stat figures count up via `Counter`.

`body` uses `overflow-x: clip` rather than `hidden` — `hidden` creates a scroll
container and would silently break every sticky section above.

Not carried over from the reference: its custom cursor, Barba.js page
transitions, and Swiper equipment carousels.

## Module treatments

Every major module now uses the reference's vocabulary, applied consistently:

- **Two-tone display headings** — the lead-in lines sit muted (grey on light,
  dimmed white on dark) and the payoff line lands at full contrast. Driven by
  `mutedCount` on `<HeadingLines>`. This replaced the coloured accent word;
  the reference does not colour words inside headings.
- **Pinned left columns** — 21 section headings across the site pin while their
  right-hand column scrolls past (`.sticky-head`).
- **Stacked testimonial rows** — portrait plus name/role in a narrow left
  column, quote running wide on the right, one row per person.
- **Centred closing CTA** — display heading over concentric rings with a round
  accent-orange disc that eases toward the pointer, trailed by two lagging ghost
  discs (`cta-cursor-circle.tsx`). Pointer tracking is enhancement only.
- **Pinned service index** (`service-index.tsx`, What we do) — a sticky nav whose
  active entry fills as a solid pill, a sticky image that swaps per service, and
  detail blocks that scroll past with inactive entries dimmed to 35%. The first
  group renders on black, the second on the light surface, transitioning as you
  cross between them.

## Images and video

All photography and video is from [Pexels](https://www.pexels.com/) under the
**Pexels License** — free for commercial use, no attribution required. Every
asset, its Pexels ID and source page is recorded in
`public/images/pexels-credits.json`.

- **38 images** in `public/images/` — one per service in the index, testimonial
  portraits, article thumbnails, plus hero and section slots on every page.
- **5 videos** in `public/videos/` — two hero backgrounds and three full-bleed
  bands, each compressed to 1600px wide, 14 seconds, no audio, faststart
  (855KB–1.5MB) with a poster frame extracted from the first frame.
- **No asset is used twice** and no two share a Pexels ID — verified against
  the credits file.

Every image and video on the site is now Pexels-licensed; the earlier Wikimedia
photo was replaced and removed, so there is no attribution obligation anywhere.

Swap any of them for your own photography by replacing the file, or point the
slot elsewhere:

```tsx
<Media src="/images/your-photo.jpg" alt="Your team" ratio="4/3" />
```

Heroes accept video with a poster frame:

```tsx
<MediaHero video="/videos/your-clip.mp4" src="/images/your-poster.jpg" ... />
```

Videos are muted, looping and `playsInline`, with the poster shown until the
first frame decodes.

## Enquiry form

`POST /api/enquiry` (`src/app/api/enquiry/route.ts`) validates submissions and
logs them server-side. **It does not yet deliver email** — wire an email
provider or CRM at the marked `INTEGRATION POINT` in that file (Resend,
SendGrid, Zoho, or a Sheets webhook), reading the API key from the environment.

## Placeholder details to confirm

These were unclear or absent in the handwritten notes and need real values:

- **Email addresses** — the notes show two variants
  (`carrer@projetInfluenceIndian.com`, `careers@projet-InfluenceIndia.com`).
  Currently set to `contact@projectinfluenceindia.com` and
  `careers@projectinfluenceindia.com` in `src/content/site.ts`.
- **Phone / hotline** — not in the notes; `1800 000 000` is a placeholder.
- **Office hours** — not in the notes; Mon–Sat 9–6 assumed.
- **Street address** — only "Bengaluru" was given.
- **Client company list** — reproduced from the notes as text pills. Using
  third-party logos or names as endorsements may need their permission.
- **Stat figures** — the notes label these as *aims* (100% skilful workforce,
  250+ companies, 200+ clients, 30+ cities), and they are presented as targets.
