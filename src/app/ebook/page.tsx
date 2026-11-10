import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Checkout, PromoSummary } from "@/components/Checkout";
import { EbookCta } from "@/components/EbookCta";
import { Logo } from "@/components/doodles";
import { site } from "@/content/site";

const title = "Buat Video dengan AI | eBook Biyamin Razak";
const description =
  "Cara saya hasilkan video animasi 3D 1.5 juta tontonan di TikTok dengan AI, tanpa studio dan tanpa kod. eBook Bahasa Melayu, 53 halaman. Harga promo RM19 untuk 100 pembeli pertama.";

// og:image comes from app/ebook/opengraph-image.tsx (this page only).
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ebook" },
  openGraph: { type: "website", siteName: "Biyamin Razak", locale: "ms_MY", url: "/ebook", title, description },
  twitter: { card: "summary_large_image", title, description },
};

// Real numbers from the @biyaminrazak TikTok profile screenshot (30 latest videos, Nov 2026).
const STATS = [
  { big: "3.39 juta", small: "jumlah tontonan daripada 30 video terkini" },
  { big: "1.5 juta", small: "tontonan untuk video paling tinggi (EP. 16)" },
  { big: "6 video", small: "melepasi 100K tontonan" },
];
const TOP = [
  { src: "/ebook/top-ep16.webp", alt: "EP. 16 Semua rekod bank terpadam, 1.5 juta tontonan" },
  { src: "/ebook/top-myvi.webp", alt: "Video Myvi merah, 451.4K tontonan" },
  { src: "/ebook/top-rm719.webp", alt: "Video RM719 bagi setiap rakyat Malaysia, 340.2K tontonan" },
  { src: "/ebook/top-ep-261k.webp", alt: "Video watak di bilik gelap, 261.3K tontonan" },
  { src: "/ebook/top-klcc.webp", alt: "Video KLCC, 153.6K tontonan" },
  { src: "/ebook/top-syiling.webp", alt: "Video syiling 10 sen, 144.4K tontonan" },
];
const TEAM = ["Penulis skrip", "Artis 3D", "Juruanimasi", "Editor video", "Jurutera bunyi"];
const TOOLS = [
  { name: "Claude Code", job: "Bina dunia 3D, tulis semua kod, render video dan semak setiap frame.", bg: "bg-sky" },
  { name: "ChatGPT", job: "Tulis dan tajamkan skrip dalam Bahasa Melayu.", bg: "bg-mint" },
  { name: "Gemini", job: "Jana gambar rujukan gaya sebelum mula membina.", bg: "bg-sun" },
  { name: "ElevenLabs", job: "Suara pencerita Bahasa Melayu yang berlakon: serius, dramatik, berbisik.", bg: "bg-bubble" },
];
const STEPS = [
  ["Sediakan laptop", "Pasang perisian percuma sekali sahaja."],
  ["Tetapkan gaya", "Tulis kamus gaya, kemudian buat look test 5 saat."],
  ["Kumpul aset 3D", "Model, watak dan wajah dari Sketchfab, Mixamo dan Rocketbox, berserta lesennya."],
  ["Pasang skill", "Ajar Claude Code cara guna HyperFrames."],
  ["Skrip, suara & subtitle", "ChatGPT → ElevenLabs → masa tepat setiap perkataan."],
  ["Storyboard & bina 3D", "Luluskan storyboard dahulu, baru bina dunia 3D."],
  ["Bunyi, render & semak", "Sound effect, render MP4 dan semak dengan filmstrip."],
  ["Terbit", "Caption, disclaimer dan kredit aset yang betul."],
];
const GET = [
  "PDF 53 halaman dalam Bahasa Melayu",
  "Kajian kes penuh EP. 16, babak demi babak",
  "Prompt sedia salin untuk setiap langkah",
  "Senarai semak satu halaman untuk setiap episod",
  "Poster ringkas 8 langkah",
  "Glosari 27 istilah teknikal untuk pemula",
];
const FOR = [
  "Cikgu dan pensyarah yang mahu bahan pengajaran lebih menarik",
  "Content creator TikTok dan YouTube Shorts",
  "Peniaga kecil yang mahu video promosi sendiri",
  "Sesiapa yang tidak tahu menulis kod",
];
const FAQ = [
  ["Perlu tahu coding?", "Tidak. Anda beri arahan dalam Bahasa Melayu kepada Claude Code. Kotak ⚡ Pro dalam buku boleh dilangkau untuk video pertama."],
  ["Laptop macam mana yang cukup?", "Laptop pertengahan sudah memadai. Video dalam buku ini dirender di laptop RTX 3050 4 GB dengan RAM sekitar 8 GB."],
  ["Ada kos lain selain eBook?", "Ya. Claude Code perlukan langganan berbayar (kira-kira USD 20 sebulan), dan ElevenLabs Starter (kira-kira USD 5 sebulan) untuk lesen komersial. ChatGPT dan Gemini boleh guna versi percuma. Harga boleh berubah."],
  ["Bagaimana saya terima eBook?", "Selepas anda hantar resit, saya semak bayaran dan hantar PDF ke Telegram atau email anda, ikut pilihan anda dalam borang."],
  ["Boleh bayar guna app bank?", "Boleh. QR DuitNow ini boleh di-scan dengan Touch 'n Go atau mana-mana app bank dan eWallet."],
  ["Boleh baca di telefon?", "Boleh. eBook dalam format PDF, dan boleh dibuka di telefon, tablet atau komputer."],
];
const PREVIEWS = [
  { src: "/beli/preview-1.webp", label: "Kulit buku" },
  { src: "/beli/preview-2.webp", label: "Isi kandungan" },
  { src: "/beli/preview-3.webp", label: "Isi kandungan (samb.)" },
  { src: "/beli/preview-4.webp", label: "Selamat datang" },
];

const H2 = "display text-[clamp(1.9rem,6vw,2.8rem)] leading-[1.02] font-extrabold tracking-tight";

export default function EbookPage() {
  return (
    <div className="overflow-x-clip">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Biyamin Razak, laman utama">
          <Logo className="h-10 w-auto" />
          <span className="border-l-[3px] border-ink pl-2.5 leading-[1.05] font-extrabold">Biyamin<br />Razak</span>
        </Link>
        <a href="#beli" className="btn bg-sun px-4 py-2 text-sm">Dapatkan eBook</a>
      </header>

      <main>
        {/* A · Attention */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pt-4 pb-14 sm:px-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <span className="sticker -rotate-2 bg-peach text-2xl">eBook · Bahasa Melayu</span>
            <h1 className="display mt-5 text-[clamp(2.5rem,8vw,4.4rem)] leading-[0.96] font-extrabold tracking-[-0.03em]">
              Video 3D 1.5 juta tontonan. Dibuat dengan AI, tanpa studio.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Saya tunjuk cara penuh saya hasilkan siri <b>Apa Jadi Kalau</b> di TikTok: dari idea, skrip dan suara, hingga render
              video animasi 3D menegak. Semuanya di laptop biasa, tanpa menulis kod.
            </p>
            <div className="mt-7">
              <EbookCta />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[300px] min-w-0">
            <div className="overflow-hidden rounded-[30px] border-[6px] border-ink bg-ink shadow-hard">
              <Image src="/ebook/ep16-scene.webp" alt="Babak dari EP. 16 Apa Jadi Kalau Semua Rekod Bank Terpadam" width={600} height={1067} priority className="block h-auto w-full" />
            </div>
            <span className="sticker absolute -bottom-4 -left-5 rotate-[-6deg] bg-sun text-2xl">▶ 1.5M tontonan</span>
            <span className="sticker absolute -top-3 -right-4 rotate-[5deg] bg-grape text-xl">EP. 16</span>
          </div>
        </section>

        {/* Proof: real TikTok numbers */}
        <section aria-labelledby="hasil" className="border-y-[3px] border-ink bg-ink py-14 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="hasil" className={H2}>Hasil sebenar di TikTok @biyaminrazak</h2>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.big} className="rounded-[18px] border-[3px] border-white/80 p-5">
                  <dt className="sr-only">{s.small}</dt>
                  <dd className="display text-4xl font-extrabold text-sun">{s.big}</dd>
                  <dd className="mt-1 text-sm opacity-90">{s.small}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {TOP.map((t) => (
                <li key={t.src}>
                  <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-[10px] border-2 border-white/80">
                    <Image src={t.src} alt={t.alt} width={254} height={336} className="block h-auto w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm opacity-80">
              Angka dari profil TikTok @biyaminrazak (November 2026).{" "}
              <a href="/ebook/tiktok-grid.webp" target="_blank" rel="noopener noreferrer" className="font-bold underline">Lihat screenshot penuh</a>
            </p>
          </div>
        </section>

        {/* I · Interest */}
        <section aria-labelledby="masalah" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="min-w-0">
              <h2 id="masalah" className={H2}>Dulu, video macam ni perlukan satu pasukan.</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {TEAM.map((t) => (
                  <li key={t} className="rounded-full border-[2.5px] border-ink bg-paper px-3 py-1 font-semibold line-through decoration-brand decoration-[3px]">{t}</li>
                ))}
              </ul>
              <p className="mt-6 text-lg leading-relaxed">
                Sekarang, AI buat kerja teknikal. <b>Anda jadi pengarah:</b> tetapkan gaya, kumpul aset, beri arahan, dan semak hasil.
                Itulah cara saya hasilkan setiap episod, seorang diri.
              </p>
            </div>
            <ul className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
              {TOOLS.map((t) => (
                <li key={t.name} className={`rounded-[18px] border-[3px] border-ink p-4 shadow-hard-sm ${t.bg}`}>
                  <h3 className="text-xl font-extrabold">{t.name}</h3>
                  <p className="mt-1 leading-snug">{t.job}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* D · Desire */}
        <section aria-labelledby="belajar" className="border-y-[3px] border-ink bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="belajar" className={H2}>Apa yang anda akan belajar: 8 langkah</h2>
            <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="rounded-[18px] border-[3px] border-ink bg-paper p-4">
                  <span className="grid size-9 place-items-center rounded-full border-[2.5px] border-ink bg-sun font-extrabold">{i + 1}</span>
                  <h3 className="mt-3 text-lg font-extrabold leading-tight">{t}</h3>
                  <p className="mt-1 text-sm leading-snug">{d}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-14 text-2xl font-extrabold">Lihat 4 halaman pertama</h3>
            <p className="mt-1 text-sm opacity-75">Leret ke tepi. Tekan halaman untuk lihat lebih besar.</p>
            <ol className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pt-1 pb-4">
              {PREVIEWS.map((p, i) => (
                <li key={p.src} className="w-[62%] max-w-[240px] shrink-0 snap-start">
                  <a href={p.src} target="_blank" rel="noopener noreferrer" className="block">
                    <Image src={p.src} alt={`Halaman ${i + 1}: ${p.label}`} width={759} height={1075} sizes="240px" className="w-full rounded-[10px] border-[3px] border-ink bg-white shadow-hard-sm" />
                  </a>
                  <p className="mt-2 text-sm font-semibold">Hal. {i + 1} · {p.label}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div className="min-w-0 rounded-[18px] border-[3px] border-ink bg-mint p-6 shadow-hard">
            <h2 className="text-2xl font-extrabold">Apa yang anda dapat</h2>
            <ul className="mt-4 space-y-2">
              {GET.map((g) => <li key={g} className="flex gap-2"><span aria-hidden="true">✔</span>{g}</li>)}
            </ul>
          </div>
          <div className="min-w-0 rounded-[18px] border-[3px] border-ink bg-sky p-6 shadow-hard">
            <h2 className="text-2xl font-extrabold">Sesuai untuk</h2>
            <ul className="mt-4 space-y-2">
              {FOR.map((g) => <li key={g} className="flex gap-2"><span aria-hidden="true">✔</span>{g}</li>)}
            </ul>
          </div>
        </section>

        <section aria-labelledby="soalan" className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          <h2 id="soalan" className={H2}>Soalan lazim</h2>
          <div className="mt-6 space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group rounded-[14px] border-[3px] border-ink bg-paper px-4 py-3">
                <summary className="cursor-pointer list-none font-extrabold">
                  <span className="mr-2 inline-block transition-transform group-open:rotate-45" aria-hidden="true">+</span>{q}
                </summary>
                <p className="mt-2 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* A · Action */}
        <section id="beli" aria-labelledby="beli-title" className="scroll-mt-4 border-t-[3px] border-ink bg-peach/60 py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="min-w-0">
              <span className="sticker -rotate-2 bg-sun text-2xl">Dapatkan sekarang</span>
              <h2 id="beli-title" className={`${H2} mt-5`}>Buat Video dengan AI</h2>
              <PromoSummary />
              <p className="mt-4 leading-relaxed">
                Bayar dengan QR, upload resit, dan PDF dihantar ke Telegram atau email anda selepas bayaran disahkan.
              </p>
              <p className="mt-3 text-sm">
                Ada soalan sebelum beli? <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="font-bold underline">DM saya di Telegram</a>.
              </p>
            </div>
            <div className="min-w-0">
              <Checkout />
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm sm:px-6">
        <p>© 2026 Biyamin Razak</p>
        <Link href="/" className="font-bold underline underline-offset-4">biyaminrazak.my</Link>
      </footer>
    </div>
  );
}
