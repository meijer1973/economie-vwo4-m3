---
name: economic-graph
description: "Technical specifications for creating economically correct, geometrically precise SVG graphs and visuals for economics education. Covers supply/demand diagrams, cost curves (MK/GTK/GVK), market equilibrium, surplus areas, tax/subsidy shifts, flowcharts, and infographics. Use this skill whenever a graph, diagram, or visual explanation is needed in presentations, Word documents, or HTML files for economics VWO lessons."
---

# Economic Graph Skill v1

Technical specifications for creating SVG-based economics visuals. All graphs must be **economically correct**, **geometrically exact**, and **visually clean**. These visuals are used by 15-16 year old VWO students.

**Core principle:** A student should understand the graph in 5 seconds without the teacher's explanation. If it takes longer, simplify.

---

## PART 1: SVG CANVAS & RENDERING

### Standard canvas

```
SVG viewBox: "0 0 720 320"  (landscape, fits A4 width)
Background: #F7FAFC with rx="8" (light gray, rounded corners)
Render width: 720px via sharp, then insert at full content width in docx
```

### Rendering pipeline

```javascript
const sharp = require("sharp");

async function svgToPng(svgString, width = 720) {
  return await sharp(Buffer.from(svgString)).resize(width).png().toBuffer();
}
```

### Insertion in Word documents

```javascript
// Content width tight margins: 9638 DXA = 6.693 inches = 482pt
// At 96 DPI: 642px. At 72 DPI: 482px.
// ImageRun width should be 482pt (full content width)
const IMG_WIDTH_PT = 482;

// Height scales proportionally from SVG viewBox aspect ratio
// For viewBox "0 0 720 320": height = 482 * (320/720) = 214pt
```

Always use **full content width** for graph images. Never shrink them smaller.

---

## PART 2: COLOR PALETTE

Use the shared project palette. Never use random colors.

```javascript
const GRAPH_COLORS = {
  // Curves and lines
  demand:     "#1A5276",  // blue — demand/vraag curve
  supply:     "#1E8449",  // green — supply/aanbod curve
  supplyNew:  "#E67E22",  // amber — shifted supply (tax/subsidy)
  cost:       "#E67E22",  // amber — MK, TK curves
  costAvg:    "#D9534F",  // red — GTK, GVK curves
  price:      "#1A5276",  // blue — horizontal price line
  revenue:    "#7B2D8E",  // purple — MO, TO curves

  // Areas
  surplus:    "#EBF5FB",  // light blue — consumer surplus
  prodSurplus:"#E8F8F0",  // light green — producer surplus
  loss:       "#FDE8E8",  // light red — deadweight loss, firm loss
  tax:        "#FEF5E7",  // light amber — tax revenue area

  // Structure
  axis:       "#2D3748",  // dark — axes
  grid:       "#CBD5E0",  // gray — grid lines, dashed references
  label:      "#718096",  // gray — axis labels, captions
  title:      "#1E2761",  // navy — graph title
  background: "#F7FAFC",  // light gray — canvas background
};
```

---

## PART 3: GRAPH TYPES & SPECIFICATIONS

### A. Supply & Demand (Vraag en Aanbod)

**Rules:**
- Demand (V) slopes downward left-to-right
- Supply (A) slopes upward left-to-right
- Price on Y-axis, Quantity on X-axis
- Equilibrium at intersection, marked with a dot (r=4)
- Dashed lines from equilibrium to both axes
- Label curves at their endpoints: "V" (demand), "A" (supply)

**Tax/subsidy shift:**
- Tax: supply shifts UP (parallel), old supply becomes dashed
- Subsidy: supply shifts DOWN
- Show old equilibrium (dot, dashed lines) and new equilibrium
- Label price levels on Y-axis (e.g., €11, €15)
- Show tax bracket on the right side with red bracket

**MANDATORY: Compute intersection points mathematically.**

For two straight lines defined by endpoints, compute the intersection — never estimate visually.

```javascript
// Line from (x1,y1) to (x2,y2): y = y1 + ((y2-y1)/(x2-x1)) * (x - x1)
// Rewrite as: y = mx + b  where m = (y2-y1)/(x2-x1), b = y1 - m*x1
//
// Intersection of line1 (m1,b1) and line2 (m2,b2):
//   x = (b2 - b1) / (m1 - m2)
//   y = m1 * x + b1

function lineParams(x1, y1, x2, y2) {
  const m = (y2 - y1) / (x2 - x1);
  return { m, b: y1 - m * x1 };
}

function intersect(line1, line2) {
  const x = (line2.b - line1.b) / (line1.m - line2.m);
  const y = line1.m * x + line1.b;
  return { x: Math.round(x), y: Math.round(y) };
}

// Example: demand (130,55)→(620,260), supply (150,250)→(550,60)
// const d = lineParams(130, 55, 620, 260);  // m=0.418, b=0.6
// const s = lineParams(150, 250, 550, 60);  // m=-0.475, b=321.25
// intersect(d, s) → { x: 359, y: 151 }
```

Place equilibrium dots at the computed (x, y). Place dashed reference lines from (x, y) to (x, yAxis) and from (x, y) to (xAxis, y).

**Common mistakes to avoid:**
- Equilibrium dots not on the actual intersection of the lines (use computation above)
- Curves that cross the axes at wrong points
- Supply and demand with identical slopes
- Tax shift that's too small to see (make it clearly visible)
- Missing axis labels

### B. Cost Curves (MK, GTK, GVK)

**Rules:**
- MK (marginale kosten): starts low, rises — typically U-shaped or rising from left
- GTK (gemiddelde totale kosten): U-shaped, minimum above the break-even price
- GVK (gemiddelde variabele kosten): U-shaped, below GTK, minimum = shutdown point
- MK crosses GTK at GTK's minimum (this is mathematically required)
- MK crosses GVK at GVK's minimum

**For volkomen concurrentie (price-taker):**
- Horizontal price line = MO = GO
- If price < GTK minimum: loss area between price and GTK
- If price > GTK minimum: profit area between GTK and price
- Production quantity where MO = MK

**Common mistakes to avoid:**
- GTK that doesn't have a clear U-shape
- MK not crossing GTK at its minimum
- Loss/profit area in the wrong location
- GVK above GTK (impossible — GTK = GVK + GCK)

### C. Flowcharts & Process Diagrams

**Rules:**
- Horizontal flow: left to right with arrow connectors
- Each step in a colored box with rounded corners (rx=6-8)
- Use different colors per step/category from the project palette
- Arrow connectors: stroke="#718096", marker-end with arrowhead
- Maximum 5-6 steps horizontally

### D. Comparison Diagrams (Before/After)

**Rules:**
- Side by side layout with clear "Before" / "After" labels
- Use a large arrow (→) between the two states
- Highlight the change with a contrasting color
- Add a summary box below with the key takeaway

### E. Bar Charts & Infographics

**Rules:**
- Horizontal bars for ranking/comparison (easier to read)
- Bars sorted from largest to smallest (top to bottom)
- Use graduating shades of one color family
- Labels directly on or next to bars (no legend needed)
- Include values at bar endpoints

---

## PART 4: TYPOGRAPHY IN GRAPHS

```
Title:      font-size="14", font-weight="bold", fill="#1E2761"
Axis label: font-size="12", fill="#718096"
Curve label:font-size="11-12", font-weight="bold", fill=[curve color]
Value label:font-size="10-11", fill="#2D3748" or "#718096"
Caption:    font-size="10-11", fill="#718096"
Legend:     font-size="10", fill="#2D3748"
```

Always use `font-family="Arial"`. Never use serif fonts in graphs.

---

## PART 5: QA CHECKLIST

### Every economic graph
1. Are axes labeled correctly? (Price/Prijs on Y, Quantity/Hoeveelheid on X)
2. Does the demand curve slope downward? Does the supply curve slope upward?
3. **Are equilibrium points computed from line equations (not estimated)?** Verify the dot coordinates satisfy both line equations.
4. Are price/quantity labels at the correct positions on axes?
5. Do dashed reference lines go from the equilibrium to both axes — and do they align exactly with the dot?
6. Are all curves labeled at their endpoints?

### Mandatory economic correctness verification
After computing coordinates, verify the economics:
1. **Supply/demand**: Does equilibrium show the correct market outcome? (higher supply → lower price, tax → higher price)
2. **Monopolist**: Is Q* at MO=MK? Is P* read from the DEMAND curve at Q* (not from MO or MK)?
3. **Cost curves**: Does MK cross GTK at GTK's minimum? Is the loss/profit area between the correct curves?
4. **Welfare loss**: Is the triangle between demand, MK, and the quantity restriction?
5. For each computed coordinate: **substitute back into the line equations** and verify it satisfies both.

### Mandatory visual verification
After generating any SVG with economic curves:
1. **Render the SVG to PNG** using `sharp(Buffer.from(svg)).resize(720).png().toBuffer()`
2. **Visually inspect** the rendered image: do dots sit exactly on line intersections?
3. If dots appear off the lines, recompute using `lineParams()` + `intersect()` from PART 3A
4. **Cross-check**: do the SVG hardcoded coordinates match the computed values? (This catches copy-paste errors where computation is correct but SVG uses old values.)
5. **Never deliver** a graph without completing both the economic and visual checks

### Cost curve graphs
7. Is the GTK curve U-shaped with a clear minimum?
8. Does MK cross GTK at GTK's minimum point?
9. Is the loss/profit area correctly positioned and labeled?
10. If GVK is shown: is it below GTK everywhere?

### Tax/subsidy graphs
11. Does the supply curve shift in the correct direction? (tax = up, subsidy = down)
12. Is the old curve shown as dashed?
13. Is the tax/subsidy bracket clearly visible?
14. Are both old and new equilibrium prices labeled?

### All visuals
15. Is the graph readable at the rendered size? (no text smaller than 10px)
16. Does it use only palette colors? (no random colors)
17. Is there a title at the top?
18. Would a student understand it in 5 seconds?

**If any answer is "no", fix before delivering.**

---

## PART 6: SIZING FOR DIFFERENT CONTEXTS

| Context | SVG viewBox | Render width | Image width in doc |
|---------|-------------|-------------|-------------------|
| Word doc (tight margins) | 720 × 280-360 | 720px | 482pt (full CW_TIGHT) |
| Word doc (standard margins) | 720 × 280-360 | 720px | 434pt (full CW) |
| PowerPoint slide | 720 × 320 | 720px | 8.5" × aspect ratio |
| HTML page | 720 × 280-360 | inline SVG | 100% container width |

**Key rule:** visuals should always be as wide as the text content. Never smaller.

---

## NEVER DO

- Use curved supply/demand lines (they should be straight unless explicitly modeling non-linear functions)
- Place labels inside the graph area where they overlap with curves
- Use more than 4-5 colors in one graph
- Add decorative elements (clipart, icons, backgrounds)
- Make text smaller than font-size="10"
- Use a white background without the light gray (#F7FAFC) canvas
- Forget to label axes or curves
- Show a GTK curve without U-shape
- Show MK not crossing GTK at its minimum

---

Apply this skill to the following task: $ARGUMENTS
