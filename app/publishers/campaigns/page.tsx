import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Categories \u2014 Live Publisher Offers",
  description: "Live CCM campaign categories by vertical: payout types, allowed traffic sources, hours, geo coverage, and caps.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/publishers">Publishers</a> / <span>Campaign categories</span></nav>
      <span className="eyebrow">For Publishers</span>
      <h1>Live campaign categories.</h1>
      <p className="lead">What's open, what it pays on, and what traffic is allowed. Exact rates are shown in the portal after approval — the categories below are kept current.</p>
      {/* KEEP THIS PAGE CURRENT. A stale campaign board costs credibility on day one (per IA spec).
           Last reviewed: 2026-08-04 — update this date on every edit. */}
    </div>
  </section>

  <section className="section">
    <div className="container">
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Vertical</th><th>Payout type</th><th>Allowed traffic</th><th>Hours / Geo</th><th>Caps</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Auto Insurance — inbound calls</strong></td>
              <td>Per qualified call (buffer-based)</td>
              <td>Search, social, native, owned email</td>
              <td>Mon–Sat business hours · 48 states</td>
              <td>High — scaling</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>Auto Insurance — leads</strong></td>
              <td>Per accepted lead (ping-post)</td>
              <td>Search, social, owned lists</td>
              <td>24/7 delivery · 48 states</td>
              <td>High</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>Medicare — calls &amp; warm transfers</strong></td>
              <td>Per qualified call / transfer</td>
              <td>Search, social (approved creatives), TV/streaming</td>
              <td>Licensed-agent hours · nationwide</td>
              <td>Seasonal — expands for AEP</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>ACA — calls &amp; leads</strong></td>
              <td>Per qualified call / accepted lead</td>
              <td>Search, social, owned lists</td>
              <td>Business hours · FFM states</td>
              <td>Seasonal — peaks in OEP</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>Final Expense — calls &amp; leads</strong></td>
              <td>Per qualified call / accepted lead</td>
              <td>Approved creatives only — pre-launch review required</td>
              <td>Business hours · nationwide</td>
              <td>Moderate</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="small muted" style={{ marginTop: "16px" }}>Payout figures, buffer definitions, and per-campaign rules are visible in the publisher portal after approval. Traffic must meet the <a href="/publishers/requirements">network requirements</a> at all times.</p>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>See the rates behind these categories.</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>Approval takes 2–3 business days from a complete application.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <a className="btn btn-primary btn-lg" href="/publishers/apply">Apply now</a>
        <a className="btn btn-secondary btn-lg" href="/publishers/payouts">Payout terms</a>
      </div>
    </div>
  </section>
    </>
  );
}
