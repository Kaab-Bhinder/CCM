import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Consent & TCPA Practices",
  description: "CCM consent capture methodology, disclosure handling, call recording practices, DNC scrubbing, and record retention.",
};

export default function Page() {
  return (
    <>
      <PageBanner crumb="CONSENT & TCPA" title={<>Consent &amp; TCPA Practices</>} />

  <section className="section cp-prose">
    <div className="container narrow prose">
      <p className="updated">Last reviewed: [set date after counsel review] · Review cadence: quarterly</p>

      <h2>Consent capture methodology</h2>
      <ul>
        <li><strong>One-to-one consent.</strong> Consent is captured for the specific party who will contact the consumer, identified by name at the point of capture — not blanket "marketing partners" consent.</li>
        <li><strong>Clear and conspicuous disclosure.</strong> The consent language appears adjacent to the action that grants it, unbundled from other terms, in plain language.</li>
        <li><strong>Affirmative action.</strong> Consent requires an unambiguous act (checkbox, button, verbal confirmation) — never pre-checked or implied.</li>
        <li><strong>Evidence retained per event.</strong> For every lead and call: the exact language displayed, method of consent, timestamp, page or call context, and technical metadata (e.g., IP, session) where applicable.</li>
      </ul>

      <h2>Disclosure language handling</h2>
      <ul>
        <li>Landing pages disclose who is collecting information, who may contact the consumer, and by what channels.</li>
        <li>Vertical-specific disclosures (e.g., third-party marketing organization language in Medicare) are required in creative and call flows where regulation demands them.</li>
        <li>Publisher landing flows are reviewed at onboarding and re-reviewed on material change; see publisher vetting.</li>
      </ul>

      <h2>Call recording practices</h2>
      <ul>
        <li>Calls are recorded with disclosure consistent with applicable one- and two-party consent laws.</li>
        <li>Recordings are linked to the billable event record and available to the advertiser for the campaign they own.</li>
        <li>Access to recordings is role-restricted and logged.</li>
      </ul>

      <h2>DNC scrubbing</h2>
      <ul>
        <li>Outbound contact is scrubbed against the National DNC Registry and applicable state lists before dialing.</li>
        <li>Internal suppression lists are honored network-wide; a consumer's opt-out with one campaign suppresses across our system.</li>
        <li>Scrub logs are retained and auditable. See the DNC policy.</li>
      </ul>

      <h2>Record retention &amp; audit trail</h2>
      <ul>
        <li>Consent records, recordings, and source-chain data are retained for a defined schedule aligned to regulatory expectations and contractual commitments. {/* State the actual schedule (e.g., 5 years) after counsel confirms. */}</li>
        <li>Every billable event can be traced end to end: publisher → campaign → creative → consent → delivery → disposition.</li>
        <li>Audit exports are available to advertisers for their campaigns and to regulators on lawful request.</li>
      </ul>

      <div className="notice">
        <strong>Scope note:</strong> this page describes operating practices; it is not legal advice and does not modify any contract. The controlling documents are the consent &amp; disclosure policy, publisher agreement, and advertiser terms.
      </div>
    </div>
  </section>
      <ReadyBand heading={"Have Compliance\nQuestions?"} sub="Talk to our team about how TCPA, DNC, and publisher vetting apply to your specific program." />
    </>
  );
}
