import Link from "next/link";

/* In-page link row so section sub-pages are never orphaned. */
export default function SubNav({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; desc: string }[];
}) {
  return (
    <section className="section subnav-sec">
      <div className="container">
        <div className="sp-center-head">
          <h2>{title}</h2>
        </div>
        <div className="grid cols-4 subnav-grid">
          {links.map((l) => (
            <Link className="subnav-card" href={l.href} key={l.href}>
              <h3>{l.label}</h3>
              <p>{l.desc}</p>
              <span className="discover">Open</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
