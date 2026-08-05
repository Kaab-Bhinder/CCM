import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services \u2014 Pay Per Call, AI Automation, Digital Marketing",
  description: "CCM's core capabilities: pay-per-call, AI automation, and digital marketing \u2014 plus the integrations that connect them to your stack.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <span>Services</span></nav>
      <span className="eyebrow">Services</span>
      <h1>Capabilities, not packages.</h1>
      <p className="lead">Three engines that run together or separately, depending on where your acquisition actually breaks.</p>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="grid cols-3">
        <a className="card" href="/services/pay-per-call">
          <div className="icon">📞</div>
          <h3>Pay Per Call</h3>
          <p>Inbound calls from consumers ready to talk — buffer-qualified, compliantly sourced, billed only on your criteria.</p>
          <span className="card-link">Explore pay per call</span>
        </a>
        <a className="card" href="/services/ai-automation">
          <div className="icon">⚙️</div>
          <h3>AI Automation</h3>
          <p>Qualification, scoring, routing, and follow-up automated — with a diagram of exactly where the machine sits and where humans stay.</p>
          <span className="card-link">Explore AI automation</span>
        </a>
        <a className="card" href="/services/digital-marketing">
          <div className="icon">📈</div>
          <h3>Digital Marketing</h3>
          <p>Search, social, native, display, and email run against one metric: your cost per acquired customer.</p>
          <span className="card-link">Explore digital marketing</span>
        </a>
      </div>
      <div className="grid cols-1" style={{ marginTop: "22px" }}>
        <a className="card" href="/advertisers/integrations">
          <h3>Integrations</h3>
          <p>Tracking platforms, CRMs, dialers, API and webhook delivery — the connective tissue for all three services.</p>
          <span className="card-link">See integrations</span>
        </a>
      </div>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Not sure which engine you need?</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>Describe the break in your funnel — we'll tell you which service fixes it, honestly.</p>
      <a className="btn btn-primary btn-lg" href="/company/contact">Talk to sales</a>
    </div>
  </section>
    </>
  );
}
