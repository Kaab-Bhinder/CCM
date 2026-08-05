import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Model \u2014 What You Pay For and When",
  description: "How CCM pricing works: cost per call vs. cost per lead, buffer thresholds, billable events, return windows, and ramp expectations. No gated rate cards.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/advertisers">Advertisers</a> / <span>Pricing model</span></nav>
      <span className="eyebrow">For Advertisers</span>
      <h1>No rate-card theater. Here's how the model works.</h1>
      <p className="lead">Rates vary by vertical, geography, and season — anyone quoting a flat number before understanding your campaign is guessing. What we can state up front is the model: what triggers a charge, what never does, and what's returnable.</p>
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">The Model</span>
        <h2>Two ways to buy.</h2>
      </div>
      <div className="grid cols-2">
        <div className="card feature">
          <h3>Cost per call (CPC)</h3>
          <p>You pay for calls that connect and stay past the agreed buffer. A 30-second wrong number costs nothing. Pricing reflects vertical, states, hours, and exclusivity level.</p>
        </div>
        <div className="card feature">
          <h3>Cost per lead (CPL)</h3>
          <p>You pay for consent-verified, duplicate-checked leads delivered in real time to your systems. Rejected posts (failed validation, dedup hits) never bill.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section alt">
    <div className="container narrow">
      <div className="section-head">
        <span className="eyebrow">Mechanics</span>
        <h2>What the buffer means — and what triggers a billable event.</h2>
        <p>The buffer is the connected-time threshold a call must pass before it becomes billable. It exists so you pay for conversations, not connections.</p>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Term</th><th>What it means</th><th>Typical range</th></tr></thead>
          <tbody>
            <tr><td><strong>Buffer</strong></td><td>Connected seconds before a call bills</td><td>60–120s, set per campaign</td></tr>
            <tr><td><strong>Billable event (call)</strong></td><td>Call exceeds buffer and meets qualification criteria</td><td>Defined in your IO</td></tr>
            <tr><td><strong>Billable event (lead)</strong></td><td>Lead passes validation, consent check, and dedup</td><td>At delivery</td></tr>
            <tr><td><strong>Return window</strong></td><td>Time to dispute a billed event for credit</td><td>3–5 business days</td></tr>
            <tr><td><strong>Returnable reasons</strong></td><td>Fails criteria, no evidencable consent, confirmed fraud</td><td>Per <a href="/advertisers/lead-quality">quality policy</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="container narrow">
      <div className="section-head">
        <span className="eyebrow">Commitment</span>
        <h2>Minimum spend and ramp.</h2>
      </div>
      <ul className="checklist">
        <li><strong>Test budgets are welcome.</strong> We'd rather earn scale than demand it — typical pilots start controlled, sized to produce a statistically honest read.</li>
        <li><strong>Volume ramps, it doesn't spike.</strong> Week one is capped so both sides verify quality before scale. See <a href="/advertisers/how-it-works">how it works</a>.</li>
        <li><strong>No long lock-ins to start.</strong> Initial terms are short; renewals are earned by performance you can see in the dashboard.</li>
        <li><strong>Seasonality is priced honestly.</strong> AEP and OEP demand moves rates in Medicare and ACA — we plan capacity with you in advance rather than surprising you in October.</li>
      </ul>
      <div className="notice">
        <strong>Why publish this?</strong> Because the pricing conversation goes faster when the model is already understood — and because buyers burned by opaque billing deserve to see the rules before the pitch.
      </div>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Get numbers for your specific campaign.</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>Vertical, states, hours, volume — we'll quote against reality.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <a className="btn btn-primary btn-lg" href="/advertisers#proposal">Request campaign proposal</a>
        <a className="btn btn-secondary btn-lg" href="/advertisers/lead-quality">Review quality controls</a>
      </div>
    </div>
  </section>
    </>
  );
}
