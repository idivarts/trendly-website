'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { LINKS } from '@/lib/site-config';

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how' },
  { label: 'Pilot Programme', href: '/pilot' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between">
        <a href="/" aria-label="Trendly home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LINKS.CREATOR_SIGNUP}
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            I'm an influencer
          </a>
          <a href={LINKS.BOOK_DEMO} className="btn-primary !px-5 !py-2.5">
            Book a Demo
          </a>
        </div>
        <button
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-px space-y-1 pb-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href={LINKS.BOOK_DEMO}
              className="btn-primary mt-2 w-full"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
