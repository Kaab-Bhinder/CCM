import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Campaign Categories \u2014 Live Publisher Offers",
  description: "Live CCM campaign categories by vertical: payout types, allowed traffic sources, hours, geo coverage, and caps.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="CAMPAIGNS" title={<>Live campaign categories.</>} desc={<>What's open, what it pays on, and what traffic is allowed. Exact rates are shown in the portal after approval — the categories below are kept current.</>} />

  <section className="section">
    <div className="container">
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Vertical</th><th>Payout type</th><th>Allowed traffic</th><th>Hours / Geo</th><th>Caps</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Auto Insurance — inbound calls</strong></td>
              <td>Per qualified call (buffer-based)</td>
              <td>Search, social, native, owned email</td>
              <td>Mon–Sat business hours · 48 states</td>
              <td>High — scaling</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>Auto Insurance — leads</strong></td>
              <td>Per accepted lead (ping-post)</td>
              <td>Search, social, owned lists</td>
              <td>24/7 delivery · 48 states</td>
              <td>High</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>Medicare — calls &amp; warm transfers</strong></td>
              <td>Per qualified call / transfer</td>
              <td>Search, social (approved creatives), TV/streaming</td>
              <td>Licensed-agent hours · nationwide</td>
              <td>Seasonal — expands for AEP</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>ACA — calls &amp; leads</strong></td>
              <td>Per qualified call / accepted lead</td>
              <td>Search, social, owned lists</td>
              <td>Business hours · FFM states</td>
              <td>Seasonal — peaks in OEP</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
            <tr>
              <td><strong>Final Expense — calls &amp; leads</strong></td>
              <td>Per qualified call / accepted lead</td>
              <td>Approved creatives only — pre-launch review required</td>
              <td>Business hours · nationwide</td>
              <td>Moderate</td>
              <td><span className="badge ok">Open</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="small muted" style={{ marginTop: "16px" }}>Payout figures, buffer definitions, and per-campaign rules are visible in the publisher portal after approval. Traffic must meet the <a href="/publishers/requirements">network requirements</a> at all times.</p>
    </div>
  </section>
      <ReadyBand heading={"See the rates behind these categories."} />
    </>
  );
}
