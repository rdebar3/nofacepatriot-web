import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="font-display text-sm font-black tracking-[0.2em] text-white sm:text-base"
        >
          NO FACE <span className="text-red">PATRIOT</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-3 text-xs font-semibold uppercase tracking-wider text-white/80 sm:gap-5 sm:text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
