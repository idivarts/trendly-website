import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import { LINKS } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'The Trendly Pilot — We Set It Up, Work With You, Then Hand It Over',
  description:
    "Trendly's Pilot Programme builds your influencer-marketing workflow from scratch, runs it alongside your team for 6–8 months, then hands the process to someone on your team. You own the platform. You own the process.",
  robots: { index: false, follow: false },
};

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function LpPilotPage() {
  const phases = [
    {
      number: '01',
      name: 'Set up',
      tagline: 'We build your influencer engine from scratch',
      color: 'from-brand-600 to-brand-500',
      textColor: 'text-brand-700',
      bgLight: 'bg-brand-50',
      borderColor: 'border-brand-200',
      duration: 'Weeks 1–2',
      points: [
        'Audit your brand, audience, and goals',
        'Define your creator profile — niche, city, follower range',
        'Set up your Trendly workspace with filters and shortlists',
        'Build a repeatable campaign brief template',
        'Identify and onboard your first batch of creators',
      ],
      outcome: 'You have a live, ready-to-run influencer workflow — not a PowerPoint strategy.',
    },
    {
      number: '02',
      name: 'Run together',
      tagline: 'We manage campaigns alongside your team',
      color: 'from-accent-500 to-brand-500',
      textColor: 'text-accent-600',
      bgLight: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      duration: 'Months 1–6',
      points: [
        'Run live campaigns end-to-end using the platform',
        'Weekly check-ins to review analytics and optimise',
        'Train a member of your team to shadow every step',
        'Build SOPs for creator sourcing, briefing, and payment',
        'Iterate the playbook based on what works for your brand',
      ],
      outcome: 'Your team learns by doing. Your brand builds a real creator network. ROI compounds.',
    },
    {
      number: '03',
      name: 'Hand off',
      tagline: 'You own the process. We step back.',
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-700',
      bgLight: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      duration: 'Month 7+',
      points: [
        'Your team member runs campaigns independently',
        'Documented playbooks stay in your Trendly workspace',
        'Continue on a SaaS plan at a fraction of the managed cost',
        'Optional async support from the Trendly team',
        'No dependency on us — you graduate on your own timeline',
      ],
      outcome: 'Influencer marketing becomes an in-house capability, not an ongoing expense.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* ── Stripped-down header ── */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />
          <a href={LINKS.BOOK_DEMO} className="btn-primary">
            Talk to the founder
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
                The Trendly Pilot Programme
              </span>

              <h1
                className="h-display mt-5 text-5xl leading-[1.08] sm:text-6xl lg:text-7xl animate-fade-up"
                style={{ animationDelay: '80ms' }}
              >
                We set it up.{' '}
                <span className="text-gradient-animated">We run it with you.</span>{' '}
                Then you own it.
              </h1>

              <p
                className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl animate-fade-up"
                style={{ animationDelay: '160ms' }}
              >
                Most brands outsource influencer marketing forever and never build real capability.
                Trendly's Pilot Programme is different: we build the workflow alongside you, run it together
                for 6–8 months, and hand the entire process to your team when you're ready.
              </p>

              {/* 3-phase visual summary */}
              <div
                className="mt-10 flex items-center justify-center gap-0 animate-fade-up"
                style={{ animationDelay: '220ms' }}
              >
                {['Set up', 'Run together', 'Hand off'].map((phase, i) => (
                  <div key={phase} className="flex items-center">
                    <div className={`flex flex-col items-center rounded-2xl px-5 py-3 ${i === 1 ? 'bg-gradient-brand text-white shadow-glow' : 'border border-slate-200 bg-white text-slate-700'}`}>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Phase {i + 1}</span>
                      <span className={`mt-0.5 font-display text-sm font-bold ${i === 1 ? 'text-white' : 'text-slate-900'}`}>{phase}</span>
                    </div>
                    {i < 2 && (
                      <svg className="mx-1 h-5 w-5 shrink-0 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
                    )}
                  </div>
                ))}
              </div>

              <div
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center animate-fade-up"
                style={{ animationDelay: '280ms' }}
              >
                <a href={LINKS.BOOK_DEMO} className="btn-primary text-base px-8 py-4">
                  Book a 30-min call
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a href="/contact" className="btn-ghost text-base px-8 py-4">
                  Send us a message
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-400">Limited pilot spots · Designed for Indian D2C brands</p>
            </div>
          </div>
        </section>

        {/* ══ WHO IT'S FOR ════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow">Who this is for</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                The Pilot is built for founders who want to{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">learn, not just outsource</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: '🏗️',
                  title: "You're building from zero",
                  body: "You've never run an influencer campaign and don't know where to start. We do — and we'll build the foundation with you.",
                },
                {
                  icon: '💸',
                  title: "You want ROI, not retainers",
                  body: "You've been burned by agencies that bill monthly but can't show what moved the needle. We tie our success to yours.",
                },
                {
                  icon: '🧠',
                  title: "You want it in-house eventually",
                  body: "You have someone on your team who could own this channel — they just need the playbook and the platform to do it.",
                },
                {
                  icon: '⚡',
                  title: 'You need to move fast',
                  body: "You can't spend 3 months in strategy meetings. The Pilot gets you to first campaign in weeks, not quarters.",
                },
                {
                  icon: '📊',
                  title: 'You want full visibility',
                  body: 'You want to see which creators are posting, what the content looks like, and what results they drove — all in one place.',
                },
                {
                  icon: '🇮🇳',
                  title: 'You sell in India',
                  body: "Our entire creator database is India-first. We understand Indian D2C, Indian consumers, and Indian micro-creators.",
                },
              ].map((card) => (
                <div key={card.title} className="glass-card">
                  <div className="text-3xl">{card.icon}</div>
                  <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ THE 3 PHASES ════════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow">The programme</span>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Three phases.{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">One clear outcome.</span>
              </h2>
              <p className="mt-4 text-slate-600">
                You'll have a trained team member, a documented playbook, and an active creator network —
                all on a platform you continue to use independently.
              </p>
            </div>

            <div className="mt-14 space-y-8">
              {phases.map((phase, idx) => (
                <div
                  key={phase.number}
                  className={`relative overflow-hidden rounded-3xl border ${phase.borderColor} bg-white shadow-soft`}
                >
                  {/* Phase header */}
                  <div className={`${phase.bgLight} px-8 py-6 sm:flex sm:items-start sm:justify-between`}>
                    <div className="flex items-start gap-5">
                      {/* Phase number bubble */}
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${phase.color} text-white`}>
                        <span className="font-display text-xl font-extrabold">{idx + 1}</span>
                      </div>
                      <div>
                        <div className={`text-xs font-bold uppercase tracking-widest ${phase.textColor}`}>
                          Phase {phase.number} · {phase.duration}
                        </div>
                        <h3 className="mt-1 font-display text-2xl font-extrabold text-slate-900">{phase.name}</h3>
                        <p className="mt-1 text-base text-slate-600">{phase.tagline}</p>
                      </div>
                    </div>
                    {/* Duration badge */}
                    <span className={`mt-4 inline-block shrink-0 rounded-full ${phase.bgLight} border ${phase.borderColor} px-4 py-1.5 text-xs font-bold ${phase.textColor} sm:mt-0`}>
                      {phase.duration}
                    </span>
                  </div>

                  {/* Phase body */}
                  <div className="grid gap-6 px-8 py-8 sm:grid-cols-2">
                    <ul className="space-y-3">
                      {phase.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                          <svg className={`mt-0.5 h-5 w-5 shrink-0 ${phase.textColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className={`flex flex-col justify-center rounded-2xl ${phase.bgLight} border ${phase.borderColor} p-6`}>
                      <div className={`text-xs font-bold uppercase tracking-widest ${phase.textColor}`}>Outcome</div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{phase.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHAT YOU'RE LEFT WITH ═══════════════════════════════════════ */}
        <section className="bg-ink-900 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-eyebrow text-accent-400">What you walk away with</span>
              <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
                Not a dependency.{' '}
                <span className="text-gradient-animated">A capability.</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: '📋', title: 'A documented playbook', desc: 'Step-by-step SOPs for every part of the process — sourcing, briefing, approving, paying.' },
                { icon: '👤', title: 'A trained team member', desc: 'Someone on your team who can run influencer campaigns independently, without relying on us.' },
                { icon: '🔗', title: 'An active creator network', desc: '20–50 vetted creators who know your brand and are ready to work with you again.' },
                { icon: '🛠️', title: 'Your Trendly workspace', desc: 'Filters, shortlists, campaign history, and analytics — all ready on your own SaaS plan.' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-3 font-display text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
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
              "I always wanted influencer marketing in-house but had no idea how to build it.
              By month 6 of the Pilot, my marketing manager was running campaigns on her own.
              That felt like a genuine win."
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-violet-400 to-purple-500" />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Karan Mehta</div>
                <div className="text-sm text-slate-500">Founder, Sleepyhead (D2C Wellness)</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ MINI ════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="h-display text-center text-3xl sm:text-4xl">Common questions</h2>
            <div className="mt-10 space-y-5">
              {[
                {
                  q: 'How is this different from just hiring your agency?',
                  a: 'A typical agency manages campaigns for you indefinitely — you stay dependent, and the cost never drops. The Pilot is designed to end: we build your capability, hand it over, and step back. You continue on a low-cost SaaS plan.',
                },
                {
                  q: 'What happens if we want to keep working with Trendly after the hand-off?',
                  a: "That's absolutely fine. Many brands continue with occasional support or a reduced managed-service arrangement. But the goal — and the design — is that you don't need to.",
                },
                {
                  q: 'How much does the Pilot Programme cost?',
                  a: "Pricing is customised based on your campaign volume and team size. Book a call and we'll give you a clear number upfront — no vague retainer structures.",
                },
                {
                  q: 'How long does it take before we see results?',
                  a: 'Most brands have their first creator posts live within 2–3 weeks of starting Phase 1. The 6–8 month timeline is for full capability transfer, not for seeing initial results.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <h3 className="font-display font-bold text-slate-900">{q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═══════════════════════════════════════════════════ */}
        <section className="bg-gradient-brand py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Stop outsourcing forever. Start building.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              The Pilot Programme is designed for founders ready to make influencer marketing a real,
              in-house capability. If that's you, let's talk.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={LINKS.BOOK_DEMO}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-soft transition hover:-translate-y-0.5"
              >
                Book a 30-min call with Rahul
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Send us a message
              </a>
            </div>
            <p className="mt-5 text-sm text-white/60">Limited spots · India-first · Talk to the founder, not a sales team</p>
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
