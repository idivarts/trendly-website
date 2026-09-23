import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Paid Ads Management for Startups | Meta, Google & TikTok Ads — Trendly',
  description:
    'Done-for-you paid ads management for startups. We plan, launch and optimize ads across Meta, Google, TikTok and more — account setup, creative, targeting, optimization, and clear reporting. Transparent, pay-from-the-app pricing.',
};

const platforms = [
  { t: 'Meta', d: 'Facebook & Instagram ads — prospecting and retargeting across feed, reels, and stories.' },
  { t: 'Google', d: 'Search, Performance Max, and YouTube to capture demand and intent.' },
  { t: 'TikTok', d: 'Short-form, creative-led campaigns built for the way TikTok actually converts.' },
  { t: 'And more', d: 'LinkedIn, Pinterest, and other channels where your customers actually are.' },
];

const included = [
  {
    t: 'Account & pixel setup',
    d: 'We set up or audit your ad accounts, tracking, and conversions so every dollar is measured correctly from day one.',
  },
  {
    t: 'Creative direction',
    d: 'We brief and shape ad creative — hooks, angles, and formats — and can pull from your content and creators inside Trendly.',
  },
  {
    t: 'Audience & targeting',
    d: 'We build and test audiences, structure campaigns, and find the segments that respond — without burning budget on guesses.',
  },
  {
    t: 'Ongoing optimization',
    d: 'We watch performance daily, cut what\'s not working, scale what is, and keep iterating on creative and bids.',
  },
  {
    t: 'Budget management',
    d: 'We manage pacing and spend against your goals, so budget goes to the campaigns actually returning results.',
  },
  {
    t: 'Clear reporting',
    d: 'A straightforward report on spend, results, and what we\'re changing next — no vanity metrics, no jargon.',
  },
];

const how = [
  { n: '01', t: 'Audit & plan', d: 'We review your accounts, goals, and budget, then send a transparent, line-by-line plan and quote.' },
  { n: '02', t: 'Build & launch', d: 'We set up tracking, build campaigns and creative, and launch across the right platforms.' },
  { n: '03', t: 'Optimize', d: 'We monitor daily, test creative and audiences, and shift budget toward what converts.' },
  { n: '04', t: 'Report & scale', d: 'You get clear reporting on spend and results — and we scale the winners.' },
];

const faqs = [
  {
    q: 'Which ad platforms do you manage?',
    a: 'We plan, launch, and optimize paid ads across Meta (Facebook & Instagram), Google (Search, Performance Max, YouTube), and TikTok, plus channels like LinkedIn and Pinterest where they fit your audience. We recommend the mix based on where your customers actually convert, not on what\'s trendy.',
  },
  {
    q: 'What does paid ads management cost?',
    a: `Management is scoped to the work involved — the number of platforms, campaigns, and creative needed — so we send a clear, line-by-line quote up front rather than a one-size-fits-all fee. Your media spend (what you pay the ad platforms) is separate and always yours to control. ${PROOF.riskReversal}.`,
  },
  {
    q: 'Do I need a big budget to start?',
    a: 'No. We build the plan around the budget you have and focus it on the channels most likely to return for a startup. The goal is to make spend efficient first, then scale what works — not to push you into a budget you\'re not ready for.',
  },
  {
    q: 'Can you combine ads with my creator campaigns?',
    a: 'Yes — that\'s often the strongest setup. We can pull creative and creators managed inside Trendly into your paid campaigns, and tie ads, creators, and conversion together as full-funnel performance marketing.',
  },
];

export default function PaidAdsPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Paid ads management', path: '/services/paid-ads' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Paid ads management"
        title="Paid ads management for startups, done for you"
        highlight="Paid ads management for startups"
        subtitle="We plan, launch and optimize ads across Meta, Google, TikTok and more — so your spend turns into customers, not guesswork. Transparent pricing you approve and pay from the app."
      />

      {/* CTAs under hero */}
      <section className="-mt-6 pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#quote" className="btn-primary">Get a quote</a>
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a call</a>
            </div>
            <p className="text-xs text-slate-500">{PROOF.brandsLabel}</p>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Done for you</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Stop burning budget on ads that{' '}
              <span className="text-gradient-animated">don't convert</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Most early-stage ad spend leaks — wrong setup, untested creative, audiences left on autopilot.
              We run paid ads the way an in-house performance team would: measured, iterated, and pointed at
              customers, not impressions. You get the expertise without the headcount or the retainer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Platforms we run</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Where your customers already are
            </h2>
            <p className="mt-4 text-slate-600">
              We pick the channels that fit your product and audience — and run them well.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((p, i) => (
              <ScrollReveal key={p.t} direction="up" delay={i * 70} distance={28}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <h3 className="text-base font-bold text-slate-900">{p.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">What's included</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Everything from setup to scale
            </h2>
            <p className="mt-4 text-slate-600">
              A full paid-ads operation, run by our team inside your Trendly workspace.
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
              From audit to{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">scale</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A clear, four-step path — and full visibility into spend and results the whole way.
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

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container-px mx-auto max-w-3xl">
          <ScrollReveal className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Paid ads questions</h2>
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
      <QuoteForm defaultService="Paid ads management" heading="Get a free paid ads quote" />

      {/* ── Internal links ── */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: '/services/performance-marketing', t: 'Performance marketing', d: 'Tie ads, creators, and conversion together into full-funnel, ROI-focused growth.' },
              { href: '/services', t: 'All done-for-you services', d: 'See everything the Trendly team can run for your startup.' },
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
