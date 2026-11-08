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

export const metadata: Metadata = {
  title: "Biyamin Razak | Teacher, AI creator, digital builder",
  description:
    "MRSM teacher for Computer Science and Teknologi & Digital. AI web apps, AI videos (Apa Jadi Kalau), AI games and eBooks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${caveat.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
