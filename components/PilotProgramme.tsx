import ScrollReveal from '@/components/ScrollReveal';

const phases = [
  {
    label: 'Set up',
    duration: 'Month 1',
    title: 'We configure your engine',
    desc: 'Campaign templates, creator shortlists, contract workflows, reporting dashboards — every piece of your influencer marketing process is wired up for your brand from day one, on top of the same Trendly platform.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M12 21v-3M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    label: 'Run together',
    duration: 'Months 2–7',
    title: 'We run it. Your team learns.',
    desc: 'For six to eight months we run campaigns end-to-end while a designated team member from your side shadows every step — outreach, negotiation, content review, reporting cycle.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: 'Hand off',
    duration: 'Month 8',
    title: 'We document, transfer, exit',
    desc: 'Your team member takes the reins. We hand over the playbook, transfer the workflows, and step out — leaving you with a fully in-house influencer marketing function. No retainer, no lock-in, no dependency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
        <path d="M3 19v-2a4 4 0 0 1 4-4" />
      </svg>
    ),
  },
];

const compare = [
  { feature: 'Engagement', agency: 'Open-ended retainer', trendly: '8-month pilot, then handover' },
  { feature: 'Cost', agency: '₹50k–₹2L+ / month', trendly: 'Custom monthly subscription' },
  { feature: 'Knowledge', agency: 'Stays with the partner', trendly: 'Documented and handed over' },
  { feature: 'Vendor lock-in', agency: 'High — process is opaque', trendly: 'None — you own the playbook' },
  { feature: 'End state', agency: 'You keep paying. Forever.', trendly: 'You run it independently.' },
];

export default function PilotProgramme() {
  return (
    <section id="pilot" className="relative overflow-hidden py-24">
      {/* Subtle background treatment to differentiate from neighbouring sections */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50/70 to-white" />
      <div className="absolute -top-32 right-1/2 -z-10 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-brand-200/30 blur-3xl" />

      <div className="container-px">

        {/* Heading */}
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="pill">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
            Beyond the subscription · The Trendly Pilot
          </span>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl">
            Most marketing partners want you forever.{' '}
            <span className="text-gradient-animated">We're built to graduate you.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Most influencer marketing in India runs on long-term retainers — and we get why; running campaigns is hard.
            But we believe the right partner sets you up to run things yourself, then gets out of the way. That's the{' '}
            <strong className="font-semibold text-slate-900">Trendly Pilot</strong> — a hands-on engagement that ends
            with you, not us, in control.
          </p>
        </ScrollReveal>

        {/* Phase cards with connector */}
        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block" />
          {phases.map((p, i) => (
            <ScrollReveal key={p.label} direction="scale" delay={i * 130}>
              <div className="group relative rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow h-full">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <div className="h-5 w-5">{p.icon}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                      Phase {String(i + 1).padStart(2, '0')} · {p.duration}
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900">{p.label}</div>
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>

                {i < phases.length - 1 && (
                  <svg
                    className="absolute -right-3 top-12 hidden h-6 w-6 text-brand-300 lg:block"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison table */}
        <ScrollReveal className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft" delay={200}>
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              How we differ
            </div>
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Most agencies
            </div>
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-700">
              Trendly Pilot
            </div>
          </div>
          {compare.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 transition-colors duration-150 hover:bg-brand-50/30 ${i !== compare.length - 1 ? 'border-b border-slate-100' : ''}`}
            >
              <div className="px-6 py-4 text-sm font-semibold text-slate-800">{row.feature}</div>
              <div className="flex items-center gap-2 px-6 py-4 text-sm text-slate-500">
                <span className="grid h-4 w-4 flex-none place-items-center rounded-full bg-rose-100 text-rose-600">
                  <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </span>
                {row.agency}
              </div>
              <div className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-slate-800">
                <span className="grid h-4 w-4 flex-none place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                {row.trendly}
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* Know more details link */}
        <ScrollReveal className="mt-10 text-center" delay={250}>
          <a
            href="/pilot"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-all duration-200 hover:gap-3 hover:text-brand-600"
          >
            See the full Pilot Programme — phases, deliverables, FAQ
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </ScrollReveal>

        {/* CTA strip */}
        <ScrollReveal className="mt-8" delay={300}>
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 sm:flex-row sm:items-center transition-all duration-300 hover:shadow-glow hover:border-brand-200">
            <div className="max-w-xl">
              <div className="text-sm font-bold uppercase tracking-wider text-brand-700">Want a head start?</div>
              <p className="mt-1 text-base text-slate-700">
                Tell us about your brand. We'll scope a 2-week kickoff, then run alongside your team for 6–8 months.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://cal.com/rahul-idiv/30min" className="btn-primary">
                Talk to founder
              </a>
              <a href="/contact" className="btn-ghost">
                Or message us
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
