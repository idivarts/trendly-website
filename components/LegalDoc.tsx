type Section = { heading: string; body: (string | string[])[] };

export default function LegalDoc({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <div className="container-px py-16">
      <div className="mx-auto max-w-3xl">
        <span className="section-eyebrow">Legal</span>
        <h1 className="h-display mt-3 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p>
        <p className="mt-8 text-base leading-relaxed text-slate-600">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="h-display text-xl text-slate-900">
                {String(i + 1).padStart(2, '0')}. {s.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                {s.body.map((b, j) =>
                  Array.isArray(b) ? (
                    <ul key={j} className="ml-5 list-disc space-y-1">
                      {b.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{b}</p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          Questions about this document? Email us at{' '}
          <a href="mailto:support@idiv.in" className="font-semibold text-brand-700 hover:underline">
            support@idiv.in
          </a>
          .
        </div>
      </div>
    </div>
  );
}
