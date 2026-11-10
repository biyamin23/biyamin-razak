import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Checkout, PromoSummary } from "@/components/Checkout";
import { Logo } from "@/components/doodles";

export const metadata: Metadata = {
  title: "Beli eBook Buat Video dengan AI | Biyamin Razak",
  description: "Panduan langkah demi langkah membuat video animasi 3D menegak untuk TikTok & YouTube Shorts dengan AI. Bahasa Melayu, 53 halaman.",
};

const inside = [
  "Persediaan laptop & perisian percuma",
  "Tetapkan gaya video & kamus gaya",
  "Kumpul aset 3D: Sketchfab, Mixamo, Rocketbox",
  "Skrip, suara, subtitle dan render dengan Claude Code + HyperFrames",
  "Kajian kes penuh: EP. 16 Apa Jadi Kalau",
  "Prompt sedia salin, senarai semak & poster ringkas",
];

// First 4 pages of the PDF, rendered as images (the PDF itself is never public).
const previews = [
  { src: "/beli/preview-1.webp", label: "Kulit buku" },
  { src: "/beli/preview-2.webp", label: "Isi kandungan" },
  { src: "/beli/preview-3.webp", label: "Isi kandungan (samb.)" },
  { src: "/beli/preview-4.webp", label: "Selamat datang" },
];

export default function BeliPage() {
  return (
    <>
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Biyamin Razak, laman utama">
          <Logo className="h-10 w-auto" />
          <span className="border-l-[3px] border-ink pl-2.5 leading-[1.05] font-extrabold">Biyamin<br />Razak</span>
        </Link>
        <Link href="/#creations" className="font-semibold underline underline-offset-4">Kembali</Link>
      </header>

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 pt-4 pb-16 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <section aria-labelledby="ebook-title" className="min-w-0">
          <span className="sticker -rotate-2 bg-peach text-2xl">eBook · Bahasa Melayu</span>
          <h1 id="ebook-title" className="display mt-5 text-[clamp(2.4rem,7vw,3.6rem)] leading-[0.98] font-extrabold tracking-tight">
            Buat Video dengan AI
          </h1>
          <p className="mt-3 text-lg leading-relaxed">
            Panduan langkah demi langkah untuk menghasilkan video animasi 3D menegak untuk TikTok &amp; YouTube Shorts, seperti siri
            <b> Apa Jadi Kalau</b>. Tanpa studio, tanpa menulis kod.
          </p>
          <PromoSummary />
          <h2 className="mt-8 text-xl font-extrabold">Lihat 4 halaman pertama</h2>
          <p className="mt-1 text-sm opacity-75">Leret ke tepi. Tekan halaman untuk lihat lebih besar.</p>
          <ol className="-mx-4 mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-1 pb-4 sm:mx-0 sm:px-1">
            {previews.map((p, i) => (
              <li key={p.src} className="w-[62%] max-w-[260px] shrink-0 snap-start">
                <a href={p.src} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={p.src}
                    alt={`Halaman ${i + 1}: ${p.label}`}
                    width={759}
                    height={1075}
                    priority={i === 0}
                    sizes="260px"
                    className="w-full rounded-[10px] border-[3px] border-ink bg-white shadow-hard-sm"
                  />
                </a>
                <p className="mt-2 text-sm font-semibold">Hal. {i + 1} · {p.label}</p>
              </li>
            ))}
          </ol>
          <h2 className="mt-6 text-xl font-extrabold">Isi buku (53 halaman)</h2>
          <ul className="mt-2 space-y-1.5">
            {inside.map((t) => (
              <li key={t} className="flex gap-2"><span aria-hidden="true">✔</span>{t}</li>
            ))}
          </ul>
        </section>

        <section aria-label="Cara membeli" className="min-w-0">
          <Checkout />
        </section>
      </main>
    </>
  );
}
