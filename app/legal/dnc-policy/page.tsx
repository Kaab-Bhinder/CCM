import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "DNC Policy",
  description: "CCM Do Not Call policy: registry scrubbing, internal suppression, and consumer opt-out handling.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="DNC POLICY" title={<>Do Not Call policy</>} />

  <section className="section">
    <div className="container prose">
      <p className="updated">Effective: [DATE]</p>
      <div className="notice"><strong>Legal scaffold — counsel must draft the final text.</strong></div>

      <h2>1. Registry compliance</h2><p>[National DNC and state-list scrubbing before outbound contact; scrub frequency; log retention.]</p>
      <h2>2. Internal suppression</h2><p>[Network-wide suppression list; propagation timelines; publisher obligations.]</p>
      <h2>3. Consumer opt-out</h2><p>[How to request no further contact — phone, email, web; honor timeline. Requests via the <a href="/company/contact">contact page</a>.]</p>
      <h2>4. Safe harbor procedures</h2><p>[Written procedures, training, and enforcement supporting safe-harbor defense.]</p>
    </div>
  </section>
    </>
  );
}
