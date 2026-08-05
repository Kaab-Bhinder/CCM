import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works for Advertisers \u2014 Onboarding to First Call",
  description: "From signed IO to first delivered call: campaign setup, targeting, buffer and return policy, routing, and optimization cadence at CCM.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/advertisers">Advertisers</a> / <span>How it works</span></nav>
      <span className="eyebrow">For Advertisers</span>
      <h1>What week one actually looks like.</h1>
      <p className="lead">No mystery onboarding. Here's the path from signed agreement to your first delivered, billable call — and who's responsible at each step.</p>
    </div>
  </section>

  <section className="section">
    <div className="container narrow">
      <div className="steps">
        <div className="step">
          <div className="n"></div>
          <div>
            <h4>Campaign setup — days 1–2</h4>
            <p>We define the offer together: verticals, geographies, hours of operation, concurrency caps, and daily/weekly volume targets. You get a single account manager who owns the campaign end to end.</p>
          </div>
        </div>
        <div className="step">
          <div className="n"></div>
          <div>
            <h4>Targeting &amp; filters — days 2–3</h4>
            <p>State-level geo targeting, age and eligibility filters, existing-customer suppression, and any carrier-specific underwriting filters. Filters are enforced before routing, not after billing.</p>
          </div>
        </div>
        <div className="step">
          <div className="n"></div>
          <div>
            <h4>Buffer &amp; return policy — day 3</h4>
            <p>We agree the buffer (the connected-time threshold before a call bills), the qualification criteria, and the return window in writing. It's in the IO, not in a side conversation. Details on the <a href="/advertisers/pricing">pricing model</a> page.</p>
          </div>
        </div>
        <div className="step">
          <div className="n"></div>
          <div>
            <h4>Routing &amp; integration — days 3–7</h4>
            <p>Calls route to your numbers, ring pools, or IVR; leads post to your CRM or dialer in real time. We test with live pings before anything bills. See <a href="/advertisers/integrations">integrations</a> for supported platforms.</p>
          </div>
        </div>
        <div className="step">
          <div className="n"></div>
          <div>
            <h4>First calls — week one</h4>
            <p>Volume starts controlled — a ramp, not a firehose — so both sides can verify quality against the criteria before scaling. Every call is visible in your dashboard with recording and disposition.</p>
          </div>
        </div>
        <div className="step">
          <div className="n"></div>
          <div>
            <h4>Optimization cadence — ongoing</h4>
            <p>Weekly performance reviews in month one, then a cadence you choose. We tune sources, dayparting, and buffers against your CPA target — and cut publishers who don't perform.</p>
          </div>
        </div>
      </div>

      <div className="notice" style={{ marginTop: "36px" }}>
        <strong>Quality note:</strong> before any publisher touches your campaign, they've passed our vetting process. Read how on the <a href="/advertisers/lead-quality">lead &amp; call quality</a> page.
      </div>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Ready to see week one for real?</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>Get a proposal scoped to your vertical and volume.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <a className="btn btn-primary btn-lg" href="/advertisers#proposal">Request campaign proposal</a>
        <a className="btn btn-secondary btn-lg" href="/advertisers/pricing">Understand the pricing model</a>
      </div>
    </div>
  </section>
    </>
  );
}
