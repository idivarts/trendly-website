import PageShell, { PageHero } from '@/components/PageShell';
import CTA from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { COMPARISONS, LINKS, PROOF } from '@/lib/site-config';

export type CompareRow = {
  capability: string;
  trendly: boolean | string;
  them: boolean | string;
};

export type CompareFaq = { q: string; a: string };

export type ComparePageProps = {
  competitor: string;
  slug: string;
  tagline: string;
  rows: CompareRow[];
  whereTheyWin: string[];
  whereTrendlyWins: string[];
  faqs: CompareFaq[];
};

/** Check / cross / text cell — mirrors the WhySwitch.tsx style. */
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

export default function ComparePage({
  competitor,
  slug,
  tagline,
  rows,
  whereTheyWin,
  whereTrendlyWins,
  faqs,
}: ComparePageProps) {
  const related = COMPARISONS.filter((c) => c.slug !== slug);

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Compare', path: '/compare/trendly-vs-buffer' },
    { name: `Trendly vs ${competitor}`, path: `/compare/${slug}` },
  ]);

  return (
    <PageShell>
      <JsonLd data={[breadcrumb, faqSchema(faqs)]} />

      <PageHero
        eyebrow={`Trendly vs ${competitor}`}
        title={`The ${competitor} alternative built for founders & small teams`}
        highlight={`${competitor} alternative`}
        subtitle={tagline}
      />

      {/* Primary CTA */}
      <section className="container-px -mt-4">
        <ScrollReveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <a href={LINKS.BRAND_SIGNUP} className="btn-primary">
            Start for free
          </a>
          <p className="mt-3 text-xs font-medium text-slate-500">{PROOF.riskReversal}</p>
        </ScrollReveal>
      </section>

      {/* Comparison table */}
      <section className="relative py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Side by side</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Trendly vs{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">{competitor}</span>
            </h2>
            <p className="mt-4 text-slate-600">
              An honest, capability-by-capability look. Where {competitor} is genuinely stronger,
              we say so.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mx-auto mt-12 max-w-3xl" direction="scale" distance={20}>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:px-8">
                <span>Capability</span>
                <span className="w-20 text-center text-brand-700">Trendly</span>
                <span className="w-24 text-center sm:w-28">{competitor}</span>
              </div>
              {rows.map((r) => (
                <div
                  key={r.capability}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-slate-50 px-5 py-3.5 last:border-0 hover:bg-brand-50/30 sm:px-8"
                >
                  <span className="text-sm font-medium text-slate-800">{r.capability}</span>
                  <span className="flex w-20 justify-center">
                    <Cell value={r.trendly} />
                  </span>
                  <span className="flex w-24 justify-center sm:w-28">
                    <Cell value={r.them} />
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where each tool wins */}
      <section className="relative pb-20">
        <div className="container-px">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
                <span className="section-eyebrow">Where Trendly is different</span>
                <h3 className="h-display mt-3 text-2xl">Built to decide, not just publish</h3>
                <ul className="mt-6 space-y-4">
                  {whereTrendlyWins.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
                <span className="section-eyebrow">Where {competitor} is strong</span>
                <h3 className="h-display mt-3 text-2xl">Credit where it&apos;s due</h3>
                <ul className="mt-6 space-y-4">
                  {whereTheyWin.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative pb-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Common questions</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Trendly vs {competitor}, answered</h2>
          </ScrollReveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <ScrollReveal key={f.q}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                  <h3 className="text-base font-bold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-slate-400">
            Last reviewed: June 2026 — competitor capabilities and pricing change often. Check each
            tool&apos;s own site for current details before deciding.
          </p>
        </div>
      </section>

      {/* Related comparisons */}
      <section className="relative pb-8">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Keep comparing</span>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {related.map((c) => (
                <a
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  Trendly vs {c.competitor}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
