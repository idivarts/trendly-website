import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import ManagedServices from '@/components/ManagedServices';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Done-for-you social media marketing | Marketing agency for startups — Trendly',
  description:
    'Trendly is the software — and a team that runs your growth with you. Influencer-led campaigns, paid ads, and performance marketing, with transparent line-by-line pricing you pay from the app. No retainers.',
};

const services = [
  {
    t: 'Influencer-led growth',
    d: 'We source, vet, brief, and run creator campaigns end-to-end — using our 10,000+ creator network. We handle outreach, contracts, deliverables, and payments, so you stay in approvals only.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="11" r="3" />
        <path d="M2 21c0-3.9 3.1-7 7-7 2 0 3.8.8 5.1 2.1" />
        <path d="M21 21c0-2.8-1.8-5-4-5" />
      </svg>
    ),
  },
  {
    t: 'Paid ads management',
    d: 'We plan, launch, and optimize ads across Meta, Google, TikTok, and more — so spend turns into customers, not guesswork. Tracking, creative, targeting, and budget, watched daily.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    t: 'Performance marketing',
    d: 'Full-funnel, ROI-focused growth run as one system — ads, creators, landing pages, and conversion, measured to revenue. The pieces working together instead of in silos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

const how = [
  {
    n: '01',
    t: 'Scope',
    d: 'You pick exactly what you want off your plate — one channel or end-to-end. Nothing you don\'t need gets bundled in.',
  },
  {
    n: '02',
    t: 'Quote',
    d: 'You get a transparent, line-by-line quote within 24 hours. No retainers, no vague "package" — you see what every line costs.',
  },
  {
    n: '03',
    t: 'Execute',
    d: 'Once you approve, our team runs it inside your Trendly workspace — sourcing creators, launching ads, building the funnel.',
  },
  {
    n: '04',
    t: 'Report',
    d: 'A clear report every cycle: what worked, what didn\'t, and what we\'re changing next. You always know where your money went.',
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
        ]}
      />

      <PageHero
        eyebrow="Services"
        title="Rather have us run it?"
        highlight="run it"
        subtitle="Trendly is the software — and a team that runs growth with you. Done-for-you social media marketing for startups, with transparent, line-by-line pricing you pay from the app."
      />

      {/* CTAs under hero */}
      <section className="-mt-6 pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#quote" className="btn-primary">Get a quote</a>
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a call</a>
            </div>
            <p className="text-xs text-slate-500">{PROOF.riskReversal}</p>
          </div>
        </div>
      </section>

      {/* ── Opening positioning ── */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Software + a team</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              We don’t just sell software.{' '}
              <span className="text-gradient-animated">We run the marketing.</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Self-serve Trendly is great until you don’t have the time. When you’d rather have growth
              run for you, the team behind the platform steps in — executing inside the same workspace you
              already use, with pricing you approve line by line and pay from the app. No retainers, no surprises.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── The 3 services ── */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">What we run</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Three ways we drive{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">growth</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Take one or combine them into full-funnel growth. Every engagement is scoped and priced transparently.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.t} direction="up" delay={i * 80} distance={28}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <span className="h-5 w-5">{s.icon}</span>
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{s.t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">How it works</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Clear from quote to{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">report</span>
            </h2>
            <p className="mt-4 text-slate-600">
              No long onboarding, no agency theater. Four steps from "I want this off my plate" to results you can see.
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

      {/* ── Build your plan (pick-what-you-want builder) ── */}
      <ManagedServices />

      {/* ── Inline quote form (id="quote") ── */}
      <QuoteForm />

      {/* ── Trust signals ── */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                { t: PROOF.brandsLabel, d: 'A team that has done this before.' },
                { t: 'Transparent, line-by-line pricing', d: 'You see what every line costs.' },
                { t: 'No retainers, cancel anytime', d: 'Pay for the scope you pick, from the app.' },
              ].map((s) => (
                <div key={s.t} className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
                  <p className="text-sm font-bold text-slate-900">{s.t}</p>
                  <p className="mt-1.5 text-xs text-slate-600">{s.d}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
