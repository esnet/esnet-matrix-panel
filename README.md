# Matrix Panel Plugin

This plugin creates a 2D matrix showing the relationship between 2 selected fields (source and target).
Note: This is NOT inteded to use with time series data or large data sets.  It also will not render if there are >200 rows or columns

![](https://github.com/esnet/esnet-matrix-panel/blob/master/src/img/matrix-plugin.png?raw=true)

## Options
### Display
**Show Legend:** Adds a legend to the bottom of the panel. The legend is built from whatever actually colors the cells — normally the steps you configure under **Standard Options > Thresholds**.

**Legend Type:** Leave this on **Auto** and the legend follows the cell color source:

- *Thresholds* — one segment per configured threshold step, with the boundary values printed underneath. Every step is shown, including ones no data happens to fall into. This is what you get with the default **Standard Options (thresholds)** color mode.
- *Gradient* — a continuous bar with a labeled tick axis, used when a ramp colors the cells (the Sequential or Diverging color modes, or a `continuous-*` scheme picked in Standard Options).
- *Categorical* — one swatch per distinct value, wrapped over as many rows as it needs and capped at 24 entries so a high-cardinality field cannot bury the matrix.

You can pin a specific type instead of Auto, but a type that disagrees with how the cells are colored will read as misleading.

Hovering a legend entry highlights exactly the cells it covers, and a **null** / **no data** key appears whenever such cells are present.

**Source Field:** The field you want to use on the vertical axis.

**Target Field:** The field you want to use on the horizontal axis.

**Value Field:** The metric you want to use to color the boxes.

**Source/Target/Value Text:** The text to appear in the tool tip.

**Cell Size:** The size of each square. This number sets the width of the square in pixels.

**Cell Padding:** The relative padding between each square.

**Text Length:** The max number of characters to include before truncating the label.  Using a smaller number here can help prevent 

**Text Size:** The size of the text labels

**Null Color:** The color to use for a square when "null" is returned by the query

**No Data Color:** The color to use for a square when there is no value returned by the query for the specified source and target pair.

### Colors
By default the color of each square is determined by the selected metric and the thresholds under **Standard Options**. **Cell Color Mode** can switch that to one of the panel's own ramps (Sequential or Diverging) instead; the legend follows whichever you pick.





