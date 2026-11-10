"use client";

import { PriceTag, usePromo } from "./Checkout";

/** Hero/section call to action with the live promo price. */
export function EbookCta({ label = "Dapatkan eBook" }: { label?: string }) {
  const promo = usePromo();
  return (
    <div className="flex flex-col items-start gap-3">
      <div>
        <PriceTag promo={promo} />
        {promo?.promo && (
          <p className="mt-1 text-sm font-semibold">
            Harga promo untuk 100 pembeli pertama · baki <b>{promo.left}</b>
          </p>
        )}
      </div>
      <a href="#beli" className="btn bg-brand text-white">
        {label}
      </a>
    </div>
  );
}
