# Design System: Yasno Bureau («Ясно Бюро»)
**Framework:** UI/UX Pro Max · Editorial & Swiss Minimalist  
**Stack:** Semantic HTML5 + Custom CSS (Zero framework dependencies)  
**Palette Type:** Warm Paper & Deep Olive Editorial  

---

## 1. Design Principles & Aesthetic Intent
- **Warm Editorial Atmosphere:** Warm paper tones, ample negative space, tactile typography, hairline dividers.
- **Human & Direct Tone:** Solo practitioner studio. First-person voice, transparent process, no corporate buzzwords.
- **Content-First Presentation:** Real screenshots in lightweight browser frames, immediate portfolio exposure, no decorative fluff.
- **Accessibility by Default:** WCAG AAA/AA contrast compliance, 44px minimum touch targets, zero layout shifts, full keyboard navigation with visible focus rings.

---

## 2. Color System & Contrast Audit

| Token | Hex / Value | Role | Contrast vs Canvas |
|---|---|---|---|
| `--color-canvas` | `#FAF8F3` | Main warm paper background | 1:1 |
| `--color-surface` | `#F0EDE5` | Secondary surface / cards / steps | 1.1:1 |
| `--color-surface-hover` | `#E8E4D8` | Hover state for surfaces | 1.2:1 |
| `--color-surface-elevated`| `#FFFFFF` | Browser frames / pure white highlights | 1.05:1 |
| `--color-text-primary` | `#252923` | Deep warm charcoal text | **13.6:1** (AAA) |
| `--color-text-secondary` | `#62675E` | Muted editorial body & captions | **5.2:1** (AA) |
| `--color-accent` | `#465C3B` | Deep olive brand accent | **6.5:1** on canvas / **5.2:1** with white |
| `--color-accent-hover` | `#36482D` | Active/hover olive | **8.2:1** |
| `--color-accent-soft` | `#E5EBCF` | Soft sage-lime tag fill | **11.2:1** with `#252923` |
| `--color-border-subtle` | `#DCDDD3` | Hairline dividers | Non-text UI border |
| `--color-border-strong` | `#C4C5BA` | Card & frame borders | Non-text UI 3:1 |

---

## 3. Spatial Scale (4/8dp Rhythm)
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

---

## 4. Typography Hierarchy
- **Primary Typeface:** Manrope (Cyrillic + Latin), Sans-serif.
- **Display H1:** `clamp(2.5rem, 5.2vw, 4.25rem)`, `line-height: 1.08`, `letter-spacing: -0.035em`, `font-weight: 800`.
- **Section H2:** `clamp(2rem, 3.6vw, 3rem)`, `line-height: 1.15`, `letter-spacing: -0.03em`, `font-weight: 700`.
- **Card H3:** `1.5rem` – `1.75rem`, `line-height: 1.25`, `letter-spacing: -0.025em`, `font-weight: 700`.
- **Lead / Subtitle:** `1.1875rem` (19px), `line-height: 1.55`, `color: var(--color-text-secondary)`.
- **Body Text:** `1.125rem` (18px) on desktop, `1rem` (16px) on mobile, `line-height: 1.6`.
- **Eyebrow / Overline:** `0.8125rem` (13px), `font-weight: 700`, `letter-spacing: 0.08em`, uppercase.

---

## 5. UI Components & Patterns (UI/UX Pro Max)
1. **Header & Navigation:**
   - Sticky frosted bar (`backdrop-filter: blur(12px)`), logo with olive dot, anchor scroll-spy with indicator, accessible mobile drawer with focus management.
2. **Buttons & Controls:**
   - *Primary:* Olive `#465C3B`, white text, pill radius, subtle scale-down on `:active` without layout shift.
   - *Secondary:* Hairline border `#DCDDD3`, transparent, subtle olive border and tint on hover.
   - *Touch Targets:* Minimum `44x44px` area.
3. **Icons & Glyphs:**
   - Vector SVGs only (Phosphor/Heroicons geometry with 1.75px uniform stroke). No emojis for interface controls.
   - `aria-hidden="true"` on decorative icons; explicit labels on interactive controls.
4. **Cards & Browser Mockups:**
   - 14–18px border radius, subtle border, top browser bar with dots and real URL pill.
   - High-fidelity WebP screenshots with fallback PNG and explicit dimensions (`width="1440" height="920"`).
5. **Accordion FAQ:**
   - Native HTML5 `<details>` and `<summary>` for instant accessibility without JS, enhanced with smooth CSS indicator rotation and single-open JS enhancement.
6. **Accessibility & Motion:**
   - Focus indicator: `outline: 2px solid var(--color-accent); outline-offset: 3px;`.
   - Complete `@media (prefers-reduced-motion: reduce)` support.
