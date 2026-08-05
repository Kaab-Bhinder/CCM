import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead & Call Quality \u2014 How CCM Controls It",
  description: "Publisher vetting, traffic source disclosure, duplicate detection, call scoring, fraud monitoring, and a plain-language return policy. How CCM keeps quality high.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/advertisers">Advertisers</a> / <span>Lead &amp; call quality</span></nav>
      <span className="eyebrow">The Differentiator</span>
      <h1>Quality isn't a promise here. It's a process you can audit.</h1>
      <p className="lead">Most networks tell you their leads are good. We'd rather show you the machinery: who gets into the network, what we check on every delivery, and exactly what happens when something slips through.</p>
      <div className="cta-row">
        <a className="btn btn-primary btn-lg" href="/advertisers#proposal">Request campaign proposal</a>
        <a className="btn btn-secondary btn-lg" href="/compliance">See the compliance framework</a>
      </div>
    </div>
  </section>

  {/* Vetting & disclosure */}
  <section className="section">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Upstream Control</span>
        <h2>It starts before the first call: who we let in.</h2>
      </div>
      <div className="grid cols-2">
        <div className="card feature">
          <h3>Publisher vetting &amp; onboarding</h3>
          <p>Every publisher is reviewed before activation: company verification, traffic method review, sample creative audit, and network references. Approval is per-vertical — passing for auto insurance doesn't grant Medicare access. Full process on the <a href="/compliance/publisher-vetting">publisher vetting</a> page.</p>
        </div>
        <div className="card feature">
          <h3>Traffic source disclosure</h3>
          <p>Publishers must disclose where traffic originates — channel, creative, and landing flow — before launch, and re-disclose when anything material changes. Undisclosed source switching is grounds for removal.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Per-delivery checks */}
  <section className="section alt">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">On Every Delivery</span>
        <h2>What we check while the traffic flows.</h2>
      </div>
      <div className="grid cols-3">
        <div className="card">
          <div className="icon">🔁</div>
          <h3>Duplicate &amp; recycled detection</h3>
          <p>Every lead and caller is checked against delivery history. Duplicates inside your dedup window are blocked or auto-credited — you don't pay twice for the same consumer.</p>
        </div>
        <div className="card">
          <div className="icon">🎯</div>
          <h3>Call scoring &amp; qualification</h3>
          <p>Calls are scored on connected time, intent signals, and your qualification criteria. Sub-threshold calls never bill. Scores feed publisher rankings, so quality compounds.</p>
        </div>
        <div className="card">
          <div className="icon">🚨</div>
          <h3>Fraud signals monitored</h3>
          <p>Repeat-caller patterns, carrier/line-type anomalies, short-call clustering, geo mismatches, and incentivized-traffic fingerprints — flagged automatically, investigated by humans.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Return policy */}
  <section className="section">
    <div className="container narrow">
      <div className="section-head">
        <span className="eyebrow">When Something Slips Through</span>
        <h2>The return policy, stated plainly.</h2>
        <p>These are the standard terms. Your IO states your exact numbers — and the IO is the contract, not this page.</p>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Scenario</th><th>Outcome</th><th>Window</th></tr></thead>
          <tbody>
            <tr><td><strong>Call under buffer</strong></td><td>Never billed</td><td>Automatic</td></tr>
            <tr><td><strong>Duplicate lead or caller</strong></td><td>Blocked or auto-credited</td><td>Automatic</td></tr>
            <tr><td><strong>Fails agreed qualification criteria</strong></td><td>Returnable for credit</td><td>Stated dispute window (typ. 3–5 business days)</td></tr>
            <tr><td><strong>Consent cannot be evidenced</strong></td><td>Credited, publisher investigated</td><td>Any time</td></tr>
            <tr><td><strong>Confirmed fraud</strong></td><td>Credited in full, publisher removed</td><td>Any time</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  {/* Audit trail */}
  <section className="section alt">
    <div className="container">
      <div className="grid cols-2" style={{ alignItems: "center", gap: "48px" }}>
        <div>
          <span className="eyebrow">Evidence</span>
          <h2>Recording, consent, and audit trail.</h2>
          <p className="muted" style={{ marginTop: "14px" }}>Every billable event carries its evidence with it. When your compliance team asks "prove it," the answer is an export, not a meeting.</p>
          <div className="related">
            <a href="/compliance/consent">Consent &amp; TCPA practices</a>
            <a href="/compliance/privacy">Data &amp; privacy</a>
          </div>
        </div>
        <ul className="checklist">
          <li><strong>Call recordings</strong> linked to every billable call record</li>
          <li><strong>Consent capture</strong> — method, language shown, and timestamp retained</li>
          <li><strong>Source chain</strong> — which publisher, which campaign, which creative</li>
          <li><strong>Retention</strong> — records kept per the schedule in our <a href="/compliance/consent">consent practices</a></li>
        </ul>
      </div>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Put our quality claims under a microscope.</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>Start with a controlled ramp and audit every call yourself.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <a className="btn btn-primary btn-lg" href="/advertisers#proposal">Request campaign proposal</a>
        <a className="btn btn-secondary btn-lg" href="/advertisers/pricing">See the pricing model</a>
      </div>
    </div>
  </section>
    </>
  );
}
