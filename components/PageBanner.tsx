/* Shared page banner — animated paper hero used on every interior page.
   All decor is drawn in code (no image assets) so it scales cleanly. */

function Flower({ className, petals = 8, color }: { className: string; petals?: number; color: string }) {
  const p = Array.from({ length: petals }, (_, i) => (360 / petals) * i);
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <g transform="translate(50 50)">
        {p.map((deg) => (
          <ellipse key={deg} rx="11" ry="30" fill={color} opacity=".85" transform={`rotate(${deg})`} />
        ))}
        <circle r="9" fill="#fff" opacity=".9" />
        <circle r="4.5" fill={color} />
      </g>
    </svg>
  );
}

function OrbitRing({ className, dot }: { className: string; dot: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 8" opacity=".5" />
      <circle cx="60" cy="8" r="6" fill={dot} />
    </svg>
  );
}

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
      {/* dashed curves */}
      <svg className="pb-curve pb-curve-l" viewBox="0 0 300 220" aria-hidden="true">
        <path d="M6,206 C36,96 156,36 292,64" fill="none" stroke="#171130" strokeWidth="1.5" strokeDasharray="6 9" opacity=".3" />
      </svg>
      <svg className="pb-curve pb-curve-r" viewBox="0 0 300 220" aria-hidden="true">
        <path d="M294,20 C210,44 250,140 120,168 C74,178 58,200 74,216" fill="none" stroke="#171130" strokeWidth="1.5" strokeDasharray="6 9" opacity=".28" />
      </svg>

      {/* revolving flowers */}
      <Flower className="pbf pbf-1" color="#8B5CF6" petals={8} />
      <Flower className="pbf pbf-2" color="#6FCF97" petals={6} />
      <Flower className="pbf pbf-3" color="#E9B949" petals={10} />
      <Flower className="pbf pbf-4" color="#C4B5FD" petals={6} />
      <Flower className="pbf pbf-5" color="#7C3AED" petals={12} />

      {/* orbit rings with travelling dots */}
      <OrbitRing className="pb-orbit pb-orbit-l" dot="#8B5CF6" />
      <OrbitRing className="pb-orbit pb-orbit-r" dot="#6FCF97" />

      {/* floating geometry */}
      <span className="pb-geo pb-sq" aria-hidden="true"></span>
      <span className="pb-geo pb-tri" aria-hidden="true"></span>
      <span className="pb-geo pb-ring" aria-hidden="true"></span>
      <span className="pb-geo pb-pill" aria-hidden="true"></span>

      {/* sparkles + glow blobs */}
      <span className="pb-star pb-star-1" aria-hidden="true">✦</span>
      <span className="pb-star pb-star-2" aria-hidden="true">✳</span>
      <span className="pb-star pb-star-3" aria-hidden="true">✧</span>
      <span className="pb-blob pb-blob-1" aria-hidden="true"></span>
      <span className="pb-blob pb-blob-2" aria-hidden="true"></span>

      <div className="container">
        <nav className="crumb-pill pb-crumb" aria-label="Breadcrumb">
          HOME <span>➜</span> {crumb}
        </nav>
        <h1 className="pb-title">{title}</h1>
        {desc && <p className="pb-desc">{desc}</p>}
        {children && <div className="pb-actions">{children}</div>}
      </div>
      <span className="pb-edge" aria-hidden="true">✳</span>
    </section>
  );
}
