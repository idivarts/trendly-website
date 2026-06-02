import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'AI Social Media Tool for Agencies | White-Label & Partnership — Trendly',
  description:
    'Trendly for agencies: run all your clients at scale on one AI social media platform — every AI model, white-label reports, client workspaces — or partner with us to fill your gaps (content & strategy, or ads & performance marketing).',
};

const ways = [
  {
    tag: 'On subscription',
    title: 'Run every client at scale',
    desc: 'Use the Trendly SaaS to manage all your clients in one place — separate workspaces, every AI model for content, a calendar and inbox per client, and white-label reports on the Agency plan. Always available as a subscription.',
    points: ['Multi-client workspaces', 'White-label reports & client portal', 'Every AI model + scheduling + inbox', 'Per-seat / per-client scaling'],
    cta: { label: 'See Agency pricing', href: '/pricing' },
  },
  {
    tag: 'In partnership',
    title: 'Partner to fill your gaps',
    desc: 'You don\'t have to do everything in-house. Plug Trendly into your agency for the capabilities you don\'t offer — and keep owning the client relationship.',
    points: ['White-label or co-delivery', 'Flexible, project-based engagements', 'Your brand stays front and center', 'No bloated retainers'],
    cta: { label: 'Talk partnerships', href: LINKS.BOOK_DEMO },
    dark: true,
  },
];

const coalition = [
  {
    you: 'You run ads & performance',
    we: 'We power your content & strategy',
    desc: 'A performance shop that\'s great at media buying but stretched on creative? Plug in Trendly\'s AI content studio and strategy — every model in one place — so your clients get a full content engine behind the spend.',
    href: '/product/ai-strategy',
    hrefLabel: 'See the AI content studio',
  },
  {
    you: 'You do strategy & content',
    we: 'We run ads & performance marketing',
    desc: 'A content or social studio whose clients keep asking for paid? Partner with us for paid ads and full-funnel performance marketing — retargeting, tracking, and conversion — without hiring a media team.',
    href: '/services/performance-marketing',
    hrefLabel: 'See performance marketing',
  },
];

const faqs = [
  {
    q: 'Can I manage multiple clients in one Trendly account?',
    a: 'Yes. The Agency plan is built for it — separate workspaces per client, role-based access for your team, white-label reports, and a client portal. You get every AI model, the content calendar, scheduling, and the unified inbox for each client in one place.',
  },
  {
    q: 'How does the partnership / coalition model work?',
    a: 'It works both ways. If your agency runs ads and performance but needs content and strategy, you plug in Trendly\'s AI content studio. If you do strategy and content but clients want paid, you partner with us for ads and performance marketing. Engagements are flexible and white-label or co-delivered — you keep the client relationship.',
  },
  {
    q: 'Is it a subscription or a project fee?',
    a: `Both options exist. The SaaS platform is always available on a subscription (the Agency plan), and partnership/done-for-you work is scoped and quoted per engagement with transparent, line-by-line pricing. ${PROOF.riskReversal} on the software.`,
  },
  {
    q: 'Do you white-label?',
    a: 'Yes — the Agency plan includes white-label reporting and a client portal, and partnership work can be delivered under your brand. Your clients see your agency, not ours.',
  },
];

export default function AgenciesPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/solutions/agencies' },
            { name: 'For agencies', path: '/solutions/agencies' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="For agencies"
        title="Trendly for agencies — run clients at scale, or partner to fill your gaps"
        highlight="run clients at scale"
        subtitle="Manage every client on one AI social media platform — every AI model, white-label reports, a workspace per client — or partner with us in coalition: we power your content & strategy, or run your ads & performance. The SaaS is always there on subscription."
      />

      {/* CTAs under hero */}
      <section className="-mt-6 pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {!DISABLE_LOGIN_SIGNUP && (
                <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start free</a>
              )}
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Talk partnerships</a>
            </div>
            <p className="text-xs text-slate-500">{PROOF.riskReversal}</p>
          </div>
        </div>
      </section>

      {/* ── Two ways to work with us ── */}
      <section className="py-16">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Two ways in</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Use the platform, partner with the{' '}
              <span className="text-gradient-animated">team — or both</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Agencies work with Trendly on the software, in partnership, or a mix of both. You choose.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {ways.map((w, i) => (
              <ScrollReveal key={w.title} direction={i === 0 ? 'left' : 'right'} distance={28}>
                <div className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${w.dark ? 'border-brand-100 bg-gradient-to-br from-brand-600 to-brand-700 text-white hover:shadow-glow' : 'border-slate-200 bg-white hover:border-brand-200 hover:shadow-glow'}`}>
                  <span className={`w-max rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${w.dark ? 'border border-white/20 bg-white/10 text-white backdrop-blur' : 'bg-brand-50 text-brand-700 border border-brand-100'}`}>
                    {w.tag}
                  </span>
                  <h3 className={`mt-4 text-2xl font-bold ${w.dark ? 'text-white' : 'text-slate-900'}`}>{w.title}</h3>
                  <p className={`mt-2 text-sm ${w.dark ? 'text-white/85' : 'text-slate-600'}`}>{w.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {w.points.map((p) => (
                      <li key={p} className={`flex items-center gap-2.5 text-sm ${w.dark ? 'text-white/90' : 'text-slate-700'}`}>
                        <span className={`grid h-5 w-5 flex-none place-items-center rounded-full ${w.dark ? 'bg-white/15 text-white' : 'bg-brand-100 text-brand-700'}`}>
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <a
                      href={w.cta.href}
                      className={w.dark ? 'inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5' : 'btn-primary !py-2.5 !text-sm'}
                    >
                      {w.cta.label}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coalition model ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Coalition, both ways</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              You bring what you&apos;re great at.{' '}
              <span className="text-gradient-animated">We bring the rest.</span>
            </h2>
            <p className="mt-4 text-slate-600">
              No agency does everything. Trendly slots into the gaps so you can say yes to more — without hiring for it.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {coalition.map((c, i) => (
              <ScrollReveal key={c.you} direction="scale" delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
                    <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-slate-800">{c.you}</span>
                    <svg className="h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    <span className="rounded-xl bg-brand-600 px-3 py-1.5 text-white">{c.we}</span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                  <Link href={c.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    {c.hrefLabel}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
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
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Agency questions</h2>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/pricing', t: 'Agency pricing', d: 'White-label, client portal, API on the Agency plan.' },
              { href: '/services', t: 'Done-for-you services', d: 'Partner for content, ads, and performance.' },
              { href: '/solutions/small-teams', t: 'For small teams', d: 'Just your in-house team? Start here.' },
              { href: '/solutions/founders', t: 'For founders', d: 'Solo founder running it all? Start here.' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">{l.t}</h3>
                  <svg className="h-4 w-4 flex-none text-brand-600 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
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
