'use client';

import { LINKS } from '@/lib/site-config';
import Logo from './Logo';

const cols = [
  {
    title: 'Platform',
    links: [
      { label: 'Product', href: '/product' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Free tools',
    links: [
      { label: 'Caption Generator', href: '/tools/instagram-caption-generator' },
      { label: 'Content Idea Generator', href: '/tools/content-idea-generator' },
      { label: 'Hook Generator', href: '/tools/hook-generator' },
      { label: 'All free tools', href: '/tools' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a demo', href: LINKS.BOOK_DEMO },
    ],
  },
];

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/trendly_collab',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/showcase/105144641',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.3 0-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/trendly.pro/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.6 9.9V15H8v-3h2.4V9.6c0-2.4 1.4-3.8 3.6-3.8 1 0 2.1.2 2.1.2v2.3H15c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://rahul-trendly.medium.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-ink-900 text-slate-300">
      <div className="absolute -top-40 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="container-px relative py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm text-slate-400">
              Trendly is an AI-powered marketing workspace for modern teams — from content strategy and scheduling to creator campaigns, all in one place.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur"
            >
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 bg-transparent px-3 text-sm text-white placeholder-slate-500 outline-none"
              />
              <button className="btn-primary !py-2 !text-xs">Subscribe</button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-300 hover:bg-brand-600 hover:text-white"
                >
                  <div className="h-4 w-4">{s.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a className="text-sm text-slate-400 transition hover:text-white" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} IDIVARTS Solutions Pvt Ltd · All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <a className="hover:text-white" href="/terms-and-condition">Terms</a>
            <a className="hover:text-white" href="/privacy-policy">Privacy</a>
            <a className="hover:text-white" href="/data-deletion-instruction-page">Data deletion</a>
            <a className="hover:text-white" href="mailto:support@idiv.in">support@idiv.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
