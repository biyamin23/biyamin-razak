import { connection } from "next/server";
import { promoStatus } from "@/lib/ebook";

// Live price + promo counter for the eBook card and the checkout page.
export async function GET() {
  await connection(); // read Redis on every request, never at build time
  const s = await promoStatus();
  return Response.json(s, { headers: { "cache-control": "no-store" } });
}
