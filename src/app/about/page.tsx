import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-red">
        The Character
      </p>
      <h1 className="mt-3 font-display text-4xl font-black text-white">
        No Face. Full Voice.
      </h1>
      <div className="prose prose-invert mt-8 space-y-5 text-white/75">
        <p>
          No Face Patriot is a defiant patriotic American AI character — built
          for the feed, made for people who are tired of being told to sit down
          and shut up. No polished corporate smile. No apology tour. Just a clear
          message: stand up, stay loud, stay American.
        </p>
        <p>
          Born on TikTok and X, the character speaks in short, high-contrast
          takes — humor with an edge, pride without irony that undercuts itself.
          The face stays hidden so the message stays front and center.
        </p>
        <p>
          This site is the official fan hub and merch shop for the movement.
          Join the list for drops, watch parties, and new drops. Wear the brand
          when you want the offline version of the same energy.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/join"
          className="rounded-md bg-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-red-bright"
        >
          Join the list
        </Link>
        <Link
          href="/shop"
          className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10"
        >
          Shop merch
        </Link>
      </div>
    </div>
  );
}
