import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "CCM's accessibility commitment and how to report barriers.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="ACCESSIBILITY" title={<>Accessibility statement</>} />

  <section className="section">
    <div className="container prose">
      <p className="updated">Last updated: [DATE]</p>
      <h2>Our commitment</h2>
      <p>CCM aims to conform to WCAG 2.2 Level AA. The site is built with semantic HTML, keyboard-operable navigation, visible focus states, and reduced-motion support.</p>
      <h2>Known limitations</h2>
      <p>[List any known gaps and remediation timelines honestly — an empty promise reads worse than a tracked issue.]</p>
      <h2>Feedback</h2>
      <p>If you encounter a barrier, tell us via the <a href="/company/contact">contact page</a> or [accessibility@ccm.example]. We aim to respond within [X] business days.</p>
    </div>
  </section>
    </>
  );
}
