import ScrollReveal from '@/components/ScrollReveal';
import { LINKS } from '@/lib/site-config';

const steps = [
  {
    n: '01',
    title: 'Build your content strategy',
    desc: 'Tell Trendly about your brand. Our AI maps your audience, trends, and competitors to generate a tailored content strategy with pillars and a posting plan.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Plan your content calendar',
    desc: 'Drag posts onto a visual calendar. Assign to teammates, set deadlines, and schedule across Instagram, TikTok, LinkedIn, and X — all from one view.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Create, review & approve',
    desc: "AI drafts captions, scripts, and creative briefs. Your team reviews in context, leaves comments, and approves with one click before anything goes live.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Amplify with the right creators',
    desc: 'Ready to scale? Search 10,000+ verified micro-influencers inside Trendly and launch creator campaigns directly from your content calendar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="container-px">

        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">How it works</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            From blank page to live campaign in{' '}
            <span className="text-gradient-animated">4 steps</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Built for marketing teams who want results without juggling tools.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          {steps.map((s, i) => (
            <ScrollReveal key={s.n} direction="scale" delay={i * 120}>
              <div className="group relative rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow h-full">
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
          <a href={LINKS.BRAND_SIGNUP} className="btn-primary">
            Start for free
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
