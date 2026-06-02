import ScrollReveal from '@/components/ScrollReveal';
import { COMPARISONS } from '@/lib/site-config';

// Honest, side-by-side framing of the category. "Schedulers" = Buffer/Later/
// Hootsuite/SocialPilot as a group. Links down to the per-competitor pages.
const rows = [
  { capability: 'AI builds your content strategy', trendly: true, schedulers: false },
  { capability: 'Visual calendar + team approvals', trendly: true, schedulers: true },
  { capability: 'AI captions, hooks & briefs per post', trendly: true, schedulers: 'Basic' },
  { capability: 'Find & activate creators in-app', trendly: true, schedulers: false },
  { capability: 'Built for founders & small teams', trendly: true, schedulers: 'Mixed' },
  { capability: 'Free forever plan', trendly: true, schedulers: 'Limited' },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-700">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
    );
  if (value === false)
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-400">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </span>
    );
  return <span className="text-xs font-semibold text-slate-500">{value}</span>;
}

export default function WhySwitch() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why teams switch</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            More than a <span className="bg-gradient-brand bg-clip-text text-transparent">scheduler</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Buffer, Later, Hootsuite and SocialPilot help you publish. Trendly helps you decide <em>what</em> to publish, get it approved, and amplify it with creators — all in one place.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 max-w-3xl" direction="scale" distance={20}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
            <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:px-8">
              <span>Capability</span>
              <span className="w-20 text-center text-brand-700">Trendly</span>
              <span className="w-24 text-center sm:w-28">Schedulers</span>
            </div>
            {rows.map((r) => (
              <div key={r.capability} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-slate-50 px-5 py-3.5 last:border-0 hover:bg-brand-50/30 sm:px-8">
                <span className="text-sm font-medium text-slate-800">{r.capability}</span>
                <span className="flex w-20 justify-center"><Cell value={r.trendly} /></span>
                <span className="flex w-24 justify-center sm:w-28"><Cell value={r.schedulers} /></span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8 flex flex-wrap items-center justify-center gap-3" delay={200}>
          {COMPARISONS.map((c) => (
            <a
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
            >
              Trendly vs {c.competitor}
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
