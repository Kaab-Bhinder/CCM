import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SmartImage from "@/components/SmartImage";
import ReadyBand from "@/components/ReadyBand";
import Testimonials from "@/components/Testimonials";
import data from "@/public/assets/data.json";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About",
  description: "The story, mission, and people behind Close Crew's performance marketing network.",
};

const VALUES = [
  { icon: "fire", title: "Passion-Driven", desc: "We live and breathe your success." },
  { icon: "medal", title: "Excellence First", desc: "Quality is never negotiable." },
  { icon: "handshake", title: "Trust & Integrity", desc: "Your success is our reputation." },
  { icon: "compass", title: "Strategic Vision", desc: "Long-term thinking, immediate results." },
  { icon: "lightbulb", title: "Innovation Focus", desc: "Cutting-edge solutions for modern challenges." },
  { icon: "check-circle", title: "Results Guaranteed", desc: "We deliver what we promise." },
];

export default function Page() {
  const { founder, ceo } = data.team;
  return (
    <>
      <PageBanner crumb="ABOUT" title="Built by a Crew, Grown Into a Network" />

      {/* Story + stats */}
      <section className="section ab-story">
        <div className="container ab-story-grid">
          <div>
            <h2 className="sp-h2">Our Story</h2>
            <p className="sp-p">Close Crew started as a hands-on performance marketing team and grew into a full network connecting advertisers and publishers at scale.</p>
            <p className="sp-p">Our mission stays the same: match high-intent consumers with the right advertisers, and give publishers a partner they can trust.</p>
            <hr className="about-rule" />
            <a className="learn-more" href="/company/contact">Work With Us <span>↗</span></a>
          </div>
          <div className="about-stats ab-stats">
            {data.stats.map((s) => (
              <div className="astat" key={s.label}>
                <div className="n">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO message */}
      <section className="section ceo-sec">
        <div className="container ceo-grid">
          <div className="ceo-photo-wrap">
            <span className="ceo-accent" aria-hidden="true"></span>
            <div className="ph-box ceo-photo">
              <span className="ph-hint"><span className="glyph">🧑</span>{ceo.img.replace(/^\//, "")}</span>
              <SmartImage src={ceo.img} alt={ceo.name} />
            </div>
          </div>
          <div className="ceo-copy">
            <span className="eyebrow">A Message From Our CEO</span>
            <blockquote>“{ceo.message}”</blockquote>
            <div className="ceo-sign">
              <strong>{ceo.name}</strong>
              <span>{ceo.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section founder-sec">
        <div className="container founder-card">
          <div className="ph-box founder-photo">
            <span className="ph-hint"><span className="glyph">🧑</span>{founder.img.replace(/^\//, "")}</span>
            <SmartImage src={founder.img} alt={founder.name} />
          </div>
          <div>
            <span className="eyebrow">The Founder</span>
            <h2>{founder.name}</h2>
            <p>{founder.bio}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section ab-values">
        <div className="container">
          <div className="sp-center-head">
            <h2><img className="svc-scribble" src="/assets/border.png" alt="" />What We Stand For</h2>
            <img className="mini-flower" src="/assets/flower1-purple.png" alt="" aria-hidden="true" />
          </div>
          <div className="grid cols-3 val-grid">
            {VALUES.map((v, i) => (
              <div className={`val-card vc-${i % 3}`} key={v.title}>
                <span className="val-ic"><Icon name={v.icon} size={58} /></span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials heading="What Partners Say About Us" sub="Feedback from advertisers and publishers on the network." start={0} count={6} perView={2} scribble={false} />

      <ReadyBand heading={"Want to Work\nWith the Crew?"} sub="Whether you're an advertiser, a publisher, or looking to join the team, let's talk." />
    </>
  );
}
