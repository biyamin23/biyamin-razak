import { ensureWebhook, ownerChatId, tg } from "@/lib/telegram";

// One-off setup + health check: points the bot's webhook at this site and
// reports whether the bot can reach the owner's chat. Reveals no secrets.
export async function GET(request: Request) {
  if (!process.env.TELEGRAM_BOT_TOKEN) return Response.json({ ok: false, error: "TELEGRAM_BOT_TOKEN not set" }, { status: 503 });
  const hook = await ensureWebhook(new URL(request.url).origin);
  const me = await tg<{ username: string }>("getMe", {});
  const chat = await tg<{ type: string }>("getChat", { chat_id: ownerChatId() });
  const info = await tg<{ pending_update_count: number; last_error_message?: string; last_error_date?: number }>("getWebhookInfo", {});
  return Response.json(
    {
      webhook: { ok: hook.ok, changed: hook.changed, lastError: info.result?.last_error_message ?? null },
      bot: me.ok ? `@${me.result?.username}` : `token problem: ${me.description}`,
      ownerChat: chat.ok ? `reachable (${chat.result?.type})` : `not reachable: ${chat.description}`,
      chatIdLooksNumeric: /^-?\d+$/.test(ownerChatId()),
    },
    { headers: { "cache-control": "no-store" } },
  );
}
