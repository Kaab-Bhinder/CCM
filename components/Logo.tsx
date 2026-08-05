/* Recreated placeholder of the CCM brand mark — swap for the original vector
   when available (also mirrored at public/logo.svg).
   Default: light mark for dark backgrounds (footer, ink strips).
   `dark`: deep-purple mark for light backgrounds (header). */
export default function Logo({ uid = "h", dark = false }: { uid?: string; dark?: boolean }) {
  const gid = `ccmg-${uid}`;
  const stops = dark
    ? [
        ["0", "#8B5CF6"],
        [".45", "#6D28D9"],
        [".75", "#5B21B6"],
        ["1", "#35156E"],
      ]
    : [
        ["0", "#FFFFFF"],
        [".38", "#DCD2FF"],
        [".68", "#A78BFA"],
        ["1", "#6D28D9"],
      ];
  const stroke = dark ? "#FFFFFF" : "#0A0711";
  return (
    <svg viewBox="0 0 430 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CCM">
      <defs>
        <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="430" y2="160">
          {stops.map(([o, c]) => (
            <stop key={o} offset={o} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <g fill={`url(#${gid})`} stroke={stroke} strokeWidth="7" paintOrder="stroke">
        <path d="M150,4 L80,4 A76,76 0 0 0 80,156 L150,156 L150,122 L80,122 A42,42 0 0 1 80,38 L150,38 Z" />
        <path d="M262,4 L192,4 A76,76 0 0 0 192,156 L262,156 L262,122 L192,122 A42,42 0 0 1 192,38 L262,38 Z" />
        <path d="M254,156 L254,4 L288,4 L332,66 L376,4 L410,4 L410,156 L376,156 L376,62 L332,124 L288,62 L288,156 Z" />
      </g>
    </svg>
  );
}
