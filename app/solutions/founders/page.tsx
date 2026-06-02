import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Social Media Management for Startups | Trendly for Founders',
  description:
    "Social media management for startups, built for founders who are also the marketing team. AI builds your content strategy, plan a month in an hour, and replace 4 tools with one login. Free forever.",
};

const problems = [
  {
    title: 'No time to be the marketing team',
    desc: "You're shipping product, talking to customers, and closing deals. \"Post consistently\" keeps sliding to next week — and then next month.",
  },
  {
    title: 'No strategy, just a blank caption box',
    desc: 'Every post starts from zero. No pillars, no plan, no idea whether what you publish actually maps to how the business grows.',
  },
  {
    title: 'Too many tools, none of them talking',
    desc: 'Notion for ideas, Later for scheduling, a spreadsheet for the calendar, a freelancer in your inbox. Switching tabs is its own part-time job.',
  },
];

const helps = [
  {
    title: 'Every top AI model, no tab-switching',
    desc: "Tell Trendly about your startup once, then chat with GPT, Claude, and Gemini in one place — no juggling tabs, logins, or subscriptions. They map your audience, competitors, and trends into a real content strategy: pillars, angles, and a posting plan you can actually follow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
      </svg>
    ),
  },
  {
    title: 'Plan a whole month in an hour',
    desc: 'Drag posts onto a visual calendar, let AI draft the captions and hooks, tweak by hand or ask AI to rewrite, then schedule across every channel from one view. A month of content, planned in a single coffee.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'One login replaces your whole stack',
    desc: 'Strategy, calendar, drafts, approvals, and creator campaigns live together. Cancel Notion + Later + the spreadsheet + the freelancer email thread. One workspace, one bill, one place to look.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Creators on tap when you want to scale',
    desc: "When organic isn't enough, activate micro-influencers without leaving Trendly. Search verified creators and launch a campaign straight from your calendar — no agency, no retainer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const week = [
  {
    day: 'Day 1',
    title: 'Get your content strategy',
    desc: 'Answer a few questions about your startup and Trendly hands you a strategy with content pillars and a posting cadence.',
  },
  {
    day: 'Day 2',
    title: 'Fill your first calendar',
    desc: 'AI turns your pillars into a month of post ideas. Drag the ones you like onto the calendar and let it draft the captions.',
  },
  {
    day: 'Day 3',
    title: 'Schedule across channels',
    desc: 'Connect Instagram, TikTok, LinkedIn, and X. Approve your queue and let Trendly publish on schedule while you build the company.',
  },
  {
    day: 'Day 5',
    title: 'See what to do next',
    desc: 'Trendly shows what landed and suggests the next round of content — so week two writes itself.',
  },
];

const faqs = [
  {
    q: 'Is Trendly good for a solo founder with no marketing experience?',
    a: "Yes — it's built for exactly that. Trendly puts every top AI model (GPT, Claude, Gemini) in one place and handles the part most founders get stuck on: deciding what to post and why. You get a strategy, a calendar, and AI-drafted content, so you don't need to be a social media expert — or pay for five AI subscriptions — to post consistently.",
  },
  {
    q: 'How much time does social media management for startups actually take with Trendly?',
    a: 'Most founders plan a full month of content in about an hour. The AI builds the strategy and drafts captions, you review and drag posts onto the calendar, and Trendly publishes on schedule — so the recurring time cost is minutes, not hours.',
  },
  {
    q: 'What does it cost to start?',
    a: `Trendly has a Free forever plan with no credit card required — enough to build a strategy and schedule your first posts. When you want unlimited scheduling and more AI, the Starter plan is a small monthly upgrade. ${PROOF.riskReversal}.`,
  },
  {
    q: 'Which platforms can I manage from Trendly?',
    a: 'You can plan, draft, and schedule content for Instagram, TikTok, LinkedIn, and X from a single calendar, and activate creators on Instagram when you want to scale beyond organic reach.',
  },
];

export default function FoundersPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions/founders' },
          { name: 'For founders', path: '/solutions/founders' },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        eyebrow="For founders"
        title="You're the founder, the strategist, and the social media team"
        highlight="the social media team"
        subtitle="Trendly is social media management for startups built for one person doing all three jobs. Every top AI model in one workspace builds your strategy, plans your month, and drafts your posts — so marketing finally happens without hiring."
      />

      {/* CTAs under hero */}
      <section className="-mt-6 pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
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
            <span className="section-eyebrow">The founder's reality</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Social media is the job nobody{' '}
              <span className="text-gradient-animated">has time for</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Every early-stage founder knows social matters. The problem isn't motivation — it's that consistent, strategic content is a full-time role you can't yet afford to fill.
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
              Marketing that runs{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">without a marketing team</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Trendly takes the parts a founder gets stuck on — strategy, planning, and writing — and turns them into a few minutes a week.
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
              Go deeper on{' '}
              <Link href="/product/ai-strategy" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                the AI strategy engine
              </Link>
              , browse our{' '}
              <Link href="/tools" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                free marketing tools
              </Link>
              , or — if you run client work —{' '}
              <Link href="/solutions/agencies" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                see Trendly for agencies
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Your first week ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Your first week</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              From signup to scheduled in{' '}
              <span className="text-gradient-animated">five days</span>
            </h2>
            <p className="mt-4 text-slate-600">
              No onboarding calls, no agency kickoff. Here's how social media for founders actually goes with Trendly.
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

      {/* ── Pricing fit ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Pricing that fits a founder</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Start free. Upgrade only when it pays for itself.
            </h2>
            <p className="mt-4 text-slate-600">
              You don't need an enterprise plan to post like a pro. Trendly is built to start at zero.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            <ScrollReveal direction="scale">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <span className="pill">Free</span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Get going at $0</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Build a content strategy, fill a calendar, and schedule your first posts. No credit card, free forever.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={100}>
              <div className="h-full rounded-3xl border border-brand-200 bg-white p-7 shadow-glow transition-all duration-300 hover:-translate-y-1">
                <span className="pill">Starter</span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Scale when you're ready</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Unlimited scheduling and more AI credits for the founder who's now posting every day. A small monthly step up.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-8 text-center" delay={150}>
            <Link href="/pricing" className="btn-ghost">See full pricing</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Questions founders ask</h2>
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
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
