import PageShell, { PageHero } from '@/components/PageShell';
import { LINKS } from '@/lib/site-config';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'The Trendly Pilot Programme — We Run It, You Own It',
  description:
    'A hands-on 8-month engagement where Trendly sets up your entire influencer-marketing engine, runs it alongside your team, and hands it over — no retainer, no lock-in.',
};

const phases = [
  {
    label: 'Set up',
    duration: 'Month 1',
    title: 'We wire your engine from day one',
    bullets: [
      'Brand positioning workshop and creator persona mapping',
      'Campaign templates configured for your category and tone',
      'Shortlist of 30–50 matched creators, vetted by our team',
      'Contract, brief, and approval workflows set up on Trendly',
      'Reporting dashboards with the KPIs that matter to your stage',
    ],
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
    title: 'We execute. Your team learns every step.',
    bullets: [
      'End-to-end campaign execution by Trendly every month',
      'A designated team member from your side shadows all ops',
      'Weekly calls — strategy, performance review, next-sprint brief',
      'Creator outreach, negotiation, and content review handled by us',
      'Monthly playbook updates capturing every decision and why',
    ],
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
    title: 'We document, transfer, and step out',
    bullets: [
      'Complete playbook handover — SOP, creator relationships, contracts',
      'Live handover sessions with your designated team member',
      'Trendly platform subscription continues under your control',
      'Optional 90-day async support window post-handover',
      'No retainer. No lock-in. You own the process forever.',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
        <path d="M3 19v-2a4 4 0 0 1 4-4" />
      </svg>
    ),
  },
];

const forWho = [
  {
    fit: true,
    title: 'Early-stage D2C founders',
    desc: "You've proven product-market fit, have a small team, and want to own influencer marketing in-house — not pay an agency forever.",
    icon: '🚀',
  },
  {
    fit: true,
    title: 'Growth marketers at Indian SMBs',
    desc: "You're running scrappy campaigns already, but there's no system, no documentation, no repeatability. You want a process, not just results.",
    icon: '📈',
  },
  {
    fit: true,
    title: 'First-time brand managers',
    desc: "Influencer marketing is new territory. You want an expert to hold your hand, teach you the playbook, and let you run it yourself.",
    icon: '🎯',
  },
  {
    fit: false,
    title: 'Brands that want hands-off forever',
    desc: "If you'd rather delegate everything and never learn the process, our SaaS plans + creator network are a better fit than the Pilot.",
    icon: '🙅',
  },
];

const deliverables = [
  { icon: '📋', title: 'Creator Playbook', desc: '30–50 vetted creators with contact details, rate cards, past performance, and content preferences — yours to keep.' },
  { icon: '⚙️', title: 'Campaign SOPs', desc: 'Step-by-step operating procedures for briefing, negotiation, content review, and approval. Reusable, forever.' },
  { icon: '📊', title: 'Reporting Dashboard', desc: 'A configured live dashboard tracking reach, engagement, conversions, and cost-per-result for every campaign you run.' },
  { icon: '🤝', title: 'Creator Relationships', desc: 'Every creator relationship built during the pilot is transferred — including direct contacts and negotiated rate agreements.' },
  { icon: '🗓️', title: 'Campaign Calendar', desc: 'A 12-month influencer calendar template built around your product launches, festive seasons, and growth sprints.' },
  { icon: '🧠', title: 'Strategy Document', desc: 'A written influencer strategy tailored to your brand — audience segments, content pillars, and KPI benchmarks.' },
];

const timeline = [
  { month: 'Week 1–2', label: 'Kickoff', desc: 'Brand deep-dive, goal alignment, and creator persona workshop with your team.' },
  { month: 'Week 3–4', label: 'Setup', desc: 'Platform configuration, first creator shortlist, templates, and dashboard go live.' },
  { month: 'Month 2', label: 'First campaign', desc: 'Your first full campaign — briefing through content delivery — run by Trendly, observed by your team.' },
  { month: 'Months 3–5', label: 'Scale', desc: '2–3 campaigns per month. Playbook refined. Your team takes on more decision-making each sprint.' },
  { month: 'Months 6–7', label: 'Transition', desc: 'Your team leads. Trendly reviews. The training wheels come off gradually, not abruptly.' },
  { month: 'Month 8', label: 'Handover', desc: 'Full documentation, final handover sessions, and Trendly steps out. You own it.' },
];

const compare = [
  { feature: 'Engagement model', agency: 'Open-ended retainer', trendly: '8-month structured pilot, then handover' },
  { feature: 'Monthly cost', agency: '₹50k–₹2L+', trendly: 'Custom monthly subscription' },
  { feature: 'Knowledge transfer', agency: 'Stays with the agency', trendly: 'Documented and fully handed over' },
  { feature: 'Creator relationships', agency: 'Agency owns them', trendly: 'You own them after month 8' },
  { feature: 'Vendor lock-in', agency: 'High — process is opaque', trendly: 'None — you own the playbook' },
  { feature: 'End state', agency: 'You keep paying. Forever.', trendly: 'You run it independently.' },
];

const faqs = [
  {
    q: 'How is the Pilot different from just subscribing to Trendly?',
    a: 'A standard Trendly subscription gives you a powerful platform — creator discovery, campaign management, analytics. The Pilot adds a human layer: our team runs your campaigns end-to-end for 8 months while a designated person on your side learns the ropes. You get the system AND the knowledge to run it yourself.',
  },
  {
    q: 'What does "custom monthly subscription" mean for pricing?',
    a: 'The Pilot is scoped based on your campaign volume, team size, and goals. We talk to you first, understand your situation, and give you a fixed monthly number — no surprise invoices. Book a 30-minute call with Rahul to get a scoped proposal.',
  },
  {
    q: 'Do I need a Trendly plan already to join the Pilot?',
    a: "No. The Pilot is its own engagement that includes platform access. If you're already on a Trendly plan, we'll upgrade you; if you're new, the Pilot is your entry point.",
  },
  {
    q: 'What if my team member who shadows you leaves mid-pilot?',
    a: 'We factor this in. The playbook is the fallback — all decisions, processes, and creator relationships are documented continuously, so institutional knowledge never walks out the door with one person.',
  },
  {
    q: 'Can we run the Pilot in a language other than English?',
    a: 'Yes. Our creator network and team work across Hindi, Tamil, Telugu, Kannada, Marathi, and Bengali. Campaigns can be run in the language that fits your audience.',
  },
  {
    q: 'What happens after the 8 months?',
    a: "You're on your own — in the best way. You'll have the playbook, the creator relationships, the Trendly platform, and 6+ months of hands-on experience. Most of our Pilot alumni stay on a standard Trendly plan to keep using the platform.",
  },
];

export default function PilotPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Trendly Pilot"
        title="We run it. You own it."
        highlight="You own it."
        subtitle="An 8-month hands-on engagement where we set up your entire influencer-marketing engine, run it alongside your team, and hand over every piece — playbook, creator relationships, workflows — so you never need an agency again."
      />

      {/* ── Phase cards ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50/70 py-20">
        <div className="container-px">
          <div className="mb-10 flex items-center gap-3">
            <span className="section-eyebrow">Three phases · Eight months</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="space-y-8">
            {phases.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-brand-200 hover:shadow-glow lg:p-10">
                  {/* Phase number watermark */}
                  <div className="pointer-events-none absolute right-8 top-6 text-8xl font-black text-slate-50 select-none">
                    0{i + 1}
                  </div>
                  <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
                    {/* Left: label + icon */}
                    <div className="flex-none lg:w-56">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                          <div className="h-5 w-5">{p.icon}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                            Phase {String(i + 1).padStart(2, '0')} · {p.duration}
                          </div>
                          <div className="text-xl font-extrabold text-slate-900">{p.label}</div>
                        </div>
                      </div>
                    </div>
                    {/* Right: title + bullets */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                      <ul className="mt-4 space-y-2">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-emerald-100 text-emerald-700">
                              <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12l5 5L20 7" />
                              </svg>
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Connector arrow between phases */}
                  {i < phases.length - 1 && (
                    <div className="mt-8 flex justify-center lg:hidden">
                      <svg className="h-6 w-6 rotate-90 text-brand-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ─────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Is this right for you?</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              The Pilot is for brands that want to{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">own the game</span>
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {forWho.map((item, i) => (
              <ScrollReveal key={item.title} direction="scale" delay={i * 80}>
                <div className={`h-full rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${item.fit ? 'border-emerald-200 bg-white hover:shadow-soft' : 'border-slate-200 bg-white/60 opacity-75'}`}>
                  <div className="text-3xl">{item.icon}</div>
                  <div className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.fit ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    {item.fit ? (
                      <>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                        Good fit
                      </>
                    ) : (
                      <>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 18 18 6M6 6l12 12" /></svg>
                        Not the best fit
                      </>
                    )}
                  </div>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you walk away with ─────────────────────────────────────── */}
      <section className="bg-slate-50/70 py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Deliverables</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              What you walk away with{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">at month 8</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Not just a track record of campaigns — a complete, repeatable system that any hire can step into.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <ScrollReveal key={d.title} direction="scale" delay={i * 70}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-glow">
                  <div className="text-3xl">{d.icon}</div>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────────── */}
      <section className="bg-ink-900 py-24 text-slate-300">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="pill">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
              Month by month
            </span>
            <h2 className="h-display mt-5 text-4xl text-white sm:text-5xl">
              Eight months.{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">A lifetime of capability.</span>
            </h2>
          </ScrollReveal>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600/60 via-accent-500/40 to-transparent lg:left-1/2" />

            <div className="space-y-10">
              {timeline.map((t, i) => (
                <ScrollReveal key={t.month} delay={i * 90}>
                  <div className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content block */}
                    <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-500/30 hover:bg-white/8">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">{t.month}</div>
                        <div className="mt-1 text-lg font-bold text-white">{t.label}</div>
                        <p className="mt-1.5 text-sm text-slate-400">{t.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-5 top-5 z-10 -translate-x-1/2 lg:left-1/2">
                      <div className="h-4 w-4 rounded-full border-2 border-brand-400 bg-ink-900 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Why not just hire an agency?</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              The industry default is{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">to keep you dependent</span>
            </h2>
            <p className="mt-4 text-slate-600">
              We're built differently. Here's what separates the Trendly Pilot from a standard agency retainer.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft" delay={150}>
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
              <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Criteria</div>
              <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Typical agency</div>
              <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-700">Trendly Pilot</div>
            </div>
            {compare.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 transition-colors duration-150 hover:bg-brand-50/30 ${i !== compare.length - 1 ? 'border-b border-slate-100' : ''}`}
              >
                <div className="px-6 py-4 text-sm font-semibold text-slate-800">{row.feature}</div>
                <div className="flex items-start gap-2 px-6 py-4 text-sm text-slate-500">
                  <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-rose-100 text-rose-600">
                    <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 18 18 6M6 6l12 12" /></svg>
                  </span>
                  {row.agency}
                </div>
                <div className="flex items-start gap-2 px-6 py-4 text-sm font-medium text-slate-800">
                  <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  {row.trendly}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50/60 py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Questions</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">Everything you want to know</h2>
          </ScrollReveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <details className="group rounded-2xl border border-slate-200 bg-white transition-all duration-200 open:border-brand-200 open:shadow-soft">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="flex-none text-slate-400 transition-transform duration-200 group-open:rotate-45">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-0 text-sm leading-relaxed text-slate-600">{faq.a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder CTA ─────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-px">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center text-white shadow-glow lg:p-16">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />

              <div className="relative">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  Limited spots available
                </div>
                <h2 className="h-display mx-auto mt-6 max-w-2xl text-3xl text-white sm:text-4xl lg:text-5xl">
                  Ready to own your influencer marketing?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base text-blue-100">
                  Tell us about your brand in a 30-minute call with Rahul, our founder. We'll scope the Pilot for your specific stage and budget — no commitment needed.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={LINKS.BOOK_DEMO}
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Book a 30-min call with Rahul
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Send us a message
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
