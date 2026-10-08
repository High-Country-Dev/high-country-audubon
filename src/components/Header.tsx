"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content";

const NO_HERO = ["/credits"];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Pages with a full-bleed photo hero get a transparent header until you scroll.
  const hasHero = !NO_HERO.includes(path);
  const overHero = hasHero && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        overHero ? "bg-transparent text-white" : "bg-cream/95 text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/owl-logo.png"
            alt=""
            width={44}
            height={44}
            className="rounded-full ring-2 ring-white/70"
            priority
          />
          <span className="font-display text-lg leading-tight font-semibold sm:text-xl">
            High Country <span className="italic">Audubon</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                path === n.href ? "after:scale-x-100" : "after:scale-x-0"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="rounded-full bg-ember px-5 py-2.5 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ad5222] hover:shadow-md"
          >
            Join &amp; Give
          </Link>
        </nav>

        <button
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden bg-cream transition-[max-height] duration-500 md:hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 text-lg">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="border-b border-black/5 py-3">
              {n.label}
            </Link>
          ))}
          <Link href="/join" className="mt-4 rounded-full bg-ember px-5 py-3 text-center text-white">
            Join &amp; Give
          </Link>
        </nav>
      </div>
    </header>
  );
}
