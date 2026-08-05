"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Site-wide behaviors that operate on rendered page content:
   - demo form handling (.js-demo-form → show success note; no backend wired yet)
   - scroll-reveal animation on cards/steps/stats
   Re-runs on every route change so newly mounted content is covered. */
export default function SiteFx() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    document.querySelectorAll<HTMLFormElement>("form.js-demo-form").forEach((form) => {
      const handler = (e: Event) => {
        e.preventDefault();
        const ok = form.querySelector<HTMLElement>(".form-success");
        if (ok) ok.style.display = "block";
        form.querySelectorAll<HTMLInputElement>("input, select, textarea, button").forEach((f) => {
          f.disabled = true;
        });
      };
      form.addEventListener("submit", handler);
      cleanups.push(() => form.removeEventListener("submit", handler));
    });

    // Numbers count up from zero when they scroll into view.
    if ("IntersectionObserver" in window) {
      const nums = document.querySelectorAll<HTMLElement>(
        ".astat .n, .stat .num, .chstat .n, .cs-stat strong, .big-num"
      );
      const numIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            numIo.unobserve(el);
            const full = el.dataset.full ?? el.textContent ?? "";
            el.dataset.full = full;
            const m = full.match(/^(\D*?)([\d,.]+)(.*)$/s);
            if (!m) return;
            const [, pre, digits, post] = m;
            const target = parseFloat(digits.replace(/,/g, ""));
            if (!isFinite(target)) return;
            const decimals = (digits.split(".")[1] || "").length;
            const grouped = digits.includes(",");
            const dur = 1400;
            const t0 = performance.now();
            const step = (now: number) => {
              const k = Math.min(1, (now - t0) / dur);
              const eased = 1 - Math.pow(1 - k, 3);
              const val = target * eased;
              const shown = grouped
                ? val.toLocaleString(undefined, { maximumFractionDigits: decimals })
                : val.toFixed(decimals);
              el.textContent = pre + shown + post;
              if (k < 1) requestAnimationFrame(step);
              else el.textContent = full;
            };
            requestAnimationFrame(step);
          });
        },
        { threshold: 0.4 }
      );
      nums.forEach((n) => numIo.observe(n));
      cleanups.push(() => numIo.disconnect());
    }

    if ("IntersectionObserver" in window) {
      const targets = document.querySelectorAll(".card, .step, .stat, .door, .spotlight");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("visible");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      targets.forEach((t) => {
        t.classList.add("reveal");
        io.observe(t);
      });
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
