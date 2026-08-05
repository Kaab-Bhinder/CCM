"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, CONTACT, SOCIALS } from "@/lib/site";
import Logo from "@/components/Logo";

function Caret() {
  return (
    <svg className="caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const IC = {
  phone:
    "M6.6 10.8c1.5 2.9 3.8 5.2 6.7 6.7l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2.1 2.3z",
  mail: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  pin: "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z",
  Facebook:
    "M13 9h3l-.4 3H13v9h-3.2v-9H8V9h1.8V7.3C9.8 5 11 4 13.4 4H16v3h-1.6c-1 0-1.4.4-1.4 1.2V9z",
  Instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.4-3.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z",
  LinkedIn:
    "M5 3.5A2 2 0 1 1 5 7.6a2 2 0 0 1 0-4.1zM3.2 9h3.6v12H3.2V9zm6 0h3.5v1.8h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.2V9z",
  X: "M17.7 3H21l-7.1 8.1L22.2 21h-6.5l-5.1-6.6L4.7 21H1.4l7.6-8.7L1 3h6.7l4.6 6.1L17.7 3zm-2.3 16h1.8L6.6 4.9H4.7L15.4 19z",
};

function Icon({ d, size = 13 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  // Desktop hover-dropdowns stay open under the cursor after navigating —
  // this suppresses the one just used until the pointer leaves it.
  const [suppressed, setSuppressed] = useState<string | null>(null);

  // Close the mobile panel whenever navigation happens.
  useEffect(() => {
    setMobileOpen(false);
    setOpenItem(null);
  }, [pathname]);

  // Header turns purple once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionOf = (path: string) => {
    if (path === "/") return "home";
    if (path.startsWith("/company/contact")) return "contact";
    const seg = path.split("/")[1] || "";
    if (seg === "advertisers" || seg === "publishers") return "solutions";
    if (seg === "compliance") return "resources";
    if (seg === "company") return "company";
    return NAV.some((n) => n.key === seg) ? seg : "";
  };
  const active = sectionOf(pathname);

  const onParentClick = (e: React.MouseEvent, key: string, hasChildren: boolean) => {
    // On mobile a parent with a submenu toggles it instead of navigating.
    if (hasChildren && typeof window !== "undefined" && window.matchMedia("(max-width: 980px)").matches) {
      e.preventDefault();
      setOpenItem(openItem === key ? null : key);
    }
  };

  return (
    <div id="site-header">
      <div className="utility-bar">
        <div className="utility-inner">
          <div className="utility-contact">
            <a href={CONTACT.phoneHref}>
              <span className="ic"><Icon d={IC.phone} size={15} /></span>
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <span className="ic"><Icon d={IC.mail} size={15} /></span>
              {CONTACT.email}
            </a>
            <span className="addr">
              <span className="ic"><Icon d={IC.pin} size={15} /></span>
              {CONTACT.address}
            </span>
          </div>
          <div className="utility-links">
            <Link href="/portal">Publisher login</Link>
            <Link href="/portal">Advertiser login</Link>
          </div>
          <div className="socials-wing">
            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                  <Icon d={IC[s.label as keyof typeof IC] as string} size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <Link className="logo" href="/" aria-label="Close Crew home">
            <Logo uid="h" dark={!scrolled} />
          </Link>
          <nav className={`main-nav${mobileOpen ? " open" : ""}`} aria-label="Primary">
            {NAV.map((item) => (
              <div
                key={item.key}
                className={`nav-item${active === item.key ? " active" : ""}${openItem === item.key ? " open" : ""}${suppressed === item.key ? " suppressed" : ""}`}
                onMouseLeave={() => setSuppressed((s) => (s === item.key ? null : s))}
              >
                <Link href={item.href} onClick={(e) => onParentClick(e, item.key, !!item.children)}>
                  {item.label}
                  {item.children && <Caret />}
                </Link>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((c, i) =>
                      "sep" in c ? (
                        <div className="sep" key={i} />
                      ) : (
                        <Link
                          key={c.href + c.label}
                          href={c.href}
                          className={c.external ? "external" : undefined}
                          onClick={() => {
                            setSuppressed(item.key);
                            setOpenItem(null);
                            setMobileOpen(false);
                          }}
                        >
                          {c.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="btn btn-primary btn-round header-cta" href="/company/contact">
              Get started
            </Link>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
