import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Every page on the CCM site.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="SITEMAP" title={<>Sitemap</>} />

  <section className="section">
    <div className="container">
      <div className="footer-grid" style={{ marginBottom: "0" }}>
        <div className="footer-col">
          <h4>Advertisers</h4>
          <ul>
            <li><a href="/advertisers">Overview</a></li>
            <li><a href="/advertisers/how-it-works">How it works</a></li>
            <li><a href="/advertisers/lead-quality">Lead &amp; call quality</a></li>
            <li><a href="/advertisers/case-studies">Case studies</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Publishers</h4>
          <ul>
            <li><a href="/publishers">Overview</a></li>
            <li><a href="/publishers/campaigns">Campaign categories</a></li>
            <li><a href="/publishers/requirements">Requirements</a></li>
            <li><a href="/publishers/apply">Apply</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/services">Services overview</a></li>
            <li><a href="/services/pay-per-call">Pay per call</a></li>
            <li><a href="/services/ai-automation">AI automation</a></li>
            <li><a href="/services/digital-marketing">Digital marketing</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li><a href="/industries">Overview</a></li>
            <li><a href="/industries/auto-insurance">Auto insurance</a></li>
            <li><a href="/industries/medicare">Medicare</a></li>
            <li><a href="/industries/aca">ACA</a></li>
            <li><a href="/industries/final-expense">Final expense</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Trust &amp; Compliance</h4>
          <ul>
            <li><a href="/compliance">Framework</a></li>
            <li><a href="/compliance/consent">Consent &amp; TCPA</a></li>
            <li><a href="/compliance/publisher-vetting">Publisher vetting</a></li>
            <li><a href="/compliance/privacy">Data &amp; privacy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/resources/case-studies">Case studies</a></li>
            <li><a href="/resources/insights">Insights</a></li>
            <li><a href="/resources/faqs">FAQs</a></li>
            <li><a href="/resources/glossary">Glossary</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/company/about">About</a></li>
            <li><a href="/company/enterprise-partnerships">Enterprise partnerships</a></li>
            <li><a href="/company/partners">Partners</a></li>
            <li><a href="/company/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/legal/privacy-policy">Privacy policy</a></li>
            <li><a href="/legal/terms">Terms of service</a></li>
            <li><a href="/legal/publisher-agreement">Publisher agreement</a></li>
            <li><a href="/legal/advertiser-terms">Advertiser terms</a></li>
            <li><a href="/legal/consent-disclosure">Consent &amp; disclosure</a></li>
            <li><a href="/legal/dnc-policy">DNC policy</a></li>
            <li><a href="/legal/accessibility">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
