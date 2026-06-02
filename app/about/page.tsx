import PageShell, { PageHero } from '@/components/PageShell';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, organizationSchema, softwareApplicationSchema } from '@/components/JsonLd';
import { PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'About Trendly — The AI Marketing Workspace for Founders',
  description:
    'Built by the team behind 100s of brand campaigns and a 10,000+ creator network, Trendly is the AI marketing workspace for solo founders and small in-house teams.',
};

const values = [
  {
    title: 'Built for the team of one',
    desc: 'Most marketing software assumes a full department. We obsess over the solo founder and the 2–3 person team doing strategy, content, and creators all at once.',
  },
  {
    title: 'Strategy before scheduling',
    desc: "A queue of posts isn't a strategy. Trendly starts upstream — the AI builds your content strategy first, so every post you plan has a reason to exist.",
  },
  {
    title: 'Honesty over hype',
    desc: "We're a brand-new product and we say so. No fake logos, no invented testimonials. We earn trust with what we actually ship and the track record we actually have.",
  },
  {
    title: 'Replace the tool sprawl',
    desc: 'Strategy doc, content calendar, approval threads, creator outreach — that should be one workspace, not six tabs and a spreadsheet held together with hope.',
  },
];

const milestones = [
  { year: 'Track record', label: 'Ran 100s of brand campaigns across our creator-marketing work' },
  { year: 'Network', label: 'Built a network of 10,000+ creators who joined Trendly' },
  { year: 'The insight', label: 'Watched founders and small teams drown in marketing tool-sprawl' },
  { year: 'Today', label: 'Building the AI marketing workspace — early access for the first 100 founders' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          organizationSchema(),
          softwareApplicationSchema(),
        ]}
      />

      <PageHero
        eyebrow="Our story"
        title="We built the marketing workspace we wished we had"
        highlight="marketing workspace"
        subtitle="Trendly is an AI marketing workspace for solo founders and small in-house teams — built by the people behind 100s of brand campaigns and a 10,000+ creator network."
      />

      <section className="py-16">
        <div className="container-px">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">The mission</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                Marketing software built for how small teams actually work
              </h2>
              <p className="mt-4 text-slate-600">
                We come from years of running creator marketing — {PROOF.brandsLabel.toLowerCase()} and a network where{' '}
                {PROOF.creatorsLabel.toLowerCase()}. That work taught us something the scheduling tools missed: the
                hardest part of marketing isn&apos;t hitting publish. It&apos;s knowing what to say, planning it as a
                team, and getting it out the door without ten tabs open.
              </p>
              <p className="mt-4 text-slate-600">
                The founders and small teams we worked with were drowning in tool-sprawl — a strategy doc here, a
                calendar there, approvals lost in chat, creator outreach in a spreadsheet. So we built Trendly: one
                place where AI drafts your content strategy, your team plans and approves a visual calendar, and you
                activate creators — all under one roof.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-accent-400/10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: PROOF.creators, l: 'Creators joined' },
                    { v: PROOF.brands, l: 'Brand campaigns run' },
                    { v: 'AI-first', l: 'Strategy, not just scheduling' },
                    { v: 'US-focused', l: 'Founders & small teams' },
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
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">How we got here</h2>
            <ul className="mt-10 space-y-6 border-l-2 border-brand-100 pl-8">
              {milestones.map((m) => (
                <li key={m.label} className="relative">
                  <span className="absolute -left-[37px] top-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-brand shadow-glow" />
                  <div className="text-sm font-bold text-brand-700">{m.year}</div>
                  <div className="text-base text-slate-800">{m.label}</div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              {PROOF.brandsLabel} · {PROOF.creatorsLabel}. These come from our creator-marketing track record — Trendly
              the workspace is brand new, and we&apos;d rather earn your trust than borrow it.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
