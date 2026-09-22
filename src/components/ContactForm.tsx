"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
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
        body: JSON.stringify({
          email,
          name,
          message: body,
          source: "contact",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("err");
        setMessage(data.error || "Something went wrong");
        return;
      }
      setStatus("ok");
      setMessage(data.message || "Message sent.");
      setName("");
      setEmail("");
      setBody("");
    } catch {
      setStatus("err");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-lg space-y-4 text-left">
      <label className="block text-sm font-semibold text-white/80">
        Name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/20 bg-black/40 px-4 py-3 text-white outline-none ring-red focus:ring-2"
        />
      </label>
      <label className="block text-sm font-semibold text-white/80">
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/20 bg-black/40 px-4 py-3 text-white outline-none ring-red focus:ring-2"
        />
      </label>
      <label className="block text-sm font-semibold text-white/80">
        Message
        <textarea
          required
          rows={5}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/20 bg-black/40 px-4 py-3 text-white outline-none ring-red focus:ring-2"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-bright disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
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
