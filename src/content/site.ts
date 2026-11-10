// All page content lives here. An empty `href` means the link is not ready yet:
// the page then shows `pendingLabel` instead of a dead link.

export type Item = {
  title: string;
  note?: string;
  href?: string;
  buy?: boolean; // show the live price + "Beli sekarang" button
  // Character sticker (transparent webp with white outline in /public/creations),
  // rendered from the game itself and shown standing on the item box's right edge.
  // `place` holds Tailwind position/size classes for that sticker.
  character?: { src: string; alt: string; width: number; height: number; place: string };
};

export type Creation = {
  id: "web-apps" | "videos" | "games" | "ebooks";
  title: string;
  blurb: string;
  items: Item[];
};

export const site = {
  name: "Biyamin Razak",
  roles: "teacher, AI creator & digital builder",
  intro:
    "I'm an MRSM Computer Science educator who turns complex tech into 3D explainer videos, nostalgic Malaysian games, and practical web apps.",
  aboutTitle: "Classroom clarity meets a builder's mindset.",
  about: [
    "By day, I teach Computer Science and Teknologi & Digital at MRSM, helping students break down tough concepts into simple, logical steps.",
    "After hours, I apply that same approach to building with AI, whether I'm scripting 3D \"what-if\" animations for TikTok, recreating 90s kampung nostalgia in browser games, or writing step-by-step Bahasa Melayu guides so anyone can start shipping their own ideas.",
  ],
  // Only facts the owner confirmed (Google Certified Educator Level 2: confirmed 2026-11-09).
  highlights: [
    { title: "Google Certified Educator (Level 2)", note: "Proven classroom & digital pedagogy." },
    { title: "4 creative formats", note: "Web apps, 3D videos, indie games & BM eBooks." },
  ],

  telegram: "https://t.me/biyaminrazak",
  tiktok: "https://www.tiktok.com/@biyaminrazak",

  creations: [
    {
      id: "web-apps",
      title: "AI Web Apps",
      blurb: "Smart solutions for real-world needs.",
      items: [
        {
          title: "SpeakEase",
          note: "Gamified SPM 1119 English speaking test training, with AI speech feedback",
          href: "https://speakeaseapp.vercel.app/",
        },
        {
          title: "walimatul.my",
          note: "Digital wedding invitation cards with RSVP, maps and DuitNow QR",
          href: "https://www.walimatul.my/",
        },
        {
          title: "Portal Minggu Aktiviti",
          note: "MRSM Tumpat 2026 activity week: schedule, results and merit ranking",
          href: "https://mingguaktiviti-rouge.vercel.app/",
        },
      ],
    },
    {
      id: "videos",
      title: "AI Videos",
      blurb: "Inform, educate and entertain.",
      items: [
        {
          title: "Apa Jadi Kalau",
          note: "3D AI explainer series on TikTok",
          href: "https://www.tiktok.com/@biyaminrazak/video/7704749504553176326",
        },
        { title: "All videos on TikTok", note: "@biyaminrazak", href: "https://www.tiktok.com/@biyaminrazak" },
      ],
    },
    {
      id: "games",
      title: "AI Games",
      blurb: "Play, learn and relive the nostalgia.",
      // Both games are still in development but open for anyone to try.
      items: [
        {
          title: "Permainan Tradisional Malaysia",
          note: "3D 80s–90s kampung nostalgia game (in active development, playable now)",
          href: "https://permainan-tradisional-seven.vercel.app/",
          character: {
            src: "/creations/permainan-tradisional-kid.webp",
            alt: "The kampung kid player character from Permainan Tradisional Malaysia",
            width: 210,
            height: 476,
            place: "-top-28 -right-9 h-[165px]",
          },
        },
        {
          title: "Gi Mano?",
          note: "Ride a kapcai across Kelantan in 3D (in active development, playable now)",
          character: {
            src: "/creations/gi-mano-abe.webp",
            alt: "Abe, the player character from Gi Mano?",
            width: 159,
            height: 475,
            place: "-bottom-9 -right-8 h-[165px]",
          },
          href: "https://gi-mano-webb-web.vercel.app/",
        },
      ],
    },
    {
      id: "ebooks",
      title: "eBooks",
      blurb: "Knowledge at your fingertips.",
      items: [
        // Add `href` + `buy: true` to each one when it goes on sale.
        { title: "Buat Video dengan AI", note: "Bahasa Melayu · 53 halaman", href: "/ebook", buy: true },
        { title: "Buat Web App dengan AI", note: "Bahasa Melayu" },
        { title: "Buat Game dengan AI", note: "Bahasa Melayu" },
      ],
    },
  ] satisfies Creation[],

  // Shown next to items that have no link yet (the eBooks).
  pendingLabel: "(Drafting now, DM for early access)",

  services: [
    {
      title: "eBooks & digital guides",
      note: "Practical, step-by-step Bahasa Melayu playbooks and templates for learning AI video, game, and web creation.",
    },
    {
      title: "3D & AI explainer videos",
      note: "Scroll-stopping vertical videos (like my \"Apa Jadi Kalau\" series) with custom 3D scenes, voiceovers, and clear storytelling.",
    },
    {
      title: "AI tools & prototypes",
      note: "Custom AI workflows, interactive quizzes, and automated classroom or business helpers tailored to your daily tasks.",
    },
    {
      title: "Custom web development",
      note: "Fast, responsive landing pages, event microsites, and school or organizational dashboards.",
    },
  ],
};
