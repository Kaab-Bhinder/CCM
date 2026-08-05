import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CCM privacy policy: what we collect, why, who we share it with, and your rights.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="PRIVACY POLICY" title={<>Privacy policy</>} />

  <section className="section">
    <div className="container prose">
      <p className="updated">Effective date: [DATE] · Last updated: [DATE]</p>
      <div className="notice"><strong>Legal scaffold — counsel must draft the final text.</strong> The headings below define the required scope; the body text is placeholder structure, not a usable policy.</div>

      <h2>1. Who we are</h2>
      <p>[Legal entity name], operating as CCM ("we," "us"). Contact: [address, email].</p>

      <h2>2. Information we collect</h2>
      <p>Contact details, insurance-inquiry information you submit, call recordings, device and usage data, and consent records (including method, timestamp, and language shown).</p>

      <h2>3. How we use it</h2>
      <p>To connect you with the providers you asked to hear from, to verify consent and prevent fraud, to operate and improve the network, and to meet legal obligations.</p>

      <h2>4. Who we share it with</h2>
      <p>The advertiser(s) identified at the point of consent, service providers under contract, and authorities where legally required. We do not sell data outside the disclosed transaction. [Counsel: address CCPA "sale/share" definitions explicitly.]</p>

      <h2>5. Your rights</h2>
      <p>Access, deletion, correction, and opt-out rights per applicable state law. Submit requests via the <a href="/company/contact">contact page</a>; identity verification applies. See also <a href="/compliance/privacy">data &amp; privacy practices</a>.</p>

      <h2>6. Retention</h2>
      <p>[Retention schedule per record type — align with the schedule stated in consent practices.]</p>

      <h2>7. Security</h2>
      <p>[Summary of technical and organizational measures.]</p>

      <h2>8. Changes &amp; contact</h2>
      <p>[Change-notification practice; DPO/privacy contact.]</p>
    </div>
  </section>
    </>
  );
}
