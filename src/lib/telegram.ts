import "server-only";
import { createHash } from "node:crypto";

const token = () => process.env.TELEGRAM_BOT_TOKEN ?? "";
export const ownerChatId = () => process.env.TELEGRAM_CHAT_ID ?? "";

/** Secret Telegram sends back on every webhook call, derived from the bot token
 *  so no extra env var is needed. Only our server and Telegram know it. */
export const webhookSecret = () => createHash("sha256").update("webhook:" + token()).digest("hex").slice(0, 48);

export const WEBHOOK_PATH = "/api/telegram/webhook";

type TgResult<T = unknown> = { ok: boolean; result?: T; description?: string };

export async function tg<T = unknown>(method: string, body: Record<string, unknown> | FormData): Promise<TgResult<T>> {
  const isForm = body instanceof FormData;
  const res = await fetch(`https://api.telegram.org/bot${token()}/${method}`, {
    method: "POST",
    headers: isForm ? undefined : { "content-type": "application/json" },
    body: isForm ? body : JSON.stringify(body),
    cache: "no-store",
  });
  return (await res.json()) as TgResult<T>;
}

/** Point the bot's webhook at this site (idempotent). */
export async function ensureWebhook(origin: string) {
  const url = origin + WEBHOOK_PATH;
  const info = await tg<{ url: string }>("getWebhookInfo", {});
  if (info.ok && info.result?.url === url) return { ok: true, url, changed: false };
  const set = await tg("setWebhook", { url, secret_token: webhookSecret(), allowed_updates: ["callback_query"] });
  return { ok: set.ok, url, changed: true, description: set.description };
}

export const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
