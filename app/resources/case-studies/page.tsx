import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import ReadyBand from "@/components/ReadyBand";
import data from "@/public/assets/data.json";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "How advertisers and publishers grow with the Close Crew network, across Auto Insurance, Medicare, ACA, and Final Expense.",
};

const CASES = data.caseStudies;

export default function Page() {
  return (
    <>
      <PageBanner crumb="CASE STUDIES" title="Real Results Across the Network" desc={<>A look at how advertisers and publishers have grown volume, quality, and revenue by working with Close Crew.</>} />

      <section className="section cs-sec">
        <div className="container">
          {CASES.map((c, i) => (
            <article className={`cs-row${i % 2 ? " rev" : ""}`} key={c.title}>
              <div className="ph-box cs-img">
                <span className="ph-hint"><span className="glyph">🖼</span>{c.img.replace(/^\//, "")}</span>
                <SmartImage src={c.img} alt="" />
                <span className="cs-stat"><strong>{c.stat}</strong><span>{c.statLabel}</span></span>
              </div>
              <div className="cs-body">
                <span className="tag">{c.tag}</span>
                <h2>{c.title}</h2>
                <p>{c.desc}</p>
                <a className="discover" href="/company/contact">Discover More</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReadyBand heading={"Want Results\nLike These?"} sub="Tell us about your vertical and goals, and we'll show you how the network can perform for you." />
    </>
  );
}
