import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Share preview (WhatsApp, Telegram, Facebook, X). Same look as the hero.
export const alt = "Biyamin Razak: Teaching Technology. Building Possibilities.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bricolage = await readFile(join(process.cwd(), "assets/Bricolage-ExtraBold.ttf"));
const caveat = await readFile(join(process.cwd(), "assets/CaveatBrush-Regular.ttf"));

const stickers = [
  { label: "AI", bg: "#c3b5ff", rotate: -10 },
  { label: "eBooks", bg: "#ff9bd2", rotate: 6 },
  { label: "Games", bg: "#8fe3a0", rotate: -6 },
  { label: "Web Apps", bg: "#ffd43b", rotate: 8 },
  { label: "AI Videos", bg: "#bfd6ff", rotate: -4 },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fff8e8",
          padding: 56,
          fontFamily: "Bricolage",
          color: "#000",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ display: "flex", fontFamily: "Caveat", fontSize: 40, color: "#2f5bff" }}>
            teacher, AI creator & digital builder
          </div>
          <div style={{ display: "flex", fontSize: 118, lineHeight: 1, letterSpacing: -4, marginTop: 8 }}>
            Biyamin Razak
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Caveat", fontSize: 64, lineHeight: 1.1, marginTop: 28 }}>
            <div style={{ display: "flex" }}>Teaching Technology.</div>
            <div style={{ display: "flex" }}>
              Building&nbsp;
              <div style={{ display: "flex", flexDirection: "column", color: "#2f5bff" }}>
                Possibilities.
                <div style={{ display: "flex", height: 14, marginTop: -6, borderRadius: 8, background: "#ffd43b" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 40, gap: 18 }}>
            {stickers.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  fontFamily: "Caveat",
                  fontSize: 38,
                  padding: "6px 18px",
                  background: s.bg,
                  border: "4px solid #000",
                  borderRadius: 12,
                  boxShadow: "5px 5px 0 #000",
                  transform: `rotate(${s.rotate}deg)`,
                }}
              >
                {s.label}
              </div>
            ))}
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
