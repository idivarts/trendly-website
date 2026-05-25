import ScrollReveal from '@/components/ScrollReveal';
import { LINKS } from '@/lib/site-config';

const reasons = [
  {
    title: 'One workspace for everything',
    desc: 'Strategy, calendar, content drafts, and creator campaigns — no more Notion + Later + spreadsheets + agency emails. One login.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'AI that thinks strategically',
    desc: "Not just caption generation. Trendly's AI understands your brand pillars and keeps every post, brief, and campaign aligned to your strategy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
      </svg>
    ),
  },
  {
    title: 'Built for collaboration',
    desc: 'Assign posts to teammates, set review deadlines, leave threaded comments, and gate publishing behind approval. No Slack threads needed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="11" r="3" />
        <path d="M2 21c0-4 3.1-7 7-7 2 0 3.8.8 5.1 2.1" />
        <path d="M21 21c0-2.8-1.8-5-4-5" />
      </svg>
    ),
  },
  {
    title: 'Creators on demand',
    desc: 'Your owned content and creator campaigns live in the same calendar. When organic reach isn\'t enough, activate micro-influencers with a single click.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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
              Stop switching tabs.{' '}
              <span className="text-gradient-animated">Start doing better marketing.</span>
            </h2>
            <p className="mt-5 text-slate-600">
              The average social media manager uses 4–6 tools to do their job. Trendly collapses all of them into a single, AI-first workspace purpose-built for modern marketing teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="btn-primary">See pricing</a>
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a demo</a>
            </div>
          </ScrollReveal>

          {/* Right grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} direction="scale" delay={i * 100} distance={20}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow h-full">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />
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
