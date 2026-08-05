"use client";

import { useEffect } from "react";

/* Wires the three-door router tabs on /company/contact.
   Renders nothing — the markup lives in the page; this attaches behavior. */
export default function ContactTabs() {
  useEffect(() => {
    const tabs = document.querySelectorAll<HTMLAnchorElement>("#contact-tabs a");
    const panels = document.querySelectorAll<HTMLElement>(".contact-panel");
    const handlers: [HTMLAnchorElement, (e: Event) => void][] = [];

    tabs.forEach((t) => {
      const handler = (e: Event) => {
        e.preventDefault();
        tabs.forEach((x) => {
          x.classList.remove("active");
          x.style.borderColor = "";
          x.style.color = "";
        });
        t.classList.add("active");
        t.style.borderColor = "var(--purple)";
        t.style.color = "var(--text)";
        panels.forEach((p) => {
          p.style.display = "none";
        });
        const id = (t.getAttribute("href") || "").slice(1);
        const target = document.getElementById(id);
        if (target) target.style.display = "";
      };
      t.addEventListener("click", handler);
      handlers.push([t, handler]);
    });

    return () => handlers.forEach(([t, h]) => t.removeEventListener("click", h));
  }, []);

  return null;
}
