import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payouts & Terms \u2014 Published, Not Gated",
  description: "CCM publisher payment terms: schedules, minimum thresholds, payment methods, reconciliation, and who to contact about discrepancies.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/publishers">Publishers</a> / <span>Payouts &amp; terms</span></nav>
      <span className="eyebrow">For Publishers</span>
      <h1>Payment terms, published.</h1>
      <p className="lead">The second thing every publisher checks — so it's a public page, not a discovery you make after signing. {/* Confirm these values match the actual publisher agreement before launch. */}</p>
    </div>
  </section>

  <section className="section">
    <div className="container narrow">
      <div className="table-wrap">
        <table>
          <thead><tr><th>Term</th><th>Standard</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td><strong>Payment schedule</strong></td><td>Net-15</td><td>Weekly available for established partners with consistent quality</td></tr>
            <tr><td><strong>Minimum threshold</strong></td><td>$100</td><td>Balances below threshold roll to the next cycle</td></tr>
            <tr><td><strong>Payment methods</strong></td><td>ACH, wire</td><td>Wire for international partners; fees disclosed up front</td></tr>
            <tr><td><strong>Currency</strong></td><td>USD</td><td>—</td></tr>
            <tr><td><strong>Quality holdback</strong></td><td>None by default</td><td>Applied only where the publisher agreement states it, never silently</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section className="section alt">
    <div className="container narrow">
      <div className="section-head">
        <span className="eyebrow">Reconciliation</span>
        <h2>How numbers get agreed.</h2>
      </div>
      <div className="steps">
        <div className="step"><div className="n"></div><div><h4>Live accrual in the portal</h4><p>Every qualified call and accepted lead shows its payout status in real time — pending, qualified, or returned, with the reason.</p></div></div>
        <div className="step"><div className="n"></div><div><h4>Cycle-end statement</h4><p>A written statement at each cycle close, itemized to the event level. Your numbers should match the portal before payment goes out.</p></div></div>
        <div className="step"><div className="n"></div><div><h4>Discrepancy path</h4><p>Disagree with a return or a count? Your account manager owns the ticket, with a written answer inside 5 business days. Unresolved items escalate to the partnerships lead — a named person, not an alias.</p></div></div>
      </div>
      <div className="notice" style={{ marginTop: "28px" }}>
        <strong>Discrepancy contact:</strong> your account manager first; escalation to <a href="/company/contact">partnerships</a>. Response commitment: 5 business days, in writing.
      </div>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Terms look right? Apply.</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>2–3 business day review from a complete application.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <a className="btn btn-primary btn-lg" href="/publishers/apply">Apply as a publisher</a>
        <a className="btn btn-secondary btn-lg" href="/publishers/campaigns">Campaign categories</a>
      </div>
    </div>
  </section>
    </>
  );
}
