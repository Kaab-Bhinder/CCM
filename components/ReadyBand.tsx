/* Dark pre-footer CTA band — reused on the homepage and service pages. */
export default function ReadyBand({
  heading = "Ready to Grow Through\nPerformance?",
  sub = "Whether you're looking to scale advertiser demand or grow as a publisher, let's talk about what fits your goals.",
  ctaLabel = "Get in Touch",
  ctaHref = "/company/contact",
}: {
  heading?: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [l1, l2] = heading.includes("\n") ? heading.split("\n") : [heading, null];
  return (
    <section className="ready-band">
      <svg className="rb-curve" viewBox="0 0 260 220" aria-hidden="true">
        <path d="M240,10 C140,40 200,120 90,150 C50,162 40,190 60,214" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.6" strokeDasharray="5 8" />
      </svg>
      <span className="rb-spark" aria-hidden="true">✳</span>
      <div className="container rb-grid">
        <div>
          <h2>{l1}{l2 && <><br />{l2}</>}</h2>
          <p>{sub}</p>
          <a className="rb-link" href={ctaHref}>{ctaLabel} <span>↗</span></a>
        </div>
        <div className="rb-contact">
          <span className="rb-ic">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#D8C8FF" strokeWidth="1.6"><rect x="2.5" y="4.5" width="19" height="15" rx="3" /><path d="M3,6 l9,7 9,-7" /></svg>
          </span>
          <a className="rb-big" href="mailto:contact@closecrewmarketing.com">contact@<wbr />closecrewmarketing.com</a>
          <span className="rb-note">(We reply within one business day)</span>
        </div>
      </div>
    </section>
  );
}
