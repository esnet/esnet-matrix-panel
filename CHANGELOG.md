# Changelog

## 1.0.5
Fixed repo link
Fixed bug with null color values

## 1.0.6
Allow for up to 200 UNIQUE rows and columns
Print "No Data" instead of throwing error if dataframe is empty
## 1.0.9
update grafana tooling to webpack

## 1.2.0
- Fixed tooltip to work with Grafana 12
- Fixed tooltip on link click bug
- Added legend feature.  2 options categorical or range

## 2.0.0
- bumped minimum version of Grafana to Grafana 10
- fixed tooltip bug
- added legend

## 2.0.1
- tooltip improvements
- minor fixes to layouts & padding
- bumped d3 version

## 2.0.2
- adds grouping feature for rows/columns

## 2.1.0
- fixes truncation bug that was introduced
- adds sort options for rows/columns
- refactor to align with create-plugin 7.3
- improves type annotations

## Unreleased
- **Rebuilt the legend on thresholds.** It previously sampled 10 evenly-spaced values
  between the data's min and max, which meant the swatches never lined up with the
  threshold steps that were actually coloring the cells, the configured boundary values
  were never shown, and any step outside the data range disappeared. The legend is now
  derived from `Standard Options > Thresholds`: one segment per step, boundaries printed
  at the divisions, every step shown whether or not data falls into it. Percentage-mode
  thresholds are converted over the same field range Grafana colors by.
- **Legend Type is now `Auto`** (thresholds / gradient / categorical), resolved from
  whatever colors the cells; the old `range` and `categorical` values still load.
- **Cell Color Mode now defaults to `Standard Options (thresholds)`.** Panels saved
  before that option existed were threshold-colored, so this also restores them instead
  of restyling them with a ramp.
- Categorical legends wrap into rows and cap at 24 entries, instead of laying out one
  circle per unique value at fixed 75px spacing (which ran off-panel past ~8 values).
- The legend reserves its measured height rather than a flat 64px, so the grid is no
  longer squeezed by a legend smaller than the reservation, or overlapped by a larger one.
- Hovering a legend entry now highlights exactly the cells in its band, rather than
  everything within ±6% of the color domain.