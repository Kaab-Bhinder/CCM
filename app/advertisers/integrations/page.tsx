import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations \u2014 Tracking, CRM & Delivery",
  description: "CCM integrates with call tracking platforms, CRMs, and dialers. Real-time posting via API and webhooks, with documented specs.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/advertisers">Advertisers</a> / <span>Integrations</span></nav>
      <span className="eyebrow">Integrations</span>
      <h1>Plugs into the stack you already run.</h1>
      <p className="lead">Calls and leads are only useful where your team works. We deliver into your tracking platform, CRM, and dialer in real time — with specs your engineers can read before kickoff.</p>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Platforms</span>
        <h2>Tracking, CRM, and dialer connections.</h2>
        {/* Trim these lists to the platforms actually run in production. */}
      </div>
      <div className="grid cols-3">
        <div className="card">
          <div className="icon">📡</div>
          <h3>Call tracking</h3>
          <p>Ringba, Retreaver, TrackDrive, Invoca — number provisioning, ring pools, real-time bidding, and postback events.</p>
        </div>
        <div className="card">
          <div className="icon">🗂️</div>
          <h3>CRM</h3>
          <p>Salesforce, HubSpot, Zoho, and custom CRMs via REST posting — field mapping agreed at onboarding.</p>
        </div>
        <div className="card">
          <div className="icon">☎️</div>
          <h3>Dialers &amp; contact centers</h3>
          <p>Five9, Convoso, ViciDial, and SIP-based routing — warm transfers, IVR handoffs, and disposition sync.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section alt">
    <div className="container narrow">
      <div className="section-head">
        <span className="eyebrow">Delivery</span>
        <h2>Real-time by default. Batch when you want it.</h2>
      </div>
      <div className="grid cols-2">
        <div className="card">
          <h3>Real-time</h3>
          <p>Leads post via HTTPS API or webhook within seconds of capture. Calls route live with source metadata attached. Failed posts retry with alerting.</p>
        </div>
        <div className="card">
          <h3>Batch</h3>
          <p>Scheduled exports (CSV/SFTP) for reconciliation, data warehousing, or systems that prefer files. Same records, same fields, your cadence.</p>
        </div>
      </div>
      <div className="notice" style={{ marginTop: "26px" }}>
        <strong>API &amp; posting specs:</strong> full documentation — authentication, field schemas, response codes, retry behavior — is shared during onboarding. <a href="/company/contact">Request the docs</a>. {/* Link a real docs URL when published. */}
      </div>
      <ul className="checklist" style={{ marginTop: "26px" }}>
        <li><strong>Ping-post supported</strong> where your buying process needs it</li>
        <li><strong>Consent metadata included</strong> on every record (method, timestamp, language shown)</li>
        <li><strong>Custom fields</strong> mapped at onboarding — not a change request later</li>
        <li><strong>Sandbox first</strong> — live pings verified before anything bills</li>
      </ul>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Have your ops team join the first call.</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>Integration questions get answered before the IO, not after.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <a className="btn btn-primary btn-lg" href="/advertisers#proposal">Request campaign proposal</a>
        <a className="btn btn-secondary btn-lg" href="/advertisers/lead-quality">See quality controls</a>
      </div>
    </div>
  </section>
    </>
  );
}
