import { EBOOK, KEY_PAID, orderKey, redis } from "@/lib/ebook";
import { ownerChatId, tg, webhookSecret } from "@/lib/telegram";

type Callback = {
  id: string;
  from: { id: number };
  data?: string;
  message?: { message_id: number; chat: { id: number }; caption?: string };
};

// Telegram calls this when the owner taps ✅ Sahkan / ❌ Tolak under a receipt.
export async function POST(request: Request) {
  if (request.headers.get("x-telegram-bot-api-secret-token") !== webhookSecret()) {
    return new Response("forbidden", { status: 403 });
  }
  const update = (await request.json().catch(() => ({}))) as { callback_query?: Callback };
  const cb = update.callback_query;
  const r = redis();
  if (!cb || !r) return new Response("ok");

  const answer = (text: string) => tg("answerCallbackQuery", { callback_query_id: cb.id, text });
  if (String(cb.from.id) !== ownerChatId()) {
    await answer("Hanya pemilik boleh sahkan.");
    return new Response("ok");
  }

  const [action, id] = (cb.data ?? "").split(":");
  const order = await r.hgetall<{ status: string; handle?: string; sendTo?: string; price: string }>(orderKey(id ?? ""));
  if (!order || !id) {
    await answer("Pesanan tidak dijumpai.");
    return new Response("ok");
  }
  // Lock so a double tap can't count the same buyer twice.
  const locked = await r.set(`${orderKey(id)}:lock`, 1, { nx: true, ex: 60 * 60 * 24 * 90 });
  if (order.status !== "pending" || !locked) {
    await answer(`Pesanan #${id} sudah diproses (${order.status}).`);
    return new Response("ok");
  }

  let note: string;
  if (action === "ok") {
    await r.hset(orderKey(id), { status: "approved", decidedAt: new Date().toISOString() });
    const n = await r.incr(KEY_PAID);
    const left = Math.max(0, EBOOK.promoLimit - n);
    note = `✅ Disahkan · pembeli ke-${n}` + (left > 0 ? ` (baki promo: ${left})` : " (promo tamat, harga kini RM" + EBOOK.fullPrice + ")") +
      `\n➡️ Hantar PDF kepada ${order.sendTo || order.handle}`;
    await answer(`Disahkan. Pembeli ke-${n}.`);
  } else {
    await r.hset(orderKey(id), { status: "rejected", decidedAt: new Date().toISOString() });
    note = "❌ Ditolak";
    await answer("Ditolak.");
  }

  if (cb.message) {
    await tg("editMessageCaption", {
      chat_id: cb.message.chat.id,
      message_id: cb.message.message_id,
      caption: `${cb.message.caption ?? ""}\n\n${note}`,
      reply_markup: { inline_keyboard: [] },
    });
  }
  return new Response("ok");
}
