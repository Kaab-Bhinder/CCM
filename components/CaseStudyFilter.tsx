"use client";

import { useEffect } from "react";

/* Wires the filter pills on /resources/case-studies to the card grid.
   Renders nothing — the markup lives in the page; this attaches behavior. */
export default function CaseStudyFilter() {
  useEffect(() => {
    const filters = document.querySelectorAll<HTMLAnchorElement>("#cs-filters a");
    const cards = document.querySelectorAll<HTMLElement>("#cs-grid .card");
    const handlers: [HTMLAnchorElement, (e: Event) => void][] = [];

    filters.forEach((f) => {
      const handler = (e: Event) => {
        e.preventDefault();
        filters.forEach((x) => {
          x.classList.remove("active");
          x.style.borderColor = "";
          x.style.color = "";
        });
        f.classList.add("active");
        f.style.borderColor = "var(--purple)";
        f.style.color = "var(--text)";
        const tag = f.getAttribute("data-filter") || "all";
        cards.forEach((c) => {
          c.style.display = tag === "all" || (c.getAttribute("data-tags") || "").includes(tag) ? "" : "none";
        });
      };
      f.addEventListener("click", handler);
      handlers.push([f, handler]);
    });

    return () => handlers.forEach(([f, h]) => f.removeEventListener("click", h));
  }, []);

  return null;
}
