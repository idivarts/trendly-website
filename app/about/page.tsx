import PageShell, { PageHero } from '@/components/PageShell';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'About Trendly — Built for Indian Startups',
  description:
    'Trendly is a micro-influencer discovery platform built by IDIVARTS Solutions for India\'s startup ecosystem. Learn about our mission and team.',
};

const values = [
  {
    title: 'Built for the underdog',
    desc: "We obsess over startup teams who can't afford ₹30,000+ agency retainers. Every feature is designed for budget-conscious founders.",
  },
  {
    title: 'Honesty over hype',
    desc: 'We tell you what works. We tell you what doesn\'t. We compare ourselves with competitors openly because our pricing speaks for itself.',
  },
  {
    title: 'Quality > Quantity',
    desc: 'Our team manually reviews every micro-creator under 100k followers. Better to know 10,000 great creators than 10 million junk ones.',
  },
  {
    title: 'Pay on delivery',
    desc: 'Influencer marketing should never feel like a gamble. We unlock funds only when content goes live and gets approved.',
  },
];

const milestones = [
  { year: '2023', label: 'IDIVARTS Solutions founded' },
  { year: '2024', label: 'Trendly launched in beta' },
  { year: '2024', label: '500+ campaigns delivered' },
  { year: '2025', label: '10,000+ verified creators' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our story"
        title="We make influencer marketing accessible"
        highlight="accessible"
        subtitle="Trendly is built by IDIVARTS Solutions for the Indian startup ecosystem — a platform where founders, growth marketers, and creators meet on equal footing."
      />

      <section className="py-16">
        <div className="container-px">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">The mission</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                Influence, but for the rest of us
              </h2>
              <p className="mt-4 text-slate-600">
                Influencer marketing in India has always been broken at the bottom of the market. Agencies wanted minimum
                spends of ₹30,000+, celebrity influencers were out of reach, and discovering quality micro-creators was
                a manual nightmare of DM outreach and spreadsheet chaos.
              </p>
              <p className="mt-4 text-slate-600">
                We built Trendly because we lived this problem. As a small team trying to grow our own products, we
                kept hitting the same wall — and realized thousands of startups were too. So we built the platform we
                wished we had.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-accent-400/10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: '10k+', l: 'Verified creators' },
                    { v: '500+', l: 'Campaigns run' },
                    { v: '₹750', l: 'Starts from / mo' },
                    { v: '92%', l: 'Trust score avg' },
                  ].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-white/60 bg-white p-5 shadow-soft">
                      <div className="bg-gradient-brand bg-clip-text text-3xl font-extrabold text-transparent">
                        {s.v}
                      </div>
                      <div className="mt-1 text-xs text-slate-600">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">What we believe</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Four values, no compromise</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
              >
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <span className="section-eyebrow">The journey</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">A short timeline</h2>
            <ul className="mt-10 space-y-6 border-l-2 border-brand-100 pl-8">
              {milestones.map((m) => (
                <li key={m.label} className="relative">
                  <span className="absolute -left-[37px] top-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-brand shadow-glow" />
                  <div className="text-sm font-bold text-brand-700">{m.year}</div>
                  <div className="text-base text-slate-800">{m.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
