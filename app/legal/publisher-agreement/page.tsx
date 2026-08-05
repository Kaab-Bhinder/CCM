import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publisher Agreement",
  description: "The CCM publisher agreement: obligations, consent requirements, payment terms, and enforcement.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <span>Publisher agreement</span></nav>
      <h1>Publisher agreement</h1>
    </div>
  </section>

  <section className="section">
    <div className="container prose">
      <p className="updated">Version: [X.X] · Effective: [DATE]</p>
      <div className="notice"><strong>Legal scaffold — counsel must draft the final text.</strong> The executed agreement (signed at onboarding) controls; this public version exists so applicants can read the obligations before applying. Plain-language summaries: <a href="/publishers/requirements">requirements</a> and <a href="/publishers/payouts">payouts &amp; terms</a>.</div>

      <h2>1. Network participation</h2><p>[Approval, per-vertical authorization, account rules.]</p>
      <h2>2. Traffic standards &amp; disclosure</h2><p>[Source disclosure duty, prohibited methods, creative pre-approval where required.]</p>
      <h2>3. Consent &amp; compliance obligations</h2><p>[Consent capture and evidence duties, TCPA/DNC obligations, audit cooperation, record production timelines.]</p>
      <h2>4. Payment terms</h2><p>[Rates by IO/portal, schedule, threshold, chargeback/clawback mechanics — must match the published <a href="/publishers/payouts">payouts page</a>.]</p>
      <h2>5. Quality &amp; enforcement</h2><p>[Monitoring consent, pause/removal process, forfeiture on fraud.]</p>
      <h2>6. Confidentiality &amp; data</h2><p>[Data handling duties, consumer-data restrictions.]</p>
      <h2>7. Term &amp; termination</h2><p>[Placeholder.]</p>
      <h2>8. General</h2><p>[Governing law, assignment, notices.]</p>
    </div>
  </section>
    </>
  );
}
