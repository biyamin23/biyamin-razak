// All page content lives here. An empty `href` means the link is not ready yet:
// the page then shows the item as "coming soon" instead of a dead link.

export type Item = { title: string; note?: string; href?: string };

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
    "I'm a MRSM teacher, teaching Computer Science and Teknologi & Digital, while exploring AI and turning ideas into real digital creations.",
  about:
    "I'm Biyamin, a MRSM teacher, passionate about Computer Science, Teknologi & Digital, and the limitless possibilities of AI.",

  telegram: "https://t.me/biyaminrazak",
  tiktok: "https://www.tiktok.com/@biyaminrazak",

  creations: [
    {
      id: "web-apps",
      title: "AI Web Apps",
      blurb: "Smart solutions for real-world needs.",
      items: [], // TODO(user): app names + URLs
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
      items: [], // TODO(user): game names + URLs
    },
    {
      id: "ebooks",
      title: "eBooks",
      blurb: "Knowledge at your fingertips.",
      items: [
        // Add `href` (purchase link) to each one when it goes on sale.
        { title: "Buat Video dengan AI", note: "Bahasa Melayu" },
        { title: "Buat Web App dengan AI", note: "Bahasa Melayu" },
        { title: "Buat Game dengan AI", note: "Bahasa Melayu" },
      ],
    },
  ] satisfies Creation[],

  // Taken from the reference's own "Let's work together" line.
  services: [
    { title: "eBooks & digital products", note: "Step-by-step guides in Bahasa Melayu." },
    { title: "AI videos", note: "Explainer videos made with AI tools." },
    { title: "AI projects", note: "Ideas turned into working AI tools." },
    { title: "Custom development", note: "Web apps built around your needs." },
  ],
};
