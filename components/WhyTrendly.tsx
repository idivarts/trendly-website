import ScrollReveal from '@/components/ScrollReveal';
import { LINKS } from '@/lib/site-config';

const reasons = [
  {
    title: 'Built for startups & SMBs',
    desc: 'Micro and mid-tier focus that fits your unique budget and marketing goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 21h18M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Cost-effective & transparent',
    desc: 'Launch authentic campaigns with real influencers without breaking the bank.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Easy to use',
    desc: 'Intuitive platform designed for marketers, not data scientists.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
  {
    title: 'Authentic connections',
    desc: 'No more endless DM searches — find verified creators matched to your niche instantly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 8.7 3.9 8.4 8.4 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z" />
      </svg>
    ),
  },
];

export default function WhyTrendly() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-12">

          {/* Left column */}
          <ScrollReveal className="lg:col-span-5" direction="left" distance={36}>
            <span className="section-eyebrow">Why Trendly</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Why pay{' '}
              <span className="line-through decoration-rose-400 decoration-[3px]">₹30,000+</span>{' '}
              when you can launch with{' '}
              <span className="text-gradient-animated">₹750</span>?
            </h2>
            <p className="mt-5 text-slate-600">
              Trendly is purpose-built for early-stage and growth-stage brands who want authentic results without the
              agency overhead. We obsess over the micro-creator ecosystem so you don't have to.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="btn-primary">See pricing</a>
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Talk to founder</a>
            </div>
          </ScrollReveal>

          {/* Right grid — each card staggers in */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} direction="scale" delay={i * 100} distance={20}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow h-full">
                  {/* Hover bloom */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />
                  {/* Icon */}
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-glow">
                    <div className="h-5 w-5">{r.icon}</div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
