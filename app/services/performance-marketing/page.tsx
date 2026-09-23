import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Performance Marketing for Startups | Full-Funnel, ROI-Focused Growth — Trendly',
  description:
    'Done-for-you performance marketing for startups. Full-funnel growth — paid ads, creators, landing pages and conversion — measured to revenue. We run it inside your Trendly workspace with transparent pricing.',
};

const approach = [
  {
    t: 'Full-funnel, not just ads',
    d: 'Awareness, consideration, and conversion all matter. We build across the funnel — creators and ads at the top, landing pages and offers at the bottom — so growth doesn\'t stall at one stage.',
  },
  {
    t: 'Measured to revenue',
    d: 'We set up tracking so every channel ties back to a real outcome. Decisions are made on what drives revenue, not what looks good in a dashboard.',
  },
  {
    t: 'Iterate relentlessly',
    d: 'We test creative, audiences, pages, and offers, kill what doesn\'t work, and double down on what does — every cycle, not once a quarter.',
  },
];

const engine = [
  {
    t: 'Pixels & conversion tracking',
    d: 'Before a dollar goes to ads, we install and verify your tracking — Meta Pixel, Google Tag / GA4, and TikTok Pixel — plus server-side tracking (Conversions API) so events like view, add-to-cart, and purchase are measured accurately even with iOS and cookie limits. Without clean tracking, every optimization after it is a guess.',
  },
  {
    t: 'Website & funnel audit',
    d: 'We map every step a buyer takes — ad click → landing page → product → cart → checkout → purchase — and instrument each one. Then we read the data (and session recordings/heatmaps where useful) to see exactly where people hesitate and leave.',
  },
  {
    t: 'Find & fix the drop-offs (CRO)',
    d: 'Most ad budgets are wasted on traffic that lands and bounces. We turn drop-off data into concrete fixes — faster pages, a clearer offer and headline, fewer form fields, smoother mobile checkout, trust signals — and A/B test them so more of the traffic you already pay for converts.',
  },
  {
    t: 'Retargeting that brings buyers back',
    d: 'Almost nobody buys on the first visit. We build retargeting audiences from people who already showed intent — visited, viewed a product, added to cart, watched your video — and show them sequenced ads across Meta, Google and TikTok so interested buyers see the right message more than once and come back to convert.',
  },
  {
    t: 'Prospecting & creative testing',
    d: 'For the top of the funnel we build and test cold audiences and a steady stream of ad creative — hooks, angles, formats — often fueled by our 10,000+ creator network, since authentic creator content reliably outperforms polished studio ads.',
  },
  {
    t: 'Reporting tied to revenue',
    d: 'One clear report on spend, return, and the funnel metrics that lead to revenue — what worked, what we cut, and what we\'re changing next. No vanity metrics, no jargon, full visibility inside your workspace.',
  },
];

const excel = [
  {
    t: 'We instrument before we spend',
    d: 'Pixels, server-side tracking, and a funnel audit come first. We optimize on real conversion data from day one instead of burning budget to find out what a dashboard should have told us.',
  },
  {
    t: 'We obsess over your drop-offs',
    d: 'Most agencies only touch the ad account. We go further into your funnel — landing pages, offer, checkout — and fix the leaks, so you convert more of the traffic you already pay for instead of just buying more.',
  },
  {
    t: 'Retargeting done properly',
    d: 'Segmented, sequenced retargeting by intent level — a cart-abandoner sees a different message than a first-time visitor — so warm buyers get the right nudge multiple times instead of one generic ad.',
  },
  {
    t: 'Creator-fueled ad creative',
    d: 'Our 10,000+ creator network feeds a constant supply of native, authentic creative to test — the single biggest lever in modern paid social, and one most agencies can\'t pull.',
  },
  {
    t: 'Full funnel, one team',
    d: 'Ads, creators, landing pages, and tracking are run by the same team inside one workspace — so nothing falls between a media buyer, a creative shop, and a dev. The whole system is optimized together.',
  },
  {
    t: 'Transparent and measured to revenue',
    d: 'Line-by-line pricing you approve and pay from the app, your media spend stays in your accounts, and every decision ties back to revenue — not impressions or likes.',
  },
];

const how = [
  { n: '01', t: 'Map the funnel', d: 'We audit where you lose people today, set the goal, and send a transparent, line-by-line plan and quote.' },
  { n: '02', t: 'Build the engine', d: 'We set up tracking, launch ads and creator campaigns, and tighten the pages and offers they drive to.' },
  { n: '03', t: 'Measure & iterate', d: 'We watch the numbers across the funnel and shift effort toward what moves revenue.' },
  { n: '04', t: 'Report & compound', d: 'Clear reporting tied to outcomes — and each cycle compounds on the last.' },
];

const faqs = [
  {
    q: 'What is performance marketing and how is it different from just running ads?',
    a: 'Performance marketing is growth measured to a real outcome — usually revenue — across the entire funnel, not a single channel. Running ads is one piece of it. We tie ads, creator campaigns, landing pages, and conversion together and optimize the whole system to what actually drives sales, rather than optimizing one channel in a vacuum.',
  },
  {
    q: 'Will you promise a specific ROI or growth number?',
    a: 'No — and you should be cautious of anyone who guarantees a number before seeing your business. What we commit to is a clear, full-funnel process: measured tracking, honest reporting, and relentless iteration toward your revenue goal. We set targets together based on your numbers and report transparently against them.',
  },
  {
    q: 'What does it cost?',
    a: `Performance marketing is scoped to what you need — the channels, creative, and funnel work involved — so we send a clear, line-by-line quote up front. Media spend is separate and stays under your control. You approve the plan and pay from the app. ${PROOF.riskReversal}.`,
  },
  {
    q: 'How does retargeting work, and is it included?',
    a: 'Yes. We build retargeting audiences from people who already showed intent — visited your site, viewed a product, added to cart, or engaged with your content — and show them sequenced ads across Meta, Google and TikTok. Because almost nobody buys on the first visit, bringing interested buyers back is usually one of the highest-ROI parts of the funnel.',
  },
  {
    q: 'What tracking and pixels do you set up?',
    a: 'We install and verify the Meta Pixel, Google Tag / GA4, and TikTok Pixel, plus server-side tracking (Conversions API) so conversions are still measured accurately despite iOS and cookie restrictions. We also do a full website and funnel audit to find exactly where visitors drop off — and fix those leaks with conversion-rate optimization.',
  },
  {
    q: 'Do I need to use Trendly software for this?',
    a: 'The work runs inside your Trendly workspace, which keeps strategy, content, creators, and campaigns in one visible place. You don\'t have to manage it yourself — our team executes — but you get full visibility into everything we run.',
  },
];

export default function PerformanceMarketingPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Performance marketing', path: '/services/performance-marketing' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Performance marketing"
        title="Performance marketing for startups, measured to revenue"
        highlight="Performance marketing for startups"
        subtitle="Full-funnel, ROI-focused growth — ads, creators, landing pages and conversion — run as one system and measured to revenue. Done for you, inside your Trendly workspace."
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
              Growth is a system, not a{' '}
              <span className="text-gradient-animated">single channel</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Plenty of startups pour money into one channel and wonder why it stalls. Real performance
              marketing connects the whole journey — how people discover you, what convinces them, and what
              makes them buy — and measures all of it to revenue. We build and run that system for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our approach ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Our approach</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Full-funnel, measured, iterated
            </h2>
            <p className="mt-4 text-slate-600">
              Three principles guide everything we run for you.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {approach.map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />
                  <h3 className="text-lg font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inside our performance engine ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">What we actually run</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Inside our{' '}
              <span className="text-gradient-animated">performance engine</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Not just "running ads." Here's the actual work that turns ad spend into revenue — from tracking and audits to retargeting and conversion.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {engine.map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 60} distance={18}>
                <div className="group relative flex h-full gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-2xl bg-gradient-brand text-xs font-bold text-white shadow-glow">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why we excel ── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-ink-900" />
        <div className="absolute -top-40 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />
        <div className="container-px relative">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Why we excel
            </span>
            <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl">
              Why our performance marketing{' '}
              <span className="text-gradient-animated">actually performs</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Plenty of teams can launch a campaign. Here's what makes ours convert — and keep compounding.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {excel.map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 70} distance={18}>
                <div className="h-full rounded-3xl border border-white/8 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 hover:bg-white/[0.07]">
                  <h3 className="text-base font-bold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.d}</p>
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
              From funnel map to{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">compounding growth</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A clear path that gets sharper every cycle — and stays fully transparent throughout.
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
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Performance marketing questions</h2>
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
      <QuoteForm defaultService="Performance marketing" heading="Get a free performance marketing quote" />

      {/* ── Internal links ── */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/services/paid-ads', t: 'Paid ads management', d: 'The paid layer of the funnel — Meta, Google, TikTok and more.' },
              { href: '/services/influencer-led-growth', t: 'Influencer-led growth', d: 'Creator campaigns that feed the top of your funnel.' },
              { href: '/services', t: 'All done-for-you services', d: 'See everything the Trendly team can run for your startup.' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">{l.t}</h3>
                  <svg className="h-4 w-4 flex-none text-brand-600 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <p className="mt-2 text-xs text-slate-600">{l.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
