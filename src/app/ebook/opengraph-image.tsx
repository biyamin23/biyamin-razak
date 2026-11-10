import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Share card for the /ebook sale page only (WhatsApp, Telegram, Facebook, X).
export const alt = "eBook Buat Video dengan AI oleh Biyamin Razak: video 3D 1.5 juta tontonan dibuat dengan AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (f: string) => readFile(join(process.cwd(), "assets", f));
const [bricolage, caveat, cover, scene] = await Promise.all([
  asset("Bricolage-ExtraBold.ttf"),
  asset("CaveatBrush-Regular.ttf"),
  asset("og-ebook-cover.jpg"),
  asset("og-ebook-scene.jpg"),
]);
const dataUrl = (b: Buffer) => `data:image/jpeg;base64,${b.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fff8e8", fontFamily: "Bricolage", color: "#000", padding: "48px 56px" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", paddingRight: 24 }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", fontFamily: "Caveat", fontSize: 34, background: "#ffc27a", border: "4px solid #000", borderRadius: 12, padding: "4px 18px", boxShadow: "5px 5px 0 #000", transform: "rotate(-2deg)" }}>
              eBook · Bahasa Melayu
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 0.95, letterSpacing: -3, marginTop: 26 }}>Buat Video dengan AI</div>
          <div style={{ display: "flex", fontSize: 36, lineHeight: 1.15, marginTop: 20, maxWidth: 560 }}>
            Cara saya hasilkan video 3D 1.5 juta tontonan, tanpa studio dan tanpa kod.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 30 }}>
            <div style={{ display: "flex", fontSize: 30, color: "#2f5bff" }}>biyaminrazak.my/ebook</div>
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", width: 430, alignItems: "center", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={dataUrl(scene)} width={250} height={445} style={{ position: "absolute", right: 0, top: 30, borderRadius: 26, border: "6px solid #000", transform: "rotate(5deg)" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={dataUrl(cover)} width={300} height={425} style={{ position: "absolute", left: 0, top: 70, borderRadius: 12, border: "5px solid #000", boxShadow: "8px 8px 0 #000", transform: "rotate(-4deg)" }} />
          <div style={{ display: "flex", position: "absolute", right: 0, bottom: 20, fontFamily: "Caveat", fontSize: 36, background: "#ffd43b", border: "4px solid #000", borderRadius: 12, padding: "4px 16px", boxShadow: "5px 5px 0 #000", transform: "rotate(-5deg)" }}>
            1.5M tontonan
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bricolage, weight: 800, style: "normal" },
        { name: "Caveat", data: caveat, weight: 400, style: "normal" },
      ],
    },
  );
}
