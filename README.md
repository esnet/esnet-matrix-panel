# <span style="color:#4EC1E0">Matrix Panel Plugin</span>

This plugin creates a 2D matrix showing the relationship between 2 selected fields (source and target).
Note: This is NOT inteded to use with time series data or large data sets.  It also will not render if there are >200 rows or columns

## <span style="color:#6D6E71">Options</span>
### <span style="color:#FF780C">Display</span>
<span style="color:#6D6E71; font-weight:bold">Source Field:</span> The field you want to use on the vertical axis.
<span style="color:#6D6E71; font-weight:bold">Target Field:</span> The field you want to use on the horizontal axis.
<span style="color:#6D6E71; font-weight:bold">Value Field:</span> The metric you want to use to color the boxes.
<span style="color:#6D6E71; font-weight:bold">Source/Target/Value Text:</span> The text to appear in the tool tip.

<span style="color:#6D6E71; font-weight:bold">Cell Size:</span> The size of each square. This number sets the width of the square in pixels.
<span style="color:#6D6E71; font-weight:bold">Cell Padding:</span> The relative padding between each square.
<span style="color:#6D6E71; font-weight:bold">Text Length:</span> The max number of characters to include before truncating the label.  Using a smaller number here can help prevent 
<span style="color:#6D6E71; font-weight:bold">Text Size:</span> The size of the text labels

<span style="color:#6D6E71; font-weight:bold">Null Color:</span> The color to use for a square when "null" is returned by the query
<span style="color:#6D6E71; font-weight:bold">No Data Color:</span> The color to use for a square when there is no value returned by the query for the specified source and target pair.

#### <span style="color:#FF780C">Colors</span>
The color of each square will be determined by the selected metric and the color choice in the **Standard Options**.





