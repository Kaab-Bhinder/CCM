/* 3D icon system.
   Each icon is a dimensional gradient tile (glossy highlight + rim light +
   cast shadow) with a white glyph sitting on top.

   To use real 3D artwork instead: drop a transparent PNG at
   public/assets/icons/<name>.png and it replaces the coded version
   automatically — no code change needed. */

type Glyph = { d: string; fill?: string; sw?: number };

// Colour pairs give each icon its own material.
const TONES: Record<string, [string, string]> = {
  purple: ["#A98CF8", "#6D28D9"],
  violet: ["#C4B5FD", "#7C3AED"],
  green: ["#7BDCA0", "#199A5B"],
  mint: ["#9DE7C2", "#2AA37A"],
  blue: ["#7FC5F5", "#1D6FB8"],
  sky: ["#8ED8EE", "#1E8CA8"],
  amber: ["#FBD07A", "#D18A16"],
  gold: ["#F7C86B", "#C4820D"],
  rose: ["#F6A5B8", "#C4436A"],
  ink: ["#4B3D75", "#1D1240"],
};

const ICONS: Record<string, { tone: keyof typeof TONES; g: Glyph[] }> = {
  phone: { tone: "green", g: [{ d: "M9.4 6.2c.4 1 .7 2 .9 3 .1.4 0 .8-.3 1l-1.4 1.2c1 2 2.7 3.7 4.7 4.7l1.2-1.4c.3-.3.7-.4 1-.3 1 .3 2 .6 3 .8.4.1.7.5.7.9v3.2c0 .6-.5 1-1 1-8.8-.5-15.8-7.5-16.3-16.3 0-.6.4-1 1-1h3.2c.5 0 .8.3.9.7z", fill: "#fff" }] },
  target: { tone: "purple", g: [
    { d: "M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2zm0 3a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2z", fill: "#fff" },
    { d: "M12 9.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2z", fill: "#fff" }] },
  shield: { tone: "blue", g: [{ d: "M12 2.6l7.6 3v5.6c0 4.7-3.2 9-7.6 10.2-4.4-1.2-7.6-5.5-7.6-10.2V5.6l7.6-3zm3.6 6.6l-4.5 4.7-2.2-2.2-1.6 1.7 3.9 3.9 6.1-6.4-1.7-1.7z", fill: "#fff" }] },
  dashboard: { tone: "violet", g: [{ d: "M4 4.6h6.4v6.2H4V4.6zm8.4 0H20v4h-7.6v-4zM4 12.8h6.4V19H4v-6.2zm8.4-2.2H20V19h-7.6v-8.4z", fill: "#fff" }] },
  brain: { tone: "rose", g: [{ d: "M10.4 3.2c-1.5 0-2.8 1-3.2 2.4a3 3 0 0 0-2 4.9 3.2 3.2 0 0 0 .5 4.9 3.1 3.1 0 0 0 4.1 3.3c.3.1.6.1.9.1.5 0 .9-.3.9-.8V4.1c0-.5-.4-.9-.9-.9zm3.2 0c1.5 0 2.8 1 3.2 2.4a3 3 0 0 1 2 4.9 3.2 3.2 0 0 1-.5 4.9 3.1 3.1 0 0 1-4.1 3.3c-.3.1-.6.1-.9.1-.5 0-.9-.3-.9-.8V4.1c0-.5.4-.9.9-.9z", fill: "#fff" }] },
  handshake: { tone: "amber", g: [{ d: "M2.6 8.6l3.8-3.4h4.2l2 1.9c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-1.2-1-3.4 3.3 4.5 4.4c.5.5.5 1.2 0 1.7-.5.5-1.2.5-1.7 0l-.6-.6-.5.6c-.5.5-1.2.5-1.7 0-.5-.5-.5-1.2 0-1.7l.5-.5-3.5-3.4V8.6zm18.8 0v2.7l-3.8 3.6.4.4c.5.5.5 1.2 0 1.7-.5.5-1.2.5-1.7 0l-4.6-4.5 1.4-1.4c1 1 2.6 1 3.6 0l1.5-1.5-2.2-2.1h-3.3l-.9-.9h4.6l4.9 2z", fill: "#fff" }] },
  route: { tone: "sky", g: [{ d: "M6.4 3.4a2.6 2.6 0 0 1 1 5v5.2a2.4 2.4 0 0 0 2.4 2.4h4.4v-2.6l4.4 3.8-4.4 3.8V18.4H9.8a4.8 4.8 0 0 1-4.8-4.8V8.4a2.6 2.6 0 0 1 1.4-5z", fill: "#fff" }] },
  trending: { tone: "green", g: [{ d: "M20.6 5.4v5.4h-2.4V9.3l-6 6-3.6-3.4-4.6 5-1.8-1.6 6.3-6.9 3.6 3.4 4.4-4.4h-1.6V5.4h5.7z", fill: "#fff" }] },
  search: { tone: "blue", g: [{ d: "M10.6 3.4a7.2 7.2 0 1 1 0 14.4 7.2 7.2 0 0 1 0-14.4zm0 2.6a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm5.6 10.2l1.8-1.8 4 4a1.3 1.3 0 0 1-1.8 1.8l-4-4z", fill: "#fff" }] },
  monitor: { tone: "violet", g: [{ d: "M3.4 4.6h17.2v10.8H3.4V4.6zm6 12.6h5.2l.5 2.2H8.9l.5-2.2z", fill: "#fff" }] },
  palette: { tone: "rose", g: [{ d: "M12 3.2a8.8 8.8 0 0 0 0 17.6c1.4 0 2.2-1 1.7-2a2.4 2.4 0 0 1 2-3.6h1.6c1.8 0 3.5-.8 3.5-3.2A8.8 8.8 0 0 0 12 3.2zM7.4 12.6a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm2.4-4.2a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm4.6-.2a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm2.8 3a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8z", fill: "#fff" }] },
  compass: { tone: "sky", g: [{ d: "M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2zm4 4.6l-2 5.4-5.4 2 2-5.4 5.4-2zm-4 3.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z", fill: "#fff" }] },
  plug: { tone: "amber", g: [{ d: "M8.4 2.6h2.2v4.4H8.4V2.6zm5 0h2.2v4.4h-2.2V2.6zM6 8.4h12v2.6a6 6 0 0 1-4.8 5.9v4.5h-2.4v-4.5A6 6 0 0 1 6 11V8.4z", fill: "#fff" }] },
  "user-tie": { tone: "ink", g: [{ d: "M12 3.4a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8zm0 9.2c4.1 0 7.4 2.8 7.4 6.2v1.6H4.6v-1.6c0-3.4 3.3-6.2 7.4-6.2z", fill: "#fff" }] },
  ruler: { tone: "purple", g: [{ d: "M15.6 2.8l5.6 5.6L8.4 21.2 2.8 15.6 15.6 2.8zm-.2 3.6l-1.6 1.6 1.5 1.5 1.6-1.6-1.5-1.5zm-3.2 3.2l-1.6 1.6 1.5 1.5 1.6-1.6-1.5-1.5zm-3.2 3.2L7.4 14.4l1.5 1.5 1.6-1.6-1.5-1.5z", fill: "#fff" }] },
  map: { tone: "mint", g: [{ d: "M9 3.4L3 5.6v15l6-2.2 6 2.2 6-2.2v-15l-6 2.2-6-2.2zm0 2.8l4.4 1.6v11.4L9 17.6V6.2z", fill: "#fff" }] },
  gem: { tone: "violet", g: [{ d: "M7 3.4h10l4 5.4-9 11.8L3 8.8l4-5.4zm.6 2.4L5.7 8.4h3.1l1-2.6H7.6zm4.4 0l-1 2.6h2l-1-2.6zm2.9 0l1 2.6h3.1l-1.9-2.6h-2.2zM6.4 10.8l4.2 5.6-1.9-5.6H6.4zm4.5 0l1.1 3.4 1.1-3.4h-2.2zm4.4 0l-1.9 5.6 4.2-5.6h-2.3z", fill: "#fff" }] },
  wallet: { tone: "green", g: [{ d: "M4 5.6h13.4l1 2.4H4V5.6zm-.6 3.6h17.2v11H3.4v-11zm12.4 4.2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4z", fill: "#fff" }] },
  bolt: { tone: "gold", g: [{ d: "M13.8 2.2L4.6 13.6h5.2l-.6 8.2 9.2-11.4h-5.2l.6-8.2z", fill: "#fff" }] },
  "check-circle": { tone: "mint", g: [{ d: "M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2zm4.4 6l-5.6 5.9-3.2-3.2 1.7-1.7 1.5 1.5 3.9-4.2 1.7 1.7z", fill: "#fff" }] },
  fire: { tone: "rose", g: [{ d: "M13.2 2.2s.4 2.4-.4 3.9c-.8 1.6-2.4 2-2.4 4 0 .8.4 1.4.4 1.4s-1.6-.6-1.6-2.6c0-1 .2-1.7.2-1.7S6.2 9.6 6.2 13.6c0 4 2.6 6.6 5.8 6.6s5.8-2.4 5.8-6c0-4.6-4.6-6.4-4.6-12z", fill: "#fff" }] },
  medal: { tone: "gold", g: [{ d: "M7.6 2.6h8.8l-2.2 4.2H9.8L7.6 2.6zm4.4 5.2a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8zm0 2.4l-1 2.1-2.3.3 1.7 1.6-.4 2.3 2-1.1 2 1.1-.4-2.3 1.7-1.6-2.3-.3-1-2.1z", fill: "#fff" }] },
  lightbulb: { tone: "gold", g: [{ d: "M12 2.6a6.4 6.4 0 0 0-3.6 11.7v2.1c0 .6.5 1.1 1.1 1.1h5c.6 0 1.1-.5 1.1-1.1v-2.1A6.4 6.4 0 0 0 12 2.6zM9.6 18.6h4.8v1.2c0 .8-.6 1.4-1.4 1.4h-2c-.8 0-1.4-.6-1.4-1.4v-1.2z", fill: "#fff" }] },
  globe: { tone: "sky", g: [{ d: "M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2zm0 2.2c1 1.2 1.8 2.8 2.2 4.6H9.8c.4-1.8 1.2-3.4 2.2-4.6zM6 12.9h2.9c.1 1 .3 2 .5 2.9H6.6A6.4 6.4 0 0 1 6 12.9zm0-1.8c.1-1 .3-2 .6-2.9h2.8c-.2.9-.4 1.9-.5 2.9H6zm6 7.3c-1-1.2-1.8-2.8-2.2-4.5h4.4c-.4 1.7-1.2 3.3-2.2 4.5zm3.1-6.3h2.9c-.1 1-.3 2-.6 2.9h-2.8c.3-.9.4-1.9.5-2.9zm0-1.8c-.1-1-.3-2-.5-2.9h2.8c.3.9.5 1.9.6 2.9h-2.9z", fill: "#fff" }] },
  layers: { tone: "purple", g: [{ d: "M12 2.6l9.4 4.8L12 12.2 2.6 7.4 12 2.6zM4.8 11l2.4-1.2 4.8 2.4 4.8-2.4 2.4 1.2L12 15.6 4.8 11zm0 4.4l2.4-1.2 4.8 2.4 4.8-2.4 2.4 1.2L12 20 4.8 15.4z", fill: "#fff" }] },
};

/* Real 3D artwork override: drop a PNG in public/assets/icons/ and add its
   name here. Listed names are served as images; everything else uses the
   coded 3D icon below. (Kept explicit so we never request missing files.) */
const ART = new Set<string>([
  // "phone", "target", "shield", …
]);

export default function Icon({ name, size = 54 }: { name: string; size?: number }) {
  const def = ICONS[name] ?? ICONS["check-circle"];
  const [c1, c2] = TONES[def.tone];
  const uid = `${name}-${def.tone}`;
  if (ART.has(name)) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="ico ico-art" src={`/assets/icons/${name}.png`} alt="" width={size} height={size} />;
  }

  return (
    <svg className="ico ico-3d" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${uid}`} x1="14%" y1="0%" x2="86%" y2="100%">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <linearGradient id={`gloss-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`base-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0" stopColor={c2} stopOpacity=".55" />
          <stop offset="1" stopColor={c2} stopOpacity=".15" />
        </linearGradient>
      </defs>

      {/* cast shadow */}
      <ellipse cx="32" cy="58" rx="19" ry="4" fill={c2} opacity=".22" />
      {/* extruded side */}
      <rect x="7" y="10" width="50" height="46" rx="16" fill={`url(#base-${uid})`} />
      {/* face */}
      <rect x="7" y="7" width="50" height="47" rx="16" fill={`url(#g-${uid})`} />
      {/* top gloss */}
      <path d="M23 7h18c8.8 0 16 7.2 16 16v2c-6 4.4-14.6 7-25 7S12 29.4 7 25v-2C7 14.2 14.2 7 23 7z" fill={`url(#gloss-${uid})`} />
      {/* rim light */}
      <rect x="8.2" y="8.2" width="47.6" height="44.6" rx="15" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1.2" />

      {/* glyph */}
      <g transform="translate(16 14) scale(1.33)">
        {def.g.map((p, i) => (
          <path key={i} d={p.d} fill={p.fill ?? "#fff"} />
        ))}
      </g>
    </svg>
  );
}
