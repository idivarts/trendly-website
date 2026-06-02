import { LINKS } from '@/lib/site-config';

/**
 * Soft product cross-sell band shown on each tool page: "Do this automatically
 * for every post in Trendly."
 */
export default function ToolCrossSell({
  headline,
  body,
}: {
  headline: string;
  body: string;
}) {
  return (
    <section className="py-12">
      <div className="container-px">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-brand-50/60 p-8 text-center">
          <span className="section-eyebrow">Do this on autopilot</span>
          <h2 className="h-display mt-3 text-2xl sm:text-3xl">{headline}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600">{body}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={LINKS.BRAND_SIGNUP} className="btn-primary">
              Start free in Trendly
            </a>
            <a href={LINKS.BOOK_DEMO} className="btn-ghost">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
