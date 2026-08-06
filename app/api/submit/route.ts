import { NextResponse } from "next/server";

/* Form submissions → Google Sheet.
   Set FORMS_ENDPOINT in .env.local to your Google Apps Script web-app URL.
   Keeping the call server-side hides the endpoint from the browser and lets
   us drop obvious spam before anything reaches the sheet. */

const ENDPOINT = process.env.FORMS_ENDPOINT;

// Very small in-memory rate limit (per server instance).
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Try again shortly." }, { status: 429 });
  }

  let payload: Record<string, string> = {};
  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      payload = await req.json();
    } else {
      const fd = await req.formData();
      for (const [k, v] of fd.entries()) {
        const val = typeof v === "string" ? v : "";
        payload[k] = payload[k] ? `${payload[k]}, ${val}` : val;
      }
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Could not read submission." }, { status: 400 });
  }

  // Honeypot: real people never fill this in.
  if (payload._gotcha) return NextResponse.json({ ok: true });
  delete payload._gotcha;

  const formType = payload._form || "Contact";
  delete payload._form;

  const row = {
    form: formType,
    submittedAt: new Date().toISOString(),
    page: payload._page || "",
    ...payload,
  };
  delete (row as Record<string, unknown>)._page;

  if (!ENDPOINT) {
    // No sheet configured yet — log it so nothing is silently lost in dev.
    console.warn("[forms] FORMS_ENDPOINT not set. Submission received:", row);
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });
    if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
    return NextResponse.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[forms] failed to reach sheet:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't save that just now. Please email us instead." },
      { status: 502 }
    );
  }
}
