"use client";

import { useEffect, useRef, useState } from "react";

/* Server-rendered <img> so the browser starts loading immediately (no pop-in).
   If the file is missing, the image removes itself and the styled placeholder
   behind it shows instead — including errors that fire before hydration
   (caught by the naturalWidth check on mount). */
export default function SmartImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
