import ScrollReveal from '@/components/ScrollReveal';
import StoreBadges from '@/components/StoreBadges';

/**
 * Homepage "get the app" band.
 *
 * Deliberately a contained card on a light section, not a full-bleed dark or
 * gradient band: the only full-bleed gradient on the homepage is the closing
 * CTA, and the app download is a *channel* choice, not a second primary ask.
 * Keeping it as a card holds it one rung below "Start for free".
 */

const points = [
  {
    t: 'Approve and edit on the go',
    d: 'Clear the approval queue and fix a caption from anywhere.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
  {
    t: 'Schedule from anywhere',
    d: 'Push a post live or move it in the calendar without a laptop.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    t: 'Comments and DMs in one inbox',
    d: 'Catch replies the moment they land, across every channel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.3-.6L3 21l1.8-5.1A8.4 8.4 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
      </svg>
    ),
  },
];

export default function DownloadApp() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Copy + badges */}
              <div>
                <span className="pill">iOS &amp; Android</span>
                <h2 className="h-display mt-4 text-3xl sm:text-4xl">
                  Plan on your laptop.{' '}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">Publish from your phone.</span>
                </h2>
                <p className="mt-4 max-w-lg text-slate-600">
                  The Trendly app puts your calendar, your drafts and your inbox in your pocket — same account,
                  same workspace, nothing to set up twice.
                </p>

                <ul className="mt-7 space-y-4">
                  {points.map((p) => (
                    <li key={p.t} className="flex gap-3">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                        <span className="h-4 w-4">{p.icon}</span>
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-900">{p.t}</span>
                        <span className="block text-sm text-slate-600">{p.d}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <StoreBadges className="mt-8" />

                <p className="mt-4 text-xs text-slate-500">
                  Free to download ·{' '}
                  <a href="/download" className="font-semibold text-brand-700 underline-offset-2 hover:underline">
                    More about the app
                  </a>
                </p>
              </div>

              {/* Phone mock */}
              <div className="flex justify-center lg:justify-end">
                <PhoneMock />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const queue = [
  { day: 'Tue', title: 'Founder story — carousel', ch: 'Instagram', state: 'Scheduled', tone: 'brand' },
  { day: 'Wed', title: '3 myths about AI content', ch: 'LinkedIn', state: 'Needs review', tone: 'amber' },
  { day: 'Thu', title: 'Behind the build — reel', ch: 'TikTok', state: 'Draft', tone: 'slate' },
];

const toneMap = {
  brand: 'bg-brand-50 text-brand-700',
  amber: 'bg-amber-50 text-amber-700',
  slate: 'bg-slate-100 text-slate-600',
} as const;

/** Shared phone frame mock — used on the homepage band and the /download page. */
export function PhoneMock() {
  return (
    <div className="relative w-[260px] shrink-0 animate-float sm:w-[280px]">
      <div className="rounded-[38px] border-[10px] border-ink-900 bg-ink-900 shadow-[0_30px_70px_-20px_rgba(15,23,42,0.45)]">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-50">
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-900" />

          {/* app header */}
          <div className="bg-gradient-brand px-4 pb-5 pt-8 text-white">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">This week</div>
            <div className="mt-1 text-base font-bold">Content calendar</div>
          </div>

          {/* queue */}
          <div className="space-y-2.5 p-3">
            {queue.map((q) => (
              <div key={q.title} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{q.day}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${toneMap[q.tone as keyof typeof toneMap]}`}>
                    {q.state}
                  </span>
                </div>
                <div className="mt-1.5 text-[11px] font-semibold leading-snug text-slate-900">{q.title}</div>
                <div className="mt-1 text-[10px] text-slate-500">{q.ch}</div>
              </div>
            ))}

            <div className="flex items-center justify-center gap-1.5 rounded-xl bg-ink-900 py-2.5 text-[11px] font-semibold text-white">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Create with AI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
