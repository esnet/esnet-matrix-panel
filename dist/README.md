# Matrix Panel Plugin

This plugin creates a 2D matrix showing the relationship between 2 selected fields (source and target).
Note: This is NOT inteded to use with time series data or large data sets.  It also will not render if there are >200 rows or columns

![](https://github.com/esnet/esnet-matrix-panel/blob/master/src/img/matrix-plugin.png?raw=true)

## Options
### Display
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
The color of each square will be determined by the selected metric and the color choice in the **Standard Options**.





