'use client';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { LINKS, NAV, type NavItem } from '@/lib/site-config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink key={item.label} item={item} open={openMenu === item.label} setOpen={(v) => setOpenMenu(v ? item.label : null)} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={LINKS.BRAND_SIGNUP} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Log in
          </a>
          <a href={LINKS.BRAND_SIGNUP} className="btn-primary !px-5 !py-2.5">
            Start free
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200/70 max-h-[80vh] overflow-y-auto">
          <div className="container-px space-y-1 pb-4 pt-2">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <div className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">{item.label}</div>
                  {item.children.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              )
            )}
            <a href={LINKS.BRAND_SIGNUP} className="btn-primary mt-3 w-full">
              Start free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ item, open, setOpen }: { item: NavItem; open: boolean; setOpen: (v: boolean) => void }) {
  if (!item.children) {
    return (
      <a
        href={item.href}
        className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        aria-expanded={open}
      >
        {item.label}
        <svg className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-72 pt-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)]">
            {item.children.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="block rounded-xl px-3 py-2.5 transition hover:bg-brand-50"
              >
                <div className="text-sm font-semibold text-slate-900">{c.label}</div>
                {c.desc && <div className="mt-0.5 text-xs text-slate-500">{c.desc}</div>}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
