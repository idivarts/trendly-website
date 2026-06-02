import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, softwareApplicationSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Social Media Content Calendar with Team Approvals — Trendly',
  description:
    "Trendly's visual social media content calendar lets small teams plan, schedule, and approve posts across Instagram, TikTok, LinkedIn, and X — with AI captions and briefs on every post.",
};

const faqs = [
  {
    q: 'What is a social media content calendar?',
    a: 'A social media content calendar is a visual plan of what you will post, on which channel, and when. Trendly gives you a shared, drag-and-drop calendar so your whole team sees the week at a glance instead of tracking posts in spreadsheets and DMs.',
  },
  {
    q: 'Which channels does Trendly schedule to?',
    a: 'You can plan and schedule across Instagram, TikTok, LinkedIn, and X from a single calendar, so multi-channel weeks stay coordinated instead of scattered across separate tools.',
  },
  {
    q: 'How do team approvals work?',
    a: 'Generate a draft, share it for review in one click, and your team comments in context — then edit by hand or ask AI to rewrite, and approve or request changes. Nothing publishes until the right person signs off, with full version history so you can see what changed.',
  },
  {
    q: 'Can the AI write captions for my posts?',
    a: 'Yes. Every post slot can generate an on-brand caption and a creative brief, using whichever top model fits the task — every AI model lives in one place, so you never tab-switch. You start from a draft instead of a blank box, then review, edit, approve, and schedule.',
  },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const calPosts: Record<string, { ch: string; type: string; status: string; chColor: string; statusColor: string }[]> = {
  Mon: [{ ch: 'IG', type: 'Reel', status: 'Live', chColor: 'bg-pink-100 text-pink-700', statusColor: 'bg-emerald-500' }],
  Tue: [{ ch: 'TT', type: 'Video', status: 'Draft', chColor: 'bg-violet-100 text-violet-700', statusColor: 'bg-slate-300' }],
  Wed: [
    { ch: 'LI', type: 'Article', status: 'Review', chColor: 'bg-sky-100 text-sky-700', statusColor: 'bg-amber-400' },
    { ch: 'IG', type: 'Story', status: 'Sched', chColor: 'bg-pink-100 text-pink-700', statusColor: 'bg-brand-500' },
  ],
  Thu: [{ ch: 'X', type: 'Thread', status: 'Sched', chColor: 'bg-slate-100 text-slate-700', statusColor: 'bg-brand-500' }],
  Fri: [{ ch: 'TT', type: 'Reel', status: 'Draft', chColor: 'bg-violet-100 text-violet-700', statusColor: 'bg-slate-300' }],
};

const roles = [
  { t: 'Assign', d: 'Hand each post to the right person with a due date — writer, designer, or founder.', icon: 'M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM4 20a8 8 0 0 1 16 0' },
  { t: 'Comment', d: 'Leave feedback directly on the post. No more buried Slack threads or lost notes.', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  { t: 'Approve', d: 'Reviewers sign off before anything goes out. Version history shows every change.', icon: 'M9 12l2 2 4-4M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z' },
  { t: 'Publish', d: 'Once approved, posts schedule and publish to the right channel automatically.', icon: 'M5 12h14M13 6l6 6-6 6' },
];

export default function ContentCalendarPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Product', path: '/product/content-calendar' },
            { name: 'Content Calendar', path: '/product/content-calendar' },
          ]),
          softwareApplicationSchema(),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Content Calendar"
        title="A social media content calendar your whole team can run"
        highlight="social media content calendar"
        subtitle="Generate with AI, review together, edit by hand or with AI, then approve — and schedule to every channel from one shared workspace. Built for how small teams actually collaborate on content."
      />

      <section className="-mt-4 pb-4">
        <div className="container-px flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
            <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a Demo</a>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">{PROOF.riskReversal}</p>
        </div>
      </section>

      {/* ── Visual weekly calendar ── */}
      <section className="py-16">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left" distance={36}>
            <div>
              <span className="section-eyebrow">See your week</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">The whole week, at a glance</h2>
              <p className="mt-4 text-slate-600">
                No more guessing what&apos;s going out or whether a post slipped through the cracks.
                Trendly&apos;s visual calendar shows every scheduled post by day and channel, with its
                status — draft, in review, scheduled, or live — front and center. Drag a card to
                reschedule. Open it to edit. Everyone on the team sees the same source of truth.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Drag-and-drop scheduling across the week',
                  'Color-coded by channel and status',
                  'Spot gaps and overloaded days instantly',
                  'Built from your AI strategy, not a blank grid',
                ].map((b, bi) => (
                  <li
                    key={b}
                    className="flex items-start gap-3"
                    style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${bi * 70}ms` }}
                  >
                    <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Calendar visual */}
          <ScrollReveal direction="right" distance={36} delay={80}>
            <div className="aspect-[5/4]">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-accent-400/10 to-white p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Week of May 19</span>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">8 posts</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {days.map((d) => (
                    <div key={d}>
                      <div className="mb-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">{d}</div>
                      <div className="space-y-1">
                        {calPosts[d].map((p, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-slate-100 bg-white p-1.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                          >
                            <div className={`inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-bold ${p.chColor}`}>{p.ch}</div>
                            <div className="mt-1 text-[9px] font-semibold text-slate-700">{p.type}</div>
                            <div className="mt-1 flex items-center gap-1">
                              <span className={`h-1.5 w-1.5 rounded-full ${p.statusColor}`} />
                              <span className="text-[8px] text-slate-400">{p.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
                  <div className="flex -space-x-2">
                    {['from-pink-400 to-rose-500', 'from-sky-400 to-indigo-500', 'from-emerald-400 to-teal-500'].map((g, i) => (
                      <div key={i} className={`h-6 w-6 rounded-full bg-gradient-to-br ${g} border-2 border-white`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">2 posts awaiting review</span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">Review</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Multi-channel scheduling ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Multi-channel</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              One calendar for{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">every channel</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Stop hopping between four apps to keep your channels in sync. Schedule Instagram,
              TikTok, LinkedIn, and X from the same calendar, so a coordinated week stays coordinated.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { ch: 'Instagram', d: 'Reels, stories, and feed posts planned together.', g: 'from-pink-400 to-rose-500' },
              { ch: 'TikTok', d: 'Short-form video slots scheduled alongside everything else.', g: 'from-violet-400 to-purple-500' },
              { ch: 'LinkedIn', d: 'Articles and posts timed for your B2B audience.', g: 'from-sky-400 to-indigo-500' },
              { ch: 'X', d: 'Threads and posts queued in the same workflow.', g: 'from-slate-400 to-slate-600' },
            ].map((c, i) => (
              <ScrollReveal key={c.ch} direction="scale" delay={i * 60} distance={24}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${c.g}`} />
                  <h3 className="mt-4 text-base font-bold text-slate-900">{c.ch}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team approvals & roles ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Team workflows</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Approvals built for small teams</h2>
            <p className="mt-4 text-slate-600">
              The competitors treat approvals as an enterprise add-on. For a 2–3 person team, getting
              sign-off shouldn&apos;t mean a paid upgrade or a separate tool. In Trendly, assign,
              comment, approve, and publish live on the post itself.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r, i) => (
              <ScrollReveal key={r.t} direction="up" delay={i * 70} distance={28}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={r.icon} />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{r.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{r.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI captions & briefs ── */}
      <section className="py-12">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left" distance={36}>
            <div className="aspect-[5/4] order-2 lg:order-1">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow-glow">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
                  </svg>
                  AI caption + brief
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex rounded-full bg-pink-100 px-2 py-0.5 text-[10px] font-bold text-pink-700">IG · Reel</span>
                    <span className="text-[10px] text-slate-400">Pillar: Education</span>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className="h-2 w-full rounded-full bg-slate-100" />
                    <div className="h-2 w-11/12 rounded-full bg-slate-100" />
                    <div className="h-2 w-4/5 rounded-full bg-slate-100" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {['#smallbusiness', '#founderlife', '#marketingtips'].map((h) => (
                      <span key={h} className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">{h}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Creative brief</div>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-2 w-full rounded-full bg-slate-100" />
                    <div className="h-2 w-3/4 rounded-full bg-slate-100" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={36} delay={80} className="order-1 lg:order-2">
            <div>
              <span className="section-eyebrow">AI on every post</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">Captions and briefs, drafted for you</h2>
              <p className="mt-4 text-slate-600">
                Every slot on the calendar can generate an on-brand caption and a short creative brief,
                using whichever top model fits the task — every AI model in one place, no tab-switching.
                You start from a solid draft instead of a blinking cursor, then review it together, edit
                by hand or with AI, approve, and schedule.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Every top AI model in one place — GPT, Claude, Gemini',
                  'Generate → review together → edit (manually or with AI) → approve',
                  'Creative briefs so your designer knows what to make',
                  'Drafts inherit voice and pillars from your AI strategy',
                ].map((b, bi) => (
                  <li
                    key={b}
                    className="flex items-start gap-3"
                    style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${bi * 70}ms` }}
                  >
                    <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-3xl">
          <ScrollReveal className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Content calendar questions</h2>
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
              { href: '/product/ai-strategy', t: 'AI Strategy Engine', d: 'Where your calendar comes from — chat with every top AI model to build it.' },
              { href: '/solutions/small-teams', t: 'For small teams', d: 'Generate, review and approve as a 2–3 person team — one source of truth.' },
              { href: '/solutions/agencies', t: 'For agencies', d: 'Run client calendars at scale, with review and approval per workspace.' },
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
