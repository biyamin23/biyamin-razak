import { NextResponse, type NextRequest } from "next/server";

// Malaysia-only access (backup to the Vercel Firewall rule).
// Vercel sets `x-vercel-ip-country` on every request it serves. Locally the
// header is missing, so `npm run dev` keeps working. Search engines are blocked
// on purpose (owner chose strict Malaysia-only), but link-preview bots are let
// through so shared links show the OG image. A user agent can be faked, so this
// is a known, accepted gap.
const ALLOWED_COUNTRY = "MY";
const PREVIEW_BOTS =
  /WhatsApp|TelegramBot|facebookexternalhit|Facebot|meta-externalagent|Twitterbot|LinkedInBot|Discordbot/i;

const blockedPage = `<!doctype html>
<html lang="ms"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Malaysia sahaja</title>
<style>body{margin:0;min-height:100dvh;display:grid;place-items:center;background:#fff8e8;color:#000;font:18px/1.5 system-ui,sans-serif;padding:16px}
main{max-width:30rem;border:3px solid #000;border-radius:18px;box-shadow:5px 5px 0 #000;padding:24px;background:#fff}h1{margin:0 0 8px;font-size:1.6rem}</style>
</head><body><main><h1>Laman ini untuk pelawat di Malaysia sahaja.</h1>
<p>This site is only available in Malaysia.</p></main></body></html>`;

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");
  if (!country || country === ALLOWED_COUNTRY) return NextResponse.next();
  if (PREVIEW_BOTS.test(request.headers.get("user-agent") ?? "")) return NextResponse.next();

  return new NextResponse(blockedPage, {
    status: 403,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex",
    },
  });
}

export const config = {
  matcher: "/:path*",
};
