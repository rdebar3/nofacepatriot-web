"use client";

import { useState } from "react";

export default function BuyButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Checkout unavailable");
        return;
      }
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("No checkout URL returned");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleBuy}
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-md bg-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-bright disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Redirecting…" : "Buy Now"}
      </button>
      {error && <p className="mt-3 text-sm text-red-bright">{error}</p>}
    </div>
  );
}
