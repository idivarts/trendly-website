import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, softwareApplicationSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Creator Marketing Platform — Find Micro Influencers In-App — Trendly',
  description:
    'Trendly is a creator marketing platform built into your workspace. Find micro influencers by niche, platform, and engagement, send briefs from your calendar, and pay only after content is live.',
};

const faqs = [
  {
    q: 'How do I find micro influencers on Trendly?',
    a: 'Search and filter by niche, platform, audience size, and engagement rate to surface micro influencers that fit your brand. Trendly is built around creators under 100k followers — the segment with the strongest engagement per follower.',
  },
  {
    q: 'Do I need a separate tool to run creator campaigns?',
    a: 'No. Creator discovery, briefs, deliverables, and payments live inside the same AI workspace as your content calendar — the one where your team generates, reviews, and approves posts. A creator collaboration is just another item on the calendar, not a project in a different app.',
  },
  {
    q: 'When do I pay the creators?',
    a: 'You pay creators only after their content is approved and live. Funds are held until the deliverable is delivered and signed off, which protects both sides of the collaboration.',
  },
  {
    q: 'How many creators are on Trendly?',
    a: `${PROOF.creatorsLabel}. That network comes from the team's creator-marketplace track record — the same team behind ${PROOF.brands.toLowerCase()} of brand campaigns — now built into the Trendly workspace.`,
  },
];

const creators = [
  { name: 'Jamie Lee', tag: 'Wellness', f: '41k', er: '6.2%', g: 'from-pink-400 to-rose-500' },
  { name: 'Marcus Reid', tag: 'Fitness', f: '58k', er: '5.1%', g: 'from-emerald-400 to-teal-500' },
  { name: 'Priya Nair', tag: 'Beauty', f: '29k', er: '7.4%', g: 'from-amber-400 to-orange-500' },
  { name: 'Alex Torres', tag: 'Lifestyle', f: '63k', er: '4.8%', g: 'from-sky-400 to-indigo-500' },
];

const filters = [
  { t: 'Niche', d: 'Wellness, beauty, fitness, food, fashion, tech, and more.' },
  { t: 'Platform', d: 'Filter by where each creator actually performs — IG, TikTok, YouTube.' },
  { t: 'Audience size', d: 'Zero in on the micro tier — under 100k — where engagement runs highest.' },
  { t: 'Engagement', d: 'Sort by real engagement rate, not vanity follower counts.' },
];

const flow = [
  { n: '01', t: 'Discover', d: 'Filter the creator network down to a shortlist that fits your brand and budget.' },
  { n: '02', t: 'Brief', d: 'Send a campaign brief straight from a post on your content calendar.' },
  { n: '03', t: 'Track', d: 'Follow every deliverable, revision, and approval in one place.' },
  { n: '04', t: 'Pay', d: 'Release payment only after the content is approved and live.' },
];

export default function CreatorsPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Product', path: '/product/creators' },
            { name: 'Creator Campaigns', path: '/product/creators' },
          ]),
          softwareApplicationSchema(),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Creator Campaigns"
        title="The creator marketing platform built into your workspace"
        highlight="creator marketing platform"
        subtitle="Find micro influencers, brief them straight from your calendar, review and approve deliverables with your team, and pay only after content is live — inside the same AI workspace where you plan everything else."
      />

      {/* ── Lead with real proof ── */}
      <section className="-mt-4 pb-2">
        <div className="container-px flex flex-col items-center">
          <ScrollReveal direction="scale" distance={20}>
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-100 bg-brand-50 px-5 py-2.5">
              <div className="flex -space-x-2.5">
                {creators.map((c) => (
                  <div key={c.name} className={`h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br ${c.g}`} />
                ))}
              </div>
              <span className="text-sm font-bold text-brand-700">{PROOF.creatorsLabel}</span>
            </div>
          </ScrollReveal>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
            <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a Demo</a>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">{PROOF.riskReversal}</p>
          <p className="mt-2 max-w-xl text-center text-xs text-slate-400">
            {PROOF.brandsLabel} — that creator network now lives inside the Trendly workspace.
          </p>
        </div>
      </section>

      {/* ── Creator discovery & filters ── */}
      <section className="py-16">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left" distance={36}>
            <div>
              <span className="section-eyebrow">Discovery</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">Find micro influencers that actually fit</h2>
              <p className="mt-4 text-slate-600">
                Big-name influencers are expensive and easy to scroll past. Micro-creators — under
                100k followers — drive stronger engagement per follower and feel native to your
                audience. Trendly lets you filter a verified creator network down to a shortlist that
                matches your niche, platform, audience size, and engagement rate.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {filters.map((f, i) => (
                  <div
                    key={f.t}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                    style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${i * 70}ms` }}
                  >
                    <div className="text-sm font-bold text-slate-900">{f.t}</div>
                    <div className="mt-1 text-xs text-slate-600">{f.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Discovery visual */}
          <ScrollReveal direction="right" distance={36} delay={80}>
            <div className="aspect-[5/4]">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
                <div className="grid grid-cols-2 gap-3">
                  {creators.map((c, i) => (
                    <div
                      key={c.name}
                      className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-100"
                      style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${i * 80}ms` }}
                    >
                      <div className={`h-16 w-full rounded-xl bg-gradient-to-br ${c.g}`} />
                      <div className="mt-2.5 text-sm font-semibold text-slate-900">{c.name}</div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{c.tag}</span>
                        <span className="font-semibold text-brand-700">{c.f}</span>
                      </div>
                      <div className="mt-1 text-[10px] text-emerald-600">{c.er} engagement</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Filters Applied</div>
                  <div className="mt-1 flex gap-1">
                    <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">Wellness</span>
                    <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">20–70k</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── End-to-end campaign flow ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">End to end</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Brief, track, and pay —{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">without leaving Trendly</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A creator collaboration is just another post on your calendar. Run the whole thing in
              the same workspace where you plan and approve your own content.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((s, i) => (
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

      {/* ── Briefs from the calendar ── */}
      <section className="py-20">
        <div className="container-px">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                t: 'Send briefs from the calendar',
                d: 'Found a creator? Send a campaign brief straight from the post slot. The brief inherits your strategy, voice, and the pillar it belongs to — no copy-pasting into another tool.',
              },
              {
                t: 'Review & approve deliverables',
                d: 'Every draft, revision, and approval is logged in one place. Your team reviews creator content the same way you review your own — request changes or sign off, with every collaboration pending, in review, or live at a glance.',
              },
              {
                t: 'Pay only after content is live',
                d: 'Payment is released once the content is approved and published. Funds stay protected until the deliverable is delivered, so there are no upfront-payment surprises.',
              },
            ].map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 70} distance={24}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <h3 className="text-lg font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container-px mx-auto max-w-3xl">
          <ScrollReveal className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Creator campaign questions</h2>
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

      {/* ── Internal links ── */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: '/solutions/founders', t: 'For founders', d: 'Run organic content and creator campaigns solo — Trendly is your marketing team.' },
              { href: '/product/content-calendar', t: 'Content Calendar', d: 'Where creator briefs start — plan, review, and approve posts side by side.' },
              { href: '/solutions/agencies', t: 'For agencies', d: 'Source and run creator campaigns for every client from one workspace.' },
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
