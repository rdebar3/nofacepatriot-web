import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Checkout Cancelled" };

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-black text-white">
        Checkout cancelled
      </h1>
      <p className="mt-4 text-white/70">
        No charge was made. Come back whenever you&apos;re ready.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-md border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10"
      >
        Return to shop
      </Link>
    </div>
  );
}
