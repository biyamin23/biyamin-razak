import { randomBytes } from "node:crypto";
import { EBOOK, orderKey, promoStatus, redis } from "@/lib/ebook";
import { ensureWebhook, escapeHtml, ownerChatId, tg } from "@/lib/telegram";

const MAX_BYTES = 4 * 1024 * 1024; // Vercel functions accept ~4.5 MB bodies
const TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "application/pdf"];
const USERNAME = /^@?[A-Za-z0-9_]{5,32}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fail = (status: number, error: string) => Response.json({ ok: false, error }, { status });

export async function POST(request: Request) {
  const status = await promoStatus();
  const r = redis();
  if (!status.open || !r) return fail(503, "Pembelian belum dibuka. Sila DM saya di Telegram.");

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, "Borang tidak lengkap. Cuba sekali lagi.");
  }
  if (String(form.get("website") ?? "")) return Response.json({ ok: true, id: "OK" }); // bot honeypot

  const name = String(form.get("name") ?? "").trim().slice(0, 80);
  const username = String(form.get("telegram") ?? "").trim();
  const email = String(form.get("email") ?? "").trim().slice(0, 120);
  const receipt = form.get("receipt");
  if (name.length < 2) return fail(400, "Sila isi nama anda.");
  if (!username && !email) return fail(400, "Isi username Telegram atau email supaya saya boleh hantar eBook.");
  if (username && !USERNAME.test(username)) return fail(400, "Username Telegram tidak sah. Contoh: @namaanda (5–32 huruf, nombor atau _).");
  if (email && !EMAIL.test(email)) return fail(400, "Email tidak sah. Contoh: nama@email.com");
  if (!(receipt instanceof File) || receipt.size === 0) return fail(400, "Sila upload resit pembayaran.");
  if (receipt.size > MAX_BYTES) return fail(400, "Fail resit terlalu besar (maksimum 4 MB). Hantar screenshot sahaja.");
  if (receipt.type && !TYPES.includes(receipt.type)) return fail(400, "Resit mesti gambar (JPG/PNG) atau PDF.");

  // Max 5 submissions per IP per hour.
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const rlKey = `ebook:rl:${ip}:${new Date().toISOString().slice(0, 13)}`;
  const tries = await r.incr(rlKey);
  if (tries === 1) await r.expire(rlKey, 3600);
  if (tries > 5) return fail(429, "Terlalu banyak cubaan. Cuba lagi dalam satu jam, atau DM saya di Telegram.");

  const id = randomBytes(3).toString("hex").toUpperCase();
  const handle = username ? "@" + username.replace(/^@/, "") : "";
  // Where to send the PDF (shown in the Sahkan note): Telegram and/or email.
  const sendTo = [handle, email].filter(Boolean).join(" / ");
  await r.hset(orderKey(id), { name, handle, email, sendTo, price: status.price, status: "pending", at: new Date().toISOString() });
  await r.expire(orderKey(id), 60 * 60 * 24 * 90);

  // Make sure the Sahkan/Tolak buttons reach this site.
  await ensureWebhook(new URL(request.url).origin).catch(() => null);

  const caption =
    `🧾 <b>Pesanan baharu #${id}</b>\n` +
    `📘 ${EBOOK.title}\n` +
    `💰 Perlu bayar: <b>RM${status.price}</b>${status.promo ? " (promo)" : ""}\n` +
    `👤 ${escapeHtml(name)}\n` +
    (handle ? `✈️ ${escapeHtml(handle)}\n` : "") +
    (email ? `📧 ${escapeHtml(email)}\n` : "") +
    `\n` +
    `Semak duit dah masuk dalam TnG sebelum tekan Sahkan.`;
  const out = new FormData();
  out.set("chat_id", ownerChatId());
  out.set("caption", caption);
  out.set("parse_mode", "HTML");
  out.set("reply_markup", JSON.stringify({
    inline_keyboard: [[
      { text: "✅ Sahkan bayaran", callback_data: `ok:${id}` },
      { text: "❌ Tolak", callback_data: `no:${id}` },
    ]],
  }));
  const isImage = (receipt.type || "").startsWith("image/") && !/hei[cf]/.test(receipt.type);
  out.set(isImage ? "photo" : "document", receipt, receipt.name || `resit-${id}`);
  const sent = await tg(isImage ? "sendPhoto" : "sendDocument", out);
  if (!sent.ok) {
    await r.hset(orderKey(id), { status: "send-failed" });
    return fail(502, "Resit gagal dihantar. Cuba sekali lagi, atau DM saya di Telegram.");
  }
  return Response.json({ ok: true, id });
}
