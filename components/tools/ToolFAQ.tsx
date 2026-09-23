import ScrollReveal from '@/components/ScrollReveal';

/**
 * Renders a tool page's FAQ section. Pass the SAME array used to build the
 * faqSchema() JSON-LD so the visible content and structured data stay in sync.
 */
export default function ToolFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="py-16">
      <div className="container-px">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Common questions</h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 60}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
