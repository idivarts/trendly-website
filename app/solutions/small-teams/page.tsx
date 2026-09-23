import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Social Media Tool for Small Teams | Trendly',
  description:
    'A social media tool for small teams of 2–3 marketers. One shared content calendar with roles, comments, approvals, and version history — so work stops getting lost in DMs, Slack, and spreadsheets.',
};

const problems = [
  {
    title: 'Work scattered across DMs and Slack',
    desc: 'The draft is in Slack, the brief is in a DM, the asset is in someone\'s downloads. Nobody can find the latest version of anything.',
  },
  {
    title: 'Approvals get lost',
    desc: '"Did this get approved?" "I thought you signed off?" Posts go live without a check — or sit waiting for one that never comes.',
  },
  {
    title: 'A spreadsheet pretending to be a calendar',
    desc: 'Your content calendar is a shared sheet two people edit at once. Color-coded chaos that breaks the moment the team grows.',
  },
];

const helps = [
  {
    title: 'Generate, review, and approve — together',
    desc: 'Generate posts with every top AI model, share them for review in one click, edit by hand or with AI, then approve or request changes. The whole loop happens on one calendar — no copying drafts into a doc or chasing feedback in Slack.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'Roles that match how you work',
    desc: 'Assign a post, comment in context, approve with one click, then publish. Each teammate gets the right permissions — no more guessing who owns what.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="11" r="3" />
        <path d="M2 21c0-4 3.1-7 7-7 2 0 3.8.8 5.1 2.1" />
        <path d="M21 21c0-2.8-1.8-5-4-5" />
      </svg>
    ),
  },
  {
    title: 'Approvals built into the post',
    desc: 'Gate publishing behind a review step. Nothing goes live until the right person signs off — and everyone can see exactly where each post stands.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'Version history, no Slack chaos',
    desc: 'Every edit and comment lives on the post itself. Scroll back to any version and skip the "which file is final?" thread entirely.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 3v5h5" />
        <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
        <path d="M12 7v5l4 2" />
      </svg>
    ),
  },
];

const collab = [
  {
    title: 'See who owns what',
    desc: 'Assignments and statuses are visible at a glance, so two people never accidentally write the same post.',
  },
  {
    title: 'Comment where the work is',
    desc: 'Feedback lives on the post, not buried in a thread. Resolve a comment and it\'s done — no chasing replies across apps.',
  },
  {
    title: 'Hand off cleanly',
    desc: 'Writer drafts, reviewer comments, lead approves, anyone publishes. Each handoff is a state change everyone can see, not a hopeful DM.',
  },
];

const faqs = [
  {
    q: 'What size team is Trendly built for?',
    a: "Trendly's Team plan is designed for small in-house marketing teams — typically 2 to 3 people sharing one content calendar with assignments, comments, and approvals. It scales smoothly as you add seats.",
  },
  {
    q: 'How do approvals work as a social media tool for small teams?',
    a: 'You can gate publishing behind a review step. A teammate drafts a post, assigns a reviewer, and the post can only go live once it\'s approved. Everyone sees the status, so nothing slips through or stalls.',
  },
  {
    q: 'Does Trendly replace Slack and spreadsheets for content?',
    a: 'For content work, yes. You generate with AI, then drafts, briefs, comments, version history, and the calendar all live on the post itself — so reviewing and approving AI content stops meaning "paste it into a doc and ping Slack." Your team keeps one source of truth.',
  },
  {
    q: 'Can different teammates have different permissions?',
    a: `Yes. Assign roles so each person can do exactly what they should — draft, comment, approve, or publish — without stepping on each other. ${PROOF.riskReversal}.`,
  },
];

export default function SmallTeamsPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions/small-teams' },
          { name: 'For small teams', path: '/solutions/small-teams' },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        eyebrow="For small teams"
        title="One source of truth for your small marketing team"
        highlight="small marketing team"
        subtitle="Trendly is the social media tool for small teams of 2–3 marketers. Generate with every top AI model, review together, edit by hand or with AI, then approve — all on one shared calendar, so work stops getting lost in DMs, Slack, and spreadsheets."
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

      {/* ── The problem ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">The small-team problem</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Three people, and the work is{' '}
              <span className="text-gradient-animated">everywhere but one place</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A small team moves fast — until the content is spread across tools nobody fully owns. Then every post becomes a search party.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} direction="scale" delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-50 text-rose-500">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Trendly helps ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">How Trendly helps</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Everyone working from{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">the same calendar</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Trendly gives a small team the structure of a big one — roles, approvals, and history — without the overhead.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {helps.map((h, i) => (
              <ScrollReveal key={h.title} direction="scale" delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-glow">
                    <div className="h-5 w-5">{h.icon}</div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 text-center" delay={200}>
            <p className="text-sm text-slate-600">
              See it in action on{' '}
              <Link href="/product/content-calendar" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                the content calendar
              </Link>
              , or — running client work?{' '}
              <Link href="/solutions/agencies" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                see Trendly for agencies
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Collaboration without stepping on each other ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Collaboration that flows</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Move fast{' '}
              <span className="text-gradient-animated">without stepping on each other</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Clear ownership and visible status mean a small team can ship a lot of content without the collisions.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {collab.map((c, i) => (
              <ScrollReveal key={c.title} direction="scale" delay={i * 100}>
                <div className="group relative h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <span className="text-sm font-extrabold">{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing fit ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Pricing that fits a small team</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              The Team plan is built for 2–3 marketers
            </h2>
            <p className="mt-4 text-slate-600">
              Shared seats, team approvals, and campaign management — everything a small in-house team needs to run social together.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-12 max-w-xl">
            <ScrollReveal direction="scale">
              <div className="rounded-3xl border border-brand-200 bg-white p-8 shadow-glow">
                <span className="pill">Team</span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">One workspace for the whole team</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {[
                    'Shared seats for your marketing team',
                    'Team approvals and review gates',
                    'Comments and version history on every post',
                    'Campaign management and advanced creator discovery',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-none text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP}
                    className="btn-primary"
                  >
                    {DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Start for free'}
                  </a>
                  <Link href="/pricing" className="btn-ghost">See full pricing</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Questions small teams ask</h2>
          </ScrollReveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} direction="up" delay={i * 80}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 text-center" delay={120}>
            <p className="text-sm text-slate-600">
              A team of one?{' '}
              <Link href="/solutions/founders" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                See Trendly for founders
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
