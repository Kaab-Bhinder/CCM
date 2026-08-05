import SmartImage from "@/components/SmartImage";
import ReadyBand from "@/components/ReadyBand";
import Testimonials from "@/components/Testimonials";
import data from "@/public/assets/data.json";
import PageBanner from "@/components/PageBanner";

export type SolutionData = {
  crumb: string;
  title: string;
  heroDesc: string;
  img: string;
  lead: { title: string; desc: string };
  tiles: { icon: string; title: string; desc: string }[];
  stepsHeading: string;
  steps: { title: string; desc: string }[];
  fitHeading: string;
  fit: string[];
  notFit: string[];
  quote?: { text: string; who: string };
  ctaHeading: string;
  ctaSub: string;
  variant?: "a" | "b" | "c";
  ctaLabel?: string;
  ctaHref?: string;
};

/* Solutions page template — bento benefits, numbered stepper, fit checklist.
   Deliberately a different architecture from the Services template. */
export default function SolutionTemplate({ d }: { d: SolutionData }) {
  return (
    <div className={`sol-page var-${d.variant ?? "a"}`}>
      <PageBanner crumb={d.crumb} title={d.title} desc={d.heroDesc} />

      {/* Bento benefits: one lead tile + three small tiles */}
      <section className="section sol-bento-sec">
        <div className="container">
          <div className="sol-bento">
            <div className="sol-lead">
              <img className="sol-lead-flower" src="/assets/flower1.png" alt="" aria-hidden="true" />
              <h2>{d.lead.title}</h2>
              <p>{d.lead.desc}</p>
              <div className="ph-box sol-lead-img">
                <span className="ph-hint"><span className="glyph">🖼</span>{d.img.replace(/^\//, "")}</span>
                <SmartImage src={d.img} alt="" />
              </div>
            </div>
            {d.tiles.map((t, i) => (
              <div className={`sol-tile st-${i % 3}`} key={t.title}>
                <span className="sol-ic">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered stepper */}
      <section className="section sol-steps-sec">
        <div className="container">
          <div className="sp-center-head">
            <h2><img className="svc-scribble" src="/assets/border.png" alt="" />{d.stepsHeading}</h2>
          </div>
          <ol className="sol-steps">
            {d.steps.map((s, i) => (
              <li key={s.title}>
                <span className="ss-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit / not-fit checklist + optional quote */}
      <section className="section sol-fit-sec">
        <div className="container">
          <div className="sol-fit-grid">
            <div>
              <h2 className="sp-h2">{d.fitHeading}</h2>
              {d.quote && (
                <blockquote className="sol-quote">
                  <p>“{d.quote.text}”</p>
                  <cite>{d.quote.who}</cite>
                </blockquote>
              )}
            </div>
            <div className="sol-fit-cols">
              <div className="fit-col fit-yes">
                <h4>A strong fit if…</h4>
                <ul>{d.fit.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
              <div className="fit-col fit-no">
                <h4>Not a fit if…</h4>
                <ul>{d.notFit.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReadyBand heading={d.ctaHeading} sub={d.ctaSub} ctaLabel={d.ctaLabel} ctaHref={d.ctaHref} />
    </div>
  );
}
