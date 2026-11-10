import { ensureWebhook } from "@/lib/telegram";

// One-off: points the bot's webhook at this site. Safe to call again; it only
// ever sets the webhook to this site's own URL.
export async function GET(request: Request) {
  if (!process.env.TELEGRAM_BOT_TOKEN) return Response.json({ ok: false, error: "TELEGRAM_BOT_TOKEN not set" }, { status: 503 });
  const res = await ensureWebhook(new URL(request.url).origin);
  return Response.json({ ok: res.ok, changed: res.changed, error: res.description }, { headers: { "cache-control": "no-store" } });
}
