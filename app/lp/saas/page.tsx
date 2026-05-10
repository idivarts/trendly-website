import type { Metadata } from 'next';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Find the Right Influencer in Minutes — Trendly',
  description:
    'Stop paying agencies ₹30,000+ a month. Trendly gives your brand instant access to 10,000+ verified micro-creators. Search, shortlist, and launch campaigns — no middleman needed.',
  robots: { index: false, follow: false }, // keep ad LPs out of organic index
};

/* ── Reusable mini-components ─────────────────────────────────────────────── */

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-brand-100 bg-brand-50 px-6 py-4">
      <span className="font-display text-3xl font-extrabold text-brand-700">{value}</span>
      <span className="mt-1 text-center text-sm text-slate-600">{label}</span>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function LpSaasPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* ── Stripped-down header ── */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />
          <a
            href="https://openinapp.link/b5aqc"
            className="btn-primary"
          >
            Start free — it's ₹0
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </header>

      <main>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-28 sm:pb-24">
          {/* Soft gradient mesh */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-70" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          {/* Glowing orbs */}
          <div className="pointer-events-none absolute -top-32 right-[-8%] h-96 w-96 rounded-full bg-brand-300/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-8%] h-80 w-80 rounded-full bg-accent-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">

              {/* Eyebrow pill */}
              <span className="pill animate-fade-up">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
                Influencer Marketing SaaS · India-first
              </span>

              {/* Headline */}
              <h1
                className="h-display mt-5 text-5xl leading-[1.08] sm:text-6xl lg:text-7xl animate-fade-up"
                style={{ animationDelay: '80ms' }}
              >
                Stop paying{' '}
                <span className="text-gradient-animated">₹30,000+ a month</span>{' '}
                to find the right influencer
              </h1>

              {/* Subhead */}
              <p
                className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl animate-fade-up"
                style={{ animationDelay: '160ms' }}
              >
                Trendly is a SaaS platform that gives your brand instant access to{' '}
                <strong className="font-semibold text-slate-800">10,000+ verified micro-creators</strong>. Search by niche, city, and
                follower count. Shortlist in minutes. Launch. Pay only when results are delivered.
              </p>

              {/* CTAs */}
              <div
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center animate-fade-up"
                style={{ animationDelay: '240ms' }}
              >
                <a href="https://openinapp.link/b5aqc" className="btn-primary text-base px-8 py-4">
                  Start free — no credit card needed
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a href="https://cal.com/rahul-idiv/30min" className="btn-ghost text-base px-8 py-4">
                  See a live demo
                </a>
              </div>

              {/* Trust line */}
              <p
                className="mt-5 text-sm text-slate-500 animate-fade-up"
                style={{ animationDelay: '320ms' }}
              >
                Used by 500+ Indian D2C brands · Plans from ₹750/month
              </p>
            </div>

            {/* ── App preview card ── */}
            <div
              className="relative mx-auto mt-14 max-w-2xl animate-fade-up"
              style={{ animationDelay: '350ms' }}
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.2)]">
                {/* Browser bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-400">trendly.now/discover</span>
                </div>
                {/* Search bar */}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                  <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                  <span className="text-sm text-slate-500">Fitness creators · Mumbai · under 50k followers ✓ verified</span>
                </div>
                {/* Filter chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Fitness', 'Mumbai', '< 50k followers', 'Verified ✓'].map((chip) => (
                    <span key={chip} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {chip}
                    </span>
                  ))}
                </div>
                {/* Creator results */}
                <div className="mt-4 space-y-3">
                  {[
                    { name: 'Arjun Kapoor', niche: 'Fitness & Nutrition · Mumbai', followers: '44.2k', eng: '5.1%', color: 'from-emerald-400 to-teal-500' },
                    { name: 'Sneha Patel',  niche: 'Yoga & Wellness · Mumbai',     followers: '28.7k', eng: '6.3%', color: 'from-violet-400 to-purple-500' },
                    { name: 'Karan Singh',  niche: 'Gym & Sports · Pune',          followers: '37.9k', eng: '4.8%', color: 'from-sky-400 to-indigo-500' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between rounded-2xl border border-slate-100 p-3 hover:border-brand-200 hover:bg-brand-50/40 transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${c.color}`} />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{c.name}
                            <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">VERIFIED</span>
                          </div>
                          <div className="text-xs text-slate-500">{c.niche}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">{c.followers}</div>
                        <div className="text-xs text-emerald-600 font-medium">{c.eng} eng.</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Result count */}
                <p className="mt-3 text-center text-xs text-slate-400">Showing 3 of 847 matching creators</p>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-5 top-10 hidden animate-float rounded-2xl bg-gradient-brand p-3 text-white shadow-glow sm:block" style={{ animationDelay: '1s' }}>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Results in</div>
                <div className="mt-0.5 text-xl font-extrabold">2 min</div>
                <div className="text-[10px] opacity-90">vs. weeks with agencies</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PAIN vs GAIN ════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow">The old way is broken</span>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Why founders{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">switch to Trendly</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {/* Before */}
              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100">
                    <svg className="h-5 w-5 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  </div>
                  <span className="font-display text-lg font-bold text-rose-800">The Old Way</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    'Pay an agency ₹30,000–₹1L+ per month with no guarantee',
                    'Spend weeks on spreadsheets hunting for the right creator',
                    'No visibility into what the agency is actually doing',
                    'Creators go MIA after receiving advance payment',
                    'Locked into 6-month retainers before you see any ROI',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-rose-900">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-accent-400/10 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <svg className="h-5 w-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </div>
                  <span className="font-display text-lg font-bold text-brand-900">With Trendly</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    'Plans from ₹750/month — own your influencer data forever',
                    'Search 10,000+ verified creators in under 2 minutes',
                    'Full campaign dashboard — you see every step in real time',
                    'Pay-on-delivery model — creators get paid after content goes live',
                    'Start a campaign this week, not in 3 months',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-900">
                      <Check />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ════════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow">How it works</span>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                From zero to live campaign{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">in 3 steps</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Search & shortlist',
                  body: 'Filter 10,000+ verified micro-creators by niche, city, follower count, engagement rate, and more. Shortlist your favourites in a click.',
                  icon: (
                    <svg className="h-7 w-7 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                  ),
                },
                {
                  step: '02',
                  title: 'Launch your campaign',
                  body: 'Send briefs, set deliverables, and track status — all from your dashboard. No WhatsApp back-and-forth, no chasing.',
                  icon: (
                    <svg className="h-7 w-7 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" /></svg>
                  ),
                },
                {
                  step: '03',
                  title: 'Pay on delivery',
                  body: "Creators get paid only after content is live and verified. Your budget stays protected until you've actually seen the post.",
                  icon: (
                    <svg className="h-7 w-7 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  ),
                },
              ].map((s) => (
                <div key={s.step} className="glass-card relative">
                  <div className="absolute right-5 top-5 font-display text-5xl font-extrabold text-slate-100 select-none">
                    {s.step}
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                    {s.icon}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ STATS ═══════════════════════════════════════════════════════ */}
        <section className="bg-ink-900 py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-6 sm:grid-cols-4">
              <StatBadge value="10,000+" label="Verified micro-creators" />
              <StatBadge value="500+" label="Campaigns delivered" />
              <StatBadge value="₹750/mo" label="Starting price" />
              <StatBadge value="~4.8%" label="Avg. creator engagement rate" />
            </div>
          </div>
        </section>

        {/* ══ PRICING TEASER ══════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow">Pricing</span>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Less than{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">one agency meeting</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Most agencies charge ₹30,000–₹1 lakh per month before a single post goes live.
                Trendly starts at ₹750/month — and you're in control of every rupee.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { name: 'Starter', price: 'Free', desc: 'Explore the platform and discover creators — forever free.', features: ['50 creator searches/month', 'Basic filters', '1 active campaign'], highlight: false },
                { name: 'Growth', price: '₹750/mo', desc: 'For brands running their first influencer campaigns.', features: ['Unlimited searches', 'Advanced filters + analytics', '5 active campaigns', 'Pay-on-delivery protection'], highlight: true },
                { name: 'Pro', price: '₹1,500/mo', desc: 'For teams scaling influencer as a growth channel.', features: ['Everything in Growth', 'Unlimited campaigns', 'Team collaboration', 'Priority support'], highlight: false },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-8 ${plan.highlight ? 'bg-gradient-brand text-white shadow-glow' : 'border border-slate-200 bg-white'}`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-brand-700 shadow-sm">
                      Most popular
                    </span>
                  )}
                  <div className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? 'text-white/80' : 'text-brand-600'}`}>{plan.name}</div>
                  <div className={`mt-2 font-display text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</div>
                  <p className={`mt-2 text-sm ${plan.highlight ? 'text-white/80' : 'text-slate-500'}`}>{plan.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? 'text-white/90' : 'text-brand-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
                        <span className={plan.highlight ? 'text-white/90' : 'text-slate-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═══════════════════════════════════════════════════ */}
        <section className="bg-gradient-brand py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Your next campaign is 2 minutes away
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Join 500+ Indian brands who stopped paying agency retainers and started owning their influencer growth.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://openinapp.link/b5aqc"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Start free — ₹0 to sign up
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="https://cal.com/rahul-idiv/30min" className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Talk to the founder
              </a>
            </div>
            <p className="mt-5 text-sm text-white/60">No credit card · No agency markup · Cancel anytime</p>
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
