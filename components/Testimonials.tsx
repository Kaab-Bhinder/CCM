"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import data from "@/public/assets/data.json";

/* Testimonials — content lives in public/assets/data.json.
   When there are more items than fit in one view, the track becomes a
   drag/swipe slider with page dots underneath. */
export default function Testimonials({
  heading = "What Our Partners Say",
  sub = "Real relationships on both sides of the network.",
  start = 0,
  count = 3,
  perView = 3,
  scribble = true,
}: {
  heading?: string;
  sub?: string;
  start?: number;
  count?: number;
  perView?: number;
  scribble?: boolean;
}) {
  const list = [...data.testimonials, ...data.testimonials].slice(start, start + count);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  // Recalculate page count from real layout (handles responsive perView).
  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".tcard");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const step = card.offsetWidth + gap;
    // How many whole cards fit in view → how many pages of them exist.
    const visible = Math.max(1, Math.round((el.clientWidth + gap) / step));
    const totalCards = el.querySelectorAll(".tcard").length;
    const total = Math.max(1, Math.ceil(totalCards / visible));
    setPages(el.scrollWidth > el.clientWidth + 4 ? total : 1);
    setPage(Math.min(total - 1, Math.round(el.scrollLeft / Math.max(1, el.clientWidth))));
  }, []);

  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => setPage(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)));
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // Drag with a mouse (touch already scrolls natively).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let down = false, startX = 0, startLeft = 0, moved = false;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.classList.add("dragging");
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      el.classList.remove("dragging");
      // snap to nearest page
      const w = el.clientWidth;
      el.scrollTo({ left: Math.round(el.scrollLeft / w) * w, behavior: "smooth" });
    };
    const onClick = (e: MouseEvent) => { if (moved) { e.preventDefault(); e.stopPropagation(); } };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClick, true);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClick, true);
    };
  }, []);

  const goto = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="section testi-sec">
      <div className="container">
        <div className="testi-head">
          <span className="t-deco t-left" aria-hidden="true">✳</span>
          <h2>
            {scribble && <img className="svc-scribble" src="/assets/border.png" alt="" />}
            {heading}
          </h2>
          <span className="t-deco t-right" aria-hidden="true">✦</span>
          <p>{sub}</p>
        </div>

        <div
          className="testi-track"
          ref={trackRef}
          style={{ ["--per-view" as string]: perView }}
        >
          {list.map((t, i) => (
            <article className="tcard" key={t.name + i}>
              <div className="thead">
                <span className={`tava ta-${(start + i) % 3}`}>{t.name.charAt(0)}</span>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role} · {t.company}</span>
                </div>
              </div>
              <p>“{t.quote}”</p>
              <div className="tfoot">
                <span className="tsrc">Close Crew Network</span>
                <span className="stars">{"★".repeat(t.rating)}</span>
              </div>
            </article>
          ))}
        </div>

        {pages > 1 && (
          <div className="testi-dots" role="tablist" aria-label="Testimonial pages">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                className={i === page ? "on" : ""}
                aria-label={`Go to testimonial page ${i + 1}`}
                aria-selected={i === page}
                role="tab"
                onClick={() => goto(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
