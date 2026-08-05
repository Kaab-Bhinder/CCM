import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publisher Requirements \u2014 Standards & Obligations",
  description: "Traffic quality standards, prohibited methods, consent requirements, compliance obligations, and what gets a CCM publisher account suspended.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/publishers">Publishers</a> / <span>Requirements</span></nav>
      <span className="eyebrow">For Publishers</span>
      <h1>The standards that keep payouts high.</h1>
      <p className="lead">Advertisers pay premium rates because this network filters hard. These are the rules — read them before applying, because we enforce them after.</p>
    </div>
  </section>

  <section className="section">
    <div className="container narrow">
      <div className="section-head"><span className="eyebrow">Quality</span><h2>Traffic quality standards.</h2></div>
      <ul className="checklist">
        <li><strong>Disclosed sources.</strong> Channel, creative, and landing flow declared before launch and re-declared on material change.</li>
        <li><strong>First-party intent.</strong> Consumers reached you through your content or media — not through purchased lists dialed cold.</li>
        <li><strong>Accurate creatives.</strong> Offers, prices, and affiliations represented truthfully. No fabricated urgency, no implied government affiliation.</li>
        <li><strong>Consistent metrics.</strong> Sustained abnormal short-call rates, duplicate spikes, or geo mismatches trigger review.</li>
      </ul>

      <div className="section-head" style={{ marginTop: "48px" }}><span className="eyebrow">Prohibited</span><h2>Methods that end partnerships.</h2></div>
      <ul className="checklist x">
        <li>Incentivized, rewarded, or forced-click traffic</li>
        <li>Robocalls, ringless voicemail, or autodialed outreach without compliant consent</li>
        <li>Data resale, co-registration misuse, or re-dialing aged/purchased data as fresh</li>
        <li>Spoofed caller IDs, misleading IVR scripts, or impersonation of carriers and government programs</li>
        <li>Undisclosed rebrokering of other networks' calls or leads</li>
      </ul>

      <div className="section-head" style={{ marginTop: "48px" }}><span className="eyebrow">Consent</span><h2>Consent &amp; disclosure requirements.</h2></div>
      <ul className="checklist">
        <li><strong>Evidencable consent</strong> for every call and lead — method, timestamp, and the exact language shown, retained and producible on request.</li>
        <li><strong>Clear disclosures</strong> on landing pages: who is collecting data, who may contact the consumer, and how.</li>
        <li><strong>DNC compliance</strong> for any outbound dialing, with scrub logs available for audit.</li>
        <li>Full detail in our <a href="/compliance/consent">consent &amp; TCPA practices</a> and the <a href="/legal/publisher-agreement">publisher agreement</a>.</li>
      </ul>

      <div className="section-head" style={{ marginTop: "48px" }}><span className="eyebrow">Enforcement</span><h2>What gets an account suspended.</h2></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Violation</th><th>First response</th><th>Repeat / severe</th></tr></thead>
          <tbody>
            <tr><td>Quality-metric drift (short calls, dupes)</td><td>Written warning + traffic review</td><td>Pause pending remediation</td></tr>
            <tr><td>Undisclosed source change</td><td>Immediate pause + review</td><td>Removal</td></tr>
            <tr><td>Consent evidence missing</td><td>Pause + clawback of affected events</td><td>Removal</td></tr>
            <tr><td>Fraud, spoofing, impersonation</td><td colSpan={2}>Immediate removal, forfeiture per agreement, advertiser notification</td></tr>
          </tbody>
        </table>
      </div>
      <p className="small muted" style={{ marginTop: "14px" }}>Vetting and ongoing monitoring are described publicly on the <a href="/compliance/publisher-vetting">publisher vetting</a> page.</p>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Comfortable with the bar? Good — it's what keeps rates premium.</h2>
      <div className="cta-row" style={{ justifyContent: "center", marginTop: "24px" }}>
        <a className="btn btn-primary btn-lg" href="/publishers/apply">Apply as a publisher</a>
        <a className="btn btn-secondary btn-lg" href="/publishers/campaigns">See campaign categories</a>
      </div>
    </div>
  </section>
    </>
  );
}
