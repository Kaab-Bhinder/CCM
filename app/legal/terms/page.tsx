import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CCM website terms of service.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <span>Terms of service</span></nav>
      <h1>Terms of service</h1>
    </div>
  </section>

  <section className="section">
    <div className="container prose">
      <p className="updated">Effective date: [DATE]</p>
      <div className="notice"><strong>Legal scaffold — counsel must draft the final text.</strong> Website terms governing use of this site. Commercial relationships are governed by the <a href="/legal/advertiser-terms">advertiser terms</a> and <a href="/legal/publisher-agreement">publisher agreement</a>, not this document.</div>

      <h2>1. Acceptance of terms</h2><p>[Placeholder.]</p>
      <h2>2. Use of the site</h2><p>[Permitted use, prohibited conduct.]</p>
      <h2>3. Intellectual property</h2><p>[Marks, content ownership, limited license.]</p>
      <h2>4. Disclaimers</h2><p>[No warranties; informational content is not legal or insurance advice.]</p>
      <h2>5. Limitation of liability</h2><p>[Placeholder.]</p>
      <h2>6. Governing law &amp; disputes</h2><p>[Jurisdiction, venue, arbitration position.]</p>
      <h2>7. Contact</h2><p>Questions via the <a href="/company/contact">contact page</a>.</p>
    </div>
  </section>
    </>
  );
}
