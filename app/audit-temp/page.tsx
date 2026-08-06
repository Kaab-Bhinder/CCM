"use client";

import { useEffect, useState } from "react";

/* TEMPORARY: WCAG contrast auditor. Delete this folder when finished. */

const ROUTES = [
  "/", "/advertisers", "/advertisers/how-it-works", "/advertisers/lead-quality",
  "/advertisers/case-studies", "/publishers", "/publishers/campaigns",
  "/publishers/requirements", "/publishers/apply", "/services",
  "/services/pay-per-call", "/services/ai-automation", "/services/digital-marketing",
  "/industries", "/industries/auto-insurance", "/industries/medicare", "/industries/aca",
  "/industries/final-expense", "/compliance", "/compliance/consent",
  "/compliance/publisher-vetting", "/compliance/privacy", "/resources",
  "/resources/case-studies", "/resources/insights", "/resources/faqs",
  "/company/about", "/company/partners", "/company/enterprise-partnerships",
  "/company/contact", "/sitemap", "/legal/terms", "/legal/privacy-policy",
  "/legal/publisher-agreement", "/legal/advertiser-terms", "/legal/consent-disclosure",
  "/legal/dnc-policy", "/legal/accessibility",
];

const AUDIT = `
(() => {
  const parse = (c) => {
    const m = c && c.match(/rgba?\\(([^)]+)\\)/);
    if (!m) return null;
    const p = m[1].split(",").map((x) => parseFloat(x));
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => {
    const l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  // Every colour that could sit behind this element (gradients included).
  const backgrounds = (el, win) => {
    const stack = [];
    let node = el;
    while (node && node.nodeType === 1) {
      const cs = win.getComputedStyle(node);
      const bg = parse(cs.backgroundColor);
      if (bg && bg.a > 0.02) stack.push(bg);
      const img = cs.backgroundImage;
      if (img && img !== "none") {
        const cols = img.match(/rgba?\\([^)]+\\)/g) || [];
        cols.forEach((c) => { const p = parse(c); if (p && p.a > 0.15) stack.push(p); });
      }
      node = node.parentElement;
    }
    stack.push({ r: 255, g: 255, b: 255, a: 1 });
    return stack;
  };

  const out = [];
  const els = document.querySelectorAll("body *");
  els.forEach((el) => {
    const txt = Array.from(el.childNodes)
      .filter((n) => n.nodeType === 3)
      .map((n) => n.textContent.trim())
      .join(" ")
      .trim();
    if (!txt || txt.length < 2) return;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) < 0.15) return;
    const rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    const fg = parse(cs.color);
    if (!fg || fg.a < 0.1) return;
    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight, 10) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3.0 : 4.5;

    // strictest: worst contrast against any possible background behind it
    let worst = 99, worstBg = null;
    backgrounds(el, window).slice(0, 6).forEach((bg) => {
      const solid = bg.a < 1 ? over(bg, { r: 255, g: 255, b: 255, a: 1 }) : bg;
      const fgSolid = fg.a < 1 ? over(fg, solid) : fg;
      const r = ratio(fgSolid, solid);
      if (r < worst) { worst = r; worstBg = solid; }
    });
    if (worst < need) {
      out.push({
        sel: el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\\s+/).slice(0, 2).join(".") : ""),
        text: txt.slice(0, 42),
        fg: cs.color,
        bg: worstBg ? "rgb(" + Math.round(worstBg.r) + "," + Math.round(worstBg.g) + "," + Math.round(worstBg.b) + ")" : "?",
        ratio: worst.toFixed(2),
        need,
        size: Math.round(size),
      });
    }
  });
  return out;
})()
`;

export default function Page() {
  const [log, setLog] = useState<string>("running…");

  useEffect(() => {
    (async () => {
      const lines: string[] = [];
      for (const route of ROUTES) {
        const frame = document.createElement("iframe");
        frame.style.cssText = "width:1280px;height:900px;position:absolute;left:-9999px";
        frame.src = route;
        document.body.appendChild(frame);
        await new Promise<void>((res) => {
          frame.onload = () => res();
          setTimeout(res, 9000);
        });
        await new Promise((r) => setTimeout(r, 700));
        try {
          const win = frame.contentWindow as Window & { eval: (s: string) => unknown };
          const res = win.eval(AUDIT) as { sel: string; text: string; fg: string; bg: string; ratio: string; need: number; size: number }[];
          if (res.length === 0) lines.push(`OK   ${route}`);
          else {
            lines.push(`FAIL ${route}  (${res.length})`);
            res.slice(0, 14).forEach((f) =>
              lines.push(`     ${f.ratio}:1 need ${f.need}  ${f.size}px  ${f.sel}  fg=${f.fg} bg=${f.bg}  "${f.text}"`)
            );
          }
        } catch (e) {
          lines.push(`ERR  ${route}  ${String(e).slice(0, 80)}`);
        }
        frame.remove();
        setLog(lines.join("\n"));
      }
      lines.push("=== AUDIT COMPLETE ===");
      setLog(lines.join("\n"));
    })();
  }, []);

  return <pre id="audit-out" style={{ padding: 20, fontSize: 12, whiteSpace: "pre-wrap" }}>{log}</pre>;
}
