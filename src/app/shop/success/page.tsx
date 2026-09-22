import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Order Success" };

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-black text-white">
        Order received
      </h1>
      <p className="mt-4 text-white/70">
        Thanks for backing No Face Patriot. You&apos;ll get a confirmation from
        Stripe when payment clears.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-md bg-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-red-bright"
      >
        Back to shop
      </Link>
    </div>
  );
}
