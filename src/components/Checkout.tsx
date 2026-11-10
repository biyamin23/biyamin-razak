"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

type Promo = { open: boolean; paid: number; left: number; price: number; fullPrice: number; promo: boolean };
type State = { kind: "idle" } | { kind: "sending" } | { kind: "done"; id: string } | { kind: "error"; msg: string };

export function usePromo() {
  const [promo, setPromo] = useState<Promo | null>(null);
  useEffect(() => {
    fetch("/api/promo", { cache: "no-store" })
      .then((r) => r.json())
      .then(setPromo)
      .catch(() => setPromo(null));
  }, []);
  return promo;
}

/** Price tag: RM29 struck through + RM19 while the promo lasts. */
export function PriceTag({ promo, size = "lg" }: { promo: Promo | null; size?: "sm" | "lg" }) {
  if (!promo) return <span className="text-sm opacity-60">Memuatkan harga…</span>;
  const big = size === "lg" ? "text-4xl" : "text-lg";
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2">
      {promo.promo && <s className={size === "lg" ? "text-xl opacity-60" : "text-sm opacity-60"}>RM{promo.fullPrice}</s>}
      <b className={`${big} font-extrabold`}>RM{promo.price}</b>
      {promo.promo && <span className="font-hand text-base">harga promo</span>}
    </span>
  );
}

/** Price plus how many promo copies are left. */
export function PromoSummary() {
  const promo = usePromo();
  return (
    <div className="mt-4">
      <PriceTag promo={promo} />
      {promo?.promo && (
        <p className="mt-1 font-semibold">
          Baki <b>{promo.left}</b> daripada 100 naskhah harga promo
        </p>
      )}
    </div>
  );
}

// Phone screenshots are often 3–8 MB; shrink images before upload (server limit is 4 MB).
async function shrink(file: File): Promise<File> {
  if (!/^image\/(jpeg|png|webp)$/.test(file.type) || file.size < 1_500_000) return file;
  const bmp = await createImageBitmap(file).catch(() => null);
  if (!bmp) return file;
  const scale = Math.min(1, 1800 / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * scale);
  c.height = Math.round(bmp.height * scale);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  const blob = await new Promise<Blob | null>((ok) => c.toBlob(ok, "image/jpeg", 0.85));
  return blob ? new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" }) : file;
}

export function Checkout() {
  const promo = usePromo();
  const [state, setState] = useState<State>({ kind: "idle" });
  const [fileName, setFileName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const f = fd.get("receipt");
    if (f instanceof File && f.size > 0) fd.set("receipt", await shrink(f));
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/order", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; id?: string; error?: string };
      if (res.ok && data.ok) {
        setState({ kind: "done", id: data.id ?? "" });
        formRef.current?.reset();
        setFileName("");
      } else setState({ kind: "error", msg: data.error ?? "Ada masalah. Cuba sekali lagi." });
    } catch {
      setState({ kind: "error", msg: "Tiada sambungan internet. Semak rangkaian anda dan cuba lagi." });
    }
  }

  if (promo && !promo.open) {
    return (
      <div className="rounded-[18px] border-[3px] border-ink bg-paper p-6 shadow-hard">
        <h2 className="text-2xl font-extrabold">Pembelian belum dibuka</h2>
        <p className="mt-2">Untuk dapatkan eBook ini sekarang, DM saya di Telegram.</p>
        <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="btn mt-4 bg-brand text-white">DM saya di Telegram</a>
      </div>
    );
  }

  if (state.kind === "done") {
    return (
      <div role="status" className="rounded-[18px] border-[3px] border-ink bg-mint p-6 shadow-hard">
        <p className="font-hand text-2xl">Terima kasih!</p>
        <h2 className="mt-1 text-2xl font-extrabold">Resit diterima · pesanan #{state.id}</h2>
        <p className="mt-2 leading-relaxed">
          Saya akan semak bayaran anda dan hantar eBook <b>terus ke Telegram anda</b>. Pastikan anda boleh menerima mesej daripada
          orang yang belum ada dalam contact.
        </p>
        <p className="mt-2 text-sm">Ada soalan? <a className="font-bold underline" href={site.telegram} target="_blank" rel="noopener noreferrer">DM saya di Telegram</a>.</p>
      </div>
    );
  }

  const sending = state.kind === "sending";
  return (
    <div className="space-y-6">
      <ol className="space-y-5 rounded-[18px] border-[3px] border-ink bg-paper p-5 shadow-hard sm:p-6">
        <li>
          <p className="font-extrabold"><span className="mr-2 inline-grid size-7 place-items-center rounded-full bg-sun">1</span>Scan QR dan bayar {promo ? <b>RM{promo.price}</b> : "jumlah di atas"}</p>
          <Image
            src="/beli/tng-qr.png"
            unoptimized // keep the QR pixels sharp
            alt="QR DuitNow Touch 'n Go: AHMAD BIYAMIN BIN ABDUL RAZAK"
            width={746}
            height={960}
            className="mx-auto mt-3 w-full max-w-[260px] rounded-xl border-[3px] border-ink"
          />
          <p className="mt-2 text-sm leading-relaxed">
            Boleh scan dengan TnG atau mana-mana app bank. <b>Buka di telefon?</b> Simpan gambar QR ini, kemudian dalam app pilih Scan → ikon galeri.
          </p>
          <a href="/beli/tng-qr.png" download="QR-Biyamin-Razak.png" className="mt-2 inline-block text-sm font-bold underline">Simpan gambar QR</a>
        </li>
        <li><p className="font-extrabold"><span className="mr-2 inline-grid size-7 place-items-center rounded-full bg-sun">2</span>Screenshot resit pembayaran</p></li>
        <li><p className="font-extrabold"><span className="mr-2 inline-grid size-7 place-items-center rounded-full bg-sun">3</span>Isi borang di bawah dan upload resit</p></li>
      </ol>

      <form ref={formRef} onSubmit={submit} className="space-y-4 rounded-[18px] border-[3px] border-ink bg-white p-5 shadow-hard sm:p-6" noValidate={false}>
        <label className="block">
          <span className="font-bold">Nama</span>
          <input name="name" required minLength={2} maxLength={80} autoComplete="name" className="mt-1 w-full rounded-[10px] border-[2.5px] border-ink bg-paper px-3 py-2.5" />
        </label>
        <label className="block">
          <span className="font-bold">Username Telegram</span>
          <input name="telegram" required pattern="@?[A-Za-z0-9_]{5,32}" placeholder="@namaanda" autoCapitalize="none" autoCorrect="off" className="mt-1 w-full rounded-[10px] border-[2.5px] border-ink bg-paper px-3 py-2.5" />
          <span className="mt-1 block text-sm opacity-75">eBook akan dihantar ke sini. Semak di Telegram: Settings → My Profile → Username.</span>
        </label>
        <label className="block">
          <span className="font-bold">Resit pembayaran</span>
          <span className="mt-1 flex cursor-pointer items-center gap-3 rounded-[10px] border-[2.5px] border-dashed border-ink bg-paper px-3 py-3">
            <span className="btn shrink-0 whitespace-nowrap bg-sun px-4 py-1.5 text-sm">Pilih fail</span>
            <span className="truncate text-sm">{fileName || "Gambar atau PDF, maksimum 4 MB"}</span>
            <input name="receipt" type="file" required accept="image/*,application/pdf" className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
          </span>
        </label>
        {/* honeypot: real people never see or fill this */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        {state.kind === "error" && <p role="alert" className="rounded-[10px] border-[2.5px] border-ink bg-bubble px-3 py-2 font-semibold">{state.msg}</p>}

        <button type="submit" disabled={sending} className="btn w-full justify-center bg-brand text-white disabled:opacity-60">
          {sending ? "Menghantar resit…" : "Hantar resit"}
        </button>
        <p className="text-xs leading-relaxed opacity-75">Nama dan username Telegram anda hanya digunakan untuk menghantar eBook ini.</p>
      </form>
    </div>
  );
}
