# ESnet Matrix Panel — Visual Makeover

A visual-design overhaul of the matrix (heatmap) panel. The goal was to make it
more legible, more insightful, and better-looking out of the box, following
established data-visualization guidance (sequential/diverging color, mark spacers,
a first-class hover layer, and size encoding).

**Design principle:** the improved look ships as the **new default**, and every new
behavior has its own opt-out toggle so existing dashboards can revert piece by
piece. One intentional default change to know about: cells now color via a built-in
**sequential** ramp instead of the Standard Options thresholds — set
**Cell Color Mode → Standard Options** on any panel that relied on thresholds.

---

## What changed, by area

### Cells & interaction
- **Rounded corners + surface-gap spacers.** Cells are no longer hard squares butted
  together; they have a small corner radius and a consistent gap in the surface color.
- **Hover cross-highlight.** Hovering a cell outlines it, dims every cell outside its
  row/column, and bolds the two matching axis labels — so you can trace a value back
  to its row and column at a glance.
- **Null vs. no-data are now distinct.** Previously both rendered as the same gray.
  Now a cell that was queried but null fills with the null color, while a cell with
  **no matching data at all** renders empty with a hairline outline.
- **Tooltip polish.** Fixed a CSS typo that broke the tooltip border radius, and
  restructured the tooltip so the **value leads** (large, bold) with the
  source/target labels as secondary detail. Labels remain HTML-sanitized.

### Color
- **Built-in color modes.** A new **Cell Color Mode** option:
  - **Sequential** (default) — a single-hue blue ramp, light→dark for magnitude. The
    anchor flips in dark mode so high values stay bright and low values recede.
  - **Diverging** — blue↔red around a configurable neutral midpoint, for
    "above/below a baseline" values (e.g. latency vs. an SLA).
  - **Standard Options** — the previous behavior (thresholds / color scheme).
  - The ramps are self-contained (no rainbow) and derive neutrals from the Grafana
    theme, so they track light/dark correctly.

### Layout & reading order
- **Sort / seriation.** New **Row Order** / **Column Order** options: keep the
  alphabetical default, or sort **by total** (largest marginal sum first) to surface
  the hottest rows and columns.
- **Category group dividers.** When grouping is enabled, alternating category groups
  now get a subtle background band instead of being separated by whitespace alone.
- **Fit-to-panel sizing.** New **Sizing** option: **Fit** (default) scales cells to
  fill the panel, or **Fixed** uses the exact cell size in pixels (may scroll). The
  panel's real width/height are now consumed (previously ignored).
- **Frozen axis labels.** Row and column labels stay pinned while the cell grid
  scrolls, so you never lose track of which row/column you're reading.

### Encoding & annotation
- **In-cell value labels.** Values print inside cells when they fit, with automatic
  white/dark ink chosen by the cell's luminance (measured first — skipped when the
  text wouldn't fit).
- **Marginal total bars** (opt-in). Small bar charts of row totals (right edge) and
  column totals (bottom edge), each sized by its total.
- **Size encodes value** (opt-in). Each cell's filled area scales with its value, so
  magnitude reads through both color *and* size (robust to colorblindness and
  grayscale printing).

### Legend
- The range legend gained a **title** (the value text) and **start / middle / end
  tick labels**, instead of labeling only the two endpoints.

### Under the hood
- **Pixel-accurate label truncation.** Truncation now measures rendered text width
  (`getComputedTextLength`) instead of counting characters, so proportional fonts no
  longer over- or under-truncate.
- **Axis margins sized to the labels.** The row/column label margins are now measured
  from the actual rendered width of the longest label (capped at the **Text Length**
  option), so labels get the space they need instead of being cut off after a few
  characters. Increase **Text Length** to allow longer labels (and a wider margin);
  decrease it to cap long labels and reclaim space.

---

## New panel options

Grouped under the **Display**, **Colors**, **Layout**, and **Row/Column Options**
categories in the panel editor.

| Option | Category | Default | What it does |
|---|---|---|---|
| Cell Corner Radius | Display | `2` | Corner rounding in px (`0` = square) |
| Highlight Row & Column on Hover | Display | `on` | Dim other cells + emphasize hovered row/column |
| Show Values in Cells | Display | `on` | Print values inside cells that are large enough |
| Show Category Group Dividers | Display | `on` | Background bands behind grouped rows/columns |
| Cell Color Mode | Colors | `sequential` | `sequential` / `diverging` / `standard` |
| Diverging Midpoint | Colors | `0` | Neutral value for diverging mode |
| Distinguish No-Data Cells | Colors | `on` | Render no-data cells empty/outlined |
| Row Order | Row/Column | `name` | `name`, `total` (largest first), or `cluster` (seriation) |
| Column Order | Row/Column | `name` | `name`, `total` (largest first), or `cluster` (seriation) |
| Color Scale Range | Colors | `auto` | `auto` (data min/max) or `manual` (fixed, comparable across panels) |
| Color Scale Min / Max | Colors | `0` / `100` | Fixed color-domain bounds (manual mode) |
| Focus Value Range | Display | `off` | Spotlight cells in a value range |
| Focus Min / Max | Display | — | Bounds of the focused range |
| Out-of-Focus Cells | Display | `dim` | `dim` or `hide` cells outside the range |
| Sizing | Layout | `fit` | `fit` to panel or `fixed` px cell size |
| Freeze Axis Labels | Layout | `on` | Pin labels while the grid scrolls |
| Column Label Orientation | Layout | `auto` | `auto` / `rotated` / `horizontal` |
| Show Marginal Totals | Layout | `off` | Row/column total bars on the edges |
| Size Encodes Value | Layout | `off` | Scale cell area by value (dual encoding) |
| Show as Table | Layout | `off` | Accessible HTML table view of the same data |

---

## Round 2 — clarity, analytical & accessibility

A second wave focused on comprehension, analytical power, and accessibility.

### Clarity
- **Legend null / no-data key.** The legend now shows swatches labeled "null" and
  "no data" whenever such cells are present, so viewers can read the gray/outlined
  cells.
- **Continuous gradient legend.** For sequential/diverging color modes the legend is
  a smooth gradient bar with labeled min/max (and a labeled midpoint tick for
  diverging), instead of discrete swatches. Standard-options mode keeps stepped
  swatches (matching its thresholds).
  *Superseded by Round 3 — see "Legend rebuilt on thresholds" below.*
- **Guided empty states.** Instead of a bare "No Data", the panel now tells you what
  to do — map Rows/Columns/Value fields, add a numeric column, reduce cell count,
  etc. — depending on what's actually missing. Parse failures render a friendly
  message instead of blanking the panel.

### Analytical
- **Cluster ordering (seriation).** A third Row/Column order mode reorders similar
  rows and columns next to each other to reveal block structure, via dependency-free
  spectral seriation (column-centered power iteration on the value matrix).
  Deterministic across renders; applied within categories when grouping is on.
- **Shared / manual color domain.** Pin the color scale's min and max so multiple
  matrix panels are directly comparable and colors don't shift when a filter changes
  the data.
- **Value-threshold focus.** Spotlight cells whose value falls in a range; the rest
  are dimmed or hidden. In-cell labels and hover restore respect the focus state.

### Interaction & accessibility
- **Keyboard navigation + focus parity.** Cells are focusable with a roving tabindex;
  arrow keys move between cells, Enter/Space pins a row+column, Escape clears. Focus
  shows the same tooltip and cross-highlight as hover.
- **ARIA + table view.** The grid exposes `role="img"`/grid roles and per-cell
  `aria-label`s, and **Show as Table** renders an accessible HTML `<table>` of the
  same data as a screen-reader/text-friendly alternative.
- **Interactive legend.** Hovering the gradient (or a swatch, or a null/no-data key)
  highlights the matching cells and dims the rest.
- **Click-to-pin.** Clicking a cell or an axis label pins that row/column highlight so
  it persists while you scan; click again (or Escape) to release.
- **Auto-horizontal labels.** Column labels render horizontally when they fit inside a
  cell (few columns / wide cells) and rotate vertically otherwise; overridable via
  Column Label Orientation.

---

## Round 3 — legend rebuilt on thresholds

The legend was still derived from the **data's min and max**: it sampled 10 evenly-spaced
values across the range and drew them as a gradient or as 10 equal-width swatches. In
`standard` color mode — the mode the plugin declares as its color source, via
`preferThresholdMode` — that meant the legend never agreed with the cells:

- swatch boundaries didn't line up with the threshold steps doing the coloring,
- the configured boundary values were never printed,
- threshold steps outside the data range vanished entirely,
- hover highlighted everything within ±6% of the color domain rather than a real band,
- `categorical` drew one circle per unique value at fixed 75px spacing, which ran off the
  panel past ~8 values (≈800 circles on the 30×30 dataset).

### What it does now
- **Thresholds drive the legend.** Steps come from `field.config.thresholds` — real
  colors, real boundary values, every step shown whether or not data lands in it.
  Percentage-mode thresholds are converted to absolute values over the same field range
  `getScaleCalculator` uses, so the printed numbers match the cell colors exactly.
- **The legend follows the color source.** `Legend Type: Auto` resolves to *thresholds*,
  *gradient* (the panel's ramps, or a Grafana `continuous-*` scheme), or *categorical*
  (non-numeric values, a fixed color, or value mappings). A form can still be pinned.
- **It fits.** A stepped bar is used when the boundary labels fit; otherwise the entries
  wrap into a swatch list. Categorical caps at 24 entries with a `+N more` note.
- **It reserves what it needs.** `layoutLegend` computes the geometry, and the grid
  sizes itself against that instead of a flat 64px guess.
- **Hover is exact.** Each entry carries the half-open band `[from, to)` it stands for,
  so hovering highlights precisely those cells.
- **`Cell Color Mode` now defaults to `standard`**, and the parser's fallback moved with
  it — panels saved before that option existed were threshold-colored, so the fallback
  now restores them rather than restyling them as a sequential ramp.

---

## Files changed

| File | Change |
|---|---|
| `src/types.ts` | Added the new fields to the `MatrixOptions` interface; replaced `LegendData` with the `LegendModel` / `LegendItem` / `LegendStop` / `LegendTick` model |
| `src/module.ts` | Registered the new panel-editor options; added `Colors` and `Layout` option categories; `Legend Type` → Auto/thresholds/gradient/categorical; `Cell Color Mode` defaults to `standard` |
| `src/legend.ts` | **New.** Builds the legend model from thresholds / ramps / distinct values, and computes its layout and height (pure, unit-tested) |
| `src/legendRender.js` | **New.** Draws the model: stepped threshold bar, gradient bar with tick axis, wrapped swatch list, null/no-data key |
| `src/dataParser.ts` | Built-in sequential/diverging color ramps; total-sort; null-vs-no-data tracking; marginal totals + value domain; numeric/NaN guards; delegates the legend to `buildLegend` |
| `src/matrix.js` | Rounded cells, spacers, hover cross-highlight, distinct no-data, in-cell labels, group bands, marginal bars, size encoding, fit sizing, frozen labels, pixel-accurate truncation, tooltip fix; legend delegated to `renderLegend`, highlight now band-based |
| `src/matrix.d.ts` | Updated the `matrix()` signature (added `width`, `rowTotals`, `colTotals`, `valueDomain`) |
| `src/EsnetMatrix.tsx` | Pass panel `width` and the new parsed-data fields into the matrix renderer |

No new runtime dependencies were added — the color ramps are computed with a small
self-contained interpolator.

---

## Building & loading (local, no Docker)

```bash
yarn install --ignore-engines   # a transitive dep wants Node ≥20; repo is on Node 16
yarn build                      # or: yarn dev  (watch mode)
```

`dist/` is symlinked into the Homebrew Grafana plugins directory and the plugin id is
in `allow_loading_unsigned_plugins`, so a frontend rebuild only needs a **browser
hard-refresh** (no Grafana restart unless `plugin.json` changes).

## Verifying

Sample datasets live in `sample-data/` (load them via the TestData datasource →
**CSV Content** scenario):

- `1-basic-traffic.csv` — 5×5, missing diagonal → exercises no-data cells
- `2-grouped-with-categories.csv` — row/column grouping, dividers, sort-by-total
- `3-edge-cases.csv` — null vs. no-data distinction
- `4-stress-30x30.csv` — fit-to-panel, frozen labels, in-cell label thresholding

To exercise everything, add an **ESnet Matrix** panel to any dashboard, point it at a
TestData datasource loading one of the CSVs above, and map the Rows / Columns / Value
fields. Check it in **both light and dark** Grafana themes, and hover cells to see the
row/column cross-highlight. (No demo dashboard is bundled in the repo.)
