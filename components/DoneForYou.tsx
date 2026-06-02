import ScrollReveal from '@/components/ScrollReveal';
import { SERVICES } from '@/lib/site-config';

// Teaser for Trendly's done-for-you / agency offering: for founders who want
// marketing run end-to-end, not just self-serve software. Links to /services.

const icons: Record<string, React.ReactNode> = {
  'influencer-led-growth': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="9" cy="7" r="4" /><circle cx="17" cy="11" r="3" />
      <path d="M2 21c0-4 3.1-7 7-7 2 0 3.8.8 5.1 2.1M21 21c0-2.8-1.8-5-4-5" />
    </svg>
  ),
  'paid-ads': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 11l18-5v12L3 13v-2zM3 11v4M8 12.5V19l4 1" />
    </svg>
  ),
  'performance-marketing': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 3v18h18M19 9l-5 5-4-4-3 3" />
    </svg>
  ),
};

export default function DoneForYou() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute -top-40 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-px relative">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Done-for-you services
          </span>
          <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
            Rather have it all{' '}
            <span className="text-gradient-animated">run for you?</span>
          </h2>
          <p className="mt-4 text-slate-400">
            The software is just the start. For founders who&apos;d rather hand it off, our team runs end-to-end marketing with you — from creator campaigns to paid ads and full-funnel performance.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.slug} direction="scale" delay={i * 100} distance={20}>
              <a
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 hover:bg-white/[0.07]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/8 text-brand-300 transition group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-glow">
                  <div className="h-5 w-5">{icons[s.slug]}</div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-300">
                  Learn more
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 flex flex-wrap items-center justify-center gap-3" delay={200}>
          <a href="/services#quote" className="btn-primary">Get a free quote</a>
          <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Explore services
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
