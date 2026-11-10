import "server-only";
import { Redis } from "@upstash/redis";

// eBook sale settings. Prices are in RM.
export const EBOOK = {
  title: "Buat Video dengan AI",
  fullPrice: 29,
  promoPrice: 19,
  promoLimit: 100, // first 100 confirmed (paid) buyers get the promo price
};

// Redis keys
export const KEY_PAID = "ebook:video:paid"; // count of confirmed buyers
export const orderKey = (id: string) => `ebook:video:order:${id}`;

/** Redis client from the Vercel/Upstash integration env vars, or null if not set up yet. */
export function redis(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? new Redis({ url, token }) : null;
}

export type PromoStatus = {
  open: boolean; // false until Redis and the Telegram bot are configured
  paid: number;
  left: number;
  price: number;
  fullPrice: number;
  promo: boolean;
};

export async function promoStatus(): Promise<PromoStatus> {
  const r = redis();
  // CHECKOUT_PREVIEW=1 shows the form locally without Redis/Telegram (never in production).
  const preview = process.env.NODE_ENV !== "production" && process.env.CHECKOUT_PREVIEW === "1";
  const open = preview || Boolean(r && process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
  const paid = r ? Number((await r.get<number>(KEY_PAID)) ?? 0) : 0;
  const left = Math.max(0, EBOOK.promoLimit - paid);
  const promo = left > 0;
  return { open, paid, left, promo, price: promo ? EBOOK.promoPrice : EBOOK.fullPrice, fullPrice: EBOOK.fullPrice };
}
