import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import ManagedServices from '@/components/ManagedServices';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF, SERVICES } from '@/lib/site-config';

export const metadata = {
  title: 'Done-For-You Social Media Marketing | Marketing Agency for Startups — Trendly',
  description:
    'Done-for-you social media marketing for startups. The Trendly team runs your growth with you — influencer campaigns, paid ads, and performance marketing — with transparent, line-by-line pricing you pay from the app. No bloated retainers.',
};

const how = [
  {
    n: '01',
    t: 'You pick the scope',
    d: 'Choose exactly what you want off your plate — a single channel or end-to-end growth. Nothing you don\'t need gets bundled in.',
  },
  {
    n: '02',
    t: 'We send a clear quote',
    d: 'You get a transparent, line-by-line quote within 24 hours. No retainers, no vague "marketing package" — you see what every line costs.',
  },
  {
    n: '03',
    t: 'We run it with you',
    d: 'Once you approve, our team executes inside your Trendly workspace — sourcing creators, launching ads, building the funnel — alongside you.',
  },
  {
    n: '04',
    t: 'You see the report',
    d: 'A clear performance report every cycle: what worked, what didn\'t, and what we\'re changing next. You always know where your money went.',
  },
];

const faqs = [
  {
    q: 'How is this different from a marketing agency?',
    a: 'Most agencies lock you into a long-term retainer with a vague scope. Trendly is software first — you pick exactly what you want done, get a transparent line-by-line quote, and pay from the app with no long-term contract. The same team that built the platform runs the work inside it, so you have full visibility instead of a black box.',
  },
  {
    q: 'What can the Trendly team run for me?',
    a: 'Influencer-led growth (we source, vet, brief and run creator campaigns), paid ads management (Meta, Google, TikTok and more), and full-funnel performance marketing that ties ads, creators, and conversion together. You can take one service or combine them — and you can also have us handle pieces like strategy, content writing, and community management.',
  },
  {
    q: 'How much does it cost?',
    a: `It depends entirely on the scope you choose, which is why we send a clear, itemized quote within 24 hours rather than a fixed "package" price. You review it, approve what you want, and pay directly inside the app. ${PROOF.riskReversal}.`,
  },
  {
    q: 'Do I still need the Trendly software?',
    a: 'The work runs inside your Trendly workspace, so you keep the strategy, calendar, and campaigns in one place even when our team is executing. You can also use Trendly entirely self-serve and only bring us in for the parts you want off your plate.',
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Done-for-you marketing"
        title="Want it all run for you? We do that too."
        highlight="run for you"
        subtitle="Trendly is the software — and a team that runs growth with you. Done-for-you social media marketing for startups, with transparent, line-by-line pricing you pay from the app. No bloated retainers."
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

      {/* ── Positioning ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Software + a team</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Not an agency.{' '}
              <span className="text-gradient-animated">A team inside your workspace.</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Self-serve software is great until you don't have the time. When you'd rather have growth
              run end-to-end, the team behind Trendly steps in — executing inside the same workspace you
              already use, with pricing you approve line by line and pay from the app. No retainers. No surprises.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                t: 'Transparent, not retainer',
                d: 'You get an itemized quote for exactly the scope you pick — and pay it inside the app. No locked-in monthly minimum.',
              },
              {
                t: 'Run inside your workspace',
                d: 'We execute in your Trendly account, so strategy, calendar, and campaigns stay in one place — fully visible to you.',
              },
              {
                t: 'A real track record',
                d: `${PROOF.brandsLabel}, with ${PROOF.creators} creators in the network. The team running your growth has done this before.`,
              },
            ].map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <h3 className="text-lg font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The 3 services ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">What we run</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Three ways we drive growth for startups
            </h2>
            <p className="mt-4 text-slate-600">
              Take one service or combine them into full-funnel growth. Every engagement is scoped and
              priced transparently.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.slug} direction="up" delay={i * 80} distance={28}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Learn more
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Build-your-plan (existing component) ── */}
      <ManagedServices />

      {/* ── How engagement works ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">How it works</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Clear from quote to{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">report</span>
            </h2>
            <p className="mt-4 text-slate-600">
              No long onboarding, no agency theater. Four simple steps from "I want this off my plate" to results you can see.
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
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Done-for-you questions</h2>
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
      <QuoteForm />

      {/* ── Internal links ── */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/services/influencer-led-growth', t: 'Influencer-led growth', d: 'We source, vet, brief and run creator campaigns end-to-end.' },
              { href: '/services/paid-ads', t: 'Paid ads management', d: 'Ads across Meta, Google, TikTok and more — spend that converts.' },
              { href: '/services/performance-marketing', t: 'Performance marketing', d: 'Full-funnel growth measured to revenue.' },
              { href: '/solutions/founders', t: 'For founders', d: 'Prefer to run it yourself? See Trendly for solo founders.' },
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
