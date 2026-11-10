"use client";

import Link from "next/link";
import { PriceTag, usePromo } from "./Checkout";

/** "Beli" button with the live promo price, shown under a buyable eBook. */
export function BuyChip({ href }: { href: string }) {
  const promo = usePromo();
  return (
    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
      <PriceTag promo={promo} size="sm" />
      <Link href={href} className="btn min-h-10 bg-brand px-4 py-1.5 text-sm text-white">
        Beli sekarang
      </Link>
    </div>
  );
}
