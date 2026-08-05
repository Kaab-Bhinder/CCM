import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Publisher Vetting \u2014 Approval, Monitoring, Removal",
  description: "How CCM approves, monitors, and removes publishers. This process is what separates a network from a lead broker.",
};

export default function Page() {
  return (
    <>
      <PageBanner crumb="PUBLISHER VETTING" title={<>Publisher Vetting</>} />

  <section className="section">
    <div className="container narrow">
      <div className="section-head"><span className="eyebrow">Stage 1</span><h2>Approval — before the first call.</h2></div>
      <div className="steps">
        <div className="step"><div className="n"></div><div><h4>Identity &amp; business verification</h4><p>Legal entity, operating history, and beneficial ownership confirmed. Anonymous applicants are declined.</p></div></div>
        <div className="step"><div className="n"></div><div><h4>Traffic method review</h4><p>Channels, creatives, and landing flows disclosed and reviewed against network standards and vertical regulations.</p></div></div>
        <div className="step"><div className="n"></div><div><h4>Reference &amp; history check</h4><p>Prior network relationships checked where provided; industry blacklist and complaint-history screening.</p></div></div>
        <div className="step"><div className="n"></div><div><h4>Per-vertical authorization</h4><p>Approval is granted per vertical. Sensitive verticals (Medicare, final expense) carry additional creative pre-approval requirements.</p></div></div>
        <div className="step"><div className="n"></div><div><h4>Contract</h4><p>The <a href="/legal/publisher-agreement">publisher agreement</a> binds consent, disclosure, and quality obligations before any traffic flows.</p></div></div>
      </div>
    </div>
  </section>

  <section className="section alt">
    <div className="container narrow">
      <div className="section-head"><span className="eyebrow">Stage 2</span><h2>Monitoring — while traffic flows.</h2></div>
      <ul className="checklist">
        <li><strong>Quality metrics per source</strong> — connect rates, buffer pass rates, duplicate rates, and conversion tracked continuously against network baselines</li>
        <li><strong>Fraud-signal monitoring</strong> — repeat-caller patterns, line-type anomalies, geo mismatches, short-call clustering; automated flags, human investigation</li>
        <li><strong>Creative &amp; landing re-review</strong> — material changes require re-disclosure; spot checks verify what's actually running</li>
        <li><strong>Recorded-call sampling</strong> — compliance sampling of call handling in sensitive verticals</li>
        <li><strong>Consent evidence audits</strong> — random and for-cause requests for consent records; failure to produce is treated as absence</li>
      </ul>
    </div>
  </section>

  <section className="section">
    <div className="container narrow">
      <div className="section-head"><span className="eyebrow">Stage 3</span><h2>Removal — when standards are broken.</h2></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Finding</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>Metric drift without misconduct</td><td>Written notice, remediation window, volume reduction until resolved</td></tr>
            <tr><td>Undisclosed source or creative change</td><td>Immediate pause; reinstatement only after full re-review</td></tr>
            <tr><td>Missing consent evidence</td><td>Pause, clawback of affected events, for-cause audit of the account</td></tr>
            <tr><td>Fraud, spoofing, impersonation</td><td>Immediate removal, forfeiture per agreement, affected advertisers notified</td></tr>
          </tbody>
        </table>
      </div>
      <p className="small muted" style={{ marginTop: "16px" }}>Removals are recorded permanently. Removed publishers do not return under new names — identity verification at approval exists partly for this reason.</p>
    </div>
  </section>
      <ReadyBand heading={"Have Compliance\nQuestions?"} sub="Talk to our team about how TCPA, DNC, and publisher vetting apply to your specific program." />
    </>
  );
}
