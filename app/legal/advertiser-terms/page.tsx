import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertiser Terms",
  description: "CCM advertiser terms: billable events, buffers, return windows, and payment obligations.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <span>Advertiser terms</span></nav>
      <h1>Advertiser terms</h1>
    </div>
  </section>

  <section className="section">
    <div className="container prose">
      <p className="updated">Version: [X.X] · Effective: [DATE]</p>
      <div className="notice"><strong>Legal scaffold — counsel must draft the final text.</strong> The signed IO plus these terms form the contract. Plain-language explanation of the model: <a href="/advertisers/pricing">pricing</a> and <a href="/advertisers/lead-quality">lead &amp; call quality</a>.</div>

      <h2>1. Campaign terms &amp; IOs</h2><p>[IO precedence, campaign parameters, change process.]</p>
      <h2>2. Billable events</h2><p>[Buffer definition, qualification criteria, lead acceptance rules — must match the published pricing page.]</p>
      <h2>3. Returns &amp; credits</h2><p>[Dispute window, returnable reasons, credit mechanics.]</p>
      <h2>4. Payment</h2><p>[Invoicing cadence, payment terms, late-payment consequences.]</p>
      <h2>5. Data use &amp; compliance</h2><p>[Advertiser duties for delivered data: permitted use, consent scope, no resale, TCPA obligations on re-contact.]</p>
      <h2>6. Recordings &amp; audit</h2><p>[Access to recordings/consent evidence for the advertiser's own campaigns.]</p>
      <h2>7. Term &amp; termination</h2><p>[Placeholder.]</p>
      <h2>8. General</h2><p>[Warranties, liability caps, governing law.]</p>
    </div>
  </section>
    </>
  );
}
