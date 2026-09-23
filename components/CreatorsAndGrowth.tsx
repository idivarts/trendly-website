import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, PROOF } from '@/lib/site-config';

// Addresses two motions side by side: self-serve creator campaigns (the product)
// and done-for-you influencer-led growth (the service). Leads with the real
// 10,000+ creator network.

const creators = [
  { name: 'Jamie Lee', tag: 'Wellness', f: '41k', g: 'from-pink-400 to-rose-500' },
  { name: 'Marcus Reid', tag: 'Fitness', f: '58k', g: 'from-emerald-400 to-teal-500' },
  { name: 'Priya Nair', tag: 'Beauty', f: '29k', g: 'from-amber-400 to-orange-500' },
  { name: 'Alex Torres', tag: 'Lifestyle', f: '63k', g: 'from-sky-400 to-indigo-500' },
];

export default function CreatorsAndGrowth() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Creators &amp; influencer growth</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Owned content and{' '}
            <span className="text-gradient-animated">creators</span>, on one calendar
          </h2>
          <p className="mt-4 text-slate-600">
            {PROOF.creatorsLabel}. Discover and run creator campaigns yourself inside Trendly — or hand the whole thing to our team. Either way, creator content lives right next to your owned posts.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* Self-serve creator campaigns (#1) */}
          <ScrollReveal direction="left" distance={28}>
            <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
              <span className="pill w-max">Self-serve</span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Discover &amp; run creator campaigns</h3>
              <p className="mt-2 text-sm text-slate-600">
                Search {PROOF.creators} vetted micro-influencers by niche, platform, audience and engagement. Send briefs straight from your calendar, track every deliverable, and pay only after content is approved and live.
              </p>

              {/* creator grid mock */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {creators.map((c) => (
                  <div key={c.name} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3">
                    <div className={`h-12 w-full rounded-xl bg-gradient-to-br ${c.g}`} />
                    <div className="mt-2 text-xs font-semibold text-slate-900">{c.name}</div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{c.tag}</span>
                      <span className="font-semibold text-brand-700">{c.f}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/product/creators" className="btn-primary !py-2.5 !text-sm">Explore creator campaigns</a>
              </div>
            </div>
          </ScrollReveal>

          {/* Done-for-you influencer-led growth (#2) */}
          <ScrollReveal direction="right" distance={28} delay={80}>
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-600 to-brand-700 p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <span className="w-max rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur">
                Done for you
              </span>
              <h3 className="mt-4 text-2xl font-bold">Influencer-led growth, run by our team</h3>
              <p className="mt-2 text-sm text-white/85">
                No time to manage creators? We source, vet, brief, and run end-to-end influencer campaigns for you — using the same {PROOF.creators} creator network — and report results back in your workspace.
              </p>

              <ul className="mt-5 space-y-2.5">
                {['Creator sourcing & vetting', 'Briefs, negotiation & contracts', 'Deliverable management & approvals', 'Monthly performance reporting'].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-white/90">
                    <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-white/15">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 flex flex-wrap gap-3">
                <a
                  href="/services/influencer-led-growth"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5"
                >
                  Explore influencer-led growth
                </a>
                <a href={LINKS.BOOK_DEMO} className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  Talk to us
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
