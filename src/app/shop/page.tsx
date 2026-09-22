import type { Metadata } from "next";
import Link from "next/link";
import { products, formatPrice } from "@/lib/products";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-red">
        Merch
      </p>
      <h1 className="mt-3 font-display text-4xl font-black text-white">
        Wear the Message
      </h1>
      <p className="mt-3 max-w-xl text-white/65">
        Placeholder designs until official art ships. Checkout is wired for
        Stripe — go live when keys are set.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/shop/${p.slug}`}
            className="group overflow-hidden rounded-lg border border-white/10 bg-navy/50 transition hover:border-red/50"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-black via-navy to-red/30">
              <span className="font-display text-xs font-black tracking-[0.25em] text-white/40 group-hover:text-white/70">
                NO FACE PATRIOT
              </span>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-white">{p.name}</h2>
              <p className="mt-1 text-sm text-white/60">{p.description}</p>
              <p className="mt-3 text-base font-semibold text-red">
                {formatPrice(p.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
