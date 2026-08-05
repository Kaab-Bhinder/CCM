import data from "@/public/assets/data.json";

/* Testimonials — content lives in public/assets/data.json.
   `slice` picks how many to show so pages don't repeat the same set. */
export default function Testimonials({
  heading = "What Our Partners Say",
  sub = "Real relationships on both sides of the network.",
  start = 0,
  count = 3,
  scribble = true,
}: {
  heading?: string;
  sub?: string;
  start?: number;
  count?: number;
  scribble?: boolean;
}) {
  const list = [...data.testimonials, ...data.testimonials].slice(start, start + count);
  return (
    <section className="section testi-sec">
      <div className="container">
        <div className="testi-head">
          <span className="t-deco t-left" aria-hidden="true">✳</span>
          <h2>
            {scribble && <img className="svc-scribble" src="/assets/border.png" alt="" />}
            {heading}
          </h2>
          <span className="t-deco t-right" aria-hidden="true">✦</span>
          <p>{sub}</p>
        </div>
        <div className={`grid cols-${count === 2 ? 2 : 3} testi-grid`}>
          {list.map((t, i) => (
            <article className="tcard" key={t.name + i}>
              <div className="thead">
                <span className={`tava ta-${(start + i) % 3}`}>{t.name.charAt(0)}</span>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role} · {t.company}</span>
                </div>
              </div>
              <p>“{t.quote}”</p>
              <div className="tfoot">
                <span className="tsrc">Close Crew Network</span>
                <span className="stars">{"★".repeat(t.rating)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
