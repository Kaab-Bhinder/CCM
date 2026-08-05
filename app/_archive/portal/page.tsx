import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to the CCM advertiser or publisher portal.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="LOGIN" title={<>Portal login</>} desc={<>Choose your portal. {/* PLACEHOLDER PAGE: point these buttons at the real portal URLs (e.g. your tracking platform or partner dashboard) and remove this page, or keep it as a router. */}</>} />

  <section className="section">
    <div className="container">
      <div className="two-door">
        <div className="door">
          <span className="eyebrow">Publishers</span>
          <h3>Publisher portal</h3>
          <p>Campaign stats, payout reports, and postback settings.</p>
          <a className="btn btn-primary" href="#" title="Replace with real publisher portal URL">Sign in to publisher portal</a>
          <p className="small muted" style={{ marginTop: "16px" }}>Not a partner yet? <a href="/publishers/apply">Apply to the network</a>.</p>
        </div>
        <div className="door">
          <span className="eyebrow">Advertisers</span>
          <h3>Advertiser portal</h3>
          <p>Live call reporting, quality dashboards, and billing.</p>
          <a className="btn btn-primary" href="#" title="Replace with real advertiser portal URL">Sign in to advertiser portal</a>
          <p className="small muted" style={{ marginTop: "16px" }}>Not a client yet? <a href="/company/contact">Talk to sales</a>.</p>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
