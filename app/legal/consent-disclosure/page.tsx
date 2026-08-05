import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Consent & Disclosure Policy",
  description: "CCM's policy on consumer consent capture and marketing disclosures across the network.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="CONSENT & DISCLOSURE" title={<>Consent &amp; disclosure policy</>} />

  <section className="section">
    <div className="container prose">
      <p className="updated">Effective: [DATE] · Review cadence: quarterly — <strong>counsel review required before publishing and at each cadence.</strong></p>
      <div className="notice"><strong>Legal scaffold — counsel must draft the final text.</strong> Operational description lives at <a href="/compliance/consent">consent &amp; TCPA practices</a>; this document is the binding policy version.</div>

      <h2>1. Consent standard</h2><p>[One-to-one consent definition, affirmative action requirement, prohibited patterns (pre-checked boxes, bundled consent).]</p>
      <h2>2. Required disclosures</h2><p>[Identity of collector, contacting parties, channels, message/data rates, vertical-specific language (e.g., TPMO).]</p>
      <h2>3. Evidence &amp; retention</h2><p>[What is captured per event, retention schedule, production timelines on request.]</p>
      <h2>4. Revocation</h2><p>[How consumers revoke, propagation to suppression lists, honor timelines.]</p>
      <h2>5. Network enforcement</h2><p>[Consequences for publishers who cannot evidence consent — cross-reference publisher agreement.]</p>
    </div>
  </section>
    </>
  );
}
