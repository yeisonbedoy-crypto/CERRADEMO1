# Servicios Section Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace "Cerrajería comercial" with "Apertura de vehículos" in the services grid of `index.html`, fix card equal-height alignment, and ensure SEO-local copy on the new card.

**Architecture:** Surgical edit limited to `<section id="servicios">` in `index.html` (lines ~589–713). Two sub-tasks: (1) swap Card 4 content and icon, (2) add `flex flex-col` + `mt-auto` to all service cards for equal-height bottom alignment.

**Tech Stack:** Plain HTML, Tailwind CSS utility classes, inline SVG (Heroicons-style, 24×24 outline)

---

## File Map

| File | Action |
|------|--------|
| `index.html` lines 602–711 | Modify — swap Card 4, add flex-col to all 5 service cards |

No other files touched.

---

### Task 1: Replace Card 4 — "Cerrajería comercial" → "Apertura de vehículos"

**Files:**
- Modify: `index.html:655-670`

**Context — current Card 4 block (lines 655–670):**
```html
<!-- Card 4 — Comercial -->
<article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200">
  <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  </div>
  <h3 class="font-heading font-bold text-gray-900 text-lg mb-2">Cerrajería comercial</h3>
  <p class="text-gray-500 text-sm leading-relaxed mb-4">
    Locales, oficinas y negocios. Cierre perimetral, control de accesos y blindaje profesional.
  </p>
  <div class="flex items-center justify-between">
    <span class="text-amber-600 font-heading font-semibold text-sm">A medida</span>
    <span class="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">Empresa</span>
  </div>
</article>
```

- [ ] **Step 1: Replace the entire Card 4 block**

  In `index.html`, find the Card 4 block (comment `<!-- Card 4 — Comercial -->`) and replace it with:

```html
        <!-- Card 4 — Apertura vehículos -->
        <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200">
          <div class="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l1.5-4A2 2 0 018.4 6h7.2a2 2 0 011.9 1.4L19 11M5 11v6a1 1 0 001 1h1m10 0h1a1 1 0 001-1v-6M5 11h14m-9 7a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-gray-900 text-lg mb-2">Apertura de vehículos</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
            ¿Llaves dentro del coche en Tarragona, un parking o en carretera? Abrimos tu vehículo sin daños. <strong>Técnico en 20 min.</strong>
          </p>
          <div class="flex items-center justify-between">
            <span class="text-amber-600 font-heading font-semibold text-sm">Desde 120€</span>
            <span class="text-xs bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full font-medium">24h Urgencia</span>
          </div>
        </article>
```

  **Why these copy choices (Copywriting skill applied):**
  - PAS formula: problema (llaves dentro), agitación (en carretera/parking), solución (Técnico en 20 min).
  - SEO triada: [Apertura vehículos] + [Tarragona] + [parking / carretera].
  - Micro-copy de confianza: "sin daños", "20 min".

- [ ] **Step 2: Verify visually in browser**

  Open `index.html` in a browser (drag & drop or `start index.html` in terminal). Check that:
  - Card 4 now shows a car icon (sky/light blue background, car SVG outline).
  - Title is "Apertura de vehículos".
  - Badge says "24h Urgencia" in sky-blue.
  - No purple card remains.

---

### Task 2: Fix equal-height cards (flex-col + mt-auto)

**Files:**
- Modify: `index.html:605-686` (all 5 service `<article>` elements, skip Card 6 CTA which already uses `flex flex-col`)

**Problem:** Cards have varying description text lengths, so the bottom price/badge row sits at different heights across the row. Flexbox column + `mt-auto` on the bottom div fixes this.

- [ ] **Step 1: Add `flex flex-col` to Card 1 article**

  Find:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200" aria-label="Apertura de urgencia">
  ```
  Replace with:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200 flex flex-col" aria-label="Apertura de urgencia">
  ```

  Then find the bottom div inside Card 1:
  ```html
          <div class="flex items-center justify-between">
            <span class="text-amber-600 font-heading font-semibold text-sm">Desde 120€</span>
            <span class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">24h Urgencia</span>
          </div>
        </article>
  ```
  Replace with:
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Desde 120€</span>
            <span class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">24h Urgencia</span>
          </div>
        </article>
  ```

- [ ] **Step 2: Add `flex flex-col` to Card 2 article**

  Find:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color:#e8eef5;">
  ```
  Replace with:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200 flex flex-col">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color:#e8eef5;">
  ```

  Then find Card 2's bottom div:
  ```html
          <div class="flex items-center justify-between">
            <span class="text-amber-600 font-heading font-semibold text-sm">Presupuesto al momento</span>
            <span class="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">Seguridad</span>
          </div>
        </article>
  ```
  Replace with:
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Presupuesto al momento</span>
            <span class="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">Seguridad</span>
          </div>
        </article>
  ```

- [ ] **Step 3: Add `flex flex-col` to Card 3 article**

  Find:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
  ```
  Replace with:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200 flex flex-col">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
  ```

  Then find Card 3's bottom div:
  ```html
          <div class="flex items-center justify-between">
            <span class="text-amber-600 font-heading font-semibold text-sm">Precios transparentes</span>
            <span class="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">Hogar</span>
          </div>
        </article>
  ```
  Replace with:
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Precios transparentes</span>
            <span class="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">Hogar</span>
          </div>
        </article>
  ```

- [ ] **Step 4: Add `flex flex-col` to Card 4 (already replaced in Task 1)**

  The new Card 4 block written in Task 1 must include `flex flex-col` in the article class and `mt-auto` on the bottom div.

  Verify the article tag in Card 4 reads:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200 flex flex-col">
  ```
  And its bottom div reads:
  ```html
  <div class="flex items-center justify-between mt-auto">
  ```

  If not, apply the same pattern as Steps 1–3 to Card 4.

- [ ] **Step 5: Add `flex flex-col` to Card 5 article**

  Find:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
  ```
  Replace with:
  ```html
  <article class="service-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer hover:border-amber-200 flex flex-col">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
  ```

  Then find Card 5's bottom div:
  ```html
          <div class="flex items-center justify-between">
            <span class="text-amber-600 font-heading font-semibold text-sm">Tecnología top</span>
            <span class="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">Smart Home</span>
          </div>
        </article>
  ```
  Replace with:
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Tecnología top</span>
            <span class="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">Smart Home</span>
          </div>
        </article>
  ```

- [ ] **Step 6: Verify equal-height alignment in browser**

  Open `index.html` in a browser at desktop width (≥1024px). In each row of 3 cards, confirm:
  - All icons sit at the same vertical position (top of card body).
  - All bottom price/badge rows are on the same horizontal line.
  - Cards within the same row are the same height.

  Then check at tablet width (~768px) — 2 columns, and at mobile (<640px) — 1 column.

---

### Task 3: Verify responsive grid and final review

**Files:**
- Read-only inspection: `index.html:602`

- [ ] **Step 1: Confirm grid classes**

  The grid container must read:
  ```html
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
  ```
  This already implements: 1 col (mobile default) → 2 cols (sm ≥640px) → 3 cols (lg ≥1024px). No change needed.

- [ ] **Step 2: Count cards in section**

  Within `<section id="servicios">`, count the `<article>` elements. Expected: **6** (5 service cards + 1 CTA dark card).

  Confirm no "Cerrajería comercial" text remains in the file:
  ```bash
  grep -n "Cerrajería comercial\|cerrajería comercial" index.html
  ```
  Expected output: no results (empty).

- [ ] **Step 3: Final browser check at three breakpoints**

  | Breakpoint | Expected columns | What to verify |
  |---|---|---|
  | Mobile (<640px) | 1 | All 6 cards stacked, full-width, readable |
  | Tablet (640–1023px) | 2 | 3 rows of 2, price row aligned within each row |
  | Desktop (≥1024px) | 3 | 2 rows of 3, price row aligned within each row |

  Confirm "Apertura de vehículos" card is visible with car icon, sky-blue badge, and Tarragona/carretera/parking copy.

---

## Self-Review

**Spec coverage:**
- [x] Apertura de urgencia → kept (Card 1) ✓
- [x] Cambio de cerradura → kept (Card 2) ✓
- [x] Cerrajería doméstica → kept (Card 3) ✓
- [x] Cerraduras inteligentes → kept (Card 5) ✓
- [x] Apertura de vehículos → replaces Card 4 (Cerrajería comercial) ✓
- [x] Car icon selected (SVG car outline, sky color palette) ✓
- [x] Equal card height via `flex flex-col` + `mt-auto` ✓
- [x] Responsive grid: 1/2/3 columns ✓ (grid classes already correct)
- [x] SEO local copy: "Tarragona", "parking", "carretera", "20 min", "sin daños" ✓
- [x] Copywriting skill: PAS formula applied, micro-copy trust signals ✓
- [x] No other files touched ✓

**No placeholders detected.**

**Type consistency:** No types/functions involved — pure HTML/CSS changes.
