import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = { title: "Join" };

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-red">
        Stay in the fight
      </p>
      <h1 className="mt-3 font-display text-4xl font-black text-white">
        Join the Movement
      </h1>
      <p className="mx-auto mt-4 max-w-md text-white/65">
        Drop your email for merch drops, new clips, and announcements. No spam —
        just the signal.
      </p>
      <div className="mt-10">
        <JoinForm />
      </div>
    </div>
  );
}
