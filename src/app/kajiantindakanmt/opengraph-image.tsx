import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Share card for the BEAMS demo at /kajiantindakanmt. The page itself is static
// HTML in public/kajiantindakanmt, which links here in its og:image tag.
export const alt = "Sistem BEAMS: Setiap langkah ialah markah. Demo Kajian Tindakan Matematik Tambahan oleh Biyamin Razak";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (f: string) => readFile(join(process.cwd(), "assets", f));
const [bricolage, caveat] = await Promise.all([
  asset("Bricolage-ExtraBold.ttf"),
  asset("CaveatBrush-Regular.ttf"),
]);

const PEN = "#e03a2f";
const BLUE = "#2f5bff";

// One line of working on the answer script, with an optional superscript power
// (drawn as raised text so it never depends on the font having ³).
function Line({ parts, mark }: { parts: (string | { sup: string })[]; mark?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
      <div style={{ display: "flex", alignItems: "flex-start", fontSize: 36 }}>
        {parts.map((p, i) =>
          typeof p === "string" ? (
            <div key={i} style={{ display: "flex", whiteSpace: "pre" }}>{p}</div>
          ) : (
            <div key={i} style={{ display: "flex", fontSize: 22, marginTop: -2 }}>{p.sup}</div>
          ),
        )}
      </div>
      {mark ? (
        <div style={{ display: "flex", fontFamily: "Caveat", fontSize: 46, color: PEN, transform: "rotate(-6deg)" }}>{mark}</div>
      ) : null}
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Bricolage",
          color: "#000",
          backgroundColor: "#fff8e8",
          backgroundImage:
            "linear-gradient(rgba(47,91,255,0.10) 2px, transparent 2px), linear-gradient(90deg, rgba(47,91,255,0.10) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          padding: "52px 56px",
        }}
      >
        {/* Left: the pitch */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 590 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Caveat",
                fontSize: 32,
                background: "#ffc27a",
                border: "4px solid #000",
                borderRadius: 12,
                padding: "4px 18px",
                boxShadow: "5px 5px 0 #000",
                transform: "rotate(-2deg)",
              }}
            >
              Kajian Tindakan · Add Math SPM
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 0.92, letterSpacing: -3, marginTop: 30 }}>
            <div style={{ display: "flex" }}>Setiap langkah</div>
            <div style={{ display: "flex" }}>
              ialah&nbsp;<span style={{ color: PEN }}>markah.</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 32, lineHeight: 1.2, marginTop: 24, maxWidth: 540 }}>
            Sistem BEAMS: bina semula asas algebra, tulis jalan kerja penuh, kutip setiap K1 dan N1.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28 }}>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#fff8e8",
                background: BLUE,
                border: "4px solid #000",
                borderRadius: 999,
                padding: "8px 24px",
                boxShadow: "5px 5px 0 #000",
                whiteSpace: "nowrap",
              }}
            >
              biyaminrazak.my/kajiantindakanmt
            </div>
          </div>
        </div>

        {/* Right: a marked answer script */}
        <div style={{ display: "flex", position: "relative", flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              width: 470,
              background: "#ffffff",
              border: "5px solid #000",
              borderRadius: 18,
              boxShadow: "10px 10px 0 #000",
              padding: "26px 30px 22px 62px",
              transform: "rotate(2.5deg)",
              backgroundImage: "linear-gradient(transparent 60px, rgba(0,0,0,0.08) 60px, rgba(0,0,0,0.08) 62px, transparent 62px)",
              backgroundSize: "100% 62px",
            }}
          >
            <div style={{ display: "flex", position: "absolute", left: 40, top: 0, bottom: 0, width: 3, background: PEN, opacity: 0.6 }} />
            <div style={{ display: "flex", fontSize: 22, letterSpacing: 2, color: "#555", height: 40 }}>SKRIP JAWAPAN · SOALAN 7</div>
            <Line parts={["y = (2x - 3)", { sup: "4" }]} />
            <Line parts={["dy/dx = 4(2x - 3)", { sup: "3" }, "(2)"]} mark="K1" />
            <Line parts={["= 4(2(2) - 3)", { sup: "3" }, "(2)"]} mark="K1" />
            <Line parts={["= 8"]} mark="N1" />
            <div style={{ display: "flex", justifyContent: "flex-end", fontFamily: "Caveat", fontSize: 44, color: PEN, marginTop: 6, transform: "rotate(-3deg)" }}>
              3/3 Jalan kerja murni!
            </div>
          </div>

          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 0,
              top: 10,
              fontFamily: "Caveat",
              fontSize: 34,
              background: "#ffd43b",
              border: "4px solid #000",
              borderRadius: 12,
              padding: "4px 16px",
              boxShadow: "5px 5px 0 #000",
              transform: "rotate(-7deg)",
            }}
          >
            Jam Randik 15 Minit
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: 10,
              bottom: 6,
              fontFamily: "Caveat",
              fontSize: 34,
              background: "#9ff0c2",
              border: "4px solid #000",
              borderRadius: 12,
              padding: "4px 16px",
              boxShadow: "5px 5px 0 #000",
              transform: "rotate(4deg)",
            }}
          >
            Model McNiff
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
