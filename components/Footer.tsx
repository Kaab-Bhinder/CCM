import Link from "next/link";
import { CONTACT, SOCIALS } from "@/lib/site";
import Logo from "@/components/Logo";

const FICONS: Record<string, string> = {
  Facebook: "M13 9h3l-.4 3H13v9h-3.2v-9H8V9h1.8V7.3C9.8 5 11 4 13.4 4H16v3h-1.6c-1 0-1.4.4-1.4 1.2V9z",
  Instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.4-3.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z",
  LinkedIn:
    "M5 3.5A2 2 0 1 1 5 7.6a2 2 0 0 1 0-4.1zM3.2 9h3.6v12H3.2V9zm6 0h3.5v1.8h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.2V9z",
  X: "M17.7 3H21l-7.1 8.1L22.2 21h-6.5l-5.1-6.6L4.7 21H1.4l7.6-8.7L1 3h6.7l4.6 6.1L17.7 3zm-2.3 16h1.8L6.6 4.9H4.7L15.4 19z",
};

const INFO_LINKS = [
  { label: "About Company", href: "/company/about" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Partners", href: "/company/partners" },
  { label: "Insights", href: "/resources/insights" },
  { label: "Contact Us", href: "/company/contact" },
];

const BOTTOM_LINKS = [
  { label: "About", href: "/company/about" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="footer2">
      <div className="container">
        <div className="f2-grid">
          <div className="f2-brand">
            <Logo uid="f" dark />
            <p>Close Crew connects advertisers to high-intent consumers through a trusted publisher network — powered by Pay Per Call, AI Automation, and Digital Marketing.</p>
            <div className="f2-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={FICONS[s.label]} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div className="f2-col">
            <h4>Information</h4>
            <ul>
              {INFO_LINKS.map((l) => (
                <li key={l.href + l.label}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="f2-col">
            <h4>Contact Us</h4>
            <p className="f2-line">{CONTACT.address}</p>
            <p className="f2-line"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            <p className="f2-line">{CONTACT.phone}</p>
          </div>
          <div className="f2-col">
            <h4>Newsletter</h4>
            <form className="js-demo-form f2-news" action="#" method="post">
              <input type="email" required placeholder="Enter Your Email..." aria-label="Email" />
              <button className="f2-sub" type="submit">Subscribe</button>
              <div className="form-success">Subscribed. <em>(Demo form — no backend wired yet.)</em></div>
            </form>
            <p className="f2-small">Occasional network insights and campaign openings. No spam.</p>
          </div>
        </div>
        <div className="f2-bottom">
          <p>© {new Date().getFullYear()} Close Crew. All rights reserved.</p>
          <ul>
            {BOTTOM_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
