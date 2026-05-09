import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    n: '01',
    title: 'Search creators in your niche',
    desc: 'Use our advanced influencer discovery tool — finding the right creators is no longer a hassle.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Invite them to campaigns',
    desc: 'Create a campaign and invite influencers. We reach out to them on your behalf.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 10h18M3 14h18" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Creators post on social',
    desc: "Once a quotation is accepted, the creator produces and publishes content on social media.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Pay only after delivery',
    desc: 'Once the deliverables are confirmed, only then do we release payment to the influencer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 10h18M3 6h18v12H3z" />
        <path d="M7 14h4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="container-px">

        {/* Section header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">How it works</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            From discovery to delivery in{' '}
            <span className="text-gradient-animated">4 simple steps</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Built for startup teams who want results without the agency overhead.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          {steps.map((s, i) => (
            <ScrollReveal
              key={s.n}
              direction="scale"
              delay={i * 120}
            >
              <div className="group relative rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow h-full">
                {/* Subtle hover bloom */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-50/0 to-brand-50/0 transition-all duration-500 group-hover:from-brand-50/60 group-hover:to-accent-400/5" />

                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <div className="h-5 w-5">{s.icon}</div>
                  </div>
                  <span className="text-sm font-bold tracking-wider text-brand-600">{s.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                {i < steps.length - 1 && (
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

        <ScrollReveal className="mt-12 text-center" delay={480}>
          <a href="https://openinapp.link/b5aqc" className="btn-primary">
            Start for free
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
