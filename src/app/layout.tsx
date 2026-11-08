import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat_Brush } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const caveat = Caveat_Brush({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
});

const title = "Biyamin Razak | Teacher, AI creator, digital builder";
const description =
  "MRSM teacher for Computer Science and Teknologi & Digital. AI web apps, AI videos (Apa Jadi Kalau), AI games and eBooks.";

// og:image comes from app/opengraph-image.tsx. On Vercel, Next.js builds the
// absolute image URL from the production domain automatically.
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Biyamin Razak",
    locale: "en_MY",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${caveat.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
