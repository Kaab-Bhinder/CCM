import SmartImage from "@/components/SmartImage";
import ReadyBand from "@/components/ReadyBand";
import PageBanner from "@/components/PageBanner";

export type IndustryData = {
  crumb: string;
  title: string;
  heroDesc: string;
  img: string;
  whyHeading: string;
  feats: { title: string; desc: string }[];
  bandText: string;
  timeline?: { when: string; what: string }[];
  timelineHeading?: string;
  ctaHeading: string;
  ctaSub: string;
};

/* Industry page template — numbered feature list + statement band + optional
   enrollment timeline. Deliberately a different layout from ServiceTemplate. */
export default function IndustryTemplate({ d }: { d: IndustryData }) {
  return (
    <>
      <PageBanner crumb={d.crumb} title={d.title} desc={d.heroDesc} />

      {/* Numbered features + photo */}
      <section className="section ind-why">
        <div className="container ind-why-grid">
          <div>
            <h2 className="sp-h2">{d.whyHeading}</h2>
            <ol className="num-feats">
              {d.feats.map((f, i) => (
                <li key={f.title}>
                  <span className="nf-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="ind-photo-wrap">
            <span className="ind-accent" aria-hidden="true"></span>
            <div className="ph-box ind-photo">
              <span className="ph-hint"><span className="glyph">🖼</span>{d.img.replace(/^\//, "")}</span>
              <SmartImage src={d.img} alt="" />
            </div>
            <img className="ind-flower" src="/assets/flower1-purple.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Statement band */}
      <section className="ind-band">
        <div className="container">
          <span className="ib-spark" aria-hidden="true">✳</span>
          <h2>{d.bandText}</h2>
        </div>
      </section>

      {/* Optional enrollment timeline */}
      {d.timeline && (
        <section className="section ind-season">
          <div className="container">
            <div className="sp-center-head">
              <h2><img className="svc-scribble" src="/assets/border.png" alt="" />{d.timelineHeading}</h2>
              <p>Volume in this vertical moves with the calendar — we plan capacity with you, not around you.</p>
            </div>
            <ol className="season-line">
              {d.timeline.map((t) => (
                <li key={t.when}>
                  <span className="sl-dot" aria-hidden="true"></span>
                  <strong>{t.when}</strong>
                  <p>{t.what}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <ReadyBand heading={d.ctaHeading} sub={d.ctaSub} />
    </>
  );
}
