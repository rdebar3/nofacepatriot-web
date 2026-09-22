"use client";

import { useState, FormEvent } from "react";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("err");
        setMessage(data.error || "Something went wrong");
        return;
      }
      setStatus("ok");
      setMessage(data.message || "You're on the list.");
      setEmail("");
    } catch {
      setStatus("err");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-4">
      <label className="block text-left text-sm font-semibold text-white/80">
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-md border border-white/20 bg-black/40 px-4 py-3 text-white outline-none ring-red focus:ring-2"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-bright disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Join the Movement"}
      </button>
      {message && (
        <p
          className={`text-sm ${
            status === "ok" ? "text-green-400" : "text-red-bright"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
