import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Data & Privacy Practices",
  description: "How CCM handles consumer data: collection scope, consumer rights requests, security posture, and vendor management.",
};

export default function Page() {
  return (
    <>
      <PageBanner crumb="DATA & PRIVACY" title={<>Data &amp; Privacy Practices</>} />

  <section className="section cp-prose">
    <div className="container narrow prose">
      <h2>Data handling</h2>
      <ul>
        <li><strong>Purpose-bound collection.</strong> Consumer data is collected to connect the consumer with the product they requested — nothing is harvested "because it might be useful."</li>
        <li><strong>No blind resale.</strong> Leads are delivered to the campaign they were generated for. We are not a data broker reselling records across buyers.</li>
        <li><strong>Minimum necessary sharing.</strong> Advertisers receive the fields their campaign requires; internal access is role-based and logged.</li>
      </ul>

      <h2>Consumer rights requests</h2>
      <ul>
        <li>Access, deletion, and correction requests are honored per applicable state privacy laws (e.g., CCPA/CPRA and successors).</li>
        <li>Requests can be submitted via the <a href="/company/contact">contact page</a>; identity is verified before disclosure or deletion.</li>
        <li>Opt-outs propagate to our suppression lists network-wide.</li>
      </ul>

      <h2>Security posture</h2>
      <ul>
        <li>Encryption in transit for all delivery integrations; encryption at rest for stored records.</li>
        <li>Role-based access with audit logging on consent records and recordings.</li>
        <li>Vendor and subprocessor review before any consumer data touches a third-party system.</li>
        <li>Incident response procedure with contractual notification commitments to partners. {/* Add certifications (e.g., SOC 2) here when attained. */}</li>
      </ul>

      <div className="notice">
        <strong>Documents:</strong> Privacy policy · Consent &amp; disclosure policy · DNC policy
      </div>
    </div>
  </section>
      <ReadyBand heading={"Have Compliance\nQuestions?"} sub="Talk to our team about how TCPA, DNC, and publisher vetting apply to your specific program." />
    </>
  );
}
