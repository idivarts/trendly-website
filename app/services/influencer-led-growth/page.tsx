import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Influencer Marketing Agency for Startups | Done-For-You Creator Campaigns — Trendly',
  description:
    'A done-for-you influencer marketing agency for startups. We source, vet, brief and run creator campaigns end-to-end using our 10,000+ creator network — from outreach and contracts to deliverables and reporting.',
};

const included = [
  {
    t: 'Sourcing & vetting',
    d: 'We research and shortlist micro-creators from our network that match your niche, audience, and goals — then vet engagement so you only work with real, relevant creators.',
  },
  {
    t: 'Outreach & negotiation',
    d: 'We handle the back-and-forth: reaching out, negotiating rates, and locking in fair deals so you don\'t spend days in creator DMs.',
  },
  {
    t: 'Contracts & briefs',
    d: 'Every collaboration gets a clear contract and an on-brand brief, so creators know exactly what to make and you\'re protected on deliverables.',
  },
  {
    t: 'Deliverable management',
    d: 'We chase drafts, manage revisions, and review every deliverable against the brief — so content ships on time and on message.',
  },
  {
    t: 'Payments handled',
    d: 'Creators are paid through the platform after content is approved, which protects both sides and keeps your finances clean.',
  },
  {
    t: 'Reporting',
    d: 'A clear report on what ran, what landed, and what we\'d do next — so each campaign informs the one after it.',
  },
];

const how = [
  { n: '01', t: 'Scope the campaign', d: 'We align on your product, audience, budget, and goal, then scope the campaign and send a transparent, line-by-line quote.' },
  { n: '02', t: 'Source & brief', d: 'We shortlist and vet creators from the network, handle outreach and contracts, and write briefs matched to your brand.' },
  { n: '03', t: 'Run & manage', d: 'We manage every deliverable, revision, and approval inside your Trendly workspace, so nothing slips and you see it all.' },
  { n: '04', t: 'Report & iterate', d: 'You get a clear report on the campaign — and we use it to make the next round sharper.' },
];

const faqs = [
  {
    q: 'How is this different from doing creator campaigns myself?',
    a: 'You can run creator campaigns yourself inside Trendly — but sourcing, vetting, outreach, contracts, and deliverable chasing take real time. With this service, our team does all of it end-to-end and you stay in approvals only. It runs inside your Trendly workspace, so you keep full visibility either way.',
  },
  {
    q: 'How big is the creator network?',
    a: `${PROOF.creatorsLabel}. We focus on micro-creators — typically under 100k followers — because that tier tends to drive stronger engagement per follower and feels native to your audience. We source and vet from that network to fit your specific niche and goals.`,
  },
  {
    q: 'What does it cost to run a campaign?',
    a: `It depends on the scope, the number of creators, and the deliverables. That's why we scope your campaign and send a clear, line-by-line quote up front rather than a fixed package price. You approve it and pay from the app. ${PROOF.riskReversal}.`,
  },
  {
    q: 'How do creators get paid?',
    a: 'Creator payments are handled through the platform and released after content is approved and live. That protects both sides — you don\'t pay upfront for content that never ships, and creators are guaranteed payment for approved work.',
  },
];

export default function InfluencerLedGrowthPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Influencer-led growth', path: '/services/influencer-led-growth' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Influencer-led growth"
        title="An influencer marketing agency for startups — without the agency"
        highlight="influencer marketing agency for startups"
        subtitle="We source, vet, brief and run creator campaigns end-to-end using our 10,000+ creator network — so you get the results of an influencer marketing team without building one."
      />

      {/* CTAs under hero */}
      <section className="-mt-6 pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#quote" className="btn-primary">Get a quote</a>
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a call</a>
            </div>
            <p className="text-xs text-slate-500">{PROOF.creatorsLabel}</p>
          </div>
        </div>
      </section>

      {/* ── Intro / context ── */}
      <section className="py-16">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Done for you</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Creator campaigns are a job.{' '}
              <span className="text-gradient-animated">Let us do it.</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Finding the right creators, vetting their engagement, negotiating, briefing, chasing
              deliverables, and reporting is a full-time role. We run the whole thing for you — using a
              real creator network and the software to manage it — so creator marketing actually happens
              while you build the company.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">What's included</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              End-to-end, handled by our team
            </h2>
            <p className="mt-4 text-slate-600">
              Everything it takes to run creator campaigns well — from the first shortlist to the final report.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 70}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />
                  <h3 className="text-base font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">How it works</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              From brief to{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">results</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A simple, transparent path — and you stay in the loop at every step inside your Trendly workspace.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {how.map((s, i) => (
              <ScrollReveal key={s.n} direction="up" delay={i * 70} distance={28}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <span className="text-gradient-animated text-3xl font-extrabold">{s.n}</span>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{s.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal direction="scale" distance={24}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-ink-900 p-8 text-white sm:p-12">
              <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
              <div className="relative">
                <div className="mx-auto max-w-2xl text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    Why us
                  </span>
                  <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl">
                    The real network — plus the software to run it
                  </h2>
                  <p className="mt-4 text-slate-400">
                    {PROOF.brandsLabel}, with {PROOF.creators} creators in the network. We don't just send a
                    list of names — we run campaigns inside the same Trendly workspace you use, so sourcing,
                    briefs, deliverables, and payments all live in one place you can see.
                  </p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { v: PROOF.creators, l: 'Creators in the network' },
                    { v: PROOF.brands, l: 'Of brand campaigns run' },
                    { v: 'In-app', l: 'Managed in your workspace' },
                  ].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 text-center">
                      <div className="text-2xl font-extrabold text-white">{s.v}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-400">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-3xl">
          <ScrollReveal className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Influencer growth questions</h2>
          </ScrollReveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} direction="up" delay={i * 50} distance={20}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inline quote form ── */}
      <QuoteForm defaultService="Influencer-led growth" heading="Get a free influencer campaign quote" />

      {/* ── Internal links ── */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: '/product/creators', t: 'Run creator campaigns yourself', d: 'Prefer self-serve? Find and manage micro-influencers inside Trendly.' },
              { href: '/services', t: 'All done-for-you services', d: 'Combine influencer growth with paid ads and performance marketing.' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">{l.t}</h3>
                  <svg className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-slate-600">{l.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
