import ScrollReveal from '@/components/ScrollReveal';

// One-line pricing teaser for the homepage — the full table lives on /pricing.
export default function PricingTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="text-xl font-bold text-slate-900">Free forever. Paid plans from $29/mo.</div>
            <p className="mt-1 text-sm text-slate-600">No credit card to start. Cancel anytime.</p>
          </div>
          <a href="/pricing" className="btn-primary shrink-0">See full pricing</a>
        </ScrollReveal>
      </div>
    </section>
  );
}
