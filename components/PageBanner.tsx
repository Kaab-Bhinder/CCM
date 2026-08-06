/* Shared page banner — restrained, corporate. Thin architectural line work,
   a muted brand wash, and quiet entrance motion. No decorative clutter. */

export default function PageBanner({
  crumb,
  title,
  desc,
  children,
}: {
  crumb: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pb-hero">
      {/* concentric hairline arcs — architectural, slow drift */}
      <svg className="pb-arcs" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="currentColor">
          <circle cx="140" cy="80" r="150" strokeWidth=".7" opacity=".22" />
          <circle cx="140" cy="80" r="240" strokeWidth=".7" opacity=".14" />
          <circle cx="1070" cy="330" r="180" strokeWidth=".7" opacity=".2" />
          <circle cx="1070" cy="330" r="270" strokeWidth=".7" opacity=".12" />
          <line x1="0" y1="330" x2="1200" y2="330" strokeWidth=".7" opacity=".1" />
        </g>
      </svg>

      <span className="pb-sheen" aria-hidden="true"></span>

      <div className="container">
        <nav className="pb-crumb" aria-label="Breadcrumb">
          <span>Home</span>
          <i aria-hidden="true" />
          <strong>{crumb}</strong>
        </nav>
        <h1 className="pb-title">{title}</h1>
        {desc && <p className="pb-desc">{desc}</p>}
        {children && <div className="pb-actions">{children}</div>}
      </div>
    </section>
  );
}
