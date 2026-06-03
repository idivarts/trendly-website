import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd';
import { LINKS, PROOF, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Social media tool for founders & small teams',
  description:
    'Trendly is built for two kinds of people: the solo founder who is also the marketing team, and the 2–3 person team coordinating content across Docs, Notion, and Slack. AI strategy, one workspace, generate → review → approve. Free forever.',
};

const personas = [
  {
    eyebrow: 'Solo founder',
    title: "You're the founder and the marketing team",
    problem:
      "You're shipping product, talking to customers, and closing deals — and somehow also expected to post consistently. There's no time, no strategy, just a blank caption box and ten browser tabs of AI tools.",
    solves: [
      'Trendly’s AI builds the strategy and drafts the content for you — every top model (GPT, Claude, Gemini) in one place, no tab-switching.',
      'Strategy, calendar, drafts, and scheduling live in one workspace — cancel Notion + Later + the spreadsheet.',
      'Plan a month, schedule everywhere, and manage your inbox from a single login.',
    ],
    link: { href: '/product', label: 'See how the product works' },
  },
  {
    eyebrow: 'Small team (2–3 people)',
    title: 'Your team is juggling Docs, Notion, and Slack',
    problem:
      'The draft is in a doc, the brief is in a DM, feedback is scattered across Slack, and nobody knows which version is final. Reviewing AI content means copying it into a doc and chasing sign-off.',
    solves: [
      'One source of truth — every draft, comment, and version lives on the post itself.',
      'A generate → review → approve workflow built for AI content: create, edit by hand or with AI, approve or request changes.',
      'Roles and approvals so each teammate does exactly their part — and nothing goes live without sign-off.',
    ],
    link: { href: '/product/content-calendar', label: 'See the content calendar' },
  },
];

const week = [
  {
    day: 'Day 1',
    title: 'Connect accounts + get your strategy',
    desc: 'Answer a few questions about your business, connect your channels, and Trendly’s AI hands you a content strategy with pillars and a posting cadence.',
  },
  {
    day: 'Day 2–3',
    title: 'Generate & approve a week of posts',
    desc: 'AI drafts captions, hooks, and images from your pillars. Review together, edit by hand or with AI, then approve a week of content.',
  },
  {
    day: 'Day 4–5',
    title: 'Schedule everywhere',
    desc: 'Queue your approved posts across Instagram, TikTok, LinkedIn, and X from one calendar — with AI assist for timing, captions, and hashtags.',
  },
  {
    day: 'Day 6–7',
    title: 'Run a campaign & review results',
    desc: 'Activate creators straight from your calendar, and let Trendly show what landed so the next round of content writes itself.',
  },
];

export default function SolutionsPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
        ])}
      />

      <PageHero
        eyebrow="Solutions"
        title="Built for founders and small teams"
        highlight="founders and small teams"
        subtitle="Whether you're a solo founder doing every job yourself or a 2–3 person team coordinating across five tools, Trendly puts strategy, content, and collaboration in one AI workspace."
      />

      {/* CTAs under hero */}
      <section className="-mt-6 pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {!DISABLE_LOGIN_SIGNUP && (
                <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
              )}
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a demo</a>
            </div>
            <p className="text-xs text-slate-500">{PROOF.riskReversal}</p>
          </div>
        </div>
      </section>

      {/* ── Two ICPs ── */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Who it's for</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Two kinds of people,{' '}
              <span className="text-gradient-animated">one workspace</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Trendly meets you where you are — whether marketing is a solo job or a small-team sport.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {personas.map((p, i) => (
              <ScrollReveal key={p.eyebrow} direction="scale" delay={i * 120}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
                  <span className="pill">{p.eyebrow}</span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.problem}</p>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-600">How Trendly solves it</div>
                    <ul className="mt-4 space-y-3">
                      {p.solves.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                          <svg className="mt-0.5 h-4 w-4 flex-none text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <Link href={p.link.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline">
                      {p.link.label}
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Your first week ── */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Your first week</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              From signup to a running{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">content engine</span>
            </h2>
            <p className="mt-4 text-slate-600">
              No onboarding calls, no agency kickoff. Here's what your first seven days with Trendly look like.
            </p>
          </ScrollReveal>

          <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
            {week.map((w, i) => (
              <ScrollReveal key={w.day} direction="scale" delay={i * 120}>
                <div className="group relative h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                      <span className="text-sm font-extrabold">{i + 1}</span>
                    </div>
                    <span className="text-sm font-bold tracking-wider text-brand-600">{w.day}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing link ── */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Start free. Upgrade only when it{' '}
              <span className="text-gradient-animated">pays for itself</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A Free forever plan for solo founders, and a Team plan built for 2–3 marketers sharing one calendar. No credit card to start.
            </p>
            <div className="mt-8">
              <Link href="/pricing" className="btn-primary">See pricing</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
