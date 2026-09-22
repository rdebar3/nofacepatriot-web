import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, #c8102e55 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #1a3a8a44 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red">
            No Face Patriot
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
            Stand up. Stay loud. Stay American.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Defiant patriotic AI character for TikTok and X. Join the movement.
            Wear the message. Never apologize for loving this country.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="rounded-md bg-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-bright"
            >
              Join
            </Link>
            <Link
              href="/shop"
              className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3">
        {[
          {
            t: "Character",
            d: "An American AI voice that doesn't flinch — bold, ironic, and proudly patriotic.",
          },
          {
            t: "Community",
            d: "Built for followers who still believe in freedom, grit, and saying what they mean.",
          },
          {
            t: "Merch",
            d: "Tees, hoodies, and caps that carry the message offline. Checkout via Stripe.",
          },
        ].map((card) => (
          <div
            key={card.t}
            className="rounded-lg border border-white/10 bg-navy/60 p-6"
          >
            <h2 className="text-lg font-bold text-white">{card.t}</h2>
            <p className="mt-2 text-sm text-white/65">{card.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
