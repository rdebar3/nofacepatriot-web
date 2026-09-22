import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-black tracking-[0.2em] text-white">
            NO FACE <span className="text-red">PATRIOT</span>
          </p>
          <p className="mt-2 max-w-md text-sm text-white/60">
            Defiant. Patriotic. American AI character for people who stand up
            and stay loud.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/70">
          <Link href="/shop" className="hover:text-white">
            Shop
          </Link>
          <Link href="/join" className="hover:text-white">
            Join
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} No Face Patriot. All rights reserved.
      </div>
    </footer>
  );
}
