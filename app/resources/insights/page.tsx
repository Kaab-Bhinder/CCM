import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import ReadyBand from "@/components/ReadyBand";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspective on performance marketing, AI-driven matching, and compliance from the Close Crew team.",
};

const POSTS = [
  { tag: "AI & Matching", title: "How AI Is Changing Publisher Matching", desc: "What real-time, model-driven routing means for call and lead quality across the network.", img: "/images/post-1.jpg" },
  { tag: "Compliance", title: "TCPA Compliance Checklist for 2026", desc: "A practical rundown of what advertisers and publishers should have in place before scaling volume.", img: "/images/post-2.jpg" },
  { tag: "Call Quality", title: "What Makes a Call 'High-Intent'?", desc: "Breaking down the signals that separate a qualified call from a wasted connection.", img: "/images/post-3.jpg" },
  { tag: "Strategy", title: "Choosing the Right Vertical to Scale Into", desc: "How advertisers evaluate Auto Insurance, Medicare, ACA, and Final Expense before committing spend.", img: "/images/post-4.jpg" },
];

export default function Page() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <PageBanner crumb="INSIGHTS" title="Perspective on Performance Marketing" desc={<>We&apos;re building out a library of insights on network performance, AI matching, and compliance. Here&apos;s what&apos;s coming.</>} />

      <section className="section ins-sec">
        <div className="container">
          <article className="ins-featured">
            <div className="ph-box ins-featured-img">
              <span className="ph-hint"><span className="glyph">🖼</span>{featured.img.replace(/^\//, "")}</span>
              <SmartImage src={featured.img} alt="" />
            </div>
            <div className="ins-featured-body">
              <span className="tag">{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.desc}</p>
              <span className="badge">Coming soon</span>
            </div>
          </article>
          <div className="grid cols-3 ins-grid">
            {rest.map((p) => (
              <article className="ins-card" key={p.title}>
                <div className="ph-box ins-card-img">
                  <span className="ph-hint"><span className="glyph">🖼</span>{p.img.replace(/^\//, "")}</span>
                  <SmartImage src={p.img} alt="" />
                </div>
                <div className="ins-card-body">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="badge">Coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReadyBand heading={"Want Early Access\nto Our Insights?"} sub="Get in touch and we'll make sure you're first to see new content as it publishes." />
    </>
  );
}
