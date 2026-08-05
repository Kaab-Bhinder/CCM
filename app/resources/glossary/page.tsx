import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing Glossary \u2014 Buffer, Ping-Post, Warm Transfer",
  description: "Plain-English definitions of pay-per-call and lead generation terms: buffer time, warm transfer, duplicate lead, connect rate, payout, cap, ping-post, Jornaya, consent.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/resources">Resources</a> / <span>Glossary</span></nav>
      <span className="eyebrow">Glossary</span>
      <h1>The industry's language, in plain English.</h1>
      <p className="lead">If you're evaluating call and lead vendors, these are the terms that appear in every IO — and the ones vendors hope you won't ask about.</p>
    </div>
  </section>

  <section className="section">
    <div className="container narrow prose">
      <h2 id="buffer">Buffer time</h2>
      <p>The number of connected seconds a call must last before it becomes billable. A 90-second buffer means calls that end at 89 seconds cost the buyer nothing. The buffer allocates risk between buyer and seller — longer buffers favor buyers. See how we use it in the <a href="/advertisers/pricing">pricing model</a>.</p>

      <h2 id="warm-transfer">Warm transfer</h2>
      <p>A call handed from one live agent to another with the consumer already qualified and introduced — as opposed to a cold inbound where the buyer's agent starts from zero. Warm transfers command higher prices because qualification labor is already done.</p>

      <h2 id="duplicate-lead">Duplicate lead</h2>
      <p>A lead the buyer has already received — from the same vendor, a different vendor, or their own funnel — inside an agreed lookback window. Honest networks detect and credit duplicates automatically; see <a href="/advertisers/lead-quality">lead &amp; call quality</a>.</p>

      <h2 id="connect-rate">Connect rate</h2>
      <p>The percentage of delivered calls or dial attempts that reach a live conversation. Low connect rates usually mean stale data or bad dayparting, not bad phone systems.</p>

      <h2 id="payout">Payout</h2>
      <p>What a network pays a publisher per qualified call, accepted lead, or click. Payout terms include the rate, the qualification standard, and the payment schedule — all three matter. Ours are published on <a href="/publishers/payouts">payouts &amp; terms</a>.</p>

      <h2 id="cap">Cap</h2>
      <p>A volume limit on a campaign — daily, hourly, or concurrent. Caps exist so a buyer's agents aren't flooded past capacity, and so publishers know how much a campaign can absorb before they scale media.</p>

      <h2 id="ping-post">Ping-post</h2>
      <p>A lead delivery protocol in two steps: the seller "pings" partial, anonymized data; buyers bid or accept; the winner receives the full "post." It lets buyers filter before paying, and sellers price to demand in real time.</p>

      <h2 id="jornaya">Jornaya / TrustedForm</h2>
      <p>Third-party lead-witness services that record proof of a consumer's form interaction — what page, what language, what timestamp. Buyers use these tokens to verify consent evidence independently of the seller's word.</p>

      <h2 id="consent">Consent (one-to-one)</h2>
      <p>The consumer's documented agreement to be contacted by a specific, named party via specific channels. "One-to-one" means consent naming the actual caller — not a buried list of 800 "marketing partners." Our capture standards are on <a href="/compliance/consent">consent &amp; TCPA practices</a>.</p>

      <h2 id="dnc">DNC scrubbing</h2>
      <p>Checking outbound contact lists against the National Do Not Call Registry and state equivalents before dialing, with logs retained as proof. Absence of scrub logs is absence of scrubbing.</p>

      <h2 id="ivr">IVR</h2>
      <p>Interactive voice response — the automated menu or voice flow that greets and qualifies a caller before an agent. Well-built IVR filters wrong numbers cheaply; badly-built IVR hangs up on your best callers.</p>

      <h2 id="rpm">RPM (publisher)</h2>
      <p>Revenue per thousand impressions or sessions a publisher earns from a traffic source. Publishers compare networks on effective RPM, which is why payout transparency matters.</p>
    </div>
  </section>

  <section className="final-cta">
    <div className="container center">
      <h2>Fluent now? Put it to work.</h2>
      <div className="cta-row" style={{ justifyContent: "center", marginTop: "24px" }}>
        <a className="btn btn-primary btn-lg" href="/advertisers">I'm buying</a>
        <a className="btn btn-secondary btn-lg" href="/publishers">I'm selling traffic</a>
      </div>
    </div>
  </section>
    </>
  );
}
