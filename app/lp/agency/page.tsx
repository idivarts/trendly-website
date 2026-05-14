import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import { LINKS } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Influencer Marketing Done Differently — Trendly',
  description:
    'Trendly is not a traditional agency. We use our own SaaS platform to run smarter, faster, and more accountable influencer campaigns for Indian brands. Pay on delivery. Full visibility.',
  robots: { index: false, follow: false },
};

/* ── Reusable ─────────────────────────────────────────────────────────────── */

function Check({ className = '' }: { className?: string }) {
  return (
    <svg className={`mt-0.5 h-5 w-5 shrink-0 text-brand-600 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function LpAgencyPage() {
  const comparison = [
    {
      dimension: 'How they find creators',
      agency: 'Manual outreach, personal contacts, gut feel',
      trendly: 'Live database of 10,000+ verified creators with real-time data',
    },
    {
      dimension: 'Transparency',
      agency: 'Black-box — you see a report, not the process',
      trendly: 'You see everything: briefs, status, content, analytics',
    },
    {
      dimension: 'Payment model',
      agency: 'Monthly retainer upfront, results later (maybe)',
      trendly: 'Pay creators only after content is live and verified',
    },
    {
      dimension: 'Time to first post',
      agency: '4–8 weeks to onboard and start',
      trendly: 'First campaign live in days',
    },
    {
      dimension: 'Cost',
      agency: '₹30,000–₹1L+ per month',
      trendly: 'From ₹750/month (SaaS) or campaign-based managed pricing',
    },
    {
      dimension: 'You own the data',
      agency: 'No — creator relationships stay with the agency',
      trendly: 'Yes — your shortlists, history, and analytics are yours',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* ── Stripped-down header ── */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />
          <a href={LINKS.BOOK_DEMO} className="btn-primary">
            Book a Demo
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </header>

      <main>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-60" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
          <div className="pointer-events-none absolute -top-40 right-[-5%] h-[480px] w-[480px] rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-[-5%] h-80 w-80 rounded-full bg-accent-400/15 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="pill animate-fade-up">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
                Agency model · Powered by SaaS
              </span>

              <h1
                className="h-display mt-5 text-5xl leading-[1.08] sm:text-6xl lg:text-7xl animate-fade-up"
                style={{ animationDelay: '80ms' }}
              >
                We run your influencer campaigns.{' '}
                <span className="text-gradient-animated">You see everything.</span>
              </h1>

              <p
                className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl animate-fade-up"
                style={{ animationDelay: '160ms' }}
              >
                Trendly is not your typical influencer agency. We use our own SaaS platform to source, brief, and manage creators —
                so your campaigns are faster, cheaper, and fully transparent.
                No black box. No retainer trap. <strong className="font-semibold text-slate-800">Pay on delivery.</strong>
              </p>

              <div
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center animate-fade-up"
                style={{ animationDelay: '240ms' }}
              >
                <a href={LINKS.BOOK_DEMO} className="btn-primary text-base px-8 py-4">
                  Book a 30-min demo
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a href={LINKS.BRAND_SIGNUP} className="btn-ghost text-base px-8 py-4">
                  Try the platform free
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-400">No commitment · Talk to the founder directly</p>
            </div>
          </div>
        </section>

        {/* ══ HOW WE'RE DIFFERENT ═════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow">What makes us different</span>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Same goal as an agency.{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">Completely different playbook.</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Traditional agencies rely on spreadsheets, personal contacts, and opacity to justify their retainers.
                We built a platform to replace all of that — and we use it ourselves on every campaign we manage.
              </p>
            </div>

            {/* Comparison grid */}
            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50 px-6 py-4">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400" />
                <div className="text-center text-sm font-bold text-rose-700">Traditional Agency</div>
                <div className="text-center text-sm font-bold text-brand-700">Trendly</div>
              </div>
              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={row.dimension}
                  className={`grid grid-cols-3 items-start gap-4 px-6 py-5 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} border-b border-slate-100 last:border-0`}
                >
                  <div className="text-sm font-semibold text-slate-700">{row.dimension}</div>
                  <div className="flex items-start gap-2">
                    <Cross />
                    <span className="text-sm text-slate-600">{row.agency}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check />
                    <span className="text-sm text-slate-700">{row.trendly}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ HOW WE WORK ═════════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow">How Trendly runs campaigns</span>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Managed by us.{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">Visible to you.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'We brief the strategy',
                  body: 'Our team learns your brand, goals, and target audience. We define the creator profile, content brief, and deliverables together.',
                  icon: <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" /></svg>,
                },
                {
                  step: '02',
                  title: 'Platform finds the creators',
                  body: 'We use Trendly\'s own database — not gut feel — to shortlist creators that match your brief. You approve the final list.',
                  icon: <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>,
                },
                {
                  step: '03',
                  title: 'We manage execution',
                  body: 'Briefing, follow-ups, approvals, and go-live are handled end-to-end. You get a live dashboard — not a monthly report.',
                  icon: <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" /></svg>,
                },
                {
                  step: '04',
                  title: 'Pay on delivery',
                  body: 'Creators are paid after content is live and verified. Your money is never at risk of going to a creator who doesn\'t deliver.',
                  icon: <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
                },
              ].map((s) => (
                <div key={s.step} className="glass-card relative">
                  <div className="absolute right-4 top-4 font-display text-4xl font-extrabold text-slate-100 select-none">{s.step}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">{s.icon}</div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY TRENDLY MANAGED ═════════════════════════════════════════ */}
        <section className="bg-ink-900 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow text-accent-400">Why brands choose us</span>
              <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
                Built for Indian startups,{' '}
                <span className="text-gradient-animated">not enterprise budgets</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  metric: '₹750/mo',
                  label: 'starting price',
                  desc: 'vs. ₹30,000+ at a traditional agency. You get the platform and the expertise.',
                },
                {
                  metric: '2–4 days',
                  label: 'to first creator going live',
                  desc: 'Not 4–8 weeks. Our platform cuts the discovery and briefing cycle dramatically.',
                },
                {
                  metric: '10,000+',
                  label: 'verified creators',
                  desc: 'The largest verified micro-influencer database for Indian D2C brands.',
                },
              ].map((s) => (
                <div key={s.metric} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                  <div className="font-display text-5xl font-extrabold text-white">{s.metric}</div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent-400">{s.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIAL ═════════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <svg className="mx-auto h-10 w-10 text-brand-200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.886-3.995 3.356-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.886-3.996 3.356-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mt-4 font-display text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              "We were paying an agency ₹50,000 a month and couldn't tell which creators were actually driving sales.
              Trendly showed us everything in one dashboard — and our cost per acquisition dropped by 40%."
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Priya Nair</div>
                <div className="text-sm text-slate-500">Co-founder, Quench (D2C Skincare)</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═══════════════════════════════════════════════════ */}
        <section className="bg-gradient-brand py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to try a smarter agency?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Book a 30-minute call with our founder. We'll walk you through a live campaign from brief to results —
              and show you exactly how our platform makes us different.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={LINKS.BOOK_DEMO}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-soft transition hover:-translate-y-0.5"
              >
                Book a 30-min demo
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href={LINKS.BRAND_SIGNUP} className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Try the platform free
              </a>
            </div>
            <p className="mt-5 text-sm text-white/60">No retainer · No lock-in · Talk to the founder, not a salesperson</p>
          </div>
        </section>

        {/* ── Minimal footer ── */}
        <footer className="border-t border-slate-100 bg-white py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate-400 sm:flex-row sm:px-8">
            <Logo className="opacity-70" />
            <span>© {new Date().getFullYear()} IDIVARTS Solutions Pvt Ltd · <a href="mailto:support@idiv.in" className="hover:text-brand-600">support@idiv.in</a></span>
            <div className="flex gap-4">
              <a href="/privacy-policy" className="hover:text-brand-600">Privacy</a>
              <a href="/terms-and-condition" className="hover:text-brand-600">Terms</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
