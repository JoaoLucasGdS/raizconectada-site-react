import React, { useState } from "react";
import { ExpandableRecipeItem } from "./ExpandableRecipeItem";

function ExpandableRecipesList({ initialItems } = {}) {
  const items = initialItems;
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => setOpenIndex((prev) => (prev === index ? -1 : index));

  const svgFallback = (w, h, text) =>
    `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='%23e9ecef'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23888'>${encodeURIComponent(
      text
    )}</text></svg>`;

  return (
    <div className="accordion" id="recipesAccordion">
      {items.map((item, idx) => (
        <ExpandableRecipeItem
          key={item.id}
          item={item}
          idx={idx}
          openIndex={openIndex}
          toggle={toggle}
          svgFallback={svgFallback}
        />
      ))}
    </div>
  );
}

export default ExpandableRecipesList;