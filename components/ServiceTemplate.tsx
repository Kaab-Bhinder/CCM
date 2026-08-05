import SmartImage from "@/components/SmartImage";
import ReadyBand from "@/components/ReadyBand";
import Testimonials from "@/components/Testimonials";
import data from "@/public/assets/data.json";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icon";

export type ServiceData = {
  crumb: string;
  title: string;
  intro: { img: string; heading: string; p1: string; p2: string };
  whatHeading: string;
  whatSub: string;
  features: { icon: string; title: string; desc: string }[];
  offersHeading: string;
  offersSub: string;
  offers: { img: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaSub: string;
  variant?: "a" | "b" | "c";
  testiHeading?: string;
  testiStart?: number;
  learnHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function PhBox({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`ph-box ${className}`}>
      <span className="ph-hint"><span className="glyph">🖼</span>{src.replace(/^\//, "")}</span>
      <SmartImage src={src} alt="" />
    </div>
  );
}

/* Service page template — Dexon reference layout, Close Crew content. */
export default function ServiceTemplate({ d }: { d: ServiceData }) {
  return (
    <div className={`svc-page var-${d.variant ?? "a"}`}>
      <PageBanner crumb={d.crumb} title={d.title} />

      {/* Intro split + stats */}
      <section className="section sp-intro">
        <div className="container contact-grid">
          <div className="sp-photo-wrap">
            <span className="sp-accent" aria-hidden="true"></span>
            <PhBox src={d.intro.img} className="sp-photo" />
          </div>
          <div>
            <h2 className="sp-h2">{d.intro.heading}</h2>
            <p className="sp-p">{d.intro.p1}</p>
            <p className="sp-p">{d.intro.p2}</p>
            <hr className="about-rule" />
            <a className="learn-more" href={d.learnHref ?? "/advertisers"}>Learn More <span>↗</span></a>
          </div>
        </div>
        {/* Network stats — shared numbers from public/assets/data.json */}
        <div className="container">
          <div className="about-stats sp-stats">
            {data.stats.map((st) => (
              <div className="astat" key={st.label}><div className="n">{st.value}</div><div className="l">{st.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do — feature cards */}
      <section className="section sp-what">
        <div className="container">
          <div className="sp-center-head">
            <h2><img className="svc-scribble" src="/assets/border.png" alt="" />{d.whatHeading}</h2>
            <img className="mini-flower" src="/assets/flower1-purple.png" alt="" aria-hidden="true" />
            <p>{d.whatSub}</p>
          </div>
          <div className="grid cols-2 sp-feat-grid">
            {d.features.map((f, i) => (
              <div className="sp-feat" key={f.title}>
                <span className={`fb fb-${i % 4}`}><Icon name={f.icon} size={62} /></span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer / process photo cards */}
      <section className="section sp-offers">
        <div className="container">
          <div className="sp-offer-head">
            <h2>{d.offersHeading} <span className="spark-inline" aria-hidden="true">✦</span></h2>
            <p>{d.offersSub}</p>
          </div>
          <div className="grid cols-3 sp-offer-grid">
            {d.offers.map((o, i) => (
              <article className={`sp-offer${i === 1 ? " mid" : ""}`} key={o.title}>
                <PhBox src={o.img} className="sp-offer-img" />
                <div className="sp-offer-body">
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                  <a className="discover" href="/company/contact">Discover More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section sp-faq">
        <div className="container">
          <div className="sp-center-head">
            <h2>How Can We Help You<br />at This Moment?</h2>
            <p>Straight answers to the questions buyers and publishers ask most.</p>
          </div>
          <div className="sp-faq-grid">
            {d.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons + partner strip */}
      <section className="section sp-reasons">
        <div className="container">
          <div className="sp-reason-head">
            <h2>Some Reasons to Choose<br />Close Crew</h2>
          </div>
          <div className="grid cols-2 sp-reason-grid">
            <figure className="sp-reason">
              <PhBox src="/images/reason-1.jpg" className="sp-reason-img" />
              <figcaption className="cap cap-lav">Vetted Publisher Network</figcaption>
            </figure>
            <figure className="sp-reason">
              <PhBox src="/images/reason-2.jpg" className="sp-reason-img" />
              <figcaption className="cap cap-mint">Compliance-First Infrastructure</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Testimonials
        heading={d.testiHeading ?? "What Partners Say"}
        sub="Feedback from advertisers and publishers running on the network."
        start={d.testiStart ?? 0}
        count={6}
        perView={3}
        scribble={false}
      />

      <ReadyBand heading={d.ctaHeading} sub={d.ctaSub} ctaLabel={d.ctaLabel} ctaHref={d.ctaHref} />
    </div>
  );
}
