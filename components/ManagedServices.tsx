'use client';
import { useState } from 'react';
import { LINKS } from '@/lib/site-config';

const services = [
  {
    id: 'content',
    title: 'Content Strategy & Creative',
    desc: 'We set your brand voice and content pillars, plan a rolling calendar, and draft captions, scripts, and creative for every post — AI-assisted, team-maintained.',
    category: 'Content',
    catColor: 'bg-brand-500/20 text-brand-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    id: 'creators',
    title: 'Creator Campaigns',
    desc: 'We source, vet, brief, and manage micro-influencer campaigns end-to-end — from shortlist to deliverables, revisions, and approvals.',
    category: 'Creators',
    catColor: 'bg-emerald-500/20 text-emerald-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="11" r="3" />
        <path d="M2 21c0-3.9 3.1-7 7-7 2 0 3.8.8 5.1 2.1" />
        <path d="M21 21c0-2.8-1.8-5-4-5" />
      </svg>
    ),
  },
  {
    id: 'community',
    title: 'Community Management',
    desc: 'We monitor and respond to comments and DMs across your platforms, keeping your audience engaged and on-brand.',
    category: 'Community',
    catColor: 'bg-amber-500/20 text-amber-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 0 1 8.5-8.5 8.5 8.5 0 0 1 8.5 8.5z" />
      </svg>
    ),
  },
  {
    id: 'reporting',
    title: 'Analytics & Reporting',
    desc: "A clear monthly report across content, creators, and ads — what worked, what didn't, and what we're changing next.",
    category: 'Reporting',
    catColor: 'bg-rose-500/20 text-rose-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: 'performance',
    title: 'Paid Ads & Performance Marketing',
    desc: 'We plan, launch, and optimize paid ads across Meta, Google & TikTok, plus full-funnel performance — retargeting and tracking, measured to revenue.',
    category: 'Performance',
    catColor: 'bg-sky-500/20 text-sky-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18M19 9l-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: 'audit',
    title: 'Website & Conversion Audit',
    desc: 'We map your funnel end-to-end, install pixels and tracking, find exactly where visitors drop off, and fix the leaks (CRO).',
    category: 'CRO',
    catColor: 'bg-cyan-500/20 text-cyan-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h18l-7 8v6l-4 2v-8z" />
      </svg>
    ),
  },
];

const Check = () => (
  <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export default function ManagedServices() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const selectedList = services.filter((s) => selected.has(s.id));

  return (
    <section className="relative overflow-hidden py-28">
      {/* Dark background */}
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute -top-40 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-px relative">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Managed Services
          </span>
          <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
            Want us to do the work?{' '}
            <span className="text-gradient-animated">You decide what.</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Pick only what you want off your plate. We'll build a transparent, itemized plan — and you can review and pay for it directly inside the app. No agencies. No retainers. No surprises.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">

          {/* ── Service cards ── */}
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((s) => {
                const on = selected.has(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => toggle(s.id)}
                    className={`group relative overflow-hidden rounded-3xl border p-5 text-left transition-all duration-200 ${
                      on
                        ? 'border-brand-400/60 bg-brand-600/10 shadow-[0_0_30px_-8px_rgba(37,99,235,0.4)]'
                        : 'border-white/8 bg-white/[0.04] hover:border-white/15 hover:bg-white/[0.07]'
                    }`}
                  >
                    {/* Subtle bloom on hover */}
                    {on && (
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/20 blur-2xl" />
                    )}

                    {/* Top row: icon + checkbox */}
                    <div className="flex items-start justify-between gap-3">
                      <div className={`grid h-10 w-10 flex-none place-items-center rounded-2xl transition-all duration-200 ${
                        on ? 'bg-brand-500 shadow-glow' : 'bg-white/8 group-hover:bg-white/12'
                      }`}>
                        <div className={`h-5 w-5 transition-colors ${on ? 'text-white' : 'text-slate-400'}`}>
                          {s.icon}
                        </div>
                      </div>

                      <div className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full border transition-all duration-200 ${
                        on ? 'border-brand-400 bg-brand-500' : 'border-white/20'
                      }`}>
                        {on && <Check />}
                      </div>
                    </div>

                    {/* Title + category */}
                    <div className="mt-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-sm font-bold leading-snug transition-colors ${on ? 'text-white' : 'text-slate-200'}`}>
                          {s.title}
                        </span>
                      </div>
                      <span className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${s.catColor}`}>
                        {s.category}
                      </span>
                    </div>

                    <p className="mt-2.5 text-xs leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                      {s.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-center text-xs text-slate-600">
              Mix and match freely — select as many or as few as you need.
            </p>
          </div>

          {/* ── Plan builder ── */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">

              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Your Custom Plan</h3>
                {selected.size > 0 && (
                  <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-bold text-white">
                    {selected.size} service{selected.size !== 1 ? 's' : ''}
                  </span>
                )}
              </div>

              {/* Empty state */}
              {selected.size === 0 ? (
                <div className="mt-6 rounded-2xl border border-dashed border-white/10 px-6 py-8 text-center">
                  <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-white/5">
                    <svg className="h-5 w-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-500">
                    Select the services you want us to handle — your plan builds here in real time.
                  </p>
                </div>
              ) : (
                <ul className="mt-5 space-y-2.5">
                  {selectedList.map((s) => (
                    <li key={s.id} className="flex items-center gap-3">
                      <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500">
                        <Check />
                      </span>
                      <span className="text-sm text-slate-200">{s.title}</span>
                      <button
                        onClick={() => toggle(s.id)}
                        className="ml-auto text-slate-600 transition hover:text-slate-300"
                        aria-label={`Remove ${s.title}`}
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Divider */}
              <div className="my-5 border-t border-white/8" />

              {/* Transparency note */}
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                <p className="text-xs leading-relaxed text-slate-400">
                  We review your selection and send you a{' '}
                  <strong className="text-white">clear, line-by-line quote</strong> within 24 hours. Once you approve, the plan shows up inside your Trendly app — you pay from there. No surprise fees. No long-term commitment.
                </p>
              </div>

              {/* CTA */}
              <a
                href={selected.size > 0 ? LINKS.BOOK_DEMO : undefined}
                aria-disabled={selected.size === 0}
                className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${
                  selected.size > 0
                    ? 'bg-gradient-brand text-white shadow-glow hover:-translate-y-0.5 hover:shadow-xl cursor-pointer'
                    : 'cursor-default select-none bg-white/8 text-white/30'
                }`}
              >
                {selected.size > 0 ? (
                  <>
                    Get my custom plan
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </>
                ) : (
                  'Select services above to continue'
                )}
              </a>

              {/* Trust chips */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-slate-500">
                {[
                  'Pay from the app',
                  'Response within 24h',
                  'No long-term contract',
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
