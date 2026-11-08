// Hand-drawn line art. Each colour fill is drawn a few px off the outline,
// like a two-colour print slightly out of register (see DESIGN.md).

type P = { className?: string };
const line = {
  fill: "none",
  stroke: "#000",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Logo({ className }: P) {
  return (
    <svg viewBox="0 0 74 52" className={className} aria-hidden="true">
      <text
        x="2"
        y="44"
        fontSize="50"
        style={{ fontFamily: "var(--font-hand)" }}
        fill="#2f5bff"
        stroke="#000"
        strokeWidth="2"
        paintOrder="stroke"
        transform="rotate(-6 37 26)"
      >
        BR
      </text>
    </svg>
  );
}

export function PaperPlane({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22 2.5 2.5 10.2l7.2 3 2.9 8.3L22 2.5Z" fill="currentColor" />
      <path d="M22 2.5 9.7 13.2" stroke="var(--color-paper)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowDown({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 4c.3 5 .1 10-.2 15M5.5 13c2.4 2.2 4.4 4.3 6.3 6.3 2-2.3 4.1-4.4 6.4-6.2" {...line} strokeWidth={2.6} />
    </svg>
  );
}

export function CurlyArrow({ className }: P) {
  return (
    <svg viewBox="0 0 90 70" className={className} aria-hidden="true">
      <path d="M6 10c22-6 40 2 38 16-2 13-20 12-18 1 3-14 32-8 40 30" {...line} strokeWidth={2.5} />
      <path d="M56 46c3 4 6 8 10 12 3-5 7-9 11-12" {...line} strokeWidth={2.5} />
    </svg>
  );
}

export function Sparks({ className }: P) {
  return (
    <svg viewBox="0 0 50 50" className={className} aria-hidden="true">
      <path d="M8 26 2 21M14 14l-3-9M27 10l3-8" {...line} />
    </svg>
  );
}

export function Laptop({ className }: P) {
  return (
    <svg viewBox="0 0 420 310" className={className} aria-hidden="true">
      {/* sky blob */}
      <path
        d="M58 120C40 60 110 18 190 30c70 10 120-22 170 20 50 44 60 120 22 170-36 48-110 70-190 62C110 274 30 250 26 196c-3-34 42-42 32-76Z"
        fill="#bfd6ff"
      />
      {/* lid */}
      <path d="M103 52 333 38l-8 172-216 6Z" fill="#1d2a6b" transform="translate(5 5)" />
      <path d="M103 52 333 38l-8 172-216 6Z" {...line} strokeWidth={4} />
      <path d="M118 66 318 55l-6 141-188 5Z" {...line} strokeWidth={2.5} />
      {/* code */}
      <g fill="none" stroke="#6fb0ff" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round">
        <path d="M178 104 150 128l28 24" />
        <path d="M228 92 206 166" />
        <path d="M254 104l28 22-28 25" />
      </g>
      {/* base */}
      <path d="M109 216 325 210l58 56-330 12Z" fill="#d7d9e6" transform="translate(5 5)" />
      <path d="M109 216 325 210l58 56-330 12Z" {...line} strokeWidth={4} />
      <path d="M118 228l204-5M110 240l222-6M100 252l240-7" {...line} strokeWidth={2} strokeDasharray="9 6" />
      <path d="M184 258l70-2 3 13-76 2Z" {...line} strokeWidth={2.5} />
    </svg>
  );
}

export function Bulb({ className }: P) {
  return (
    <svg viewBox="0 0 90 110" className={className} aria-hidden="true">
      <path d="M45 18c-17 0-28 12-27 27 1 11 9 17 12 26h29c3-9 11-15 12-27 1-14-10-26-26-26Z" fill="#ffd43b" transform="translate(4 4)" />
      <path d="M45 18c-17 0-28 12-27 27 1 11 9 17 12 26h29c3-9 11-15 12-27 1-14-10-26-26-26Z" {...line} />
      <path d="M36 54c2-6 6-6 7 0 1-6 5-6 7 0M43 54v16M47 54v16" {...line} strokeWidth={2.2} />
      <path d="M31 76h28M32 84h26M38 92h14" {...line} />
      <path d="M10 12 4 6M45 6V0M80 12l6-6M2 46h-6M88 46h6" {...line} transform="translate(0 4)" />
    </svg>
  );
}

export function BrowserIcon({ className }: P) {
  return (
    <svg viewBox="0 0 110 86" className={className} aria-hidden="true">
      <path d="M8 10h86l2 58H10Z" fill="#fff" transform="translate(4 4)" />
      <path d="M8 10h86l2 58H10Z" {...line} />
      <path d="M8 24h87" {...line} />
      <path d="M18 17h.1M26 17h.1M34 17h.1" {...line} strokeWidth={5} />
      <path d="M38 38l-10 8 10 8M55 34l-7 24M64 38l10 8-10 8" {...line} strokeWidth={3.5} />
      <path d="M80 48l22 10-10 3 7 10-5 3-7-10-6 7Z" fill="#ffd43b" stroke="#000" strokeWidth={3} strokeLinejoin="round" />
    </svg>
  );
}

export function ClapperIcon({ className }: P) {
  return (
    <svg viewBox="0 0 110 86" className={className} aria-hidden="true">
      <path d="M14 34h82v44H14Z" fill="#fff" transform="translate(4 4)" />
      <path d="M14 34h82v44H14Z" {...line} />
      <path d="M12 22 88 6l4 14-76 16Z" fill="#000" />
      <path d="M28 18l10 12M48 14l10 12M68 10l10 12" stroke="#fff" strokeWidth={5} />
      <path d="M48 44v24l20-12Z" fill="#ff6b3d" stroke="#000" strokeWidth={3} strokeLinejoin="round" />
    </svg>
  );
}

export function GamepadIcon({ className }: P) {
  return (
    <svg viewBox="0 0 110 86" className={className} aria-hidden="true">
      <path d="M30 22h50c14 0 22 14 24 32 2 14-10 20-18 12l-10-10H34L24 66c-8 8-20 2-18-12 2-18 10-32 24-32Z" fill="#fff" transform="translate(4 4)" />
      <path d="M30 22h50c14 0 22 14 24 32 2 14-10 20-18 12l-10-10H34L24 66c-8 8-20 2-18-12 2-18 10-32 24-32Z" {...line} />
      <path d="M30 32v16M22 40h16" {...line} strokeWidth={3.5} />
      <circle cx="76" cy="34" r="4" fill="#2f5bff" stroke="#000" strokeWidth={2} />
      <circle cx="86" cy="44" r="4" fill="#ff6b3d" stroke="#000" strokeWidth={2} />
      <circle cx="66" cy="44" r="4" fill="#ffd43b" stroke="#000" strokeWidth={2} />
    </svg>
  );
}

export function BookIcon({ className }: P) {
  return (
    <svg viewBox="0 0 110 86" className={className} aria-hidden="true">
      <path d="M55 20C42 12 26 10 10 14v56c16-4 32-2 45 6 13-8 29-10 45-6V14c-16-4-32-2-45 6Z" fill="#fff" transform="translate(4 4)" />
      <path d="M55 20C42 12 26 10 10 14v56c16-4 32-2 45 6 13-8 29-10 45-6V14c-16-4-32-2-45 6Z" {...line} />
      <path d="M55 20v56" {...line} />
      <path d="M20 28c9-2 18-1 26 3M20 40c9-2 18-1 26 3M20 52c9-2 18-1 26 3M64 31c8-4 17-5 26-3M64 43c8-4 17-5 26-3M64 55c8-4 17-5 26-3" {...line} strokeWidth={2} />
    </svg>
  );
}

export function Mosque({ className }: P) {
  const s = { ...line, stroke: "#2f5bff", strokeWidth: 2.4 };
  return (
    <svg viewBox="0 0 260 150" className={className} aria-hidden="true">
      {/* minarets */}
      <path d="M40 148V58h14v90M38 58h18M47 58V40M42 40h10l-5-14-5 14ZM47 26v-8" {...s} />
      <path d="M206 148V48h14v100M204 48h18M213 48V30M208 30h10l-5-14-5 14ZM213 16V8" {...s} />
      {/* main dome */}
      <path d="M96 92c0-26 16-40 34-44 18 4 34 18 34 44Z" {...s} />
      <path d="M130 48V34M126 34h8" {...s} />
      <path d="M110 92c2-14 8-24 20-30M150 92c-2-14-8-24-20-30" {...s} strokeWidth={1.6} />
      {/* side domes */}
      <path d="M70 108c0-12 8-18 14-20 6 2 14 8 14 20ZM162 108c0-12 8-18 14-20 6 2 14 8 14 20Z" {...s} />
      {/* hall + arches */}
      <path d="M64 148v-40h132v40M88 92h84" {...s} />
      <path d="M78 148v-16c0-6 8-6 8 0v16M100 148v-22c0-8 10-8 10 0v22M124 148v-26c0-9 12-9 12 0v26M150 148v-22c0-8 10-8 10 0v22M174 148v-16c0-6 8-6 8 0v16" {...s} strokeWidth={1.8} />
      <path d="M4 148h252" {...s} />
    </svg>
  );
}
